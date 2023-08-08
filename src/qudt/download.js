const
    util     = require('../util.js'),
    prefix   = 'qudt',
    ontology = 'http://qudt.org/schema/qudt/',
    override = false;

Promise.all([
    util.downloadOntology('http://qudt.org/schema/qudt', 'text/turtle', `data/${prefix}/schema/qudt.ttl`, override),
    util.downloadOntology('http://qudt.org/schema/datatype', 'text/turtle', `data/${prefix}/schema/datatype.ttl`, override),
    util.downloadOntology('http://qudt.org/schema/mathematics', 'text/turtle', `data/${prefix}/schema/mathematics.ttl`, override),
    util.downloadOntology('http://qudt.org/vocab/constant', 'text/turtle', `data/${prefix}/vocab/constant.ttl`, override),
    util.downloadOntology('http://qudt.org/vocab/discipline', 'text/turtle', `data/${prefix}/vocab/discipline.ttl`, override),
    util.downloadOntology('http://qudt.org/vocab/prefix', 'text/turtle', `data/${prefix}/vocab/prefix.ttl`, override),
    util.downloadOntology('http://qudt.org/vocab/dimensionvector', 'text/turtle', `data/${prefix}/vocab/dimensionvector.ttl`, override),
    util.downloadOntology('http://qudt.org/vocab/quantitykind', 'text/turtle', `data/${prefix}/vocab/quantitykind.ttl`, override),
    util.downloadOntology('http://qudt.org/vocab/soqk', 'text/turtle', `data/${prefix}/vocab/soqk.ttl`, override),
    util.downloadOntology('http://qudt.org/vocab/sou', 'text/turtle', `data/${prefix}/vocab/sou.ttl`, override),
    util.downloadOntology('http://qudt.org/vocab/unit', 'text/turtle', `data/${prefix}/vocab/unit.ttl`, override)
]).then(util.logDone).catch(util.logError);
