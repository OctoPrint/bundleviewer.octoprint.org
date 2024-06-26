import React from "react";

import LogView from "./LogView";
import SystemInfo from "./SystemInfo";

export default function BundleView(props) {
    return (
        <>
            {props.bundle.prefix ? <small>Prefix: {props.bundle.prefix}</small> : null}
            {props.bundle.systeminfo ? (
                <SystemInfo info={props.bundle.systeminfo} />
            ) : null}
            {props.bundle.logs.map((log, index) => (
                <LogView
                    key={"log-" + index}
                    expanded={!props.bundle.systeminfo && index === 0}
                    log={log.log}
                    content={log.content}
                    index={index}
                />
            ))}
        </>
    );
}
