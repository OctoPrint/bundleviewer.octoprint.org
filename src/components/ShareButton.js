import React, { useState } from "react";

import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import ShareIcon from "@material-ui/icons/Share";

import { useSnackbar } from "notistack";

export default function ShareButton(props) {
    const { enqueueSnackbar } = useSnackbar();
    const [ shareModalOpen, setShareModalOpen ] = useState(false);
    const shareUrl = window.location.origin + window.location.pathname + "?url=" + encodeURIComponent(props.url);

    const handleShareClick = () => {
        setShareModalOpen(true);
    }

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: document.title,
                url: shareUrl
            })
            handleClose();
        }
    }

    const handleCopy = () => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(shareUrl);
            enqueueSnackbar("URL copied to clipboard!");
            handleClose();
        }
    }

    const handleClose = () => {
        setShareModalOpen(false);
    }

    if (true) {
        return (
            <>
            <Tooltip title="Get shareable link">
                <IconButton onClick={handleShareClick} color="inherit">
                    <ShareIcon />
                </IconButton>
            </Tooltip>

            <Dialog open={shareModalOpen} onClose={handleClose} fullWidth>
                <DialogTitle>Shareable link</DialogTitle>
                <DialogContent>
                    <TextField value={shareUrl} InputProps={{ readOnly: true, }} onFocus={event => {event.target.select()}} fullWidth />
                </DialogContent>
                <DialogActions>
                    {(navigator.share) ? 
                        <Button onClick={handleShare}>
                            Share
                        </Button>
                    :
                        (null)
                    }
                    {(navigator.clipboard) ? 
                        <Button onClick={handleCopy}>
                            Copy
                        </Button>
                    : 
                        (null)
                    }
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