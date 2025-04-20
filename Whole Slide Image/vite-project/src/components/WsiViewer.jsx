import React, { useState, useEffect } from "react";
import output from "./output";  

const WSIViewer = () => {
    const [boxes, setBoxes] = useState([]);

    useEffect(() => {
        try {
            const parsedResults = JSON.parse(output.inference_results);
            setBoxes(parsedResults.output.detection_results);
        } catch (error) {
            console.error("Error parsing bounding boxes:", error);
        }
    }, []);

    return (
        <div className="relative">
            <img src="/wsi_image.jpg" alt="Whole Slide Image" className="w-full h-auto" />
            {boxes.map(([x, y, x2, y2, label], index) => (
                <div
                    key={index}
                    className="absolute border border-red-500"
                    style={{
                        top: `${y}px`,
                        left: `${x}px`,
                        width: `${x2 - x}px`,
                        height: `${y2 - y}px`,
                    }}
                >
                    <span className="bg-red-500 text-white text-xs p-1">{label}</span>
                </div>
            ))}
        </div>
    );
};

export default WSIViewer;
