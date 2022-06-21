import del from "del";
import { app } from "../../gulpfile.js";

export const clean = () => {
  return del(app.path.clean);
};
