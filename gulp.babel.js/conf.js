import gulp from 'gulp'

export function reg(...tasks) {
 tasks.forEach(x => gulp.task(x))
}
