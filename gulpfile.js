var gulp = require('gulp'), assets = require('./app.js');


var config = {
    prefix: true
}

gulp.task('default', function(){
    return gulp.src('assets.json').pipe(assets(config)).pipe(gulp.dest('build'));
});