/**
 * External dependencies
 */
// Not Yet

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useEffect, useRef, useState } from '@wordpress/element';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { Icon } from '@wordpress/components';
/**
 * Internal dependencies
 */
import SpeechToText from './speech';
import './editor.scss';

const speech = new SpeechToText();


export default function Edit({ className, isSelected, attributes: { content }, setAttributes }) {
	const richTextRef = useRef(null);
	const [recognizing, setRecognizing ] = useState(speech.recognizing);

	const onChangeContent = (content) => {
		setAttributes({ content });
	};
	console.log('is-selected', isSelected);
	useEffect(() => {
		window.rtf = richTextRef;

		if (isSelected && !speech.recognizing) {
			speech.onstart(() => {
				setRecognizing(true);
				console.log("Recognition Started", speech.recognizing);
			});
			speech.onend(() => {
				setRecognizing(false);
				console.log("Recognition Stoped", speech.recognizing);
			});
			speech.onresult((text) => {
				const selection = document.getSelection();
				const range = selection.getRangeAt(0);

				if (richTextRef.current.contains(range.startContainer)) {
					range.startContainer.insertData(range.startOffset, text);
					range.setStart(range.startContainer, range.startOffset + text.length);
				}
			});

			speech.start();
		} else if (!isSelected && speech.recognizing) {
			speech.stop();
		}

		return () => {
			if (speech.recognizing) {
				speech.stop();
			}
		};
	}, [isSelected]);

	return (
		<div className={`${className} ${recognizing ? 'recognizing' : ''}`}>
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
