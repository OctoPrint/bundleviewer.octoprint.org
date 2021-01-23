import React, { useState } from "react";

import { fade, makeStyles } from "@material-ui/core/styles";

import InputBase from "@material-ui/core/InputBase";
import Hidden from "@material-ui/core/Hidden";
import LinkIcon from "@material-ui/icons/Link";
import UploadIcon from "@material-ui/icons/CloudUpload";

const useStyles = makeStyles(theme => ({
    grow: {
      flexGrow: 1
    },
    url: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      [theme.breakpoints.up('md')]: {
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
      },
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
      padding: theme.spacing(1, 1, 1, 1),
      [theme.breakpoints.up('md')]: {
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      },
      transition: theme.transitions.create('width'),
      width: "100%",
    }
}));


export default function UrlBar(props) {
    const classes = useStyles();

    const [url, setUrl] = useState(props.url);
    const [mode] = useState(props.filename ? "upload" : "url");

    const handleChange = (event) => {
        if (mode === "url") {
            setUrl(event.target.value);
        }
    }

    const handleKeyDown = (event) => {
        if (mode === "url" && event.key === "Enter") {
            props.handleUrlChange(url);
        }
    }

    return (
        <div className={classes.url}>
            <Hidden mdDown>
                <div className={classes.urlIcon}>
                {props.filename ? (
                    <UploadIcon />
                ) : (
                    <LinkIcon />
                )}
                </div>
            </Hidden>
            <InputBase
                placeholder="URL..."
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                defaultValue={(mode === "upload" ? props.filename : props.url)}
                inputProps={{ readOnly: mode === "upload", }}
            />
        </div>
    )
}