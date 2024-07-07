const { src, dest } = require('gulp');
const imagemin = require('gulp-imagemin');

// Función para copiar imágenes sin optimización (para depuración)
function copiarImagenes(done) {
    console.log('Copiando imágenes sin optimización...');
    src('./img_origen/**/*')
        .pipe(dest('img_destino'))
        .on('end', () => console.log('Imágenes copiadas a img_destino.'));
    done();
}

// Función para optimizar imágenes
function optimizarImagenes(done) {
    console.log('Optimizando imágenes...');
    src('./img_origen/**/*')
        .pipe(imagemin([
            imagemin.mozjpeg({ quality: 75, progressive: true }),
            imagemin.optipng({ optimizationLevel: 2 }),
            imagemin.gifsicle({ interlaced: true }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: false },
                    { cleanupIDs: false }
                ]
            })
        ]))
        .pipe(dest('img_destino'))
        .on('end', () => console.log('Imágenes optimizadas y copiadas a img_destino.'));
    done();
}


exports.copiarImagenes = copiarImagenes;
exports.optimizarImagenes = optimizarImagenes;
