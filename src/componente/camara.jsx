// import { useState } from "react";
import Webcam from "react-webcam";
import { Link } from "react-router-dom";

const Camara = () => {
   
    // const videoConstraints = {
    //     width: 1280,
    //     height: 720
    //     facingMode: "user"
    //   };
      
    //   const WebcamCapture = () => {
    // const [camaraSCR,setImage] = useState("");
    // return(
    //     <Webcam
    //       audio={false}
    //       height={720}
    //       screenshotFormat="image/jpeg"
    //       width={1280}
    //       videoConstraints={videoConstraints}
    //     >
    //       {({ getScreenshot }) => (
    //         <button
    //           onClick={() => {
    //             const imageSrc = getScreenshot()
    //           }}
    //         >
    //           Capture photo
    //         </button>
    //       )}
    return <div>
         <Webcam />;
         <link rel="camara"> Camara</link>
        </div>
}
   // );
      //      }
//};

export default Camara;