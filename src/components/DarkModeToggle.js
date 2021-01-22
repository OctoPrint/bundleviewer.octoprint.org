import React, { useState } from "react";

import Switch from "@material-ui/core/Switch";
import BrightnessIcon from "@material-ui/icons/Brightness6";

export default function DarkModeToggle(props) {
    const [darkMode, setDarkMode] = useState(props.darkMode);

    const handleDarkModeToggle = () => {
        props.onChange(!darkMode);
        setDarkMode(!darkMode);
    };

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <BrightnessIcon />
            <Switch checked={darkMode} onChange={handleDarkModeToggle} />
        </div>
    )
}