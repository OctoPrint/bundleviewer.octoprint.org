import React, {useEffect, useState} from "react";
import makeStyles from '@mui/styles/makeStyles';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from "@mui/material/Typography";
import SearchBar from "./SearchBar";
import LogLines from "./LogLines";

import ErrorIcon from "mdi-react/ErrorIcon";
import ThrottledIcon from "mdi-react/SpeedometerSlowIcon";

import { useSnackbar } from "notistack";

import millify from "millify";

const languages = [
    { 
        language: "serial", 
        patterns: [/^serial\.log$/, /^terminal\.txt$/], 
        filters: [ 
            {
                title: "Temperature messages", 
                pattern: /(Send: (N\d+\s+)?M105)|(Recv:\s+(ok\s+([PBN]\d+\s+)*)?([BCLPR]|T\d*):-?\d+)/
            },
            {
                title: "SD status messages",
                pattern: /(Send: (N\d+\s+)?M27)|(Recv: SD printing byte)|(Recv: Not SD printing)/
            },
            {
                title: "Position messages",
                pattern: /(Send:\s+(N\d+\s+)?M114)|(Recv:\s+(ok\s+)?X:[+-]?([0-9]*[.])?[0-9]+\s+Y:[+-]?([0-9]*[.])?[0-9]+\s+Z:[+-]?([0-9]*[.])?[0-9]+\s+E\d*:[+-]?([0-9]*[.])?[0-9]+).*/
            },
            {
                title: "Wait responses",
                pattern: /Recv:\s+wait/
            },
            {
                title: "Processing responses",
                pattern: /Recv: (echo:\s*)?busy:\s*processing/
            }
        ]
    },
    { 
        language: "cli", 
        patterns: [/^.*_console.*\.log$/], 
        filters: [] 
    },
    { 
        language: "updatelog", 
        patterns: [/^.*_update\.log$/], 
        filters: [] 
    },
    { 
        language: "log", 
        patterns: [/^.*\.log$/], 
        filters: [ 
            {
                title: "DEBUG", pattern: /\s-\sDEBUG\s-\s/
            }, {
                title: "INFO", pattern: /\s-\sINFO\s-\s/
            } 
        ] 
    },
]

const guessLanguage = (filename) => {
    for (const { language, patterns } of languages) {
        for (const pattern of patterns) {
            if (filename.match(pattern)) {
                console.log(`Match! ${pattern} vs ${filename}`)
                return language;
            }
        }
    }
    return "plain";
}

const getFilters = (l) => {
    for (const { language, filters } of languages) {
        if (l === language) {
            return filters;
        }
    }
    return [];
}

