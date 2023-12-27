// @ts-ignore
import type { PageLoad } from './$types';

// @ts-ignore
export const load: PageLoad = async ({ fetch }) => {

  const bandJsonResponse: Response = await fetch(`https://directus.herhoffer.net/items/band/1`);
	const bandJson: string = await bandJsonResponse.json();
	// @ts-ignore
	const heroImageUuid: string = bandJson.data.hero_image;

  const heroImageFileRsponse: Response = await fetch(
		`https://directus.herhoffer.net/files/` + heroImageUuid
	);
  const fileJson: string = await heroImageFileRsponse.json();
	// @ts-ignore
  return { band: bandJson.data, hero: fileJson.data };
};
