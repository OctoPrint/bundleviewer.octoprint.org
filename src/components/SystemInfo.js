import React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from "@mui/material/Typography";

import ThrottledIcon from "mdi-react/SpeedometerSlowIcon";
import BugfixIcon from "mdi-react/BugCheckIcon";
import SafeModeIcon from "mdi-react/LockCheckIcon";

import { useSnackbar } from "notistack";

import makeStyles from '@mui/styles/makeStyles';

import semver from "semver";

import timeutils from "../util/time";

const UNRECOMMENDED_MODELS = ["Zero", "Zero W"]

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
    const { enqueueSnackbar } = useSnackbar();

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
    const checkModel = (model) => {
        model = model.toLowerCase();
        for (const arg of UNRECOMMENDED_MODELS.map(m => m.toLowerCase())) {
            if (model.includes(`${arg} rev`) || model.endsWith(arg)) {
                return true;
            }
        }
        return false;
    }

    const checkLastSafeMode = () => {
        const last_safe_mode_date = info["octoprint.last_safe_mode.date"];
        const generation_date = info["systeminfo.generated"];

        if (!last_safe_mode_date || !generation_date) {
            return;
        }

        if (last_safe_mode_date === "unknown") {
            enqueueSnackbar("Last start in safe mode is unknown.", { key: "last_safe_mode", variant: "warning", persist: true });
            return;
        }

        const last_safe_mode_date_obj = new Date();
        const generation_date_obj = new Date();

        last_safe_mode_date_obj.setTime(Date.parse(last_safe_mode_date.trim()));
        generation_date_obj.setTime(Date.parse(generation_date.trim()));

        const formattedDiff = timeutils.formatTimeDiff(timeutils.diffInSeconds(last_safe_mode_date_obj, generation_date_obj));

        enqueueSnackbar(`Last start in safe mode was ${formattedDiff} before bundle creation.`, { key: "last_safe_mode", variant: "info", persist: true });
    }

    const safemode = checkField("octoprint.safe_mode", value => (value === "true"));
    const throttled = checkField("env.plugins.pi_support.throttle_state", value => (value.trim() !== "0x0"));
    const marlin_bugfix = checkField("printer.firmware", value => (value.includes("Marlin bugfix-")));
    const unrecommended_model = checkField("env.plugins.pi_support.model", value => (checkModel(value)));
    const python_too_old = checkField("env.python.version", value => (!semver.satisfies(value, ">=2.7.13 <3 || >=3.7")));
    const pip_too_old = checkField("env.python.pip", value => (!semver.satisfies(value, ">=19.0.1")));
    const setuptools_too_old = checkField("env.python.setuptools", value => (!semver.satisfies(value, ">=40.7.1")));

    if (safemode) {
        enqueueSnackbar("Safe mode enabled.", { key: "safemode" });
    }
    if (throttled) {
        enqueueSnackbar("System is or was throttled, system may behave erratically. Fix before further debugging.", { variant: "error", persist: true, key: "throttled" });
    }
    if (marlin_bugfix) {
        enqueueSnackbar("Marlin-Bugfix firmware development build detected, firmware may be unstable.", { key: "marlin_bugfix" });
    }
    if (unrecommended_model) {
        enqueueSnackbar("Unrecommended Raspberry Pi model detected.", { key: "unrecommended_model", variant: "error", persist: true });
    }
    if (python_too_old) {
        enqueueSnackbar("Python version is too old for automatic updating.", { key: "python_too_old", variant: "error", persist: true });
    }
    if (pip_too_old) {
        enqueueSnackbar("Pip version is too old for automatic updating.", { key: "pip_too_old", variant: "error", persist: true });
    }
    if (setuptools_too_old) {
        enqueueSnackbar("Setuptools version is too old for automatic updating.", { key: "setuptools_too_old", variant: "error", persist: true });
    }
    checkLastSafeMode();

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