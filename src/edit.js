/**
 * External dependencies
 */
// Not Yet

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useEffect, useRef, useState } from '@wordpress/element';
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
	const [ recognizing, setRecognizing ] = useState(speech.recognizing);
	const [ language, setLanguage ] = useState(document.documentElement.lang);

	const onChangeContent = (content) => {
		setAttributes({ content });
	};
	useEffect(() => {
		speech.recognition.lang = language;
		speech.onstart(() => {
			if (!recognizing) {
				setRecognizing(true);
				console.log("Recognition Started");
			}
		});
		speech.onend(() => {
			if (richTextRef.current) {
				setRecognizing(false);
				console.log("Recognition Stoped");
			}
		});
	}, []);

	useEffect(() => {
		if (isSelected && !recognizing) {
			speech.onresult((text) => {
				const selection = document.getSelection();
				const range = selection.getRangeAt(0);

				if (richTextRef.current && richTextRef.current.contains(range.startContainer)) {
					range.startContainer.insertData(range.startOffset, text);
					range.setStart(range.startContainer, range.startOffset + text.length);
				}
			});

			speech.start();
		} else if (!isSelected && speech.recognizing) {
			speech.stop();
		}

		return () => speech.stop();
	}, [isSelected]);

	useEffect(() => {
		if (recognizing) {
			speech.setLang(language);
		}
	}, [language]);

	return (
		<div className={`${className} ${recognizing ? 'recognizing' : ''}`}>
			<InspectorControls key="inspector">
				<div className="speech-block-inspector">
					<SelectControl
						onChange={lang => setLanguage(lang)}
						defaultValue={language}
						label={ __( 'Select a Language' ) }
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
