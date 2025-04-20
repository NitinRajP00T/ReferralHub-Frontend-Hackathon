import React from "react";
import WSIViewer from "./components/WSIViewer";
import LeftPanel from "./components/LeftPanel";
import TopRightPanel from "./components/TopRightPanel";
import RBCDetector from "./components/RBCDetector.jsx";

const App = () => {
    return (
        <div className="flex">
            <LeftPanel />
            <div className="relative w-3/4">
                <WSIViewer />
                <TopRightPanel zoomX={100} zoomY={200} />
                <RBCDetector />
            </div>
        </div>
    );
};

export default App;
