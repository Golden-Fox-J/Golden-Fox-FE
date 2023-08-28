import { useKeenSlider } from "keen-slider/react";
import image1 from '../../public/images/q1.jpg';
import image2 from '../../public/images/q2.jpg';
import image3 from '../../public/images/q3.png';

function HeroSection() {
  const [sliderRef] = useKeenSlider({
    loop: true,
  });

  return (
    <section className="hero">
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide">
        <img src={image1.src} alt="Slide 1" />
      </div>
      <div className="keen-slider__slide">
        <img src={image2.src} alt="Slide 2" />
      </div>
      <div className="keen-slider__slide">
        <img src={image3.src} alt="Slide 3" />
      </div>
    </div>
      <div className="hero-content">
        <h1>Welcome to Golden Fox Store</h1>
        <p>Discover the latest products and deals.</p>
        <button>Shop Now</button>
      </div>
    </section>
  );
}

export default HeroSection;