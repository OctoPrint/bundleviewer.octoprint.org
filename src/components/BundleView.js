import React, { useState, useEffect, useRef } from "react";

import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from "@material-ui/core/styles";

import LogView from "./LogView";
import SystemInfo from "./SystemInfo";

import ziputils from "../util/zip";

const useStyles = makeStyles(theme => ({
}));

function corsRewrite(url) {
    const githubRegex = /^https:\/\/github\.com\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+\/files\//
    if (url.match(githubRegex)) {
        return url.replace("https://github.com", "https://bundleviewer.octoprint.org/bundles");
    }
    return url;
}

export default function BundleView(props) {
    const classes = useStyles();

    const [loading, setLoading] = useState(true);
    const [logsLoading, setLogsLoading] = useState(true);

    const [systemInfo, setSystemInfo] = useState("");
    const [logs, setLogs] = useState([]);

    const loadedUrl = useRef();

    useEffect(() => {
      if (props.url) {
        console.log("loadedURL", loadedUrl.current);
        if (props.url === loadedUrl.current) {
            console.log("Same URL");
            return;
        }
        const url = corsRewrite(props.url);
        
        setLoading(true);
        setLogsLoading(true);
        ziputils.loadRemoteZip(url)
          .then(zip => {
            loadedUrl.current = url;

            const files = ["octoprint.log", "serial.log", "terminal.txt", "plugin_softwareupdate_console.log", "plugin_pluginmanager_console.log"];

            ziputils.getFileContents(zip, "systeminfo.txt", "string").then(content => {
              setSystemInfo(content);
              setLoading(false);

              const promises = [];
              const contents = {};
  
              files.forEach(filename => {
                const promise = ziputils.getFileContents(zip, filename, "string")
                  .then(content => {
                    contents[filename] = content;
                  });
                promises.push(promise);
              })
  
              Promise.allSettled(promises)
                .then(() => {
                  const result = [];
                  files.forEach(filename => {
                    if (contents[filename]) {
                      result.push({ log: filename, content: contents[filename] });
                    }
                  });
                  setLogs(result);
                  setLogsLoading(false);
                })
            });

          })
          .catch(() => {
            // error, ignore
          });
      }
    }, [props.url]);

    const SystemInfoBlock = () => {
        if (loading) {
            return (
                <div style={{ display: "flex", justifyContent: "center", }}>
                    <CircularProgress />
                </div>
            )
        } else {
            return (
                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel-sysinfo-content" id="panel-sysinfo-header">
                    <Typography className={classes.heading}>System Information</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <SystemInfo info={systemInfo} />
                    </AccordionDetails>
                </Accordion>
            )
        }
    }

    const LogBlock = () => {
        if (loading) {
            return (null)
        } else if (logsLoading) {
            return (
                <div style={{ display: "flex", justifyContent: "center", }}>
                    <CircularProgress />
                </div>
            )
        } else {
            return (
                <div>
                    {logs.map((log, index) => (
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
    }

    return (
      <div>
          <SystemInfoBlock />
          <LogBlock />
      </div>
    )
}