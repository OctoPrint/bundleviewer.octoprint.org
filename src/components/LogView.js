import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FixedSizeList } from "react-window";

const useStyles = makeStyles(theme => ({
    log: {
        flexGrow: 1,
        overflow: "auto",
        padding: 0,
        "font-family": "'JetBrains Mono', 'Droid Sans Mono', monospace",
    },
    linenumber: {
        display: "inline-block",
        width: "5em",
        "text-align": "right",
        "margin-right": "1em",
        "color": theme.palette.text.secondary
    },
    line: {

    }
}));

export default function LogView(props) {
    const classes = useStyles();

    const lines = props.content.split("\n");

    const Line = ({ index, style }) => (
        <span style={style}><span className={classes.linenumber}>{index+1}</span><span className={classes.line}>{lines[index]}</span></span>
    )

    return (
        <code className={classes.log}>
            <pre>
                <FixedSizeList 
                    height={500}
                    itemCount={lines.length}
                    itemSize={20}
                >
                    {Line}
                </FixedSizeList>
            </pre>
        </code>
    )
}