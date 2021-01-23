import React from "react";

import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from "@material-ui/core/styles";

import LogView from "./LogView";
import SystemInfo from "./SystemInfo";

const useStyles = makeStyles(theme => ({
}));

export default function BundleView(props) {
    const classes = useStyles();

    const SystemInfoBlock = () => {
        return (
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel-sysinfo-content" id="panel-sysinfo-header">
                <Typography className={classes.heading}>System Information</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <SystemInfo info={props.bundle.systeminfo} />
                </AccordionDetails>
            </Accordion>
        )
    }

    const LogBlock = () => {
        return (
            <div>
                {props.bundle.logs.map((log, index) => (
                    <Accordion key={log.log}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={"panel-log-" + index + "-content"} id={"panel-log-" + index + "-header"}>
                            <Typography className={classes.heading}>{log.log}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <LogView log={log.log} content={log.content} language="plain" />
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        )
    }

    return (
      <div>
          <SystemInfoBlock />
          <LogBlock />
      </div>
    )
}