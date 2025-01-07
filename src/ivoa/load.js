module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load',
    'dct:alternative': '@fua/resource.ontology.science/ivoa',
    'dct:requires':    [{
        'dct:identifier': '../../data/ivoa/ivoa.xml',
        'dct:format':     'application/rdf+xml'
    }]
};
