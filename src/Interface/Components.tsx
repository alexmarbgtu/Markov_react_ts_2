export interface IImage {
  title: string,
  url: string
}

export interface ISliderContext {
	goToSlide: (number: number) => void
	changeSlide: (direction: number) => void
	slidesCount: number
	slideNumber: number
	autoPlay: boolean
	setAutoPlay: (autoPlay: boolean) => void
	orientation: number
	setOrientation: (orientation: number) => void
	items: IImage[]
}