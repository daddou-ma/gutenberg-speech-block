/**
 * External dependencies
 */
// Not Yet

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */

export default function save({ attributes: { content } }) {
	return (
		<p>
			{content}
		</p>
	);
}
