import plumber from "gulp-plumber";
import notify from "gulp-notify";
import browserSync from "browser-sync";
import replace from "gulp-replace";
import newer from "gulp-newer";
import gulpIf from "gulp-if";

export const plugins = {
  plumber,
  notify,
  browserSync,
  replace,
  newer,
  gulpIf,
};
