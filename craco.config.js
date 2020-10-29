// 此文件专门配置webpack，相当于vue当中的vue.config.js文件，
// 下载npm i @craco/craco,将启动的react-scripts改成craco,
// 另外需要安装craco-less来实现antd样式的按需加载

const path = require('path')
const resolve = (dir) => path.resolve(dir)

const CracoLessPlugin = require('craco-less');
module.exports = {
  webpack: {
    alias: {
      '@': resolve('./src'),
      'components': resolve('./src/components')
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // 此选项可以改变antd组件中所有默认的颜色#1DA57A
            modifyVars: { '@primary-color': 'red' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}