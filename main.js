const createDataset = require('./createDataset');
const createFhirStore = require('./createFhirStore');
const createFhirResource = require('./createFhirResource');

(async () => {
  try {
    await createDataset();
    await createFhirStore();
    await createFhirResource();
  } catch (error) {
    console.error('Error:', error);
  }
})();
