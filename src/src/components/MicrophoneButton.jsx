import { useState } from "react";
import microphone from "../icons/microphone.svg";
import microphoneOff from "../icons/microphoneOff.svg";

const MicrophoneButton = ({ startListening, stopListening, isListening }) => {
  return (
    <div
      className="h-[300px] w-[300px] flex rounded-full cursor-pointer shadow-xl"
      onClick={() => {
        isListening ? stopListening() : startListening();
      }}
    >
      {!isListening ? <MicrophoneOnIcon /> : <MicrophoneOffIcon />}
    </div>
  );
};

const MicrophoneOnIcon = () => {
  return (
    <div className="h-full w-full rounded-full justify-center items-center flex shadow-xl drop-shadow-xl">
      <img
        className="h-1/2 mouse-events-none drop-shadow-xl"
        src={microphone}
      />
    </div>
  );
};

const MicrophoneOffIcon = () => {
  return (
    <div className="bg-[#F1F1F1] h-full w-full rounded-full justify-center items-center flex shadow-xl drop-shadow-xl">
      <img
        className="h-1/2 mouse-events-none drop-shadow-xl"
        src={microphoneOff}
      />
    </div>
  );
};

export default MicrophoneButton;
