import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

// Components
import Landing from './Login/Landing';
import RecordSetup from "./setup/RecordSetup";
import VideoLabel from "./Label/VideoLabel";
import MyRecordings from "./Recordings/MyRecordings";
import RecordingPreference from "./setup/RecordingPreference";
import Upload from "./upload/Upload";
import Camera from "./camera/CameraRecording";

const Wrapper = () => {
  return (
    <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/setup" element={<RecordSetup />} />
            <Route exact path="/videolabel" element={<VideoLabel />} />
            <Route exact path="/myrecording" element={<MyRecordings />} />
            <Route exact path="/preferences" element={<RecordingPreference />} />
            <Route exact path="/upload" element={<Upload />} />
            <Route exact path ="/camera" element={<Camera />} />
          </Routes>
      </BrowserRouter>
  );
};

export default Wrapper;
