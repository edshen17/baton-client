import axios from '../clients/axios';
import { AudioUploadRepository } from './audio-upload-repository';

const makeAudioUploadRepository = new AudioUploadRepository().init({
	makeClient: axios,
	resourcePath: '/audioUploads',
});

export { makeAudioUploadRepository };
