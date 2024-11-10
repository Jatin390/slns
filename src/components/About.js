import React from "react";
import styled from 'styled-components'
import about from '../assets/images/about.jpg';
import about1 from '../assets/images/about1.jpg';
import about2 from '../assets/images/about2.jpg';
import about3 from '../assets/images/about3.jpg';
import about4 from '../assets/images/about4.jpg';


const AboutTop = styled.div`
width: 100%;
height: 50vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-image: url(${about});
background-size: cover;
background-position: center;
position: relative;

& .About-overlay{
  width: 100%;
  height: 100%;
  position: absolute;
  background: linear-gradient(rgba(255,255,255,0.6),white);
}
`;

const AboutH = styled.div`
font-size: 3vw;
font-family: "heebo";
font-weight: 300;
position: relative;

& span{
    color: #f82b07;
    font-weight: 900;
    position: relative;
}
`;

const AboutPara = styled.div`
font-weight: 500;
font-family: "Source Sans 3";
position: relative;
font-size: 1.1vw;
`;
const AboutContainer = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`;

const AboutLeft = styled.div`
width: 40%;
height: 80vh;
display: flex;
align-items: center;
justify-content: center;

.about-images{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 90%;
  height: auto;
  gap: 1.5vw;
}

.about-img-box{
  width: 15vw;
  height: 15vw;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
position: relative;
}
.aib1{
  border-radius: 2vw 0 0 0;
}
.aib2{
  border-radius: 0 2vw 0 0;
}
.aib3{
  border-radius: 0 0 2vw 0;
}
.aib4{
  border-radius: 0 0 0 2vw;
}
.about-img{
  width: 100%;
}
`;
const AboutRight = styled.div`
width: 40%;
height: 80vh;
display: flex;
flex-direction: column;
justify-content: center;

.about-h{
  font-size: 3vw;
  font-family: "heebo";
  font-weight: 300;
}
.about-h span{
  font-weight: 900;
  color: #f82b07;
}
`;

const OurMission = styled.div`
width: 100%;
height: auto;
min-height: 50vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 3vw 0vw;
background-color: #eaeaea;
.mission-h{
  font-size: 3vw;
  font-weight: 300;
  font-family: "heebo";
}
.mission-h span{
  font-weight: 900;
  color: #f82b07;
}

.mission-para{
  width: 60%;
  font-family: "Source Sans 3";
  text-align: center;
}
`;
export default function About() {
  return (
    <div>
     <AboutTop>
        <div className="About-overlay">

        </div>
       <AboutH>
<span>ABOUT</span> US
       </AboutH>
       <AboutPara>
       Our Story, Values, and Vision
       </AboutPara>
      </AboutTop>
      <AboutContainer>
        <AboutLeft>
         <div className="about-images">
          <div className="about-img-box aib1">
<img src={about1} alt="" className="about-img" />
          </div>
          <div className="about-img-box aib2">
<img src={about2} alt="" className="about-img" />
          </div>
          <div className="about-img-box aib3">
<img src={about3} alt="" className="about-img" />
          </div>
          <div className="about-img-box aib4">
<img src={about4} alt="" className="about-img" />
          </div>
         </div>
        </AboutLeft>
        <AboutRight>
          <h2 className="about-h">WHAT <span>WE DO</span> ?</h2>
          <p className="about-para">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque saepe voluptatum libero commodi similique repellat cum quasi pariatur inventore maiores eaque iure rem, quisquam nesciunt autem ea mollitia incidunt error.
          </p>
          <p className="about-para">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque saepe voluptatum libero commodi similique repellat cum quasi pariatur inventore maiores eaque iure rem, quisquam nesciunt autem ea mollitia incidunt error.
          </p>
        </AboutRight>
      </AboutContainer>
      <OurMission>
      <h2 className="mission-h">OUR <span>MISSION</span></h2>
      <p className="mission-para">
      "Our mission is based upon the principals of valuing our clients a
their customers, any expectation of excellence, and the deliveran
of a product that exceeds the needs and vision of our customers
with sparking clean facilities with 100% customer satisfaction & c
time delivery."
      </p>
      </OurMission>
    </div>
  )
}
