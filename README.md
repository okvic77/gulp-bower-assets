# gulp-bower-assets

```javascript
var gulp = require('gulp'), assets = require('gulp-bower-assets');

var config = {
	prefix: true
}

gulp.task('assets', function(){
    return gulp.src('assets.json').pipe(assets(config)).pipe(gulp.dest('assets/build'));
});
```

``login`` text is the prefix. You can have may prefix's like app, public, common or others in the same file. You can ``gulp.src`` many files.

The second level of the json with an array is ``outputfile@action``. Current actions are ``concat,copy``.

```json
{
  "login": {
    "scripts.js@concat": [
      "jquery/dist/jquery.min.js",
      "angular/angular.min.js",
      "bootstrap/dist/js/bootstrap.min.js",
      "underscore/underscore-min.js",
      "angular-bootstrap/ui-bootstrap.min.js",
      "angular-bootstrap/ui-bootstrap-tpls.min.js",
      "angular-ui-router/release/angular-ui-router.min.js",
      "angular-messages/angular-messages.min.js",
      "angular-animate/angular-animate.min.js",
      "angular-resource/angular-resource.js"
    ],
    "styles.css@concat": [
      "animate.css/animate.min.css"
    ],
    "fonts@copy": [
      "bootstrap/dist/fonts/*",
      "font-awesome/fonts/*"
    ]
  }
}
```