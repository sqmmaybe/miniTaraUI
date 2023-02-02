import { spawn } from 'child_process';
import { series, src, dest, parallel } from 'gulp';
import { componentPath } from '../path';
import less from "gulp-less";
import autoprefixer from 'gulp-autoprefixer';
/**
 * delete dist
 * rm -rf packages/tara/components/dist
 * () => run('rm -rf packages/tara/components/dist')
 */

const run = (command: string) => {
    // cmd表示命令，args代表参数，如 rm -rf  rm就是命令，-rf就为参数
    const [cmd, ...args] = command.split(' ');
    return new Promise((resolve, reject) => {
        const app = spawn(cmd, args, {
            cwd: componentPath,//执行命令的路径
            stdio: 'inherit', //输出共享给父进程
            shell: true
        })
        //执行完毕关闭并resolve
        app.on('close', resolve);
    })
};

const buildStyle = () => {
    return src(`${componentPath}/src/**/style/**.less`)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${componentPath}/lib`))
    .pipe(dest(`${componentPath}/es`));
};

const buildComponent = async () => {
    await run(`cd ${componentPath}`)
    run('pnpm run build')
};

export default series(
    parallel(
        async () => run(`rm -rf ${componentPath}/lib`), 
        async () => run(`rm -rf ${componentPath}/es`), 
    ),
    parallel(
        async () => buildStyle(),
        async () => buildComponent()
    )
);
