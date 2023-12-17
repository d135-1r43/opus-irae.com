import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  const bandInfoRes: Response = await fetch(`https://directus.herhoffer.net/items/band/1?fields=hero_image,info_text`);
  const band = await bandInfoRes.json();

  const bandGallery: Response = await fetch(`https://directus.herhoffer.net/items/gallery/1?fields=images.*`);
  const gallery = await bandGallery.json();

  return { band: band, images: gallery.data.images };
};

export function _getImageUrl(uuid: string): string {
  return 'https://directus.herhoffer.net/assets/' + uuid;
}
