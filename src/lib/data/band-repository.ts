import type { DirectusClient } from '@directus/sdk';
import { readItem } from '@directus/sdk';
import type { ApiCollections } from '$lib/data/api-collection';

import { DirectusFactory } from './directus-factory';

class BandRepository {
	private directus: DirectusClient<ApiCollections>;

	constructor() {
		this.directus = new DirectusFactory().getClient();
	}

	getBands(): string {
		const article_id = 5;
		const result = this.directus.request(readItem('bands', article_id));

		return result;
	}
}

export { BandRepository };
