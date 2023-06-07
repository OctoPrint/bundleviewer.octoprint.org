import React, {useState} from "react";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import BugIcon from "@mui/icons-material/BugReport";

export default function InfoButton(props) {
    const [debugModalOpen, setDebugModalOpen] = useState(false);

    const handleDebugClick = () => {
        setDebugModalOpen(true);
    };

    const handleClose = () => {
        setDebugModalOpen(false);
    };

    if (true) {
        return (
            <>
                <Tooltip title="Debug Bundle Viewer">
                    <IconButton onClick={handleDebugClick} color="inherit" size="large">
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
                        <Button onClick={handleClose}>Close</Button>
                    </DialogActions>
                </Dialog>
            </>
        );
    } else {
        return null;
    }
}
