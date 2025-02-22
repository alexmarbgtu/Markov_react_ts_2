import { useGetSliderContext } from '../../hooks/hooks'


const Dot = ({ number }: {number: number}) => {
  const { goToSlide, slideNumber } = useGetSliderContext()
  return (
		<div
			className={`dot ${slideNumber === number ? 'selected' : ''}`}
			onClick={() => goToSlide(number)}
		/>
	)

}
export default Dot
