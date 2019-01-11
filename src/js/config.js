require.config({
    baseUrl: '/js/',
    paths: {
        'mui': 'libs/mui.min',
        'picker': 'libs/mui.picker.min',
        'poppicker': 'libs/mui.poppicker'
    },
    shim: {
        'picker': {
            deps: ['mui']
        },
        'poppicker': {
            deps: ['mui']
        }
    }
})