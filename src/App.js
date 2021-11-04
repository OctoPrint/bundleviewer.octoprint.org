import React, { useState, useEffect } from "react";

import useMediaQuery from "@mui/material/useMediaQuery";
import { adaptV4Theme } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import { createTheme, ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Hidden from "@mui/material/Hidden";
import HomeIcon from "@mui/icons-material/Home";
import { Alert, AlertTitle } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Link from "@mui/material/Link";

import { SnackbarProvider } from "notistack";

import CacheBuster from "react-cache-buster";
import { version } from "../package.json";

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
      [theme.breakpoints.down('lg')]: {
        "justify-content": "flex-end",
        "flex-wrap": "wrap",
      }
    },
    urlbar: {
      flexGrow: 1,
      [theme.breakpoints.down('lg')]: {
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
      [theme.breakpoints.down('lg')]: {
        "padding-top": theme.mixins.toolbar.minHeight * 2,
      }
    },
    container: {
      minHeight: "100%", 
      display: "flex", 
      flexDirection: "column",
      paddingTop: theme.spacing(4),
      [theme.breakpoints.down('lg')]: {
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
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)', { noSsr: true });
    const [darkMode, setDarkMode] = useLocalStorage("enableDarkMode", prefersDarkMode);

    const [url, setUrl] = useState(props.url);
    const [filename, setFilename] = useState("");
  
    const [bundle, setBundle] = useState(bundleutils.defaultBundle);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const pallet = darkMode ? "dark" : "light";
    const darkModeTheme = createTheme(adaptV4Theme({
        palette: {
            mode: pallet
        }
    }));

    const isProduction = process.env.NODE_ENV === "production";

    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode);
    }

    useEffect(() => {
      handleUrlChange(props.url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const notistackRef = React.createRef();
    const dismissSnack = (key) => () => {
      notistackRef.current.closeSnackbar(key);
    }

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
      notistackRef.current.closeSnackbar();
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

    return (
      <CacheBuster currentVersion={version} isEnabled={isProduction} isVerboseMode={true}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={darkModeTheme}>
            <SnackbarProvider
              ref={notistackRef}
              action={(key) => (
                <Button onClick={dismissSnack(key)}>
                  Close
                </Button>
              )}
              maxSnack={5}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              dense
              preventDuplicate>
              <Main 
                bundle={bundle}
                url={url}
                filename={filename}
                error={error}
                loading={loading}
                shared={props.shared}
                handleUpload={handleUpload}
                handleReset={handleReset}
                handleUrlChange={handleUrlChange}
                darkMode={darkMode}
                handleDarkModeToggle={handleDarkModeToggle}
                />
            </SnackbarProvider>
          </ThemeProvider>
        </StyledEngineProvider>
      </CacheBuster>
    );
}

function Main({  bundle, url, filename, error, loading, shared, handleUpload, handleReset, handleUrlChange, darkMode, handleDarkModeToggle }) {
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
          <IconButton onClick={handleReset} color="inherit" size="large">
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
          <DebugButton url={url} shared={shared} />
          <DarkModeToggle darkMode={darkMode} onChange={handleDarkModeToggle} />
        </Toolbar>
      </AppBar>
    );
  }


  return (
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
  );
}