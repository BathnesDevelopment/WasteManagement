(function () {
    'use strict';

    var gulpConnect = require('gulp-connect');
    var gulpOpen = require('gulp-open');

    module.exports = function (gulp, configuration) {

        gulp.task('webserver', webServerTask);
        gulp.task('webserver:open-browser', openBrowserTask);

        function webServerTask() {
            return gulpConnect.server({
                root: [configuration.projectReleasePath],
                port: configuration.projectConfig.build.server_port,
                livereload: true
            });
        }

        function openBrowserTask() {

            var gulpOpenOptions = {
                uri: 'http://localhost:' + configuration.projectConfig.build.server_port + configuration.projectConfig.build.default_html
            };

            return gulp.src('')
                .pipe(gulpOpen(gulpOpenOptions));
        }
    };

}).call(this);
