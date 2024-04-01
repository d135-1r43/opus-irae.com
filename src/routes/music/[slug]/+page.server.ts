// @ts-ignore
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

// @ts-ignore
export const load: PageLoad = async ({ fetch, params }) => {
	const res: Response = await fetch(
		`https://directus.herhoffer.net/items/release/?band=1&filter[status][_eq]=published&filter[slug][_eq]=` +
			params.slug
	);
	const releases = await res.json();

	if (releases.data.length != 1) {
		error(404, 'Release not found');
	} else {
		return { release: releases.data[0] };
	}
};
