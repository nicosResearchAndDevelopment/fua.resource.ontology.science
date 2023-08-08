const
    util     = require('../util.js'),
    prefix   = 'ivoa',
    context  = {
        'misc':      'http://www.domain3.com#',
        'rdf':       'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
        'xsd':       'http://www.w3.org/2001/XMLSchema#',
        'gcvs':      'http://www.sai.msu.su/groups/cluster/gcvs/gcvs/codes#',
        'rdfs':      'http://www.w3.org/2000/01/rdf-schema#',
        'owl':       'http://www.w3.org/2002/07/owl#',
        'vizier':    'http://vizier.u-strasbg.fr/codes#',
        'adc':       'http://adc.astro.umd.edu/adc/keywords#',
        'interface': 'http://www.domain5.com#',
        'p1':        'http://www.owl-ontologies.com/assert.owl#',
        'simbad':    'http://simbad.u-strasbg.fr/codes#',
        [prefix]:    'http://eurovotech.org/objects-structure.owl#'
    },
    override = false;

Promise.all([
    util.convertOntology(`data/${prefix}/${prefix}.xml`, 'application/rdf+xml', `data/${prefix}/${prefix}_generated.ttl`, 'text/turtle', context, override)
]).then(util.logDone).catch(util.logError);
