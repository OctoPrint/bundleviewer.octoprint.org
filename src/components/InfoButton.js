import React, { useState } from "react";

import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Link from "@material-ui/core/Link";

import InfoIcon from "@material-ui/icons/Info";

export default function InfoButton(props) {
    const [ infoModalOpen, setInfoModalOpen ] = useState(false);

    const handleInfoClick = () => {
        setInfoModalOpen(true);
    }

    const handleClose = () => {
        setInfoModalOpen(false);
    }

    if (true) {
        return (
            <>
            <Tooltip title="About Bundle Viewer">
                <IconButton onClick={handleInfoClick} color="inherit">
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
                        There's also an accompanying <Link href="" target="_blank" rel="noreferrer noopener" color="inherit" underline="always">forum thread</Link>.
                    </p>
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