module.exports = function (grunt) {

    var sassStyle = 'expanded';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // uglify: {
        //     options: {
        //         banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %>*/\n'
        //     },
        //     build: {
        //         src: 'src/<%= pkg.name %>.js',
        //         dest: 'build/<%= pkg.name %>.min.js',
        //         src: 'src/plugin.js',
        //         dest: 'build/plugin.min.js'
        //     },
        //     compressjs: {
        //         files: {
        //             './global.min.js': ['./global.js']
        //         }
        //     },
        // },
        sass: {
            dist: {
              files: [{
                expand: true,
                cwd: 'scss', // 要编译的目录
                src: ['*.scss'], // 源文件格式
                dest: './css', // 目标目录
                ext: '.css' // 生成文件格式
              }]
            }
        },
        // compass: {
        //     dist: {
        //         options: {
        //             sassDir: 'sass',
        //             cssDir: 'css',
        //             environment: 'production'
        //         }
        //     }
        // },
        // concat: {
        //     options: {
        //         separator: '',
        //     },
        //     dist: {
        //         files: {
        //             './global.js': ['./src/plugin.js', './src/plugin2.js']
        //         }
        //     }
        // },
        // jshint: {
        //     all: ['./src/*.js']
        // },
        watch: {
            // scripts: {
            //     files: ['./src/plugin.js', './src/plugin2.js'],
            //     tasks: ['concat', 'jshint', 'uglify']
            // },
            sass: {
                files: ['./scss/*'],
                tasks: ['sass']
            },
        },
        // connect: {
        //     options: {
        //         port: 9000,
        //         open: true,
        //         hostname: 'localhost'
        //     },
        //     server: {
        //         options: {
        //             port: 9001,
        //             base: './'
        //         }
        //     }
        // },
        // cssmin: {
        //     target: {
        //         files: [{
        //           expand: true,
        //           cwd: './',
        //           src: ['*.css', '!*.min.css'],
        //           dest: './',
        //           ext: '.min.css'
        //     }]
        //   }
        // }
    });

    //Load the plugin that provides the "uglify" task.
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    // grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-contrib-jshint');
    // grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-contrib-connect');
    // grunt.loadNpmTasks('grunt-contrib-cssmin');
    // grunt.loadNpmTasks('grunt-contrib-compass');

    //Defautl task(s).
    grunt.registerTask('default', ['uglify']);
    //grunt.registerTask('outputcss', ['sass']);
    grunt.registerTask('concatjs', ['concat']);
    grunt.registerTask('hintjs', ['jshint']);
    grunt.registerTask('compressjs', ['concat', 'jshint', 'uglify']);
    grunt.registerTask('watchit', ['sass', 'watch']);
    grunt.registerTask('compresscss', 'cssmin');
    grunt.registerTask('outputcss', 'compass');
};