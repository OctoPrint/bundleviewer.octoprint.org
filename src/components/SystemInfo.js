import React from "react";

export default function SystemInfo(props) {
    const lines = props.info.split("\n").filter(l => l.trim() !== "").map(l => {
        const [key, value] = l.split(":", 2);
        return { key: key, value: value }
    });

    console.log(lines);

    return (
        <div>
            {lines.map((line, index) => (
                <div key={line.key}>
                    <strong>{line.key}</strong>: {line.value}<br />
                </div>
            ))}
        </div>
    )
}