import React, { useState } from "react";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import GitHubIcon from "@material-ui/icons/GitHub";

import { SnackbarProvider } from "notistack";

import DarkModeToggle from "./components/DarkModeToggle";
import UrlBar from "./components/UrlBar";
import ShareButton from "./components/ShareButton";
import BundleView from "./components/BundleView";
import NothingLoaded from "./components/NothingLoaded";

import useLocalStorage from "./hooks/useLocalStorage";

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
      paddingTop: theme.spacing(4),
      [theme.breakpoints.down('md')]: {
        paddingTop: 0,
      },
      paddingBottom: theme.spacing(4)
    },
}));

export default function App(props) {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [darkMode, setDarkMode] = useLocalStorage("enableDarkMode", prefersDarkMode);
    const [url, setUrl] = useState(props.url);

    const pallet = darkMode ? "dark" : "light";
    const darkModeTheme = createMuiTheme({
        palette: {
            type: pallet
        }
    });

    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode);
    }

    const handleUrlChange = (newUrl) => {
      setUrl(newUrl);
      
      const windowUrl = new URL(window.location);
      windowUrl.searchParams.set("url", url);
      window.history.pushState({}, '', windowUrl);
    }

    const classes = useStyles();

    const MainView = () => {
      if (url) {
        return (
          <BundleView url={url} />
        )
      } else {
        return (
          <NothingLoaded />
        )
      }
    }

    const Navbar = () => {
      return (
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
              <Hidden>
                <Typography variant="h6" noWrap className={classes.title}>
                    OctoPrint Bundle Viewer
                </Typography>
              </Hidden>
              <Hidden mdUp>
                <div className={classes.grow} />
              </Hidden>
              <div className={classes.urlbar}>
                <UrlBar url={url} handleUrlChange={handleUrlChange} />
              </div>
              <ShareButton url={url} />
              <DarkModeToggle darkMode={darkMode} onChange={handleDarkModeToggle} />
              <Hidden xsDown>
                <IconButton href="https://github.com/OctoPrint/bundleviewer.octoprint.org" target="_blank">
                  <GitHubIcon />
                </IconButton>
              </Hidden>
          </Toolbar>
        </AppBar>
      )
    }

    return (
        <ThemeProvider theme={darkModeTheme}>
          <SnackbarProvider>
            <div className={classes.root} style={{display: "flex"}}>
                <CssBaseline />
                <Navbar />
                <main className={classes.content}>
                    <Container maxWidth="lg" className={classes.container}>
                      <MainView />
                    </Container>
                </main>
            </div>
          </SnackbarProvider>
        </ThemeProvider>
    )
}
