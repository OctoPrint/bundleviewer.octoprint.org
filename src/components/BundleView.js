import React from "react";

import LogView from "./LogView";
import SystemInfo from "./SystemInfo";

export default function BundleView(props) {
    return (
      <div>
            <SystemInfo info={props.bundle.systeminfo} />
            <div>
                {props.bundle.logs.map((log, index) => (
                    <LogView log={log.log} content={log.content} index={index} language="plain" />
                ))}
            </div>
      </div>
    )
}