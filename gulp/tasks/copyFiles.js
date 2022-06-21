import { app } from "../../gulpfile.js";

export const copyFiles = () => {
  return app.gulp
    .src(app.path.src.files)
    .pipe(app.gulp.dest(app.path.build.files));
};
