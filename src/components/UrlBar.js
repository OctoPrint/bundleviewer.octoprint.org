import React, { useState } from "react";

import { alpha } from "@mui/material/styles";

import makeStyles from '@mui/styles/makeStyles';

import InputBase from "@mui/material/InputBase";
import Hidden from "@mui/material/Hidden";
import LinkIcon from "@mui/icons-material/Link";
import UploadIcon from "@mui/icons-material/CloudUpload";

const useStyles = makeStyles(theme => ({
    grow: {
      flexGrow: 1
    },
    url: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
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
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
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
            <Hidden lgDown>
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
    );
}