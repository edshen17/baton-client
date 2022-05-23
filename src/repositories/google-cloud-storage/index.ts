import { firebaseClient } from '../clients/firebase';
import { GoogleCloudStorageRepository } from './google-cloud-storage-repository';

const makeGoogleCloudStorageRepository = new GoogleCloudStorageRepository().init({
    makeClient: firebaseClient,
});

export { makeGoogleCloudStorageRepository };
