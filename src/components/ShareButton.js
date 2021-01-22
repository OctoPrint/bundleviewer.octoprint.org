import React from "react";

import IconButton from "@material-ui/core/IconButton";

import ShareIcon from "@material-ui/icons/ShareOutlined";

import { useSnackbar } from "notistack";

export default function ShareButton(props) {
    const { enqueueSnackbar } = useSnackbar();

    const handleShareClick = () => {
        const share = window.location.origin + window.location.pathname + "?url=" + encodeURIComponent(props.url);
        if (navigator.share) {
            navigator.share({
                title: document.title,
                url: share
            })
        } else {
            navigator.clipboard.writeText(share);
            enqueueSnackbar("URL copied to clipboard!");
        }
    }

    return (
        <IconButton onClick={handleShareClick}>
            <ShareIcon />
        </IconButton>
    )
}