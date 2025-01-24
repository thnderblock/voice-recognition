import microphone from "../icons/microphone.svg";

const MicrophoneButton = ({ startListening, stopListening, isListening }) => {
  return (
    <div
      className="h-[300px] w-[300px] flex rounded-full cursor-pointer "
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
    <div className="h-full w-full rounded-full justify-center items-center flex  neumorphous-on">
      <img className="h-1/2 w-1/2 neumorphous-drop-on" src={microphone} />
    </div>
  );
};

const MicrophoneOffIcon = () => {
  return (
    <div className="bg-[#F1F1F1] h-full w-full rounded-full justify-center items-center flex  neumorphous-off">
      <img className="h-1/2 w-1/2 neumorphous-drop-on" src={microphone} />
    </div>
  );
};

export default MicrophoneButton;
