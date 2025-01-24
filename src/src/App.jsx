import {} from "react";
import useSpeechRecognition from "./components/useSpeechRecognition";
import MicrophoneButton from "./components/MicrophoneButton";

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
        <div className="h-screen w-screen flex flex-col justify-center items-center bg-slate-100">
          <div className="h-3/4 relative justify-center items-center flex">
            <MicrophoneButton
              startListening={startListening}
              stopListening={stopListening}
              isListening={isListening}
            />
          </div>
          <div className="h-1/4 flex flex-col items-center text-slate-700">
            <div className="text-2xl font-bold gray text-slate-900">
              Transcript
            </div>
            <div>{transcript}</div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
