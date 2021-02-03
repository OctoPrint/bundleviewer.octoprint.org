import React from "react";

import LogView from "./LogView";
import SystemInfo from "./SystemInfo";

export default function BundleView(props) {
    return (
      <div>
            { props.bundle.systeminfo ? <SystemInfo info={props.bundle.systeminfo} /> : (null)}
            <div>
                {props.bundle.logs.map((log, index) => (
                    <LogView expanded={ !props.bundle.systeminfo && index === 0 } log={log.log} content={log.content} index={index} />
                ))}
            </div>
      </div>
    )
}