import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FixedSizeList } from "react-window";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from "@material-ui/core/Typography";

export default function LogView(props) {
    const log = props.log;
    const content = props.content;
    const lines = content.split("\n");
    const lineCount = lines.length;

    const classes = makeStyles(theme => ({
        log: {
            flexGrow: 1,
            overflow: "auto",
            padding: 0,
        },
        pre: {
            "font-family": "'JetBrains Mono', 'Droid Sans Mono', monospace",
        },
        line: {
            "&::before": {
                content: "attr(data-linenumber)",
                display: "inline-block",
                width: `${lineCount.toString().length}ch`,
                "text-align": "right",
                "margin-right": "1em",
                "color": theme.palette.text.secondary
            }
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

    const Line = ({ index, style }) => (
        <span style={style}><span data-linenumber={index + 1} className={classes.line}>{lines[index]}</span></span>
    )

    return (
        <Accordion key={log}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={"panel-log-" + props.index + "-content"} id={"panel-log-" + props.index + "-header"}>
                <Typography className={classes.heading}>{log}</Typography>
                <span className={classes.grow}></span>
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
                        >
                            {Line}
                        </FixedSizeList>
                    </pre>
                </code>
            </AccordionDetails>
        </Accordion>
    )
}