import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const res: Response = await fetch(
		`https://directus.herhoffer.net/items/release/?band=1&sort=-release_date&filter[status][_eq]=published`
	);
	const releases = await res.json();
	return { releases: releases };
};
