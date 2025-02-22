/**
 * Get cats pictures
 * @param {number} length
 * @returns {Promise<Array<{ title: string, url:string }>}
 */

import { IImage } from "../Interface/Components";

export const getImages = (length = 10) => {
	return fetch(`https://boringapi.com/api/v1/photos/`)
		.then(response => response.json())
		.then(response => {
			const images: IImage[] = []
			response.photos.forEach((c: IImage) => {
				const title = c?.title
				const url = c?.url
				images.push({ title, url })
			})
			return images.slice(0, length) // remove the extra cats
		})
}
