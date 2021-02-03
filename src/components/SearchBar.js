import React, { useState } from "react";

import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import PrevIcon from "@material-ui/icons/ExpandLess";
import NextIcon from "@material-ui/icons/ExpandMore";
import CancelIcon from "@material-ui/icons/Clear";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles(theme => ({
    grow: {
      flexGrow: 1
    },
    query: {
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
      flexGrow: 1,
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    inputRoot: {
      color: "inherit",
      width: "100%"
    },
    inputInput: {
      padding: theme.spacing(1),
      transition: theme.transitions.create('width'),
      width: "100%",
    },
    result: {
      color: theme.palette.secondary,
      fontSize: theme.typography.pxToRem(12),
    }
}));


export default function SearchBar(props) {
    const pos = props.pos;
    const count = props.count;

    const classes = useStyles();

    const [query, setQuery] = useState(props.query);

    const inputRef = React.createRef();

    const handleChange = (event) => {
        setQuery(event.target.value);
        if (props.handleQueryChange) {
          props.handleQueryChange(query);
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
          handlePerform();
        }
    }

    const handlePerform = () => {
      if (props.handlePerformQuery) {
        props.handlePerformQuery(query);
      }
    }

    const handleCancel = () => {
      setQuery("");
      inputRef.current.value = "";
      if (props.onCancel) {
        props.onCancel();
      }
    }

    const SearchStartAdornment = () => (
      <InputAdornment position="start">
        <IconButton onClick={handlePerform} disabled={query === ""} size="small"><SearchIcon /></IconButton>
      </InputAdornment>
    )

    const SearchEndAdornment = () => (
      <InputAdornment position="end">
        {count ? <span className={classes.result}>{pos} / {count}</span> : (null)}
        <IconButton onClick={props.onPrev} disabled={count === 0 || pos <= 1} size="small"><PrevIcon /></IconButton>
        <IconButton onClick={props.onNext} disabled={count === 0 || pos >= count} size="small"><NextIcon /></IconButton>
        <IconButton onClick={handleCancel} disabled={query === ""} size="small"><CancelIcon /></IconButton>
      </InputAdornment>
    )

    return (
        <div className={classes.query}>
            <InputBase
                placeholder="Search..."
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                defaultValue={props.query}
                startAdornment={<SearchStartAdornment />}
                endAdornment={<SearchEndAdornment />}
                inputRef={inputRef}
            />
        </div>
    )
}