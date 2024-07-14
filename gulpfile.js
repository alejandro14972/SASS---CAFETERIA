//instalar sass en gulp

const { src, dest, watch,series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixeer = require('autoprefixer');


//dependencias de imagenes
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');

//babel para js
const babel = require('gulp-babel');

const browserify = require('browserify');
const source = require('vinyl-source-stream');
const babelify = require('babelify');


function css(done) {

  src('src/scss/app.scss')
    .pipe(sass())  //{outputStyle: 'compressed'} para comprimir el archivo sass
    .pipe(postcss([autoprefixeer()])) //para navegadores que no soportan css moderno
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
  console.log("optimizando imagenes en avif");
  return src('src/img/**/*.{png,jpg}')
     .pipe(avif()) 
      .pipe(dest('build/img'));
} 


//precopilador js
function bundleJavaScript() {
  return browserify({ entries: 'src/js/index.js', debug: true })
      .transform(babelify, { presets: ['@babel/preset-env'] })
      .bundle()
      .pipe(source('index.js'))
      .pipe(dest('build/js'));
}


function dev() { //funcion para actualizar automático
  console.log("desplegando pagina web");
  watch('src/scss/**/*.scss', css);
  watch('src/js/index.js', bundleJavaScript)
  watch('src/img/**/*', imagenes);
}

exports.css = css;
exports.dev = dev;
exports.imagenes = imagenes;
exports.imagenesWebp = imagenesWebp;
exports.versionAvif = versionAvif;
exports.bundleJavaScript = bundleJavaScript;
//exports.js = javascript
exports.default = series (/* imagenes, imagenesWebp, versionAvif, */ css,bundleJavaScript ,dev);