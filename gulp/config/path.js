const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
  build: {
    files: `${buildFolder}/files/`,
    fonts: `${buildFolder}/fonts/`,
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
    img: `${buildFolder}/img/`,
  },
  src: {
    files: `${srcFolder}/files/**/*.*`,
    fonts: `${srcFolder}/fonts/**/*.*`,
    html: `${srcFolder}/*.pug`,
    scss: `${srcFolder}/scss/*.{scss,sass}`,
    js: `${srcFolder}/js/*.js`,
    img: `${srcFolder}/img/**/*.*`,
  },
  watch: {
    files: `${srcFolder}/files/**/*.*`,
    fonts: `${srcFolder}/fonts/**/*.*`,
    html: `${srcFolder}/**/*.pug`,
    scss: `${srcFolder}/scss/**/*.{scss,sass}`,
    js: `${srcFolder}/js/**/*.js`,
    img: `${srcFolder}/img/**/*.*`,
  },
  clean: buildFolder,
};
