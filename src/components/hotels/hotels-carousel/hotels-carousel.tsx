import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e: React.DragEvent<HTMLImageElement>) => e.preventDefault();

const responsive = {
	0: {
		items: 3,
	}
};

const items = [
	<img className="carousel__item" src='./img/carousel-images/carousel-1.jpg' alt="forest" onDragStart={handleDragStart} role="presentation" />,
	<img className="carousel__item" src='./img/carousel-images/carousel-2.jpg' alt="forest" onDragStart={handleDragStart} role="presentation" />,
	<img className="carousel__item" src='./img/carousel-images/carousel-3.jpg' alt="forest" onDragStart={handleDragStart} role="presentation" />,
	<img className="carousel__item" src='./img/carousel-images/carousel-4.jpg' alt="forest" onDragStart={handleDragStart} role="presentation" />
];

const HotelsCarousel = (): JSX.Element => {
	return (
		<div className="checker__photo-slider">
			<AliceCarousel items={items} responsive={responsive} infinite mouseTracking disableDotsControls disableButtonsControls />
		</div>
	);
};

export default HotelsCarousel;
