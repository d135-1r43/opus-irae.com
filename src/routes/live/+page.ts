import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const eventsRes: Response = await fetch(
		`https://directus.herhoffer.net/items/band/1?fields=events.*`
	);
	const events = await eventsRes.json();



	return { events: events.data.events };
};
