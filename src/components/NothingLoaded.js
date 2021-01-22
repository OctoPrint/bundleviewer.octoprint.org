import React from "react";

import Typography from "@material-ui/core/Typography";

export default function NothingLoaded() {
    return (
        <Typography style={{ display: "flex", justifyContent: "center" }}>
            Please enter a bundle URL and press Enter.
        </Typography>
    )
}