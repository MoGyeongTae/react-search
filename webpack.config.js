module.exports = {
    entry : './src/index.js',

    output : {
        path : __dirname + '/public',
        filename : 'bundle.js'
    },

    module : {
        rules: [
            {
              test:/\.css$/,
                use : [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.js$/,
                exclude : [/node_modules/],
                use : [{
                    loader : 'babel-loader',
                    options : {
                        presets : ['es2015','react']
                    }
                }]
            }
        ]
    }
};