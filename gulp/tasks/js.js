import webpackStream from "webpack-stream";
import { app } from "../../gulpfile.js";

export const js = () => {
  return app.gulp
    .src(app.path.src.js)
    .pipe(app.plugins.plumber(app.plugins.notify.onError()))
    .pipe(
      webpackStream({
        mode: app.isBuild ? "production" : "development",
        output: {
          filename: "app.js",
        },
      })
    )
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browserSync.stream());
};
