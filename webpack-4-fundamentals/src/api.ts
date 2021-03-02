export default class Api<T> {
	get(): Promise<Array<T>> {
		return Promise.resolve([]);
	}
}
