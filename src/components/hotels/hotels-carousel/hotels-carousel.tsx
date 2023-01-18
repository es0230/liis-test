import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

type HotelsCarouselProps = {
	images: string[],
}

const handleDragStart = (e: React.DragEvent<HTMLImageElement>) => e.preventDefault();

const responsive = {
	0: {
		items: 3,
	}
};

const HotelsCarousel = ({ images }: HotelsCarouselProps): JSX.Element => {
	const items = images.map((el, i) => (
		<img className="carousel__item" src={el} key={i} alt="forest" onDragStart={handleDragStart} role="presentation" />
	));

	return (
		<div className="checker__photo-slider">
			<AliceCarousel items={items} responsive={responsive} infinite mouseTracking disableDotsControls disableButtonsControls />
		</div>
	);
};

export default HotelsCarousel;
