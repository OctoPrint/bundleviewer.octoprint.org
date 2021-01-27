import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FixedSizeList } from "react-window";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from "@material-ui/core/Typography";

import ErrorIcon from "@material-ui/icons/Error";

export default function LogView(props) {
    const log = props.log;
    const content = props.content;
    const lines = content.trim().split("\n");
    const lineCount = lines.length;

    const classes = makeStyles(theme => ({
        background: {
        },
        log: {
            flexGrow: 1,
        },
        pre: {
            margin: 0,
            "font-family": "'JetBrains Mono', 'Droid Sans Mono', monospace",
        },
        line: {
            paddingLeft: theme.spacing(1),
            "&::before": {
                content: "attr(data-linenumber)",
                display: "inline-block",
                width: `${lineCount.toString().length}ch`,
                "text-align": "right",
                "margin-right": "1em",
                "color": theme.palette.text.disabled
            },
            "&[data-loglevel=\"DEBUG\"]": {
                "color": theme.palette.text.secondary
            },
            "&[data-loglevel=\"WARNING\"]": {
                "color": theme.palette.warning.main
            },
            "&[data-loglevel=\"ERROR\"]": {
                "color": theme.palette.error.main
            },
            "&[data-stream=\"stdin\"]": {
                "color": theme.palette.info.main
            },
            "&[data-stream=\"stderr\"]": {
                "color": theme.palette.error.main
            },
        },
        grow: {
            flexGrow: 1,
        },
        secondaryHeading: {
            fontSize: theme.typography.pxToRem(16),
            color: theme.palette.text.secondary,
            padding: theme.spacing(0, 1),
        }    
    }))();

    const getLoglevel = (line) => {
        let parts = line.split(" ");
        return parts[5];
    }

    const getStream = (line) => {
        const prefix = line.charAt(24);
        switch (prefix) {
            case " ": return "stdin";
            case ">": return "stdout";
            case "!": return "stderr";
            default: return "plain";
        }
    }

    const LogLine = ({ index, style }) => (
        <span style={style}><span data-linenumber={index + 1} data-loglevel={getLoglevel(lines[index])} className={classes.line}>{lines[index]}</span></span>
    );

    const CliLine = ({ index, style }) => (
        <span style={style}><span data-linenumber={index + 1} data-stream={getStream(lines[index])} className={classes.line}>{lines[index]}</span></span>
    )

    const PlainLine = ({ index, style }) => (
        <span style={style}><span data-linenumber={index + 1} className={classes.line}>{lines[index]}</span></span>
    );

    let Line;
    switch (props.language) {
        case "log": {
            Line = LogLine;
            break;
        }
        case "cli": {
            Line = CliLine;
            break;
        }
        default: {
            Line = PlainLine;
            break;
        }
    }

    const serialAndDisabled = (log === "serial.log" && lineCount === 1 && lines[0].includes("serial.log is currently not enabled"));

    return (
        <Accordion key={log}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={"panel-log-" + props.index + "-content"} id={"panel-log-" + props.index + "-header"}>
                <Typography className={classes.heading}>{log}</Typography>
                <span className={classes.grow}></span>
                {serialAndDisabled ? <ErrorIcon /> : (null)}
                <Typography className={classes.secondaryHeading}>
                    {content.length + " characters"}
                </Typography>
                <Typography className={classes.secondaryHeading}>
                    {lineCount + " " + (lineCount === 1 ? "line" : "lines")}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <code className={classes.log}>
                    <pre className={classes.pre}>
                        <FixedSizeList 
                            height={500}
                            itemCount={lineCount}
                            itemSize={20}
                            style={{overflow: "scroll"}}
                        >
                            {Line}
                        </FixedSizeList>
                    </pre>
                </code>
            </AccordionDetails>
        </Accordion>
    )
}