// @ts-ignore
import type { PageLoad } from './$types';

// @ts-ignore
export const load: PageLoad = async ({ fetch: fetch }) => {
	const bandJsonResponse: Response = await fetch(
		`https://directus.herhoffer.net/items/band/1?fields=*,links.*`
	);
	const bandJson: any = await bandJsonResponse.json();
	const heroImageUuid: string = bandJson.data.hero_image;

	const heroImageFileRsponse: Response = await fetch(
		`https://directus.herhoffer.net/files/` + heroImageUuid
	);
	const fileJson: any = await heroImageFileRsponse.json();

	const socials: Map<any, any> = new Map();
	bandJson.data.links.forEach((link: any) => {
		socials.set(link.media, link);
	});

  console.log(socials);

	return { band: bandJson.data, hero: fileJson.data, socials: socials };
};
