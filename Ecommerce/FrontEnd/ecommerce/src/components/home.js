import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import FirstSlide from '../Images/wc.jpg';
import SecondSlide from '../Images/mc.avif';
import ThirdSlider from '../Images/accessories.jpg'
import Button from 'react-bootstrap/Button';
export default function Home() {

    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel fade activeIndex={index} onSelect={handleSelect} variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 firstSlider" 
          src={FirstSlide}   height={660}
          alt="First slide" 
        />
        <Carousel.Caption>
          <h1 className="text-white">Women Clothing</h1>
          <Button variant="dark">Buy <span/>now</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SecondSlide} height={660}
          alt="Second slide"
        />
        <Carousel.Caption>
        <h1 >Men Clothing</h1>
        <Button variant="dark">Buy <span/>now</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ThirdSlider}  height={660}
          alt="Third slide"
        />
        <Carousel.Caption>
        <h1 >Accessories</h1>
        <Button variant="dark">Buy <span/>now</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
  }