import React, { useState } from "react";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DarkModeIcon from "@mui/icons-material/Brightness4";
import LightModeIcon from "@mui/icons-material/Brightness7";

export default function DarkModeToggle(props) {
    const [darkMode, setDarkMode] = useState(props.darkMode);

    const handleDarkModeToggle = () => {
        props.onChange(!darkMode);
        setDarkMode(!darkMode);
    };

    return (
        <Tooltip title="Toggle dark mode">
            <IconButton onClick={handleDarkModeToggle} color="inherit" size="large">
                { darkMode ? <LightModeIcon /> : <DarkModeIcon /> }
            </IconButton>
        </Tooltip>
    );
}