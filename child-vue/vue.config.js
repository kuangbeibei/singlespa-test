module.exports = {
    configureWebpack: {
        output: {
            library: 'singleVue',
            libraryTarget: 'umd'      // 这个配置就把singleVue包里面的bootstrap, mount, unmount都放在window上。eg. window.singleVue.bootstrap/mount/unmount
        },
        devServer: {
            port: 10000
        }
    }
}
