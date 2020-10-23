/**
 * External dependencies
 */
// Not Yet

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import './editor.scss';


export default function Edit( { className, attributes: { content }, setAttributes } ) {
	const onChangeContent = ( content ) => {
		setAttributes( { content } );
	};

	return (
		<RichText
			tagName="p"
			className={ className }
			onChange={ onChangeContent }
			value={ content }
		/>
	);
}
