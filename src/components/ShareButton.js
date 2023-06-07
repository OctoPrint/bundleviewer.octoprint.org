import React, {useState} from "react";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import ShareIcon from "@mui/icons-material/Share";

import {useSnackbar} from "notistack";

export default function ShareButton(props) {
    const {enqueueSnackbar} = useSnackbar();
    const [shareModalOpen, setShareModalOpen] = useState(false);
    const shareUrl =
        window.location.origin +
        window.location.pathname +
        "?url=" +
        encodeURIComponent(props.url);

    const handleShareClick = () => {
        setShareModalOpen(true);
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: document.title,
                url: shareUrl
            });
            handleClose();
        }
    };

    const handleCopy = () => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(shareUrl);
            enqueueSnackbar("URL copied to clipboard!");
            handleClose();
        }
    };

    const handleClose = () => {
        setShareModalOpen(false);
    };

    if (true) {
        return (
            <>
                <Tooltip title="Get shareable link">
                    <IconButton onClick={handleShareClick} color="inherit" size="large">
                        <ShareIcon />
                    </IconButton>
                </Tooltip>

                <Dialog open={shareModalOpen} onClose={handleClose} fullWidth>
                    <DialogTitle>Shareable link</DialogTitle>
                    <DialogContent>
                        <TextField
                            value={shareUrl}
                            InputProps={{readOnly: true}}
                            onFocus={(event) => {
                                event.target.select();
                            }}
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        {navigator.share ? (
                            <Button onClick={handleShare}>Share</Button>
                        ) : null}
                        {navigator.clipboard ? (
                            <Button onClick={handleCopy}>Copy</Button>
                        ) : null}
                        <Button onClick={handleClose}>Close</Button>
                    </DialogActions>
                </Dialog>
            </>
        );
    } else {
        return null;
    }
}
