import { createDirectus, rest } from '@directus/sdk';
import type { DirectusClient } from '@directus/sdk';
import type { ApiCollections } from '$lib/data/api-collection';

class DirectusFactory {
	private client: DirectusClient<ApiCollections>;

	constructor() {
		this.client = createDirectus<ApiCollections>('https://directus.herhoffer.net').with(rest());
	}

  getClient(): DirectusClient<ApiCollections> {
    return this.client;
  }
}

export { DirectusFactory };
