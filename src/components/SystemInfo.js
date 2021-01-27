import React from "react";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from "@material-ui/core/Typography";

import ThrottledIcon from "mdi-react/SpeedometerSlowIcon";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    accordionbar: {
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        [theme.breakpoints.down('md')]: {
            flexWrap: "wrap",
        },
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
            return (
                <Typography className={classes.secondaryHeading}>{title + " " + value}</Typography>
            );
        } else {
            return (null);
        }
    }

    const throttled = (info["env.plugins.pi_support.throttle_state"] && info["env.plugins.pi_support.throttle_state"] !== "0x0");

    return (
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel-sysinfo-content" id="panel-sysinfo-header">
                <div className={classes.accordionbar}>
                    <div className={classes.title}>
                        <Typography className={classes.heading} style={{ display: "flex", alignItems: "center" }}>
                            System Information
                            {throttled ? <ThrottledIcon className={classes.icon} size="1.5em" /> : (null)}
                        </Typography>
                    </div>
                    <div className={classes.info}>
                        {InfoField("OctoPrint", "octoprint.version")}
                        {InfoField("Python", "env.python.version")}
                        {InfoField("OctoPi", "env.plugins.pi_support.octopi_version")}
                    </div>
                </div>
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