/**
 * grunt-cssjanus. https://www.mediawiki.org/wiki/CSSJanus
 *
 * Copyright (c) 2013 Yoav Farhi
 * Licensed under the MIT license.
 */
'use strict';

module.exports = function ( grunt ) {
	const cssjanus = require( 'cssjanus' );

	grunt.registerMultiTask( 'cssjanus', 'Flip a css file direction from LTR to RTL', function () {
		const options = this.options( {
			swapLtrRtlInUrl: true,
			swapLeftRightInUrl: false,
			processContent: false
		} );
		// Iterate over all specified file groups
		this.files.forEach( function ( f ) {
			// Flip specified files
			const src = f.src
				.filter( function ( filepath ) {
					// Warn on and remove invalid source files (if nonull was set)
					if ( !grunt.file.exists( filepath ) ) {
						grunt.log.warn( 'Source file "' + filepath + '" not found.' );
						return false;
					}
					return true;
				} )
				.map( function ( filepath ) {
					// Read file source
					return grunt.file.read( filepath );
				} )
				.join( grunt.util.normalizelf( grunt.util.linefeed ) );

			let rtlcss = cssjanus.transform(
				src,
				options.swapLtrRtlInUrl,
				options.swapLeftRightInUrl
			);
			if ( options.processContent ) {
				rtlcss = options.processContent( rtlcss );
			}
			if ( !options.generateExactDuplicates && rtlcss === src ) {
				grunt.log.writeln( 'Nothing to flip in ' + f.src );
			} else {
				// Write the destination file
				grunt.file.write( f.dest, rtlcss );
				grunt.log.writeln( 'File "' + f.dest + '" created.' );
			}
		} );
	} );
};
