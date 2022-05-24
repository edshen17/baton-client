interface IRepository {
	get: (props: any) => Promise<any>;
	getById: (props: any) => Promise<any>;
	create: (props: any) => Promise<any>;
	updateById: (props: any) => Promise<any>;
	deleteById: (_id: string) => Promise<any>;
	init: (initParams: {
		makeClient: any;
		resourcePath: string;
	}) => this;
}

export { IRepository };
