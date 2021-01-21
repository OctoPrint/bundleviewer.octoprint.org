import React, { useState, useEffect } from "react";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { fade, makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline, InputBase } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import LinkIcon from "@material-ui/icons/LinkOutlined";

import SystemInfo from './components/SystemInfo';
import LogView from './components/LogView';

import ziputils from "./util/zip";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        overflow: "auto"
    },
    grow: {
      flexGrow: 1
    },
    offset: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: `calc(100vh + ${theme.mixins.toolbar}px)`,
      overflow: "auto"
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4)
    },
    url: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2),
      flexGrow: 1
    },
    urlIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    inputRoot: {
      color: "inherit",
      width: "100%"
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: "100%",
    }
}));

export default function App(props) {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [darkMode, setDarkMode] = useState(prefersDarkMode);
    const pallet = darkMode ? "dark" : "light";
    const darkModeTheme = createMuiTheme({
        palette: {
            type: pallet
        }
    });

    let url = props.url;

    const handleThemeToggle = () => {
        setDarkMode(!darkMode);
    }

    const handleUrlChange = (event) => {
      url = event.target.value;
    }
    const handleUrlEnter = (event) => {
      if (event.key === "Enter") {
        window.location.search = "?url=" + encodeURIComponent(url);
      }
    };

    const classes = useStyles();

    const [systemInfo, setSystemInfo] = useState("");
    const [logs, setLogs] = useState([]);

    useEffect(() => {
      if (props.url) {
        ziputils.loadRemoteZip(props.url)
          .then(zip => {
            const files = ["octoprint.log", "serial.log", "terminal.txt", "plugin_softwareupdate_console.log", "plugin_pluginmanager_console.log"];

            ziputils.getFileContents(zip, "systeminfo.txt", "string").then(content => {
              setSystemInfo(content);
            });

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
              })
          })
          .catch(() => {
            // error, ignore
          });
      }
    }, [props.url]);

    return (
        <ThemeProvider theme={darkModeTheme}>
            <div className={classes.root}>
                <CssBaseline />

                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h6" noWrap>
                            OctoPrint Bundle Viewer
                        </Typography>
                        <div className={classes.url}>
                          <div className={classes.urlIcon}>
                            <LinkIcon />
                          </div>
                          <InputBase
                            placeholder="URL..."
                            classes={{
                              root: classes.inputRoot,
                              input: classes.inputInput,
                            }}
                            onChange={handleUrlChange} 
                            onKeyDown={handleUrlEnter} 
                            value={url}
                          />
                        </div>
                        <Switch checked={darkMode} onChange={handleThemeToggle} />
                    </Toolbar>
                </AppBar>

                <main className={classes.content}>
                    <div className={classes.offset} />
                    <Container maxWidth="lg" className={classes.container}>

                      <Accordion defaultExpanded>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel-sysinfo-content" id="panel-sysinfo-header">
                          <Typography className={classes.heading}>System Information</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <SystemInfo info={systemInfo} />
                        </AccordionDetails>
                      </Accordion>

                      {logs.map((log, index) => (
                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={"panel-log-" + index + "-content"} id={"panel-log-" + index + "-header"}>
                            <Typography className={classes.heading}>{log.log}</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <LogView log={log.log} content={log.content} language="plain" />
                          </AccordionDetails>
                        </Accordion>
                      ))}
                    </Container>
                </main>
            </div>
        </ThemeProvider>
    )
}
