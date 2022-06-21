import { app } from "../../gulpfile.js";
import scssCompiller from "sass";
import scssGulp from "gulp-sass";
import autoPrefixer from "gulp-autoprefixer";
import cssMediaQueryGroup from "gulp-group-css-media-queries";
import cssClean from "gulp-clean-css";
import sourceMap from "gulp-sourcemaps";

const sass = scssGulp(scssCompiller);

export const scss = () => {
  return app.gulp
    .src(app.path.src.scss)
    .pipe(app.plugins.plumber(app.plugins.notify.onError()))
    .pipe(app.plugins.gulpIf(!app.isBuild, sourceMap.init()))
    .pipe(app.plugins.replace(/\/src/g, ""))
    .pipe(sass())
    .pipe(
      app.plugins.gulpIf(
        app.isBuild,
        autoPrefixer({
          grid: true,
          cascade: true,
        })
      )
    )
    .pipe(app.plugins.gulpIf(app.isBuild, cssMediaQueryGroup()))
    .pipe(app.plugins.gulpIf(app.isBuild, cssClean()))
    .pipe(app.plugins.gulpIf(!app.isBuild, sourceMap.write()))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browserSync.stream());
};
