const { projectId, cloudRegion, datasetId, healthcare } = require('./config');

const createDataset = async () => {
  const parent = `projects/${projectId}/locations/${cloudRegion}`;
  const request = { parent, datasetId };

  await healthcare.projects.locations.datasets.create(request);
  console.log(`Created dataset: ${datasetId}`);
};

module.exports = createDataset;
