/*jshint node:true*/

var path = require('path');

module.exports = function(grunt) {
	'use strict';

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		webfont: {
			ios: {
				src: 'src/ios/*.svg',
				dest: 'dist/wavicon/ios/fonts',
				destCss: 'dist/wavicon/ios/css',
				options: {
					stylesheet: 'css',
					fontFilename: 'wavicon',
					font: 'wavicon'
				}
			},
			android: {
				src: 'src/android/*.svg',
				dest: 'dist/wavicon/android/fonts',
				destCss: 'dist/wavicon/android/css',
				options: {
                    stylesheet: 'css',
                    fontFilename: 'wavicon',
                    font: 'wavicon'
				}
			}			
		}, 
		jshint: {
			all: ['Gruntfile.js', 'tasks/*.js', 'src/*.js'],
			options: {
				jshintrc: true
			}
		},
		watch: {
			scripts: {
				files: '<%= jshint.all %>',
				tasks: ['jshint', 'jscs'],
				options: {
					debounceDelay: 100,
					nospawn: true
				}
			}
		},
		jscs: {
			options: {
				config: ".jscs.json"
			},
			all: ['tasks/*.js']
		},
		clean: ['dist']
	});

	grunt.loadTasks('tasks');
	grunt.registerTask('default', ['jshint', 'jscs', 'clean', 'webfont', 'test', 'clean']);
	grunt.registerTask('build', ['default']);

};
