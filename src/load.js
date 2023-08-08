module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load',
    'dct:alternative': '@nrd/fua.resource.ontology.science',
    'dct:requires':    [
        {
            'dct:identifier': './ivoa/load.js',
            'dct:format':     'application/fua.load+js'
        },
        {
            'dct:identifier': './qudt/load.js',
            'dct:format':     'application/fua.load+js'
        }
        // {
        //     'dct:identifier': './sweet/load.js',
        //     'dct:format':     'application/fua.load+js'
        // }
    ]
};
