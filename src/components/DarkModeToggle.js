import React, { useState } from "react";

import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DarkModeIcon from "@material-ui/icons/Brightness4";
import LightModeIcon from "@material-ui/icons/Brightness7";

export default function DarkModeToggle(props) {
    const [darkMode, setDarkMode] = useState(props.darkMode);

    const handleDarkModeToggle = () => {
        props.onChange(!darkMode);
        setDarkMode(!darkMode);
    };

    return (
        <Tooltip title="Toggle dark mode">
            <IconButton onClick={handleDarkModeToggle} color="inherit">
                { darkMode ? <LightModeIcon /> : <DarkModeIcon /> }
            </IconButton>
        </Tooltip>
    )
}