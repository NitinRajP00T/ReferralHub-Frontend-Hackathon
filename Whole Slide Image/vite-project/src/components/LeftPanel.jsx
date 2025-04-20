import React, { useState, useEffect } from "react";

const LeftPanel = () => {
    const [findings, setFindings] = useState([]);

    useEffect(() => {
        fetch("/output.json")
            .then((response) => response.json())
            .then((data) => setFindings(data.detection_results))
            .catch((error) => console.error("Error loading data:", error));
    }, []);

    return (
        <div className="w-1/4 p-4 bg-gray-100 h-screen">
            <h2 className="text-lg font-bold mb-2">Findings</h2>
            {findings.map((item, index) => (
                <div key={index} className="p-2 border-b">
                    <p><strong>Label:</strong> {item.label}</p>
                    <p><strong>Score:</strong> {item.score}</p>
                </div>
            ))}
        </div>
    );
};

export default LeftPanel;
