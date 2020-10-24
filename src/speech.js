const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

export default class SpeechToText {
  constructor() {
    this.recognizing = false;
    this.recognition = new SpeechRecognition();

    this.recognition.continuous = true;

    this.recognition.onresult = ({ results, resultIndex }) => {
      if (!results) {
        return;
      }

      const alternatives = Array.from(results).slice(resultIndex).find((res) => res.isFinal);

      if (!alternatives) {
        return;
      }

      const { transcript } = Array.from(alternatives)
        .reduce((cur, alt) => (alt.confidence > cur.confidence ? alt : cur), { confidence: 0 });

      this.onresult(transcript);
    };
  }

  start() {
    this.recognition.start();
    this.recognizing = true;
  }

  stop() {
    this.recognition.stop();
    this.recognizing = false;
  }

  onstart(func) {
    this.recognition.onstart = func;
  }

  onend(func) {
    this.stop();
    this.recognition.onend = func;
  }

  onresult(func) {
    this.onresult = func;
  }

  onspeechstart(func) {
    this.recognition.onspeechstart = func;
  }

  onspeechend(func) {
    this.recognition.onspeechend = func;
  }

  onaudiostart(func) {
    this.recognition.onaudiostart = func;
  }

  onaudioend(func) {
    this.recognition.onaudioend = func;
  }

  onsoundstart(func) {
    this.recognition.onsoundstart = func;
  }

  onsoundend(func) {
    this.recognition.onsoundend = func;
  }

  onnomatch(func) {
    this.recognition.onnomatch = func;
  }

  onerror(func) {
    this.recognition.onerror = func;
  }
}
