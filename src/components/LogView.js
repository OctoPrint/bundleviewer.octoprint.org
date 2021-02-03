import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from "@material-ui/core/Typography";
import SearchBar from "./SearchBar";
import LogLines from "./LogLines";

import ErrorIcon from "mdi-react/ErrorIcon";

import millify from "millify";

export default function LogView(props) {
    const log = props.log;
    const content = props.content;
    const lines = content.trim().split("\n");
    const lineCount = lines.length;

    const [query, setQuery] = useState("");
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
            [theme.breakpoints.down('md')]: {
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
            [theme.breakpoints.down('md')]: {
                textAlign: "left",
                padding: theme.spacing(0, 0),
            },
        },
        title: {
            flexGrow: 1,
            alignItems: "center",
            [theme.breakpoints.down('md')]: {
                flexBasis: "100%"
            }
        },
        info: {
            [theme.breakpoints.down('md')]: {
                flexBasis: "100%"
            }
        }
    }))();

    const onCancelQuery = () => {
        setIndices([]);
        setCursor(0);
        setQuery("");
    }

    const onPerformQuery = (q) => {
        if (!q) return;

        console.log("Starting query:", q);
        if (q !== query) {
            console.log("... calculate matches");
            const qLower = q.toLowerCase();
            const ind = lines.reduce((a, c, i) => {
                if (c.toLowerCase().includes(qLower)) {
                    a.push(i);
                }
                return a;
            }, []);

            if (ind.length) {
                setScrollTo(ind[0]);
            }

            setIndices(ind);
            setCursor(0);
            setQuery(q);
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

    const serialAndDisabled = (log === "serial.log" && lineCount === 1 && lines[0].includes("serial.log is currently not enabled"));

    return (
        <Accordion key={log}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={"panel-log-" + props.index + "-content"} id={"panel-log-" + props.index + "-header"}>
                <div className={classes.accordionbar}>
                    <div className={classes.title}>
                        <Typography className={classes.heading} style={{ display: "flex", alignItems: "center" }}>
                            {log}
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
                    onNext={nextResult} 
                    onPrev={previousResult} 
                    onCancel={onCancelQuery}
                    handlePerformQuery={onPerformQuery} 
                />
                <LogLines lines={lines} query={query} scrollTo={scrollTo} language={props.language} />
            </AccordionDetails>
        </Accordion>
    )
}