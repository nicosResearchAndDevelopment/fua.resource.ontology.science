const
    util     = require('../util.js'),
    prefix   = 'sweet',
    ontology = 'http://sweetontology.net/',
    corAlias = (iri = '', format = '') => `http://cor.esipfed.org/ont/api/v0/ont?format=${format}&iri=${iri}`,
    override = false;

Promise.all([
    util.downloadOntology(corAlias(ontology + 'human', 'ttl'), null, `data/${prefix}/parts/human.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'humanAgriculture', 'ttl'), null, `data/${prefix}/parts/humanAgriculture.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'humanCommerce', 'ttl'), null, `data/${prefix}/parts/humanCommerce.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'humanDecision', 'ttl'), null, `data/${prefix}/parts/humanDecision.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'humanEnvirAssessment', 'ttl'), null, `data/${prefix}/parts/humanEnvirAssessment.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'humanEnvirConservation', 'ttl'), null, `data/${prefix}/parts/humanEnvirConservation.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'humanEnvirControl', 'ttl'), null, `data/${prefix}/parts/humanEnvirControl.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'humanEnvirStandards', 'ttl'), null, `data/${prefix}/parts/humanEnvirStandards.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'humanJurisdiction', 'ttl'), null, `data/${prefix}/parts/humanJurisdiction.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'humanKnowledgeDomain', 'ttl'), null, `data/${prefix}/parts/humanKnowledgeDomain.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'humanResearch', 'ttl'), null, `data/${prefix}/parts/humanResearch.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'humanTechReadiness', 'ttl'), null, `data/${prefix}/parts/humanTechReadiness.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'humanTransportation', 'ttl'), null, `data/${prefix}/parts/humanTransportation.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'matr', 'ttl'), null, `data/${prefix}/parts/matr.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'matrAerosol', 'ttl'), null, `data/${prefix}/parts/matrAerosol.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'matrAnimal', 'ttl'), null, `data/${prefix}/parts/matrAnimal.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'matrBiomass', 'ttl'), null, `data/${prefix}/parts/matrBiomass.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'matrCompound', 'ttl'), null, `data/${prefix}/parts/matrCompound.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'matrElement', 'ttl'), null, `data/${prefix}/parts/matrElement.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'matrElementalMolecule', 'ttl'), null, `data/${prefix}/parts/matrElementalMolecule.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'matrEnergy', 'ttl'), null, `data/${prefix}/parts/matrEnergy.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'matrEquipment', 'ttl'), null, `data/${prefix}/parts/matrEquipment.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'matrFacility', 'ttl'), null, `data/${prefix}/parts/matrFacility.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'matrIndustrial', 'ttl'), null, `data/${prefix}/parts/matrIndustrial.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'matrInstrument', 'ttl'), null, `data/${prefix}/parts/matrInstrument.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'matrIon', 'ttl'), null, `data/${prefix}/parts/matrIon.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'matrIsotope', 'ttl'), null, `data/${prefix}/parts/matrIsotope.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'matrMicrobiota', 'ttl'), null, `data/${prefix}/parts/matrMicrobiota.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'matrMineral', 'ttl'), null, `data/${prefix}/parts/matrMineral.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'matrNaturalResource', 'ttl'), null, `data/${prefix}/parts/matrNaturalResource.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'matrOrganicCompound', 'ttl'), null, `data/${prefix}/parts/matrOrganicCompound.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'matrParticle', 'ttl'), null, `data/${prefix}/parts/matrParticle.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'matrPlant', 'ttl'), null, `data/${prefix}/parts/matrPlant.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'matrRock', 'ttl'), null, `data/${prefix}/parts/matrRock.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'matrRockIgneous', 'ttl'), null, `data/${prefix}/parts/matrRockIgneous.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'matrSediment', 'ttl'), null, `data/${prefix}/parts/matrSediment.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'matrWater', 'ttl'), null, `data/${prefix}/parts/matrWater.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'phen', 'ttl'), null, `data/${prefix}/parts/phen.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'phenAtmo', 'ttl'), null, `data/${prefix}/parts/phenAtmo.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'phenAtmoCloud', 'ttl'), null, `data/${prefix}/parts/phenAtmoCloud.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'phenAtmoFog', 'ttl'), null, `data/${prefix}/parts/phenAtmoFog.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'phenAtmoFront', 'ttl'), null, `data/${prefix}/parts/phenAtmoFront.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'phenAtmoLightning', 'ttl'), null, `data/${prefix}/parts/phenAtmoLightning.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'phenAtmoPrecipitation', 'ttl'), null, `data/${prefix}/parts/phenAtmoPrecipitation.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'phenAtmoPressure', 'ttl'), null, `data/${prefix}/parts/phenAtmoPressure.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'phenAtmoSky', 'ttl'), null, `data/${prefix}/parts/phenAtmoSky.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'phenAtmoTransport', 'ttl'), null, `data/${prefix}/parts/phenAtmoTransport.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'phenAtmoWind', 'ttl'), null, `data/${prefix}/parts/phenAtmoWind.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'phenAtmoWindMesoscale', 'ttl'), null, `data/${prefix}/parts/phenAtmoWindMesoscale.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'phenBiol', 'ttl'), null, `data/${prefix}/parts/phenBiol.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'phenCryo', 'ttl'), null, `data/${prefix}/parts/phenCryo.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'phenCycle', 'ttl'), null, `data/${prefix}/parts/phenCycle.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'phenCycleMaterial', 'ttl'), null, `data/${prefix}/parts/phenCycleMaterial.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'phenEcology', 'ttl'), null, `data/${prefix}/parts/phenEcology.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'phenElecMag', 'ttl'), null, `data/${prefix}/parts/phenElecMag.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'phenEnergy', 'ttl'), null, `data/${prefix}/parts/phenEnergy.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'phenEnvirImpact', 'ttl'), null, `data/${prefix}/parts/phenEnvirImpact.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'phenFluidDynamics', 'ttl'), null, `data/${prefix}/parts/phenFluidDynamics.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'phenFluidInstability', 'ttl'), null, `data/${prefix}/parts/phenFluidInstability.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'phenFluidTransport', 'ttl'), null, `data/${prefix}/parts/phenFluidTransport.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'phenGeol', 'ttl'), null, `data/${prefix}/parts/phenGeol.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'phenGeolFault', 'ttl'), null, `data/${prefix}/parts/phenGeolFault.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'phenGeolGeomorphology', 'ttl'), null, `data/${prefix}/parts/phenGeolGeomorphology.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'phenGeolSeismicity', 'ttl'), null, `data/${prefix}/parts/phenGeolSeismicity.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'phenGeolTectonic', 'ttl'), null, `data/${prefix}/parts/phenGeolTectonic.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'phenGeolVolcano', 'ttl'), null, `data/${prefix}/parts/phenGeolVolcano.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'phenHelio', 'ttl'), null, `data/${prefix}/parts/phenHelio.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'phenHydro', 'ttl'), null, `data/${prefix}/parts/phenHydro.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'phenMixing', 'ttl'), null, `data/${prefix}/parts/phenMixing.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'phenOcean', 'ttl'), null, `data/${prefix}/parts/phenOcean.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'phenOceanCoastal', 'ttl'), null, `data/${prefix}/parts/phenOceanCoastal.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'phenOceanDynamics', 'ttl'), null, `data/${prefix}/parts/phenOceanDynamics.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'phenPlanetClimate', 'ttl'), null, `data/${prefix}/parts/phenPlanetClimate.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'phenReaction', 'ttl'), null, `data/${prefix}/parts/phenReaction.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'phenSolid', 'ttl'), null, `data/${prefix}/parts/phenSolid.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'phenStar', 'ttl'), null, `data/${prefix}/parts/phenStar.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'phenSystem', 'ttl'), null, `data/${prefix}/parts/phenSystem.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'phenSystemComplexity', 'ttl'), null, `data/${prefix}/parts/phenSystemComplexity.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'phenWave', 'ttl'), null, `data/${prefix}/parts/phenWave.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'phenWaveNoise', 'ttl'), null, `data/${prefix}/parts/phenWaveNoise.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'proc', 'ttl'), null, `data/${prefix}/parts/proc.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'procChemical', 'ttl'), null, `data/${prefix}/parts/procChemical.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'procPhysical', 'ttl'), null, `data/${prefix}/parts/procPhysical.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'procStateChange', 'ttl'), null, `data/${prefix}/parts/procStateChange.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'procWave', 'ttl'), null, `data/${prefix}/parts/procWave.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'prop', 'ttl'), null, `data/${prefix}/parts/prop.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'propBinary', 'ttl'), null, `data/${prefix}/parts/propBinary.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'propCapacity', 'ttl'), null, `data/${prefix}/parts/propCapacity.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'propCategorical', 'ttl'), null, `data/${prefix}/parts/propCategorical.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'propCharge', 'ttl'), null, `data/${prefix}/parts/propCharge.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'propChemical', 'ttl'), null, `data/${prefix}/parts/propChemical.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'propConductivity', 'ttl'), null, `data/${prefix}/parts/propConductivity.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'propCount', 'ttl'), null, `data/${prefix}/parts/propCount.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'propDifference', 'ttl'), null, `data/${prefix}/parts/propDifference.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'propDiffusivity', 'ttl'), null, `data/${prefix}/parts/propDiffusivity.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'propDimensionlessRatio', 'ttl'), null, `data/${prefix}/parts/propDimensionlessRatio.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'propEnergy', 'ttl'), null, `data/${prefix}/parts/propEnergy.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'propEnergyFlux', 'ttl'), null, `data/${prefix}/parts/propEnergyFlux.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'propFraction', 'ttl'), null, `data/${prefix}/parts/propFraction.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'propFunction', 'ttl'), null, `data/${prefix}/parts/propFunction.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'propIndex', 'ttl'), null, `data/${prefix}/parts/propIndex.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'propMass', 'ttl'), null, `data/${prefix}/parts/propMass.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'propMassFlux', 'ttl'), null, `data/${prefix}/parts/propMassFlux.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'propOrdinal', 'ttl'), null, `data/${prefix}/parts/propOrdinal.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'propPressure', 'ttl'), null, `data/${prefix}/parts/propPressure.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'propQuantity', 'ttl'), null, `data/${prefix}/parts/propQuantity.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'propRotation', 'ttl'), null, `data/${prefix}/parts/propRotation.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'propSpace', 'ttl'), null, `data/${prefix}/parts/propSpace.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'propSpaceDirection', 'ttl'), null, `data/${prefix}/parts/propSpaceDirection.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'propSpaceDistance', 'ttl'), null, `data/${prefix}/parts/propSpaceDistance.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'propSpaceHeight', 'ttl'), null, `data/${prefix}/parts/propSpaceHeight.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'propSpaceLocation', 'ttl'), null, `data/${prefix}/parts/propSpaceLocation.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'propSpaceMultidimensional', 'ttl'), null, `data/${prefix}/parts/propSpaceMultidimensional.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'propSpaceThickness', 'ttl'), null, `data/${prefix}/parts/propSpaceThickness.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'propSpeed', 'ttl'), null, `data/${prefix}/parts/propSpeed.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'propTemperature', 'ttl'), null, `data/${prefix}/parts/propTemperature.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'propTemperatureGradient', 'ttl'), null, `data/${prefix}/parts/propTemperatureGradient.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'propTime', 'ttl'), null, `data/${prefix}/parts/propTime.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'propTimeFrequency', 'ttl'), null, `data/${prefix}/parts/propTimeFrequency.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'realm', 'ttl'), null, `data/${prefix}/parts/realm.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'realmAstroBody', 'ttl'), null, `data/${prefix}/parts/realmAstroBody.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'realmAstroHelio', 'ttl'), null, `data/${prefix}/parts/realmAstroHelio.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'realmAstroStar', 'ttl'), null, `data/${prefix}/parts/realmAstroStar.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'realmAtmo', 'ttl'), null, `data/${prefix}/parts/realmAtmo.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'realmAtmoBoundaryLayer', 'ttl'), null, `data/${prefix}/parts/realmAtmoBoundaryLayer.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'realmAtmoWeather', 'ttl'), null, `data/${prefix}/parts/realmAtmoWeather.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'realmBiolBiome', 'ttl'), null, `data/${prefix}/parts/realmBiolBiome.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'realmClimateZone', 'ttl'), null, `data/${prefix}/parts/realmClimateZone.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'realmCryo', 'ttl'), null, `data/${prefix}/parts/realmCryo.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'realmEarthReference', 'ttl'), null, `data/${prefix}/parts/realmEarthReference.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'realmGeol', 'ttl'), null, `data/${prefix}/parts/realmGeol.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'realmGeolBasin', 'ttl'), null, `data/${prefix}/parts/realmGeolBasin.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'realmGeolConstituent', 'ttl'), null, `data/${prefix}/parts/realmGeolConstituent.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'realmGeolContinental', 'ttl'), null, `data/${prefix}/parts/realmGeolContinental.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'realmGeolOceanic', 'ttl'), null, `data/${prefix}/parts/realmGeolOceanic.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'realmGeolOrogen', 'ttl'), null, `data/${prefix}/parts/realmGeolOrogen.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'realmHydro', 'ttl'), null, `data/${prefix}/parts/realmHydro.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'realmHydroBody', 'ttl'), null, `data/${prefix}/parts/realmHydroBody.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'realmLandAeolian', 'ttl'), null, `data/${prefix}/parts/realmLandAeolian.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'realmLandCoastal', 'ttl'), null, `data/${prefix}/parts/realmLandCoastal.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'realmLandFluvial', 'ttl'), null, `data/${prefix}/parts/realmLandFluvial.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'realmLandGlacial', 'ttl'), null, `data/${prefix}/parts/realmLandGlacial.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'realmLandOrographic', 'ttl'), null, `data/${prefix}/parts/realmLandOrographic.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'realmLandProtected', 'ttl'), null, `data/${prefix}/parts/realmLandProtected.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'realmLandTectonic', 'ttl'), null, `data/${prefix}/parts/realmLandTectonic.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'realmLandVolcanic', 'ttl'), null, `data/${prefix}/parts/realmLandVolcanic.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'realmLandform', 'ttl'), null, `data/${prefix}/parts/realmLandform.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'realmOcean', 'ttl'), null, `data/${prefix}/parts/realmOcean.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'realmOceanFeature', 'ttl'), null, `data/${prefix}/parts/realmOceanFeature.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'realmOceanFloor', 'ttl'), null, `data/${prefix}/parts/realmOceanFloor.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'realmRegion', 'ttl'), null, `data/${prefix}/parts/realmRegion.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'realmSoil', 'ttl'), null, `data/${prefix}/parts/realmSoil.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'rela', 'ttl'), null, `data/${prefix}/parts/rela.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'relaChemical', 'ttl'), null, `data/${prefix}/parts/relaChemical.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'relaClimate', 'ttl'), null, `data/${prefix}/parts/relaClimate.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'relaHuman', 'ttl'), null, `data/${prefix}/parts/relaHuman.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'relaMath', 'ttl'), null, `data/${prefix}/parts/relaMath.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'relaPhysical', 'ttl'), null, `data/${prefix}/parts/relaPhysical.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'relaProvenance', 'ttl'), null, `data/${prefix}/parts/relaProvenance.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'relaSci', 'ttl'), null, `data/${prefix}/parts/relaSci.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'relaSpace', 'ttl'), null, `data/${prefix}/parts/relaSpace.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'relaTime', 'ttl'), null, `data/${prefix}/parts/relaTime.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'repr', 'ttl'), null, `data/${prefix}/parts/repr.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'reprDataFormat', 'ttl'), null, `data/${prefix}/parts/reprDataFormat.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'reprDataModel', 'ttl'), null, `data/${prefix}/parts/reprDataModel.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'reprDataProduct', 'ttl'), null, `data/${prefix}/parts/reprDataProduct.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'reprDataService', 'ttl'), null, `data/${prefix}/parts/reprDataService.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'reprDataServiceAnalysis', 'ttl'), null, `data/${prefix}/parts/reprDataServiceAnalysis.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'reprDataServiceGeospatial', 'ttl'), null, `data/${prefix}/parts/reprDataServiceGeospatial.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'reprDataServiceReduction', 'ttl'), null, `data/${prefix}/parts/reprDataServiceReduction.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'reprDataServiceValidation', 'ttl'), null, `data/${prefix}/parts/reprDataServiceValidation.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'reprMath', 'ttl'), null, `data/${prefix}/parts/reprMath.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'reprMathFunction', 'ttl'), null, `data/${prefix}/parts/reprMathFunction.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'reprMathFunctionOrthogonal', 'ttl'), null, `data/${prefix}/parts/reprMathFunctionOrthogonal.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'reprMathGraph', 'ttl'), null, `data/${prefix}/parts/reprMathGraph.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'reprMathOperation', 'ttl'), null, `data/${prefix}/parts/reprMathOperation.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'reprMathSolution', 'ttl'), null, `data/${prefix}/parts/reprMathSolution.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'reprMathStatistics', 'ttl'), null, `data/${prefix}/parts/reprMathStatistics.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'reprSciComponent', 'ttl'), null, `data/${prefix}/parts/reprSciComponent.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'reprSciFunction', 'ttl'), null, `data/${prefix}/parts/reprSciFunction.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'reprSciLaw', 'ttl'), null, `data/${prefix}/parts/reprSciLaw.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'reprSciMethodology', 'ttl'), null, `data/${prefix}/parts/reprSciMethodology.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'reprSciModel', 'ttl'), null, `data/${prefix}/parts/reprSciModel.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'reprSciProvenance', 'ttl'), null, `data/${prefix}/parts/reprSciProvenance.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'reprSciUnits', 'ttl'), null, `data/${prefix}/parts/reprSciUnits.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'reprSpace', 'ttl'), null, `data/${prefix}/parts/reprSpace.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'reprSpaceCoordinate', 'ttl'), null, `data/${prefix}/parts/reprSpaceCoordinate.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'reprSpaceDirection', 'ttl'), null, `data/${prefix}/parts/reprSpaceDirection.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'reprSpaceGeometry', 'ttl'), null, `data/${prefix}/parts/reprSpaceGeometry.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'reprSpaceGeometry3D', 'ttl'), null, `data/${prefix}/parts/reprSpaceGeometry3D.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'reprSpaceReferenceSystem', 'ttl'), null, `data/${prefix}/parts/reprSpaceReferenceSystem.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'reprTime', 'ttl'), null, `data/${prefix}/parts/reprTime.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'reprTimeDay', 'ttl'), null, `data/${prefix}/parts/reprTimeDay.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'reprTimeSeason', 'ttl'), null, `data/${prefix}/parts/reprTimeSeason.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'state', 'ttl'), null, `data/${prefix}/parts/state.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'stateBiological', 'ttl'), null, `data/${prefix}/parts/stateBiological.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'stateChemical', 'ttl'), null, `data/${prefix}/parts/stateChemical.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'stateDataProcessing', 'ttl'), null, `data/${prefix}/parts/stateDataProcessing.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'stateEnergyFlux', 'ttl'), null, `data/${prefix}/parts/stateEnergyFlux.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'stateFluid', 'ttl'), null, `data/${prefix}/parts/stateFluid.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'stateOrdinal', 'ttl'), null, `data/${prefix}/parts/stateOrdinal.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'statePhysical', 'ttl'), null, `data/${prefix}/parts/statePhysical.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'stateRealm', 'ttl'), null, `data/${prefix}/parts/stateRealm.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'stateRole', 'ttl'), null, `data/${prefix}/parts/stateRole.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'stateRoleBiological', 'ttl'), null, `data/${prefix}/parts/stateRoleBiological.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'stateRoleChemical', 'ttl'), null, `data/${prefix}/parts/stateRoleChemical.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'stateRoleGeographic', 'ttl'), null, `data/${prefix}/parts/stateRoleGeographic.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'stateRoleImpact', 'ttl'), null, `data/${prefix}/parts/stateRoleImpact.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'stateRoleRepresentative', 'ttl'), null, `data/${prefix}/parts/stateRoleRepresentative.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'stateRoleTrust', 'ttl'), null, `data/${prefix}/parts/stateRoleTrust.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'stateSolid', 'ttl'), null, `data/${prefix}/parts/stateSolid.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'stateSpace', 'ttl'), null, `data/${prefix}/parts/stateSpace.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'stateSpaceConfiguration', 'ttl'), null, `data/${prefix}/parts/stateSpaceConfiguration.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'stateSpaceScale', 'ttl'), null, `data/${prefix}/parts/stateSpaceScale.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'stateSpectralBand', 'ttl'), null, `data/${prefix}/parts/stateSpectralBand.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'stateSpectralLine', 'ttl'), null, `data/${prefix}/parts/stateSpectralLine.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'stateStorm', 'ttl'), null, `data/${prefix}/parts/stateStorm.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'stateSystem', 'ttl'), null, `data/${prefix}/parts/stateSystem.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'stateThermodynamic', 'ttl'), null, `data/${prefix}/parts/stateThermodynamic.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'stateTime', 'ttl'), null, `data/${prefix}/parts/stateTime.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'stateTimeCycle', 'ttl'), null, `data/${prefix}/parts/stateTimeCycle.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'stateTimeFrequency', 'ttl'), null, `data/${prefix}/parts/stateTimeFrequency.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'stateTimeGeologic', 'ttl'), null, `data/${prefix}/parts/stateTimeGeologic.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'stateVisibility', 'ttl'), null, `data/${prefix}/parts/stateVisibility.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'sweetAll', 'ttl'), null, `data/${prefix}/sweetAll.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'sweetAll_includeV23Comments', 'ttl'), null, `data/${prefix}/sweetAll_includeV23Comments.ttl`, override),
    util.downloadOntology(corAlias(ontology + 'sweet_v23Comments', 'ttl'), null, `data/${prefix}/sweet_v23Comments.ttl`, override)
]).then(util.logDone).catch(util.logError);
