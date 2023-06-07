#!/usr/bin/env node

//  运行代码前手动添加命令行参数

//  指定gulp的工作目录
process.argv.push("--cwd");

//  gulp的工作目录
process.argv.push(process.cwd());

//  指定gulpfile文件的位置
process.argv.push("--gulpfile");
//  require.resolve可以根据npm包的相对路径找到该包的入口文件（绝对路径）
process.argv.push(require.resolve(".."));

require("gulp/bin/gulp");
