import { StringKeyObject } from '@server/types/custom';
import { IRepository } from './i-repository';

abstract class AbstractRepository implements IRepository {
	protected _client!: any;
	protected _resourcePath!: string | undefined;

	public get = async (props: {
		path: string;
	}): Promise<StringKeyObject> => {
		const { path } = props;
		return await this._client.get(`${this._resourcePath}/${path}`);
	};

	public getById = async (props: {
		_id: string;
	}): Promise<StringKeyObject> => {
		const { _id, } = props;
		const apiUrl = `${this._resourcePath}/${_id}`;
		return await this._client.get(apiUrl);
	};

	public create = async (props: {
		payload: StringKeyObject;
		config?: StringKeyObject;
	}): Promise<StringKeyObject> => {
		const { payload, config } = props;
		return await this._client.post(this._resourcePath, payload, config);
	};

	public updateById = async (props: {
		_id: string;
		updateParams: StringKeyObject;
	}): Promise<StringKeyObject> => {
		return this._throwNotImplementedError();
	};

	private _throwNotImplementedError = (): Error => {
		throw new Error('Not implemented');
	};

	public deleteById = async (_id: string): Promise<StringKeyObject> => {
		return this._throwNotImplementedError();
	};

	public init = (initParams: {
		makeClient: any;
		resourcePath: string;
	}): this => {
		const { makeClient, resourcePath } = initParams;
		this._client = makeClient;
		this._resourcePath = resourcePath;
		return this;
	};
}

export { AbstractRepository };
