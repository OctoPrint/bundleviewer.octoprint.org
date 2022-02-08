import React, { useState } from "react";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Link from "@mui/material/Link";

import InfoIcon from "@mui/icons-material/Info";

export default function InfoButton(props) {
    const [ infoModalOpen, setInfoModalOpen ] = useState(false);

    const handleInfoClick = () => {
        setInfoModalOpen(true);
    }

    const handleClose = () => {
        setInfoModalOpen(false);
    }

    if (true) {
        return <>
        <Tooltip title="About Bundle Viewer">
            <IconButton onClick={handleInfoClick} color="inherit" size="large">
                <InfoIcon />
            </IconButton>
        </Tooltip>

        <Dialog open={infoModalOpen} onClose={handleClose} fullWidth>
            <DialogTitle>About Bundle Viewer</DialogTitle>
            <DialogContent>
                <p>
                    Bundle Viewer is a viewer for <Link href="https://octoprint.org" target="_blank" rel="noreferrer noopener" color="inherit" underline="always">OctoPrint</Link> system info bundles and log files.
                </p>
                <p>
                    Its source code can be found on <Link href="https://github.com/OctoPrint/bundleviewer.octoprint.org" target="_blank" rel="noreferrer noopener" color="inherit" underline="always">github.com/OctoPrint/bundleviewer.octoprint.org</Link>.
                </p>
                <hr />
                <p>
                    Bundleviewer can be installed as a PWA and used a share target on Android.
                </p>
                <hr />
                <p>
                    There's an accompanying web extension for Firefox and Chrome to add an "Open in Bundle Viewer" context menu to links in the browser on 
                    associated websites:
                </p>
                <p style={{textAlign: "center"}}>
                    <Link href="https://addons.mozilla.org/en-GB/firefox/addon/open-in-bundle-viewer/" target="_blank" rel="noopener noreferrer" color="inherit" underline="always"><img src="https://img.shields.io/amo/v/open-in-bundle-viewer?label=Firefox%20add-on&logo=firefox" alt="Firefox add-on" /></Link> <Link href="https://chrome.google.com/webstore/detail/open-in-bundle-viewer/pjjocccheogfceldegkfnbfmobmblhpp" target="_blank" rel="noopener noreferrer" color="inherit" underline="always"><img src="https://img.shields.io/chrome-web-store/v/pjjocccheogfceldegkfnbfmobmblhpp?label=Chrome%20extension&logo=google%20chrome" alt="Chrome extension" /></Link>
                </p>
                <p>
                    Its source code can be found on <Link href="https://github.com/OctoPrint/Open-in-Bundle-Viewer" target="_blank" rel="noreferrer noopener" color="inherit" underline="always">github.com/OctoPrint/Open-in-Bundle-Viewer</Link>.
                </p>
                <p>
                    There's also an accompanying <Link href="https://community.octoprint.org/t/open-in-bundle-viewer-browser-extension/30275" target="_blank" rel="noreferrer noopener" color="inherit" underline="always">forum thread</Link>.
                </p>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
        </>;
    } else {
        return (null)
    }
}