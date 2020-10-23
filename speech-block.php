<?php
/**
 * Plugin Name:     Speech Block
 * Description:     Speech block written with ESNext standard and JSX support – build step required.
 * Version:         0.1.0
 * Author:          Mohamed El Amine DADDOU
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     speech-block
 *
 * @package         create-block
 */

function create_block_speech_block_block_init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "create-block/speech-block" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'create-block-speech-block-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);
	wp_set_script_translations( 'create-block-speech-block-block-editor', 'speech-block' );

	$editor_css = 'build/index.css';
	wp_register_style(
		'create-block-speech-block-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'create-block-speech-block-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'create-block/speech-block', array(
		'editor_script' => 'create-block-speech-block-block-editor',
		'editor_style'  => 'create-block-speech-block-block-editor',
		'style'         => 'create-block-speech-block-block',
	) );
}
add_action( 'init', 'create_block_speech_block_block_init' );
