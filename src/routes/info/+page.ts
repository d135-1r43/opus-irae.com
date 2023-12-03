import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  const res: Response = await fetch(
    `https://directus.herhoffer.net/items/band/1?fields=hero_image,info_text`
  );
  const band = await res.json();
  return { band: band };
};

export function _getImageUrl(uuid: string): string {
  return 'https://directus.herhoffer.net/assets/' + uuid;
}
