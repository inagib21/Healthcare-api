const google = require('@googleapis/healthcare');
const auth = new google.auth.GoogleAuth({
  scopes: ['https://www.googleapis.com/auth/cloud-platform'],
});

const cloudRegion = 'us-central1';
const projectId = 'platinum-logic-396616';
const datasetId = 'my-dataset';
const fhirStoreId = 'my-fhir-store';

const healthcare = google.healthcare({
  version: 'v1',
  auth: auth,
});

module.exports = {
  cloudRegion,
  projectId,
  datasetId,
  fhirStoreId,
  healthcare,
};
