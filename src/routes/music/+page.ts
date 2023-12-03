import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const res: Response = await fetch(
		`https://directus.herhoffer.net/items/release/?band=1&sort=-release_date`
	);
	const releases = await res.json();
	return { releases: releases };
};

export function _getImageUrl(uuid: string): string {
	return 'https://directus.herhoffer.net/assets/' + uuid;
}
