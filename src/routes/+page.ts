import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	const res: Response = await fetch(`https://directus.herhoffer.net/items/band/1`);
	const band = await res.json();
	return { band };
};
