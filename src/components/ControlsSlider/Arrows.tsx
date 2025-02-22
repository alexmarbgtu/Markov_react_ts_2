import { useGetSliderContext } from '../../hooks/hooks'


const Arrows = () => {
	const { changeSlide } = useGetSliderContext()

	return (
		<div className='arrows'>
			<div className='arrow left' onClick={() => changeSlide(-1)} />
			<div className='arrow right' onClick={() => changeSlide(1)} />
		</div>
	)
}

export default Arrows
