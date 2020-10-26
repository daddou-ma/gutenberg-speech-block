const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

export default class SpeechToText {
	constructor() {
		this.recognizing = false;
		this.recognition = new SpeechRecognition();

		this.recognition.continuous = true;
	}

	start() {
		if (this.recognizing) {
			return;
		}

		this.recognizing = true;
		this.startListener();
		this.recognition.start();
	}

	stop() {
		if (!this.recognizing) {
			return;
		}

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
			if (!results || !this.recognizing) {
				return;
			}

			const alternatives = Array.from(results).slice(resultIndex).find((res) => res.isFinal);

			if (!alternatives) {
				return;
			}

			const { transcript } = Array.from(alternatives)
				.reduce((cur, alt) => (alt.confidence > cur.confidence ? alt : cur), { confidence: 0 });

			this.onresultcallback(transcript);
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
		this.onresultcallback = func;
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
