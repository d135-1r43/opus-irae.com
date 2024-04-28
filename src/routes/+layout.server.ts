// @ts-expect-error Provided by Svelte
import type { PageLoad } from './$types';

// @ts-ignore
export const load: PageLoad = async ({ fetch: fetch }) => {

	const jsonResponse: Response = await fetch(
		`https://directus.herhoffer.net/items/band/1`
	);

	const bandJson: unknown = await jsonResponse.json();

	// @ts-expect-error Provided by Svelte
	return { band: bandJson.data };
};