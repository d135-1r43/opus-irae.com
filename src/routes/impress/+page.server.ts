// @ts-ignore
import type { PageLoad } from './$types';

// @ts-ignore
export const load: PageLoad = async ({ fetch }) => {
	const textsResponse: Response = await fetch(
		`https://directus.herhoffer.net/items/band/1?fields=impress,datenschutz`
	);
	const texts = await textsResponse.json();
	return { texts: texts };
};
