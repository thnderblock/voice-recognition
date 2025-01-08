import { useState } from "react";

let recognition = null;
if ("webkitSpeechRecognition" in window) {
  recognition = new window.webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.lang = "en-US";
}

const useSpeechRecognition = () => {
  const [transcript, setTranscript] = useState("");
  const [confidence, setConfidence] = useState(0);
  const [isListening, setIsListening] = useState(false);

  if (!recognition) {
    return;
  }

  const startListening = () => {
    setTranscript("");
    setConfidence(0);
    setIsListening(true);
    recognition.start();
  };

  const stopListening = () => {
    setIsListening(false);
    recognition.stop();
  };

  recognition.onresult = (event) => {
    setTranscript(event.results[0][0].transcript);
    setConfidence(event.results[0][0].confidence);
    recognition.stop();
    setIsListening(false);
  };

  return {
    transcript,
    confidence,
    isListening,
    startListening,
    stopListening,
    hasSpeechRecognition: !!recognition,
  };
};

export default useSpeechRecognition;
