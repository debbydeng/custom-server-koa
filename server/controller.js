const fs = require('fs');
const { __rootdir} = require('../config.js')
function addMapping(router, mapping) {
    for (let url in mapping) {
        if (url.startsWith('GET ')) {
            let path = url.substring(4);
            router.get(path, mapping[url]);
            console.log(`register URL mapping: GET ${path}`);
        } else if (url.startsWith('POST ')) {
            let path = url.substring(5);
            router.post(path, mapping[url]);
            console.log(`register URL mapping: POST ${path}`);
        } else {
            console.log(`invalid URL: ${url}`);
        }
    }
}

function scanDir(filePath,fileList){
    let files = fs.readdirSync(filePath);
    files.map((f) => {
        const dirPath=`${filePath}/${f}`;
        const stats=fs.statSync(dirPath)
        if(stats.isFile()){
            if(f.endsWith('.js')||f.endsWith('.ts')||f.endsWith('.mjs')){
                fileList.push({
                    filePath,
                    fileName:f
                })
            }
        }else if(stats.isDirectory()){
            scanDir(dirPath,fileList);
        }
    });
    return fileList;
}
function addControllers(router,controllers_dir) {
    const js_files=scanDir(`${__rootdir}/${controllers_dir}`,[]);
    for (let {filePath,fileName} of js_files) {
        console.log(`process controller: ${filePath}/${fileName}...`);
        let mapping = require(`${filePath}/${fileName}`);
        addMapping(router, mapping);
    }
}

module.exports = function (dir) {
    let controllers_dir = dir || 'controllers', // 如果不传参数，扫描目录默认为'controllers'
        router = require('koa-router')();
    addControllers(router, controllers_dir);
    return router.routes();
};
