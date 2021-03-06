import React, { useState, useEffect } from "react";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import HomeIcon from "@material-ui/icons/Home";
import { Alert, AlertTitle } from '@material-ui/lab';
import CircularProgress from '@material-ui/core/CircularProgress';
import Link from "@material-ui/core/Link";

import { SnackbarProvider } from "notistack";

import DarkModeToggle from "./components/DarkModeToggle";
import UrlBar from "./components/UrlBar";
import ShareButton from "./components/ShareButton";
import InfoButton from "./components/InfoButton";
import DebugButton from "./components/DebugButton";
import BundleView from "./components/BundleView";
import NothingLoaded from "./components/NothingLoaded";

import useLocalStorage from "./hooks/useLocalStorage";

import remoteutils from "./util/remote";
import ziputils from "./util/zip";
import bundleutils from "./util/bundle";
import contenttypeutils from "content-type";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        overflow: "auto"
    },
    grow: {
      flexGrow: 1
    },

    appBar: {
    },
    toolbar: {
      [theme.breakpoints.down('md')]: {
        "justify-content": "flex-end",
        "flex-wrap": "wrap",
      }
    },
    urlbar: {
      flexGrow: 1,
      [theme.breakpoints.down('md')]: {
        "flex-basis": "100%",
        order: 99,
        paddingBottom: theme.spacing(2)
      },
    },
    title: {
      "justify-item": "left",
    },

    offset: theme.mixins.toolbar,

    content: {
      flexGrow: 1,
      overflow: "auto",
      "padding-top": theme.mixins.toolbar.minHeight,
      [theme.breakpoints.down('md')]: {
        "padding-top": theme.mixins.toolbar.minHeight * 2,
      }
    },
    container: {
      minHeight: "100%", 
      display: "flex", 
      flexDirection: "column",
      paddingTop: theme.spacing(4),
      [theme.breakpoints.down('md')]: {
        paddingTop: 0,
      },
      paddingBottom: theme.spacing(4)
    },
    footer: {
      textAlign: "center",
      padding: "1em",
    }
}));

function corsRewrite(url) {
  const githubRegex = /^https:\/\/github\.com\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+\/files\//
  const forumRegex = /^https:\/\/community\.octoprint\.org\/uploads\/short-url\//
  if (url.match(githubRegex)) {
      return url.replace("https://github.com", "https://bundleviewer.octoprint.org/bundles");
  } else if (url.match(forumRegex)) {
      return url.replace("https://community.octoprint.org/uploads/short-url", "https://bundleviewer.octoprint.org/bundles/forum");
  }
  return url;
}

export default function App(props) {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [darkMode, setDarkMode] = useLocalStorage("enableDarkMode", prefersDarkMode);

    const [url, setUrl] = useState(props.url);
    const [filename, setFilename] = useState("");
  
    const [bundle, setBundle] = useState(bundleutils.defaultBundle);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const pallet = darkMode ? "dark" : "light";
    const darkModeTheme = createMuiTheme({
        palette: {
            type: pallet
        }
    });

    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode);
    }

    useEffect(() => {
      handleUrlChange(props.url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleUrlChange = (newUrl) => {
      if (!newUrl) {
        handleReset();
      } else {
        setError(false);
        setLoading(true);
  
        setUrl(newUrl);
        updateHistory(newUrl);
        setFilename("");
  
        const url = corsRewrite(newUrl);

        remoteutils.loadRemote(url).then(handleFileChange).catch(handleError);
      }
    }

    const handleUpload = (blob) => {
      setError(false);
      setLoading(true);

      setFilename(blob.name);
      setUrl("");

      handleFileChange(blob);
    }

    const handleFileChange = (blob) => {
      ziputils.loadZip(blob)
        .then(handleZipChange)
        .catch((error) => {
          let contentType;
          try {
            contentType = contenttypeutils.parse(blob.type).type;
          } catch (err) {
            contentType = "";
          }

          if (contentType === "" || contentType.startsWith("text/")) {
            bundleutils.loadLog(blob).then((bundle) => {
              setBundle(bundle);
              setLoading(false);
            }).catch(handleError);
          } else {
            handleError(error);
          }
        })
    }

    const handleZipChange = (zip) => {
      bundleutils.loadBundle(zip).then((bundle) => {
        setBundle(bundle);
        setLoading(false);
        console.log("Loading complete");
      }).catch(handleError);
    }

    const handleError = (error) => {
      console.log(error);
      setError(true);
    }

    const handleReset = () => {
      setUrl("");
      setFilename("");
      setError(false);
      setLoading(false);
      setBundle(bundleutils.defaultBundle);
      updateHistory();
    }

    const updateHistory = (newUrl) => {
      const windowUrl = new URL(window.location);
      if (newUrl) {
        windowUrl.searchParams.set("url", newUrl);
      } else {
        windowUrl.searchParams.delete("url");
      }
      window.history.replaceState({}, '', windowUrl);
    }

    const classes = useStyles();

    const MainView = () => {
      if (error) {
        console.log("Rendering error screen");
        return (
          <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              Could not load file. Make sure you are trying to load either an OctoPrint 
              systeminfo bundle, a zip containing logs, or a plain text log file. 
              Other files are not supported.
          </Alert>
        )
      } else if (loading) {
        console.log("Rendering loading screen");
        return (
          <div style={{ display: "flex", justifyContent: "center", }}>
              <CircularProgress />
          </div>
        )
      } else if (bundle.hasContent) {
        console.log("Rendering bundle");
        return (
          <BundleView bundle={bundle} />
        )
      } else {
        console.log("Rendering empty");
        return (
          <NothingLoaded onUpload={handleUpload} />
        )
      }
    }

    const Navbar = () => {
      return (
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
              <IconButton onClick={handleReset} color="inherit">
                <HomeIcon />
              </IconButton>
              <Hidden mdUp>
                <div className={classes.grow} />
              </Hidden>
              <div className={classes.urlbar}>
                <UrlBar url={url} filename={filename} handleUrlChange={handleUrlChange} />
              </div>
              {url ? <ShareButton url={url} /> : null}
              <InfoButton />
              <DebugButton url={url} shared={props.shared} />
              <DarkModeToggle darkMode={darkMode} onChange={handleDarkModeToggle} />
          </Toolbar>
        </AppBar>
      )
    }

    return (
        <ThemeProvider theme={darkModeTheme}>
          <SnackbarProvider>
            <div className={classes.root} style={{display: "flex", minHeight: "100vh", flexDirection: "column"}}>
                <CssBaseline />
                <Navbar />
                <main className={classes.content}>
                    <Container maxWidth="lg" className={classes.container}>
                      <MainView />
                    </Container>
                </main>
                <footer className={classes.footer}>
                  © 2021 <Link href="https://octoprint.org" target="_blank" rel="noreferrer noopener" color="inherit" underline="always">OctoPrint</Link> &middot; <Link href="https://octoprint.org/imprint/" target="_blank" rel="noreferrer noopener" color="inherit" underline="always">Imprint</Link> &middot; <Link href="https://octoprint.org/privacy/" target="_blank" rel="noreferrer noopener" color="inherit" underline="always">Privacy Policy</Link>
                </footer>
            </div>
          </SnackbarProvider>
        </ThemeProvider>
    )
}
