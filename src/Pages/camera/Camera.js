import React, { useState, useEffect, useCallback } from "react";
import Webcam from "react-webcam";
import './styles.css'
import Menu from '../../components/Slider/sidebar'

const Camera = (props) => {
  const [deviceId, setDeviceId] = useState();
  const [devices, setDevices] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState("");
  const [loadingDevice, setLoadingDevice] = useState(true);
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);
  const [loading, setLoading] = useState(false);
  const [switchCam, setSwitchCam] = useState(false);
  const [mode, setMode] = useState("user");

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot({
      width: 1030,
      height: 770
    });
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  const handleDevices = useCallback(
    (mediaDevices) =>
      setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
    [setDevices]
  );

  const getDevices = () => {
    navigator.mediaDevices
      .enumerateDevices()
      .then(handleDevices)
      .catch((err) => {
        console.log("Error", err);
      });
  };

  const accessCamera = async () => {
    let videoAccess = null;
    console.log("Camera Get permission");
    try {
      videoAccess = await navigator.mediaDevices.getUserMedia({ video: true });
      console.log("Camera Got permission");
      if (videoAccess) {
        getDevices();
      }
    } catch (error) {
      console.log("Camera Failed permission");
      console.log("FAILED");
    }
  };

  useEffect(() => {
    accessCamera();
  }, []);

  useEffect(() => {
    if (devices.length > 0) {
      setLoadingDevice(false);
    }
  }, [devices]);

  const handleDeviceChange = (e) => {
    setDeviceId(e.target.value);
    var index = e.nativeEvent.target.selectedIndex;
    setSelectedDevice(e.nativeEvent.target[index].text);
  };

  const skipHandling = () => {
    setLoading(true);
    setLoading(false);
  };

  const confirmHandling = () => {};

  const retakePhoto = () => {
    setImgSrc(null);
  };

  return (
      
    <div
    
      className="container-ob-single selfie"
      style={{ border: "1px solid #000" }}
    >
      width: `{window.innerWidth - 40}` height: `
      {(window.innerWidth - 40) / 1.33}`,
      {loading ? (
        "Loading"
      ) : (
        <>
            <Menu/>
          {!loadingDevice && !imgSrc && (
            <>
              {/Mobi|Android/.test(navigator.userAgent) ? (
                <div
                  className="selfie-container"
                  style={{ border: "1px solid #000" }}
                >
                  <Webcam
                    audio={false}
                    ref={webcamRef}
                    
                    height={window.innerWidth - 40}
                    width={280}

                    mirrored={switchCam ? false : true}
                    screenshotQuality={1}
                    screenshotFormat="image/jpeg"
                    videoConstraints={{
                      width: 280,
                      height: 280,
                      facingMode: mode
                    }}
                  />
                  <div className="selfie-guide">&nbsp;</div>
                  {mode === "user" ? (
                    <div
                      className="switch-camera"
                      onClick={(e) => {
                        e.preventDefault();
                        setMode("environment");
                        setSwitchCam(true);
                      }}
                    >
                      Switch Camera
                    </div>
                  ) : (
                    <div
                      className="switch-camera"
                      onClick={(e) => {
                        e.preventDefault();
                        setMode("user");
                        setSwitchCam(false);
                      }}
                    >
                      Switch Camera
                    </div>
                  )}
                </div>
              ) : (
                <>
                
                  <div className="form-field select-drp-add">
                    <div className={`select-value-add`}>
                      {selectedDevice ? selectedDevice : devices[0]?.label}
                    </div>
                    <select value={deviceId} onChange={handleDeviceChange}>
                      {devices.map((device, key) => (
                        <option value={device.deviceId} key={key}>
                          {device.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="selfie-container">
                    <Webcam
                      audio={false}
                      ref={webcamRef}
                      width={515}
                      height={385}
                      screenshotQuality={1}
                      screenshotFormat="image/jpeg"
                      videoConstraints={{
                        deviceId: deviceId ? deviceId : devices[0]?.deviceId
                      }}
                    />
                    <div className="selfie-guide">&nbsp;</div>
                  </div>
                </>
              )}
              <span></span>
            </>
          )}

          {imgSrc ? (
            <>
              <img
                src={imgSrc}
                alt="Selfie"
                style={{ width: "auto", height: "280px" }}
              />
              <button
                className="common-confirm-button"
                onClick={confirmHandling}
              >
                CONFIRM
              </button>
              <div className="common-simple-button" onClick={retakePhoto}>
                RETAKE PHOTO
              </div>
            </>
          ) : (
            <>
              <button className="common-confirm-button" onClick={capture}>
                TAKE PHOTO
              </button>
              <div className="common-simple-button" onClick={skipHandling}>
                SKIPss
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Camera;
