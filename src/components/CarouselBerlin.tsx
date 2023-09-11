import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const images = [
    'facadeX.jpg',
    'stuemedbordogsengX.jpg',
    'lillevaerelsemedsengeX.jpg',
    'korridorX.jpg',
    'badevaerelseX.jpg',
    'koekkenX.jpg',
    'plantegning01X.jpg',
    'localmap04X.jpg',
    'headerX.png',
];

export default function CarouselBerlin() {
    return (
        <Carousel
            useKeyboardArrows={true}
            width={'50%'}
        >
            {images.map((fileName, index) => (
                <div key={index} className="slide">
                    {/* Add base from vite.config.js */}
                    <img src={`${import.meta.env.BASE_URL}images/${fileName}`} key={index} />
                </div>
            )
            )}
        </Carousel>
    )
}
