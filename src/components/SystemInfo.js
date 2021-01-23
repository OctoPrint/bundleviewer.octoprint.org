import React from "react";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from "@material-ui/core/Typography";

import ErrorIcon from "@material-ui/icons/Error";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(16),
        color: theme.palette.text.secondary,
        padding: theme.spacing(0, 1),
    }
}));

export default function SystemInfo(props) {
    const lines = props.info.split("\n").filter(l => l.trim() !== "").map(l => {
        const [key, ...value] = l.split(":");
        return { key: key, value: value }
    });

    const info = {};
    for (const p of lines) {
        info[p.key] = p.value;
    }

    const classes = useStyles();

    const InfoField = (title, key) => {
        const value = info[key];

        if (value) {
            return `${title} ${value}`;
        } else {
            return (null);
        }
    }

    const throttled = (info["env.plugins.pi_support.throttle_state"] && info["env.plugins.pi_support.throttle_state"] !== "0x0");

    return (
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel-sysinfo-content" id="panel-sysinfo-header">
                <Typography className={classes.heading}>System Information</Typography>
                <span className={classes.grow}></span>
                {throttled ? <ErrorIcon /> : (null)}
                <Typography className={classes.secondaryHeading}>
                    {InfoField("OctoPrint", "octoprint.version")}
                </Typography>
                <Typography className={classes.secondaryHeading}>
                    {InfoField("Python", "env.python.version")}
                </Typography>
                <Typography className={classes.secondaryHeading}>
                    {InfoField("OctoPi", "env.plugins.pi_support.octopi_version")}
                </Typography>
            </AccordionSummary>

            <AccordionDetails>
                <div className={classes.list}>
                {lines.map((line, index) => (
                    <div key={line.key}>
                        <strong>{line.key}</strong>: {line.value}
                    </div>
                ))}
                </div>
            </AccordionDetails>
        </Accordion>
    )
}