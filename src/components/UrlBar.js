import React, { useState } from "react";

import { fade, makeStyles } from "@material-ui/core/styles";

import InputBase from "@material-ui/core/InputBase";
import LinkIcon from "@material-ui/icons/LinkOutlined";

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


export default function UrlBar(props) {
    const classes = useStyles();

    const [url, setUrl] = useState(props.url);

    const handleChange = (event) => {
        setUrl(event.target.value);
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            props.handleUrlChange(url);
        }
    }

    return (
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
            onChange={handleChange}
            onKeyDown={handleKeyDown} 
            defaultValue={props.url}
            />
        </div>
    )
}