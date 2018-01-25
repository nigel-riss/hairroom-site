const gulp = require("gulp");
const watch = require("gulp-watch");
const browserSync = require("browser-sync").create();

gulp.task("watch", () => {
    browserSync.init({
        server: {
            baseDir: "dist"
        },
        notify: {
            styles: {
                top: "auto",
                bottom: "0"
            }
        }
    });

    watch("./src/**/*.pug", () => {
        gulp.start("pugChanged");
    })

    watch("./src/scss/**/*.scss", () => {
        gulp.start("cssInject");
    })
})

    gulp.task("pugChanged", ["pugRender"], () => {
        browserSync.reload();
    });

    gulp.task("cssInject", ["styles"], () => {
        gulp.src("./dist/styles.css")
    })