import React, {useState} from "react";

import Tooltip from "@mui/material/Tooltip";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import CheckBox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";

import FilterIcon from "mdi-material-ui/Filter";

export default function FilterSelector(props) {
    const filters = props.filters;
    const active = props.active;
    const handleFilterChange = props.handleFilterChange;

    const [activeFilters, setActiveFilters] = useState(active || []);

    const [anchor, setAnchor] = useState(false);
    const open = Boolean(anchor);
    const handleOpen = (event) => {
        setAnchor(event.currentTarget);
    };
    const handleClose = () => {
        setAnchor(false);
    };

    const handleChange = (event) => {
        setActiveFilters(() => {
            if (handleFilterChange) {
                handleFilterChange(event.target.value);
            }
            return event.target.value;
        });
    };

    console.log("Filters:", filters);
    console.log("Active filters:", activeFilters);

    return (
        <>
            <Tooltip title="Filters">
                <IconButton
                    onClick={handleOpen}
                    color={activeFilters.length ? "primary" : "default"}
                    size="small"
                >
                    <FilterIcon />
                </IconButton>
            </Tooltip>
            <Select
                multiple
                value={activeFilters}
                style={{display: "none"}}
                open={open}
                onClose={handleClose}
                onChange={handleChange}
                MenuProps={{
                    anchorEl: anchor
                }}
            >
                {filters.map((f, index) => (
                    <MenuItem key={index} value={f.pattern}>
                        <CheckBox
                            checked={
                                !!activeFilters.find(
                                    (element) => element.source === f.pattern.source
                                )
                            }
                        />
                        <ListItemText primary={f.title} />
                    </MenuItem>
                ))}
            </Select>
        </>
    );
}
