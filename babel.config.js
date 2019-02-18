module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
                modules: 'cjs'
            }
        ],
        '@babel/preset-typescript'
    ]
};