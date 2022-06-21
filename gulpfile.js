import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";
import { clean } from "./gulp/tasks/clean.js";
import { copyFiles } from "./gulp/tasks/copyFiles.js";
import { html } from "./gulp/tasks/html.js";
import { image } from "./gulp/tasks/image.js";
import { js } from "./gulp/tasks/js.js";
import { scss } from "./gulp/tasks/scss.js";
import { server } from "./gulp/tasks/server.js";
import { fonts } from "./gulp/tasks/fonts.js";

export const app = {
  path,
  gulp,
  plugins,
  isBuild: process.argv.includes("--production"),
};

const watches = () => {
  gulp.watch(app.path.watch.files, copyFiles);
  gulp.watch(app.path.watch.html, html);
  gulp.watch(app.path.watch.img, image);
  gulp.watch(app.path.watch.scss, scss);
  gulp.watch(app.path.watch.js, js);
  gulp.watch(app.path.watch.fonts, fonts);
};

const tasks = [copyFiles, html, image, scss, js, fonts];
const live = gulp.parallel(watches, server);
const mainTasks = gulp.parallel(tasks);
const dev = gulp.series(clean, mainTasks, live);
const build = gulp.series(clean, mainTasks);
export { dev, build };

// gulp.task("default", tasks);
