	module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			development: {
				files: {
					"assets/styles/css/style.css": "assets/styles/less/style.less"
				}
			}
		},
		autoprefixer: {
			single_file: {
				options: {

				},
				src: "assets/styles/css/style.css",
				dest: "public/assets/styles/style.css"
			}
		},
		cssmin: {
			development: {
				options: {
					banner: "/* Minified style */"
				},
				files: {
					"public/assets/styles/style.min.css": ["public/assets/styles/style.css"]
				}
			}
		},
		concat: {
			angular_app: {
				files: {
					'public/assets/scripts/app.js': ['assets/scripts/bootstrap.min.js', 'assets/scripts/angular.js', 'assets/scripts/main.js', 'assets/scripts/**/*.js']
				},
			},
		},
		watch: {
			styles: {
				options: {
					livereload: true
				},
				files: "assets/styles/**/*.less",
				tasks: ["styles"]
			},
			scripts: {
				options: {
					livereload: true
				},
				files: "assets/scripts/**/*.js",
				tasks: ["scripts"]
			},
			jade: {
				options: {
					livereload: true
				},
				files: "views/**/*.jade"
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-autoprefixer");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.registerTask("default", ["less", "autoprefixer", "cssmin", "concat"]);
	grunt.registerTask("styles", ["less", "autoprefixer", "cssmin"]);
	grunt.registerTask("scripts", ["concat"]);
};