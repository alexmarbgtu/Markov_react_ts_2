import { useEffect, useState } from "react"
import { getImages } from "../../Api/Api"
import Layout from "../../components/Layout/Layout"
import { IImage } from "../../Interface/Components"
import { SliderContext } from "../../hooks/hooks"
import Arrows from '../../components/ControlsSlider/Arrows'

import './Slider.scss'
import Dots from "../../components/ControlsSlider/Dots"
import SlidesList from "../../components/Slider/SliderList"
import SettingAutoPlay from "../../components/ControlsSlider/SettingAutoPlay"


const Slider = ({
	width = '100%',
	height = '100%',
	aPlay = true,
	autoPlayTime = 2000,
}) => {
	const [items, setItems] = useState<IImage[]>([])
	const [slide, setSlide] = useState(0)
	const [autoPlay, setAutoPlay] = useState(aPlay)
	const [orientation, setOrientation] = useState(1)
	const [touchPosition, setTouchPosition] = useState(null)

	useEffect(() => {
		const loadData = async () => {
			const images = await getImages()
			setItems(images)
		}
		loadData()
	}, [])

	const changeSlide = (direction = 1) => {
		let slideNumber = 0

		if (slide + direction < 0) {
			slideNumber = items.length - 1
		} else {
			slideNumber = (slide + direction) % items.length
		}

		setSlide(slideNumber)
	}

	const goToSlide = (number: number) => {
		setSlide(number % items.length)
	}

	const handleTouchStart = e => {
		const touchDown = e.touches[0].clientX

		setTouchPosition(touchDown)
	}

  const handleTouchMove = e => {
		if (touchPosition === null) {
			return
		}

		const currentPosition = e.touches[0].clientX
		const direction = touchPosition - currentPosition

		if (direction > 10) {
			changeSlide(1)
		}

		if (direction < -10) {
			changeSlide(-1)
		}

		setTouchPosition(null)
	}

  useEffect(() => {
		if (!autoPlay) return

		const interval = setInterval(() => {
			changeSlide(1 * orientation)
		}, autoPlayTime)

		return () => {
			clearInterval(interval)
		}
	}, [items.length, slide, autoPlay, orientation])

	return (
		<>
			<Layout className='slider'>
				<div
					style={{ width, height }}
					className='slider'
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
				>
					<SliderContext.Provider
						value={{
							goToSlide,
							changeSlide,
							slidesCount: items.length,
							slideNumber: slide,
              autoPlay,
              setAutoPlay,
              orientation, 
              setOrientation,
							items,
						}}
					>
            <SettingAutoPlay />
						<Arrows />
						<SlidesList />
						<Dots />
					</SliderContext.Provider>
				</div>
			</Layout>
		</>
	)
}

export default Slider