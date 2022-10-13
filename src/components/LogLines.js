import React, { useEffect, useState } from "react";
import makeStyles from '@mui/styles/makeStyles';
import { FixedSizeList } from "react-window";

export default function LogLines(props) {
    const lines = props.lines;
    const lineCount = lines.length;
    const highlighted = props.highlighted;
    const filtered = props.filtered;

    const scrollTo = props.scrollTo;

    const [displayLines, setDisplayLines] = useState([]);

    const listRef = React.createRef();
    useEffect(() => {
        if (scrollTo > -1) {
            listRef.current?.scrollToItem(scrollTo, "center");
        }
    }, [listRef, scrollTo]);

    useEffect(() => {
        const result = [];
        let inFiltered = false;
        for (let i = 0; i < lines.length; i++) {
            if (filtered.includes(i)) {
                if (!inFiltered) {
                    inFiltered = true;
                    result.push(-1);
                }
            } else {
                if (inFiltered) {
                    inFiltered = false;
                }
                result.push(i);
            }
        }
        setDisplayLines(result);
    }, [lines, filtered]);

    const classes = makeStyles(theme => ({
        log: {
            flexGrow: 1,
        },
        pre: {
            margin: 0,
            "font-family": "'JetBrains Mono', 'Droid Sans Mono', monospace",
            [theme.breakpoints.down('lg')]: {
                fontSize: theme.typography.pxToRem(12),
            }
        },
        linewrap: {
            "&[data-matched=\"true\"]": {
                "background-color": "rgba(255, 255, 0, .2)"
            }
        },
        line: {
            paddingLeft: theme.spacing(1),
            "&::before": {
                content: "attr(data-linenumber)",
                display: "inline-block",
                width: `${lineCount.toString().length}ch`,
                "text-align": "right",
                "margin-right": "1em",
                "color": theme.palette.text.disabled
            },
            "&[data-loglevel=\"DEBUG\"]": {
                "color": theme.palette.text.secondary
            },
            "&[data-loglevel=\"WARNING\"]": {
                "color": theme.palette.warning.main
            },
            "&[data-loglevel=\"ERROR\"]": {
                "color": theme.palette.error.main
            },
            "&[data-stream=\"stdin\"]": {
                "color": theme.palette.info.main
            },
            "&[data-stream=\"stderr\"]": {
                "color": theme.palette.error.main
            },
            "&[data-updateresult=\"FAILED\"]": {
                "color": theme.palette.error.main
            },
        },
        filtered: {
            paddingLeft: theme.spacing(1),
            color: theme.palette.text.secondary,
            "font-style": "italic",
            "&::before": {
                content: "''",
                display: "inline-block",
                width: `${lineCount.toString().length}ch`,
                "text-align": "right",
                "margin-right": "1em",
            },
        }
    }))();

    const getLoglevel = (line) => {
        let parts = line.split(" ");
        return parts[5];
    }

    const getStream = (line) => {
        const prefix = line.charAt(24);
        switch (prefix) {
            case " ": return "stdin";
            case ">": return "stdout";
            case "!": return "stderr";
            default: return "plain";
        }
    }

    const getUpdateResult = (line) => {
        if (line.includes("- FAILED -")) {
            return "FAILED";
        } else if (line.includes("- SUCCESS -")) {
            return "SUCCESS";
        } else {
            return "PLAIN";
        }
    }

    const LogLine = ({ index, style }) => (
        <span data-matched={highlighted.includes(index)} style={style} className={classes.linewrap}><span data-linenumber={index + 1} data-loglevel={getLoglevel(lines[index])} className={classes.line}>{lines[index]}</span></span>
    );

    const CliLine = ({ index, style }) => (
        <span data-matched={highlighted.includes(index)} style={style} className={classes.linewrap}><span data-linenumber={index + 1} data-stream={getStream(lines[index])} className={classes.line}>{lines[index]}</span></span>
    );

    const UpdatelogLine = ({ index, style }) => (
        <span data-matched={highlighted.includes(index)} style={style} className={classes.linewrap}><span data-linenumber={index + 1} data-updateresult={getUpdateResult(lines[index])} className={classes.line}>{lines[index]}</span></span>
    );

    const PlainLine = ({ index, style }) => (
        <span data-matched={highlighted.includes(index)} style={style} className={classes.linewrap}><span data-linenumber={index + 1} className={classes.line}>{lines[index]}</span></span>
    );

    let LineComponent;
    switch (props.language) {
        case "log": {
            LineComponent = LogLine;
            break;
        }
        case "cli": {
            LineComponent = CliLine;
            break;
        }
        case "updatelog": {
            LineComponent = UpdatelogLine;
            break;
        }
        default: {
            LineComponent = PlainLine;
            break;
        }
    }

    const Line = ({ index, style }) => {
        const idx = displayLines[index];
        if (idx === -1) {
            return <span style={style} className={classes.linewrap}><span className={classes.filtered}>{"[...]"}</span></span>;
        } else {
            return <LineComponent index={idx} style={style} />
        }
    };

    return (
        <code className={classes.log}>
            <pre className={classes.pre}>
                <FixedSizeList 
                    height={500}
                    itemCount={displayLines.length}
                    itemSize={20}
                    style={{overflow: "scroll"}}
                    ref={listRef}
                >
                    {Line}
                </FixedSizeList>
            </pre>
        </code>
    )
};