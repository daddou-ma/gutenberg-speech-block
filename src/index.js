/**
 * External dependencies
 */
// Not Yet

/**
 * WordPress dependencies
 */
import { registerBlockType, createBlock } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';


/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

import './style.scss';

registerBlockType( 'create-block/speech-block', {
	title: __( 'Speech Block', 'speech-block' ),
	description: __(
		'Speech block written with ESNext standard and JSX support – build step required.',
		'speech-block'
	),
	category: 'widgets',
	icon: 'microphone',
	supports: {
		html: false,
	},
	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'p',
		},
	},
	transforms: {
		from: [{
			type: 'block',
			blocks: ['core/paragraph'],
			transform: ({ content }) => {
				return createBlock('create-block/speech-block', {
					content,
				})
			},
		}],
		to: [{
			type: 'block',
			blocks: ['core/paragraph'],
			transform: ({ content }) => {
				return createBlock('core/paragraph', {
					content,
				})
			},
		}],
	},
	edit: Edit,
	save,
} );
