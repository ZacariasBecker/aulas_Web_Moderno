const gulp = require('gulp')
const series = gulp.series
const parallel = gulp.parallel

const antes1 = cb => {
    console.log('Tarefa antes1')
    return cb()
}
const antes2 = cb => {
    console.log('Tarefa antes2')
    return cb()
}

const fim = cb => {
    console.log('fim')
    return cb()
}

function copiar(cb) {
    //gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    gulp.src('pastaA/**/*.txt')
        .pipe(gulp.dest('pastaB'))
    return cb()
}

module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim,
)

