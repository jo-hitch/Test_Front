var config = {
    map: {
        '*': {
            "theme": 'js/theme',
            "matchHeightInit": 'js/match-height-init'
        }
    },
    paths: {
        'stickyHeader': 'js/sticky-header',
        'matchHeight': 'js/matchHeight'
    },
    shim: {
        'stickyHeader': {
            deps: ['jquery']
        },
        'matchHeight': {
            deps: ['jquery']
        }
    },
    deps: [

    ]
};