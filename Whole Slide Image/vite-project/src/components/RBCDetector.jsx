import React, { useState, useEffect } from "react";

const RBCDetector = () => {
    const [imageSrc, setImageSrc] = useState(null);
    const [processedImage, setProcessedImage] = useState(null);

    useEffect(() => {
        const loadOpenCV = () => {
            let script = document.createElement("script");
            script.src = "https://docs.opencv.org/3.4/opencv.js";
            script.async = true;
            script.onload = () => console.log("OpenCV.js loaded");
            document.body.appendChild(script);
        };
        loadOpenCV();
    }, []);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => setImageSrc(e.target.result);
            reader.readAsDataURL(file);
        }
    };

    const processImage = () => {
        if (!window.cv) {
            alert("OpenCV.js is not loaded yet!");
            return;
        }

        let src = cv.imread("uploadedImage");
        let dst = new cv.Mat();
        cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY, 0);
        cv.threshold(dst, dst, 120, 255, cv.THRESH_BINARY);

        cv.imshow("outputCanvas", dst);
        setProcessedImage(true);
        
        src.delete();
        dst.delete();
    };

    return (
        <div className="p-4 bg-gray-100">
            <h2 className="text-lg font-bold mb-2">RBC Detector</h2>
            <input type="file" onChange={handleImageUpload} />
            {imageSrc && <img id="uploadedImage" src={imageSrc} alt="Uploaded" className="mt-2" />}
            <button onClick={processImage} className="bg-blue-500 text-white p-2 mt-2">Process Image</button>
            {processedImage && <canvas id="outputCanvas" className="mt-2"></canvas>}
        </div>
    );
};

export default RBCDetector;
