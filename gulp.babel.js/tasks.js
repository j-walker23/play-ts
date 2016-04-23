import gulp from 'gulp'
import gulpTs from 'gulp-tsconfig'
import {
 loadSync
}
from 'tsconfig'
import {
 reg
}
from '../conf'

/**
 * @author john
 * @version 4/23/16 1:36 PM
 */

reg(tsconfig)

function tsconfig() {

 process.chdir(resolveSpa('.'))

 let tsOrder = [
  "src/**/*.ts",
  "definitions/**/*.ts",
  "typings/browser.d.ts",
  "typings/browser/**/*.ts",
  "vendor/github/**/*.d.ts",
  "vendor/npm/**/*.d.ts",
  "!vendor/npm/typescript*/**/*.ts",
  "!vendor/npm/jw-ng-forward*/es6/**/*.ts",
  "!**/*.spec.ts"
 ]
 let {
  compilerOptions
 } = loadSync(resolveSpa())

 let tsConfig = {
  compilerOptions
 }

 let gulpTsConfig = gulpTs({
  tsOrder,
  tsConfig
 })

 return gulp.src(tsOrder)
  .pipe(gulpTsConfig())
  .pipe(gulp.dest('.'))
}
