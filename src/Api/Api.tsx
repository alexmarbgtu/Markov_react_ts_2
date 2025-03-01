/**
 * Get cats pictures
 * @param {number} length
 * @returns {Promise<Array<{ title: string, url:string }>>}
 */

import { IImage } from "../Interface/Components";

// export const getImages = (length = 10) => {
// 	return fetch(`https://boringapi.com/api/v1/photos/`)
// 		.then(response => response.json())
// 		.then(response => {
// 			const images: IImage[] = []
// 			response.photos.forEach((c: IImage) => {
// 				const title = c?.title
// 				const url = c?.url
// 				images.push({ title, url })
// 			})
// 			return images.slice(0, length) // remove the extra cats
// 		})
// }

// export const getImages = (length = 10) => {
// 	return fetch(
// 		`https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=${length}`
// 	)
// 		.then(response => response.json())
// 		.then(response => {
// 			const images: IImage[] = []
// 			response.photos.forEach((c: IImage) => {
// 				const title = c?.title
// 				const url = c?.url
// 				images.push({ title, url })
// 			})
// 			return images.slice(0, length) // remove the extra cats
// 		})
// }

export const getImages = (length = 10) => {
	return fetch(`https://dog.ceo/api/breeds/image/random/${length}`)
		.then(response => response.json())
		.then(response => {
			const images: IImage[] = []
			response.message.forEach((c: string) => {
				const title = 'image random'
				const url = c
				images.push({ title, url })
			})
			return images.slice(0, length) // remove the extra cats
		})
}
