const SlideImage = ({ src, alt}: { src: string, alt: string}) => {
  return <img src={src} alt={alt} className='slide-image' />
}

export default SlideImage
