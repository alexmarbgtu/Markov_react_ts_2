import { useGetSliderContext } from '../../hooks/hooks'
import Dot from './Dot'


const Dots = () => {
  const { slidesCount } = useGetSliderContext()
  const renderDots = () => {
		const dots = []
		for (let i = 0; i < slidesCount; i++) {
			dots.push(<Dot key={`dot-${i}`} number={i} />)
		}

		return dots
	}

	return <div className='dots'>{renderDots()}</div>
}

export default Dots
