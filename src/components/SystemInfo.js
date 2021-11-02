import React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from "@mui/material/Typography";

import ThrottledIcon from "mdi-react/SpeedometerSlowIcon";
import BugfixIcon from "mdi-react/BugCheckIcon";
import SafeModeIcon from "mdi-react/LockCheckIcon";

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
    accordionbar: {
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        [theme.breakpoints.down('lg')]: {
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
}));

export default function SystemInfo(props) {
    const lines = props.info.split("\n").filter(l => l.trim() !== "").map(l => {
        const [key, ...value] = l.split(":");
        return { key: key, value: value.join(":") }
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

    const checkField = (key, func) => {
        return (info[key] && func(info[key]));
    }

    const safemode = checkField("octoprint.safe_mode", value => (value === "true"));
    const throttled = checkField("env.plugins.pi_support.throttle_state", value => (value.trim() !== "0x0"));
    const marlin_bugfix = checkField("printer.firmware", value => (value.includes("Marlin bugfix-")));

    return (
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel-sysinfo-content" id="panel-sysinfo-header">
                <div className={classes.accordionbar}>
                    <div className={classes.title}>
                        <Typography className={classes.heading} style={{ display: "flex", alignItems: "center" }}>
                            System Information
                            {safemode ? <SafeModeIcon className={classes.icon} size="1.5em" /> : (null)}
                            {throttled ? <ThrottledIcon className={classes.icon} size="1.5em" /> : (null)}
                            {marlin_bugfix ? <BugfixIcon className={classes.icon} size="1.5em" /> : (null)}
                        </Typography>
                    </div>
                    <div className={classes.info}>
                        {InfoField("OctoPrint", "octoprint.version")}
                        {InfoField("Python", "env.python.version")}
                        {InfoField("OctoPi", "env.plugins.pi_support.octopi_version")}
                        {InfoField("Firmware", "printer.firmware")}
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