module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		'http-server': {
			'dev': {
				// the server root directory 
				root: 'app/',
				port: 9000
				}
		}
	});
	grunt.loadNpmTasks('grunt-http-server');
}