'use strict';                               // use strict mode of javascripts, be strict with variable types etc

module.exports = function(grunt){           // how we define node modules.

    require('time-grunt')(grunt);
    require('jit-grunt')(grunt, {useminPrepare: 'grunt-usemin'});            // jit-grunt takes care of loading node modules when require.



    // this is configuring the sass task
    grunt.initConfig({                      // this configure is a javascript object. 
        sass: {
            dist:{
                files: {
                    'css/styles.css': 'css/styles.scss'
                }
            }
        },

        watch: {
            files: 'css/*.scss',
            task: ['sass']
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'css/*.css',
                        '*.html',
                        'js/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: './'
                    }
                }
            }
        },
        copy: {
            html: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: './',
                    src: ['*.html'],
                    dest: 'dist'
                }]
            },

            fonts: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: 'node_modules/font-awesome',
                    src: ['fonts/*.*'],
                    dest: 'dist'
                }]
            }
        },

        clean: {
            build: {
                src: ['dist/']
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: './',
                    src: ['img/*.{png,jpg,gif}'],
                    dest: 'dist/'
                }]
            }
        },
        useminPrepare: {
            anyRandomName: {
                dest: 'dist',
                src: ['about.html', 'contactUs.html', 'index.html']
            },
            options: {
                flow: {
                    steps: {
                        css: ['cssmin'],
                        js: ['uglify']
                    },
                    post: {
                        css: [{
                            name: 'cssmin',
                            createConfig: function (context, block){
                                var generated = context.options.generated;
                                generated.options = {
                                    keepSpecialComments: 0, rebase: false
                                };
                            }
                        }]
                    }
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {}
        },
        uglify: {
            dist: {}
        },
        cssmin: {
            dist: {}
        },
        filerev: {
            options: {
                encoding: 'utf8',
                algorithm: 'md5',
                length: '20'
            },
            release: {
                files: [{
                    src: [
                        'dist/js/*.js',
                        'dist/css/*.css'
                    ]
                }]
            }
        },
        usemin: {
            html: ['dist/contactUs.html', 'dist/index.html', 'dist/about.html'],
            options: {
                assetsDirs: ['dist', 'dist/css', 'dist/js']
            }
        },
        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'dist/index.html',
                    'dist/contactUs.html': 'dist/contactUs.html',
                    'dist/about.html': 'dist/about.html'

                }
            }
        }
    });

    // to execute sass task
    grunt.registerTask('css', ['sass']);
    // Now, to understand the syntax here, this as you can see it says 
    //"grunt.registerTask" and this task's name is CSS. And what does 
    //this task involve? This task involves executing the SASS task which has already been configured here. This is how we read this syntax here.
    grunt.registerTask('default', ['browserSync', 'watch']);
    grunt.registerTask('build', [
        'clean', 
        'copy', 
        'imagemin',
        'useminPrepare',
        'concat',
        'cssmin',
        'uglify',
        'filerev',
        'usemin',
        'htmlmin'
    ]);

}