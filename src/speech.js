const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

export default class SpeechToText {
	constructor(lang) {
		this.recognizing = false;
		this.recognition = new SpeechRecognition();

		this.recognition.lang = lang;
		this.recognition.continuous = true;
	}

	start() {
		this.startListener();
		this.recognition.start();
	}

	stop() {
		this.stopListener();
		this.recognition.stop();
	}

	restart() {
		this.stop();
		setTimeout(() => this.start(), 1000);
	}

	setLang(lang) {
		this.recognition.lang = lang;
		this.restart();
	}

	startListener() {
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
	stopListener() {
		this.recognition.onresult = null;
	}
	onstart(func) {
		this.recognition.onstart = (...props) => {
			this.recognizing = true;
			func(...props);
		};
	}

	onend(func) {
		this.recognition.onend = (...props) => {
			this.recognizing = false;
			func(...props);
		};;
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
