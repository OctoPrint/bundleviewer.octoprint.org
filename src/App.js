import React, { useState } from "react";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

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

    return (
        <ThemeProvider theme={darkModeTheme}>
          <SnackbarProvider>
            <div className={classes.root}>
                <CssBaseline />

                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h6" noWrap>
                            OctoPrint Bundle Viewer
                        </Typography>
                        <UrlBar url={url} handleUrlChange={handleUrlChange} />
                        <ShareButton url={url} />
                        <DarkModeToggle darkMode={darkMode} onChange={handleDarkModeToggle} />
                    </Toolbar>
                </AppBar>

                <main className={classes.content}>
                    <div className={classes.offset} />
                    <Container maxWidth="lg" className={classes.container}>
                      <MainView />
                    </Container>
                </main>
            </div>
          </SnackbarProvider>
        </ThemeProvider>
    )
}
