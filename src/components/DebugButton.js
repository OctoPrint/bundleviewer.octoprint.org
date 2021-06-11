import React, { useState } from "react";

import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import BugIcon from "@material-ui/icons/BugReport";

export default function InfoButton(props) {
    const [ debugModalOpen, setDebugModalOpen ] = useState(false);

    const handleDebugClick = () => {
        setDebugModalOpen(true);
    }

    const handleClose = () => {
        setDebugModalOpen(false);
    }

    if (true) {
        return (
            <>
            <Tooltip title="Debug Bundle Viewer">
                <IconButton onClick={handleDebugClick} color="inherit">
                    <BugIcon />
                </IconButton>
            </Tooltip>

            <Dialog open={debugModalOpen} onClose={handleClose} fullWidth>
                <DialogTitle>Debug info</DialogTitle>
                <DialogContent>
                    <dl>
                        <dt>shared.text</dt>
                        <dd>{props.shared.text}</dd>
                        <dt>shared.url</dt>
                        <dd>{props.shared.url}</dd>
                        <dt>shared.title</dt>
                        <dd>{props.shared.title}</dd>
                        <dt>url</dt>
                        <dd>{props.url}</dd>
                    </dl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
            </>
        )
    } else {
        return (null)
    }
}