export default function LogView(props) {
    const { enqueueSnackbar } = useSnackbar();

    const log = props.log;
    const content = props.content;
    const lines = content.trim().split("\n").map((line) => (line.trimEnd() + "\n"));
    const lineCount = lines.length;
    const language = props.language || guessLanguage(log);

    const [query, setQuery] = useState("");
    const [regexMode, setRegexMode] = useState(false);
    const [caseSensitive, setCaseSensitive] = useState(false);
    const [scrollTo, setScrollTo] = useState(0);
    const [cursor, setCursor] = useState(0);
    const [highlighted, setHighlighted] = useState([]);

    const [filtered, setFiltered] = useState([]);

    const classes = makeStyles(theme => ({
        background: {
        },
        accordionbar: {
            display: "flex",
            flexGrow: 1,
            alignItems: "center",
            [theme.breakpoints.down('lg')]: {
                flexWrap: "wrap",
            },
        },
        accordiondetails: {
            display: "flex",
            flexGrow: 1,
            flexDirection: "column"
        },
        grow: {
            flexGrow: 1,
        },
        icon: {
            padding: theme.spacing(0, 1),
            fontSize: "1.5rem",
        },
        secondaryHeading: {
            fontSize: theme.typography.pxToRem(12),
            color: theme.palette.text.secondary,
            padding: theme.spacing(0, 1),
            textAlign: "right",
            [theme.breakpoints.down('lg')]: {
                textAlign: "left",
                padding: theme.spacing(0, 0),
            },
        },
        title: {
            flexGrow: 1,
            alignItems: "center",
            [theme.breakpoints.down('lg')]: {
                flexBasis: "100%"
            }
        },
        info: {
            [theme.breakpoints.down('lg')]: {
                flexBasis: "100%"
            }
        }
    }))();

    const onCancelQuery = () => {
        setHighlighted([]);
        setCursor(0);
        setQuery("");
    }

    const onPerformFilter = (f) => {
        console.log("Starting filter:", f);
        const matcher = (line) => {
            for (const filter of f) {
                if (line.match(filter)) {
                    return true;
                }
            }
            return false;
        };

        const ind = lines.reduce((result, line, index) => {
            if (matcher(line)) {
                result.push(index);
            }
            return result;
        }, []);

        setFiltered(ind);
        console.log("Filtered:", ind);
    }

    const onPerformQuery = (q, r, cs) => {
        if (!q) return;

        console.log("Starting query:", q);
        if (q !== query || r !== regexMode || cs !== caseSensitive) {
            console.log(`... calculate matches for "${q}", regex: ${r}, case sensitive: ${cs}`);
            const qLower = q.toLowerCase();

            let matcher;
            if (r) {
                const regex = new RegExp(q, cs ? "g" : "gi");
                matcher = line => line.match(regex);
            } else {
                matcher = line => line.includes(cs ? q : qLower);
            }

            const ind = lines.reduce((result, line, index) => {
                if (matcher(cs ? line : line.toLowerCase())) {
                        result.push(index);
                }
                return result;
            }, []);

            if (ind.length) {
                setScrollTo(ind[0]);
            }

            setHighlighted(ind);
            setCursor(0);
            setQuery(q);
            setRegexMode(r);
            setCaseSensitive(cs);
            console.log("Highlighted:", ind, ", cursor:", 0);
        } else {
            nextResult();
        }
    }

    const nextResult = () => {
        if (highlighted.length) {
            const c = cursor < highlighted.length - 1 ? cursor + 1 : 0;
            setScrollTo(highlighted[c]);
            setCursor(c);
        }
    };
    const previousResult = () => {
        if (highlighted.length) {
            const c = cursor > 0 ? (cursor - 1) : (highlighted.length - 1);
            setScrollTo(highlighted[c]);
            setCursor(c);
        }
    };

    const [serialAndDisabled, setSerialAndDisabled] = useState(false);
    const [throttled, setThrottled] = useState(false);

    useEffect(() => {
        setSerialAndDisabled((log === "serial.log" && lines.filter(line => line.trim() && !line.includes("serial.log is currently not enabled")).length === 0));

        const undervoltage = content.includes("!!! UNDERVOLTAGE REPORTED !!!");
        const overheating = content.includes("!!! FREQUENCY CAPPING DUE TO OVERHEATING REPORTED !!!");
        setThrottled(undervoltage || overheating);
    
        const piSupportLines = lines.filter(line => line.includes("|  Pi Support Plugin") || line.includes("| !Pi Support Plugin"));
        const piSupportDisabled = piSupportLines.length && piSupportLines[piSupportLines.length - 1].includes("| !Pi Support Plugin");
    
        if (serialAndDisabled) {
            enqueueSnackbar("Serial log is currently not enabled. Should be enabled when reporting issues with the printer.", { variant: "info" });
        }
        if (piSupportDisabled) {
            enqueueSnackbar("Pi Support Plugin disabled in the log, there might be an undetected undervoltage or overheating situation!", { variant: "error", persist: true, key: "pi_support_disabled" });
        }
        if (throttled) {
            enqueueSnackbar("System is or was throttled, system may behave erratically. Fix before further debugging.", { variant: "error", persist: true, key: "throttled" });
        }
    }, [log, lines, content, enqueueSnackbar, serialAndDisabled, throttled]);

    return (
        <Accordion key={log} defaultExpanded={props.expanded}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={"panel-log-" + props.index + "-content"} id={"panel-log-" + props.index + "-header"}>
                <div className={classes.accordionbar}>
                    <div className={classes.title}>
                        <Typography className={classes.heading} style={{ display: "flex", alignItems: "center" }}>
                            {log}
                            {throttled ? <ThrottledIcon className={classes.icon} size="1.5em" /> : (null)}
                            {serialAndDisabled ? <ErrorIcon className={classes.icon} size="1.5em" /> : (null)}
                        </Typography>
                    </div>
                    <div className={classes.info}>
                        <Typography className={classes.secondaryHeading}>
                            {millify(content.length) + " " + (content.length === 1 ? "char" : "chars")}
                        </Typography>
                        <Typography className={classes.secondaryHeading}>
                            {millify(lineCount) + " " + (lineCount === 1 ? "line" : "lines")}
                        </Typography>
                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails className={classes.accordiondetails}>
                <SearchBar 
                    className={classes.grow} 
                    pos={cursor + 1} 
                    count={highlighted.length} 
                    regexMode={regexMode}
                    onNext={nextResult} 
                    onPrev={previousResult} 
                    onCancel={onCancelQuery}
                    handlePerformQuery={onPerformQuery}
                    handlePerformFilter={onPerformFilter}
                    filters={getFilters(language)}
                />

                <LogLines lines={lines} highlighted={highlighted} filtered={filtered} scrollTo={scrollTo} language={language} />
            </AccordionDetails>
        </Accordion>
    )
}