var SRC_DIR='./src/';//源文件
var DIST_DIR='./dist/';//处理后的文件
var DIST_FILES=DIST_DIR+'**';//目标路径下的所有文件

var Config={
    src:SRC_DIR,
    dist:DIST_DIR,
    dist_files:DIST_FILES,
    html:{
        dir:SRC_DIR,
        src:SRC_DIR+'*.html',
        dist:DIST_DIR
    },
    assets:{
        dir:SRC_DIR+'assets',
        src:SRC_DIR+'assets/**/*',
        dist:DIST_DIR+'assets'
    },
    css:{
        dir:SRC_DIR+'css',
        src:SRC_DIR+'css/**/*.css',
        dist:DIST_DIR+'css'
    },
    less:{
        dir:SRC_DIR+'less',
        src:SRC_DIR+'less/**/*.less',
        dist:DIST_DIR+'css',
        rev:DIST_DIR+'rev/css'
    },
    js:{
        dir:SRC_DIR+'js',
        src:SRC_DIR+'js/**/*.js',
        dist:DIST_DIR+'js',
        build_name:'build.js',//合并后的js文件名
        rev:DIST_DIR+'rev/js'
    },
    img:{
        dir:SRC_DIR+'img',
        src:SRC_DIR+'img/**/*',
        dist:DIST_DIR+'img'
    },
    rev:{
        revJson:DIST_DIR+'rev/**/*.json',
        src:'*.html',
        dist:''
    }
};
module.exports=Config;