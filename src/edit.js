/**
 * External dependencies
 */
// Not Yet

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useEffect, useRef, useState, useCallback } from '@wordpress/element';
import { RichText, InspectorControls } from '@wordpress/block-editor';
import { SelectControl, Icon } from '@wordpress/components';

/**
 * Internal dependencies
 */
import SpeechToText from './speech';
import { langageOptions } from './language';

import './editor.scss';

const speech = new SpeechToText();
window.speech = speech;

export default function Edit({ className, isSelected, attributes: { content }, setAttributes }) {
	const richTextRef = useRef(null);
	const [recognizing, setRecognizing] = useState(speech.recognizing);
	const [language, setLanguage] = useState(document.documentElement.lang);

	const onChangeContent = (content) => {
		setAttributes({ content });
	};

	useEffect(() => {
		speech.recognition.lang = language;

		speech.onstart(() => {
			setRecognizing(true);
			console.log("Recognition Started");
		});

		speech.onend(() => {
			if (richTextRef.current) {
				setRecognizing(false);
				console.log("Recognition Stoped");
			}
		});

		window.addEventListener('blur', () => speech.stop());
		richTextRef.current.addEventListener('click', () => speech.start());

		speech.onerror(() => {
			if (richTextRef.current) {
				speech.restart();
				console.log("Recognition Error");
			}
		});

		speech.onresult((text) => {
			console.log(text);
			const selection = document.getSelection();
			const range = selection.getRangeAt(0);

			if (typeof text !== 'string' || !richTextRef || !richTextRef.current.contains(range.startContainer)) {
				return;
			}

			const insertElement = range.startContainer.tagName === 'p'
				? range.startContainer.childNodes[0]
				: range.startContainer;

			insertElement.insertData(range.startOffset, text);
			range.setStart(range.startContainer, range.startOffset + text.length);
		});
	}, []);

	useEffect(() => {
		if (recognizing) {
			speech.setLang(language);
		}
	}, [language]);

	useEffect(() => {
		if (isSelected) {
			speech.start();
		} else if (!isSelected) {
			speech.stop();
		}

		return () => speech.stop();
	}, [isSelected]);

	return (
		<div className={`${className} ${recognizing ? 'recognizing' : ''}`}>
			<InspectorControls key="inspector">
				<div className="speech-block-inspector">
					<SelectControl
						onChange={lang => setLanguage(lang)}
						defaultValue={language}
						label={__('Select a Language')}
						options={langageOptions}
					/>
				</div>
			</InspectorControls>
			<RichText
				tagName="p"
				onChange={onChangeContent}
				value={content}
				ref={richTextRef}
			/>
			<Icon icon="microphone" className={`speech-block-mic-icon ${recognizing ? 'recognizing' : ''}`} />
		</div>
	);
}
