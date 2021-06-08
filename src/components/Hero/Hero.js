  import React from 'react';
  import {Carousel,Button} from 'react-bootstrap';
  import imageSlide from "../../assets/img/slider-1.png"

  const Hero=()=>{
   return(
   <section className="Hero">
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={imageSlide}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Sed ut perspiciatis </h3>
      <h3>unde omnis iste natus</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error</p>
      <p>sit voluptatem accusantium doloremque.</p>
      <Button variant='primary'>Read More</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={imageSlide}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Sed ut perspiciatis </h3>
      <h3>unde omnis iste natus</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error</p>
      <p>sit voluptatem accusantium doloremque.</p>
      <Button variant='primary'>Read More</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={imageSlide}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Sed ut perspiciatis </h3>
      <h3>unde omnis iste natus</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error</p>
      <p>sit voluptatem accusantium doloremque.</p>
      <Button variant='primary'>Read More</Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
   </section>
   );
  }
export default Hero;