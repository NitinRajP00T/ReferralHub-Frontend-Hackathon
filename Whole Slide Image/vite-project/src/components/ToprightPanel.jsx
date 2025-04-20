import React from "react";

const TopRightPanel = ({ zoomX, zoomY }) => {
    return (
        <div className="absolute top-4 right-4 w-40 h-40 border border-gray-300 relative">
            <img src="/wsi_image.jpg" className="w-full h-full object-cover" alt="Hub View" />
            <div
                className="absolute w-4 h-4 bg-red-500 rounded-full"
                style={{ top: `${zoomY * 0.2}px`, left: `${zoomX * 0.2}px` }}
            ></div>
        </div>
    );
};

export default TopRightPanel;
