/**
 * Created by 机器人 on 2018/6/6.
 */

var  gulp=require('gulp');    //引用gulp
var  del=require('del');      //引用gulp删除插件
var  uglify=require('gulp-uglify');　　//引用压缩Js插件
var  css=require('gulp-clean-css');　　//gulp压缩css文件
var  rename = require("gulp-rename");　　//引用重命名插件
var htmlmin = require('gulp-htmlmin');//html压缩组件
var removeHtmlComments = require('gulp-remove-html-comments');//html删除注释
var removeEmptyLines = require('gulp-remove-empty-lines')




gulp.task('dhtml',function(){
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: false,//压缩HTML
    };
    gulp.src('*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist/js'));
    console.log('编译成功')
});





gulp.task('default',function(){
    console.log('hello world');
});
gulp.task('defaults',function(){
    console.log('yd');
});

// 2、复制多个文件
gulp.task('copyAllHtml',function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
             };
    return gulp.src("./src/*.html").pipe(removeHtmlComments()).pipe(removeEmptyLines()).pipe(htmlmin(options)).pipe(gulp.dest('dist'));
});
gulp.task('copyAlljs',function () {
    return gulp.src("./src/js/*.js").pipe(gulp.dest('dist/js'));
});
gulp.task('build',['ysjs','copyAllHtml'],function () {
    console.log('编译成功')
});
gulp.task('ysjs',function(){
    return gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});
gulp.task('htmls',function(){
    return gulp.src('./src/*.html')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});
gulp.task('ysjs',function(){
    return gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});
gulp.task('htmlss',function(){
    return gulp.src('./src//*.html')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});