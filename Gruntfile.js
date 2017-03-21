/**
 * grunt-cssjanus
 * https://github.com/cssjanus/grunt-cssjanus
 *
 * Copyright (c) 2013 Yoav Farhi
 * Licensed under the MIT license.
 */
'use strict';

module.exports = function ( grunt ) {
	grunt.loadTasks( 'tasks' );
	grunt.loadNpmTasks( 'grunt-eslint' );

	grunt.initConfig( {
		eslint: {
			src: '.'
		},
		cssjanus: {
			options: {
				swapLtrRtlInUrl: true,
				swapLeftRightInUrl: false,
				generateExactDuplicates: false
			},
			'fixtures/actual.css': 'fixtures/input.css'
		}
	} );

	grunt.registerTask( 'match', function () {
		var actual = grunt.file.read( 'fixtures/actual.css' ),
			expected = grunt.file.read( 'fixtures/expected.css' );
		if ( actual !== expected ) {
			grunt.log.error( 'Test result mismatch.' );
			grunt.log.subhead( 'Actual' );
			grunt.log.write( actual );
			grunt.log.subhead( 'Expected' );
			grunt.log.write( expected );
			return false;
		}
		grunt.log.ok( 'Test result matches expectation.' );
	} );

	grunt.registerTask( 'default', [ 'eslint', 'cssjanus', 'match' ] );
};
