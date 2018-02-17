const gulp = require('gulp'),
  nodemon = require('gulp-nodemon');


gulp.task('default',function(){
  nodemon({
    script : 'app.js',
    ignore : ['./node_modules/**']
  }).on('restart',function(){
    console.log('restarting...')
  })
})