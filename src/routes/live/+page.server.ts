// @ts-ignore
import type { PageLoad } from './$types';

// @ts-ignore
export const load: PageLoad = async ({ fetch }) => {
	const eventsRes: Response = await fetch(
		`https://directus.herhoffer.net/items/band/1?fields=events.*`
	);
	const events = await eventsRes.json();

	const today: Date = new Date();
	today.setHours(0, 0, 0, 0);

	const pastEvents = events.data.events.filter((event: { date: string }): boolean => {
		const eventDate: Date = new Date(event.date);
		return eventDate < today;
	});

	pastEvents.sort((a: { date: string }, b: { date: string }): number => {
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});

	const futureEvents = events.data.events.filter((event: { date: string }): boolean => {
		const eventDate: Date = new Date(event.date);
		return eventDate >= today;
	});

	futureEvents.sort((a: { date: string }, b: { date: string }): number => {
		return new Date(a.date).getTime() - new Date(b.date).getTime();
	});

	return { pastEvents: pastEvents, futureEvents: futureEvents };
};
