_ = require('underscore');

/* Exports a function which returns an object that overrides the default &
 *   plugin grunt configuration object.
 *
 * You can familiarize yourself with Lineman's defaults by checking out:
 *
 *   - https://github.com/linemanjs/lineman/blob/master/config/application.coffee
 *   - https://github.com/linemanjs/lineman/blob/master/config/plugins
 *
 * You can also ask Lineman's about config from the command line:
 *
 *   $ lineman config #=> to print the entire config
 *   $ lineman config concat_sourcemap.js #=> to see the JS config for the concat task.
 */
module.exports = function(lineman) {
  //Override application configuration here. Common examples follow in the comments.
  return {
    loadNpmTasks: lineman.config.application.loadNpmTasks.concat("grunt-less-imports", "grunt-angular-templates", "grunt-ng-annotate"),
    addFeature: {
        root: "app/features/"
    },

    addRoute: {
        root: "app/routes/"
    },

    ngtemplates: {
        app: {
            src: "app/features/**/template.html",
            dest: "<%= files.ngtemplates.dest %>",
            options: {
                base: "app/features",
                url: function(url) {
                    console.log("TEMPLATE CACHE RUN FOR ", url);
                    var output = url.split("/").filter(function(part) {
                        return part !== "app" && part !== "features" && part.indexOf('.html') === -1;
                    }).join(".");


                    return output;
                }
            }
        },
    },

    less_imports: {
        "app/css/imports.less" : ["app/features/**/style.less"]
    },

    prependTasks: {
        common: ["less_imports", "ngtemplates"],
        dist: ["ngAnnotate"]
    },

    removeTasks: {
        common: ["coffee", "handlebars"]
    },

    watch: {
        ngtemplates: {
            files: "app/features/**/template.html",
            tasks: ["ngtemplates", "concat_sourcemap:js"]
        },
        js: {
            files: ["app/features/**/behavior.js", "app/routes/**/route.js", "app/js/**/*.js"],
            tasks: ["concat_sourcemap:js"]
        },
        less_imports: {
            files: "app/features/**/style.less",
            tasks: ["less_imports"]
        },
        integrate_imported_less: {
            files: "app/css/imports.less",
            tasks: ["less"]
        }
    },

    concat_sourcemap: {
        js: {
            src: _(lineman.config.application.concat_sourcemap.js.src).
                without("<%= files.template.generated %>").
                concat("<%= files.template.generated %>")
        }
    },

    ngAnnotate: {
        js: {
            src: "<%= files.js.concatenated %>",
            dest: "<%= files.js.concatenated %>"
        }
    },
    // API Proxying
    //
    // During development, you'll likely want to make XHR (AJAX) requests to an API on the same
    // port as your lineman development server. By enabling the API proxy and setting the port, all
    // requests for paths that don't match a static asset in ./generated will be forwarded to
    // whatever service might be running on the specified port.
    //
    // server: {
    //   apiProxy: {
    //     enabled: true,
    //     host: 'localhost',
    //     port: 3000
    //   }
    // }

    // Sass
    //
    // Lineman supports Sass via grunt-contrib-sass, which requires you first
    // have Ruby installed as well as the `sass` gem. To enable it, comment out the
    // following line:
    //
    // enableSass: true

    // Asset Fingerprints
    //
    // Lineman can fingerprint your static assets by appending a hash to the filename
    // and logging a manifest of logical-to-hashed filenames in dist/assets.json
    // via grunt-asset-fingerprint
    //
    // enableAssetFingerprint: true

    // LiveReload
    //
    // Lineman can LiveReload browsers whenever a file is changed that results in
    // assets to be processed, preventing the need to hit F5/Cmd-R every time you
    // make a change in each browser you're working against. To enable LiveReload,
    // comment out the following line:
    //
    livereload: true

  };
};
