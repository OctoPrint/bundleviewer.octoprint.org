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
    { language: "cli", patterns: [/^.*_console.*\.log$/]},
    { language: "updatelog", patterns: [/^.*_update\.log$/] },
    { language: "log", patterns: [/^.*\.log$/] },
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

export default function LogView(props) {
    const { enqueueSnackbar } = useSnackbar();

    const log = props.log;
    const content = props.content;
    //const lines = content.trim().split("\n").map((line) => (line.trimEnd() + "\n"));


    const [lineCount, setLineCount] = useState(0)
    const [lines, setLines] = useState([]);
    const [query, setQuery] = useState("");
    const [regexMode, setRegexMode] = useState(false);
    const [caseSensitive, setCaseSensitive] = useState(false);
    const [scrollTo, setScrollTo] = useState(0);

    const [cursor, setCursor] = useState(0);
    const [indices, setIndices] = useState([]);

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
        setIndices([]);
        setCursor(0);
        setQuery("");
    }

    const onPerformFilter = (type) => {
        let filter = false;
        if (type === "temperature") {
            filter = line => line.match(reTemperature);
        }

        let result = (content.trim().split("\n").map((line) => (line.trimEnd() + "\n")));
        let filterResult = [];
        result.forEach( (line) => {
            if (filter !== false && !filter(line)) {
                filterResult.push(line);
            } else if (filter === false) {
                filterResult.push(line);
            }
        })

        setLineCount(filterResult.length);
        setLines(filterResult)
    }

    //2022-06-29 17:27:00,639 - Recv: T:31.35/ 190.00 B:31.35/ 60.00 @:64
    const reTemperature  = /Recv: (T:(.*)\/)/i;
    const onPerformQuery = (q, r, cs) => {
        if (!q) return;

        console.log("Starting query:", q);
        if (q !== query || r !== regexMode || cs !== caseSensitive) {
            console.log(`... calculate matches for "${q}", regex: ${r}, case sensitive: ${cs}`);
            const qLower = q.toLowerCase();

            let matcher;
            if (r) {
                matcher = line => line.match(q);
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

            setIndices(ind);
            setCursor(0);
            setQuery(q);
            setRegexMode(r);
            setCaseSensitive(cs);
            console.log("Indices:", ind, ", cursor:", 0);
        } else {
            nextResult();
        }
    }

    const nextResult = () => {
        if (indices.length) {
            const c = cursor < indices.length - 1 ? cursor + 1 : 0;
            setScrollTo(indices[c]);
            setCursor(c);
        }
    };
    const previousResult = () => {
        if (indices.length) {
            const c = cursor > 0 ? (cursor - 1) : (indices.length - 1);
            setScrollTo(indices[c]);
            setCursor(c);
        }
    };

    const serialAndDisabled = (log === "serial.log" && lines.filter(line => line.trim() && !line.includes("serial.log is currently not enabled")).length === 0);
    const undervoltage = content.includes("!!! UNDERVOLTAGE REPORTED !!!");
    const overheating = content.includes("!!! FREQUENCY CAPPING DUE TO OVERHEATING REPORTED !!!");
    const throttled = undervoltage || overheating;

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


        useEffect( () => {
            let result = (content.trim().split("\n").map((line) => (line.trimEnd() + "\n")));
            setLines(result);
            setLineCount(result.length);
        }, [content,props.content]);


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
                    count={indices.length} 
                    regexMode={regexMode}
                    onNext={nextResult} 
                    onPrev={previousResult} 
                    onCancel={onCancelQuery}
                    handlePerformQuery={onPerformQuery}
                    handlePerformFilter={onPerformFilter}
                    logName={log}
                />

                <LogLines lines={lines} highlighted={indices} scrollTo={scrollTo} language={props.language || guessLanguage(log)} />
            </AccordionDetails>
        </Accordion>
    )
}