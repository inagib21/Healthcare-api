const { projectId, cloudRegion, datasetId, fhirStoreId, healthcare } = require('./config');

const createFhirResource = async () => {
  const resourceType = 'Patient';
  const parent = `projects/${projectId}/locations/${cloudRegion}/datasets/${datasetId}/fhirStores/${fhirStoreId}`;
  
  const body = {
    name: [{use: 'official', family: 'Smith', given: ['Darcy']}],
    gender: 'female',
    birthDate: '1970-01-01',
    resourceType,
  };
  
  const request = { parent, type: resourceType, requestBody: body };
  const resource = await healthcare.projects.locations.datasets.fhirStores.fhir.create(request);
  console.log(`Created FHIR resource with ID ${resource.data.id}`);
  console.log(resource.data);
};

module.exports = createFhirResource;
