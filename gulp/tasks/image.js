import imagemin from "gulp-imagemin";
import { app } from "../../gulpfile.js";

export const image = () => {
  return app.gulp
    .src(app.path.src.img)
    .pipe(app.plugins.newer(app.path.build.img))
    .pipe(
      app.plugins.gulpIf(
        app.isBuild,
        imagemin({
          progressive: true,
          svgoPlugins: [{ removeViewBox: false }],
          interlaced: true,
          optimizationLevel: 3, // 0 - 7
          verbose: true,
        })
      )
    )
    .pipe(app.gulp.dest(app.path.build.img));
};
