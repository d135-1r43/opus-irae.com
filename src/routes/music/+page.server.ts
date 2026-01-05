// @ts-ignore
import type { PageLoad } from './$types';

// @ts-ignore
export const load: PageLoad = async ({ fetch }) => {
	const res: Response = await fetch(
		`https://directus.herhoffer.net/items/release/?sort=-release_date&filter[status][_eq]=published&filter[band][_eq]=1`
	);
	const releases = await res.json();
	return { releases: releases };
};
