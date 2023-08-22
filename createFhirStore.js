const { projectId, cloudRegion, datasetId, fhirStoreId, healthcare } = require('./config');

const createFhirStore = async () => {
  const parent = `projects/${projectId}/locations/${cloudRegion}/datasets/${datasetId}`;
  const version = 'R4';
  const request = {
    parent,
    fhirStoreId,
    resource: {
      version,
    },
  };

  await healthcare.projects.locations.datasets.fhirStores.create(request);
  console.log(`Created FHIR store: ${fhirStoreId}`);
};

module.exports = createFhirStore;
