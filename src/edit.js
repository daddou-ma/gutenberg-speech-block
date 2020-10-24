/**
 * External dependencies
 */
// Not Yet

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useEffect, useRef } from '@wordpress/element';
import { RichText, useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import SpeechToText from './speech';
import './editor.scss';

const speech = new SpeechToText();


export default function Edit( { className, attributes: { content }, setAttributes } ) {
	const richTextRef = useRef(null);

	const onChangeContent = ( content ) => {
		setAttributes( { content } );
	};

	useEffect(() => {
		window.rtf = richTextRef;
		speech.onresult((text) => {
			const selection = document.getSelection();
			const range = selection.getRangeAt(0);

			range.startContainer.insertData(range.startOffset, text);
			range.setStart(range.startContainer, range.startOffset + text.length)
		});

		speech.start();

		return speech.stop;
	}, []);

	return (
		<RichText
			tagName="p"
			className={ className }
			onChange={ onChangeContent }
			value={ content }
			ref={richTextRef}
		/>
	);
}
