module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load',
    'dct:alternative': '@fua/resource.ontology.science/sweet',
    'dct:requires':    [{
        'dct:identifier': '../../data/sweet/sweetAll.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': '../../data/sweet/sweetAll_includeV23Comments.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': '../../data/sweet/sweet_v23Comments.ttl',
        'dct:format':     'text/turtle'
    }]
};
