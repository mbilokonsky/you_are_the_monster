/* Exports a function which returns an object that overrides the default &
 *   plugin file patterns (used widely through the app configuration)
 *
 * To see the default definitions for Lineman's file paths and globs, see:
 *
 *   - https://github.com/linemanjs/lineman/blob/master/config/files.coffee
 */
module.exports = function(lineman) {
  //Override file patterns here
  return {
    // As an example, to override the file patterns for
    // the order in which to load third party JS libs:
    //
    js: {
      vendor: [
        "vendor/js/angular.min.js",
        "vendor/js/**/*.js"
      ],
      app: [
        "app/js/app.js",
        "app/js/**/*.js",
        "app/routes/**/route.js",
        "app/features/**/behavior.js"
      ],
      spec: [
        "app/features/**/spec.js",
        "app/routes/**/spec.js",
        "spec/**/*spec.js"
      ]
    },

    less: {
      compile: {
        options: {
          paths: ["vendor/css/**/*.css", "app/css/**/*.less"]
        }
      }
    },

    ngtemplates: {
      dest: "generated/angular/template-cache.js"
    },

    template: {
      generated: "<%= files.ngtemplates.dest %>"
    }
  };
};
