import React from "react";
import images from '../../assets/kamo.png';
import image from '../../assets/paarl.png';
import { Container } from './styles';
import Menu from '../../components/Slider/sidebar';

const SubHeading = () => (
    <div style={{ marginBottom: '1rem' }}>
      <p className="p__cormorant"></p>
      
    </div>
  );
const Team: React.FC = () => {
  return (
    <Container>
      <Menu/>
      <div className="app__header app__wrapper section__padding gradient__bg" id="home">
        <div className="app__wrapper_img">
          <img src={images} alt="header_img" />
        </div>
        <div className="app__wrapper_info ">
          <SubHeading/>
          <h1 className="app__header-h1">Our Story</h1>
          <p className="p__opensans" style={{ margin: "2rem 0" }}>
                Kamo Seanego mission is to show people how to appreciate themselves and their beauty. You are already,
                <i> beautifully and wonderfully made, and our glam experiences will accentuate your inner beauty.</i>
                <i>Our glam experiences can be purchased as gifts to give that glamorous person in your life .</i><br/>
          </p>
        </div>
      </div>
      <div className="app__header app__wrapper section__padding gradient__bg" id="home">
        <div className="app__wrapper_info ">
          <SubHeading/>
          <h1 className="app__header-h1">Our Story</h1>
          <p className="p__opensans" style={{ margin: "2rem 0" }}>
          We are more than just a beauty salon, Jet Glam is a one-stop shop for your photo shoot needs. No more ,
                <i> struggling to fit in beauty appointments on the day of your shoot. The studio has hair and makeup artist on .</i>
                <i>hand and we even have bundled packages to make it easier on your pockets and you..</i><br/>
          </p>
        </div>
        <div className="app__wrapper_img">
          <img src={image} alt="header_img" />
        </div>
      </div>

    </Container>
  );
};

export default Team