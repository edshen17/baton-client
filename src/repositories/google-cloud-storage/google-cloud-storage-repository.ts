import { StringKeyObject } from '@server/types/custom';
import { IRepository } from '../abstractions/i-repository';

type GoogleCloudStorageRepositoryCreateParams = {
	file: File | Blob;
	metaData: { contentType: string };
	cloudFilePath: string;
};

class GoogleCloudStorageRepository implements IRepository {
	private _client!: any;

	public get = async (query: StringKeyObject): Promise<StringKeyObject> => {
		throw new Error('Not implemented');
	};

	public getById = async (props: {
		_id: string;
	}): Promise<StringKeyObject> => {
		return this._throwNotImplementedError();
	};

	private _throwNotImplementedError = (): Error => {
		throw new Error('Not implemented');
	};

	public create = async (
		props: GoogleCloudStorageRepositoryCreateParams
	): Promise<StringKeyObject> => {
		const { file, metaData, cloudFilePath } = props;
		const { firebaseStorage, uploadBytes, ref, getDownloadURL } = this._client;
		const storageRef = ref(firebaseStorage, cloudFilePath);
		await uploadBytes(storageRef, file, metaData);
		const downloadUrl = await getDownloadURL(storageRef);
		return { downloadUrl };
	};

	public updateById = async (props: {
		_id: string;
		updateParams: StringKeyObject;
	}): Promise<StringKeyObject> => {
		return this._throwNotImplementedError();
	};

	public deleteById = async (_id: string): Promise<StringKeyObject> => {
		return this._throwNotImplementedError();
	};

	public init = (initParams: { makeClient: any }) => {
		const { makeClient } = initParams;
		this._client = makeClient;
		return this;
	};
}

export { GoogleCloudStorageRepository, GoogleCloudStorageRepositoryCreateParams };
