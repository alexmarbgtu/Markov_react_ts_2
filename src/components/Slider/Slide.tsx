import SlideTitle from './SlideTitle'
import SlideImage from './SlideImage'
import { IImage } from '../../Interface/Components'


const Slide = ({ data: { url, title } }: { data: IImage }) => {
	return (
		<div className='slide'>
			<SlideImage src={url} alt={title} />
			<SlideTitle title={title} />
		</div>
	)
}
export default Slide
