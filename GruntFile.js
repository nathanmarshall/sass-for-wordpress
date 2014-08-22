/*! 
 * Wordpress Starter Template w/Sass
 * http://powershifter.com
 * @auhtor Nathan Marshall at Poweshifter 
 */

'use strict';

/** 
 * Grunt Module 
 */

module.exports = function(grunt) {

	/**
	 * Grunt Configuration
	 */

	 grunt.initConfig({
	 	
	 	pkg: grunt.file.readJSON('package.json'),
	 	project: {
	 		sass: [
	 			'sass/stylesheet.scss'
	 		]
	 	},

	 	/**
	 	 * Sass
	 	 */
	 	sass: {
	 		dev: {
	 			options: {
	 				style: 'expanded',
	 				compass: false,
	 				sourcemap: 'none'
	 			},
	 			files: {
	 				'style.css' : '<%= project.sass %>'
	 			}
	 		},
	 		dist: {
	 			options: {
	 				style: 'compressed',
	 				compass: false,
	 				sourcemap: 'none'
	 			},
	 			files: {
	 				'style.css' : '<%= project.sass %>'
	 			}
	 		}
	 	},

	 	/**
	 	 * Watch
	 	 * polls for changes to .scss files.
	 	 */

	 	 watch: {
	 	 	sass: {
	 	 		files: 'sass/{,*/}*.{scss, sass}',
	 	 		tasks: ['sass:dev']
	 	 	}
	 	 }
	 });

	/**
	 * Load Grunt plugins
	 */

	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	/**
	 * Default task
	 * Run `grunt` on the command line
	 */
	grunt.registerTask('default', ['sass:dev', 'watch']);
};