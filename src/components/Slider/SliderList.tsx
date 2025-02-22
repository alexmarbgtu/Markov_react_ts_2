import { useGetSliderContext } from '../../hooks/hooks'
import Slide from './Slide'


const SlidesList = () => {
  const { slideNumber, items } = useGetSliderContext()

	return (
		<div
			className='slide-list'
			style={{ transform: `translateX(-${slideNumber * 100}%)` }}
		>
			{items.map((slide, index) => (
				<Slide key={index} data={slide} />
			))}
		</div>
	)
}
export default SlidesList
