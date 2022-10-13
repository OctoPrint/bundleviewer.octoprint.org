import React, { useState } from "react";

import { alpha } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import SearchIcon from "@mui/icons-material/Search";
import PrevIcon from "@mui/icons-material/ExpandLess";
import NextIcon from "@mui/icons-material/ExpandMore";
import CancelIcon from "@mui/icons-material/Clear";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Tooltip from "@mui/material/Tooltip";

import RegexIcon from "mdi-material-ui/Regex";
import CaseIcon from "mdi-material-ui/FormatLetterCase";

import FilterSelector from "./FilterSelector";

const useStyles = makeStyles(theme => ({
    grow: {
      flexGrow: 1
    },
    query: {
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
    const handlePerformQuery = props.handlePerformQuery;
    const handlePerformFilter = props.handlePerformFilter;
    const filters = props.filters;

    const classes = useStyles();

    const [query, setQuery] = useState(props.query);
    const [regexMode, setRegexMode] = useState(false);
    const [caseSensitive, setCaseSensitive] = useState(false);
    const [activeFilters, setActiveFilters] = useState([]);

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
      if (handlePerformQuery) {
        handlePerformQuery(query, regexMode, caseSensitive);
      }
    }

    const handleCancel = () => {
      setQuery("");
      inputRef.current.value = "";
      if (props.onCancel) {
        props.onCancel();
      }
    }

    const handleToggleRegex = () => {
      setRegexMode(regexMode => {
        const result = !regexMode;
        handlePerformQuery(query, result, caseSensitive);
        return result;
      });
    }

    const handleToggleCaseSensitive = () => {
      setCaseSensitive(caseSensitive => {
        const result = !caseSensitive;
        handlePerformQuery(query, regexMode, result);
        return result;
      });
    }

    const handleFilterChange = (f) => {
      f = f || [];
      setActiveFilters(f);
      if (handlePerformFilter) {
        handlePerformFilter(f);
      }
    }

    const SearchStartAdornment = () => (
      <InputAdornment position="start">
        <Tooltip title="Search"><span><IconButton onClick={handlePerform} disabled={query === ""} size="small"><SearchIcon /></IconButton></span></Tooltip>
      </InputAdornment>
    )

    const SearchEndAdornment = (props) => {
        return(
            <InputAdornment position="end">
              {count ? <span className={classes.result}>{pos} / {count}</span> : (null)}
              {filters.length ? <FilterSelector filters={filters} active={activeFilters} handleFilterChange={handleFilterChange} /> : (null)}
              <Tooltip title="Toggle regular expression mode"><IconButton onClick={handleToggleRegex} color={regexMode ? 'primary' : 'default'} size="small"><RegexIcon /></IconButton></Tooltip>
              <Tooltip title="Toggle case sensitivity"><IconButton onClick={handleToggleCaseSensitive} color={caseSensitive ? 'primary' : 'default'} size="small"><CaseIcon /></IconButton></Tooltip>
              <Tooltip title="Scroll to previous match"><span><IconButton onClick={props.onPrev} disabled={count === 0} size="small"><PrevIcon /></IconButton></span></Tooltip>
              <Tooltip title="Scroll to next match"><span><IconButton onClick={props.onNext} disabled={count === 0} size="small"><NextIcon /></IconButton></span></Tooltip>
              <Tooltip title="Delete search query"><span><IconButton onClick={handleCancel} disabled={query === ""} size="small"><CancelIcon /></IconButton></span></Tooltip>
            </InputAdornment>)
    }

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