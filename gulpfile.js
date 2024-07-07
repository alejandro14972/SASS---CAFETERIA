//instalar sass en gulp

const { src, dest, watch,series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixeer = require('autoprefixer');
const webp = require('gulp-webp');
const avif = require('gulp-avif');

//imagemin

const imagemin = require('gulp-imagemin');

function css(done) {

  //identificar archivo scss
  //2 compilar
  //3 guardar el scss
  src('src/scss/app.scss')
    .pipe(sass())  //{outputStyle: 'compressed'} para comprimir el archivo sass
    .pipe(postcss([autoprefixeer()]))
    .pipe(dest('build/css'));
  done();
}

function imagenes() {
 return src('src/img/**/*')
    .pipe(imagemin({optimizationLevel: 3}))
    .pipe(dest('build/img'))
  
}

// Función para convertir imágenes a WebP
function imagenesWebp() {
  const opciones = {
      quality: 50
  }
  console.log("optimizando imagenes en webp");
  return src('src/img/**/*.{png,jpg}')
      .pipe( webp( opciones ) )
      .pipe( dest('build/img') )
}


 function versionAvif() {
  return src('src/img/**/*.{png,jpg}')
     .pipe(avif()) 
      .pipe(dest('build/img'));
} 

function dev() { //funcion para actualizar auto  

  watch('src/scss/**/*.scss', css);
  watch('src/img/**/*', imagenes);
}

exports.css = css;
exports.dev = dev;
exports.imagenes = imagenes;
exports.imagenesWebp = imagenesWebp;
exports.versionAvif = versionAvif;
exports.default = series (/* imagenes, imagenesWebp, versionAvif, */ css, dev);