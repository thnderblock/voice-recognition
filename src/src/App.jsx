import {} from "react";
import useSpeechRecognition from "./components/useSpeechRecognition";
import MicrophoneButton from "./components/MicrophoneButton";
import NoButton from "./components/NoButton";

function App() {
  const {
    transcript,
    confidence,
    isListening,
    startListening,
    stopListening,
    hasSpeechRecognition,
  } = useSpeechRecognition();

  return (
    <>
      <main>
        <div className="h-screen w-screen flex flex-col justify-center items-center">
          <div className="h-3/4 relative justify-center items-center flex">
            <MicrophoneButton
              startListening={startListening}
              stopListening={stopListening}
              isListening={isListening}
            />
            {/* <NoButton /> */}
          </div>
          <div className="h-1/4 flex flex-col justify-center items-center">
            <div className="h-1/2">transcript: {transcript}</div>
            <div className="h-1/2">confidence: {confidence}</div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
