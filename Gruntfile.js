'use strict';

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    dateTime: Date.now(),
    // Task configuration.
    coffee: {
      myproject: {
        options: {
          bare: true
        },
        files: [
          {
            expand: true,
            flatten: false,
            cwd: 'src/coffee/',
            src: ['**/*.coffee'],
            dest: 'src/js/',
            ext: '.js'
          }
        ]
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      myproject: {
        src: ['src/js/*.js']
      }
    },

    concat: {
      myproject: {
        src: ['src/js/blade.js'],
        dest: 'build/blade.js',
        separator: ';'
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        mangle: {toplevel: true},
        squeeze: {dead_code: false},
        codegen: {quote_keys: true}
      },
      myproject: {
        src: 'build/blade.js',
        dest: 'build/blade.min.js'
      }
    },

    copy: {
      myproject: {
        files: [
          {flatten: true, src: ['src/js/e2gaASM.js'],  dest: 'build/e2gaASM.js'},
          {flatten: true, src: ['src/js/bladeASM.js'], dest: 'build/bladeASM.js'},
          {flatten: true, src: ['src/js/bladeSTR.js'], dest: 'build/bladeSTR.js'}
        ]
      }
    },

    jasmine: {
      myproject: {
        src: ['build/e2gaASM.js', 'build/bladeASM.js', 'build/bladeSTR.js', 'build/**/blade.js'],
        options: {
          specs: 'spec/**/*.spec.js'
        }
      }
    },

    mocha: {
      index: ['test/browser/index.html'],
      mocha: {
        ignoreLeaks: false,
        grep: 'food',
        reporter: 'spec'
      },
    },

    requirejs: {
      myproject: {
        options: {
          name: "build",
          baseUrl: "src/js",
          mainConfigFile: "src/js/build.js",
          out: 'build/<%= pkg.name %>.amd.js',
          removeCombined: false
        }
      }
    },

    watch: {
      app: {
        files: ['src/**/*.coffee', 'src/js/e2gaASM.js', 'src/js/bladeASM.js', 'src/js/bladeSTR.js', 'spec/**/*.js'],
        tasks: ['coffee:myproject', 'jshint:myproject', 'concat:myproject', 'uglify:myproject', 'copy:myproject', 'jasmine:myproject']
      }
    },
  });

  // Load plugin(s).
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  // Default task(s).
  grunt.registerTask('default', [
    'coffee:myproject',
    'jshint:myproject',
    'concat:myproject',
    'uglify:myproject',
    'copy:myproject',
    'jasmine:myproject'
    ]);
};
