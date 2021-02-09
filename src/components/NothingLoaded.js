import React from "react";

import { DropzoneArea } from "material-ui-dropzone";

export default function NothingLoaded(props) {
    console.log("Rendering NothingChanged...");

    const handleChange = (files) => {
        console.log("Entered NothingLoaded.handleChange...");
        if (files.length > 0) {
            console.log("File:", files[0]);
            props.onUpload(files[0]);
        }
        console.log("Exiting NothingLoaded.handleChange...");
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
            <DropzoneArea
                style={{"flex-basis": "100%"}}
                dropzoneText="Enter an URL above and press Enter, or drag and drop a file here or click to upload one"
                onChange={handleChange}
                filesLimit={1} 
                acceptedFiles={[".zip", ".log", ".txt"]}
                maxFileSize={30000000}
                showPreviewsInDropzone={false}
                showAlerts={false}
                />
        </div>
    )
}