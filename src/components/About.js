import React, { useEffect } from "react";
import styled from 'styled-components'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import about from '../assets/images/about.jpg';
import about1 from '../assets/images/about1.jpg';
import about2 from '../assets/images/about2.jpg';
import about3 from '../assets/images/about3.jpg';
import about4 from '../assets/images/about4.jpg';
import mission from "../assets/images/mission.jpg";
import value1 from "../assets/images/value1.jpg"
import gautham from "../assets/images/j_gautham.jpg"
import AOS from 'aos';
import irshad from "../assets/images/irshad.jpg"
import 'aos/dist/aos.css';


gsap.registerPlugin(ScrollTrigger);

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
position: relative;

.about-circle{
  width: 5vw;
  height: 5vw;
  position: absolute;
  background-color: #f82b07;
  top: 0;
  right: 0vw;
}
.about-circle2{
  width: 5vw;
  height: 5vw;
  position: absolute;
  background-color:rgb(213, 213, 213);
  top: 5vw;
  right: 2.5vw;
  z-index: -1;
}
.ab-box{
  position: absolute;
  width: 20vw;
  height: 15vw;
  border: 2px dashed black;
  right: 6vw;
  bottom: 10vw;
  opacity: 0.1;
}
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
.ab-left-circle{
  width: 10vw;
  height: 10vw;
  border-radius: 50%;
  background: #04a7fd;
  position: absolute;
  left: 9vw;
  bottom: 2vw;
  z-index: -1;
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
height: 100vh;
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: center;
gap: 2vw;
background-image: url(${mission});
background-size: cover;
position: relative;

.mission-overlay{
  width: 100%;
  height: 100%;
  position: absolute;
  background: linear-gradient(black,black);
  opacity: 0.8;
}
`;

const VisionBox = styled.div`
width: 90%;
border-radius: 1vw;
position: relative;
display: flex;
align-items: center;
justify-content: space-between;
.vision-cont{
  padding: 3vw;
  /* background-color: #ffffff30; */
  width: 35%;
  border-radius: 1vw;
  /* backdrop-filter: blur(30px); */
}
.vision-h{
  font-family: "heebo";
  font-weight: 600;
  font-size: 3vw;
  color: white;
  text-transform: uppercase;
}
.vision-p{
  color: white;
  font-size: 1.1vw;
  font-family: "Source Sans 3";
  font-weight: 300;
  line-height: 1.7;
}
.vision-line{
  width: 50%;
  height: 2px;
  background-color: #f82b07;
  position: relative;
  display: flex;
  align-items: center;

}
.vision-line::before{
  content: "";
  width: 2vw;
  height: 2vw;
  position: absolute;
  border-radius: 50%;
  left: 0;
  background-color: #f82b07;
}
`;
const MissionBox = styled.div`
width: 70%;
height: 20vw;
border-radius: 1vw;
display: flex;
align-items: center;
justify-content: space-between;

.mission-cont{
  padding: 3vw;
  /* background-color: #ffffff30; */
  width: 40%;
  border-radius: 1vw;
  /* backdrop-filter: blur(30px); */
  position: relative;
}
.mission-h{
  font-family: "heebo";
  font-weight: 600;
  font-size: 3vw;
  color: white;
  text-transform: uppercase;
}
.mission-p{
  color: white;
  font-size: 1.1vw;
  font-family: "Source Sans 3";
  font-weight: 300;
  line-height: 1.7;
}
.mission-line{
  width: 40%;
  height: 2px;
  background-color: #f82b07;
  position: relative;
  display: flex;
  align-items: center;

}
.mission-line::before{
  content: "";
  width: 2vw;
  height: 2vw;
  position: absolute;
  border-radius: 50%;
  left: 0;
  background-color: #f82b07;
}
`;

const OurValues = styled.div`
width: 100%;
height: auto;
min-height: 100vh;
display: flex;
align-items: center;
justify-content: center;
padding: 3vw 0vw;
background-color: #eaeaea;
position: relative;
.values-cont{
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.values-h{
  font-size: 3vw;
  text-transform: uppercase;
  font-family: "heebo";
  font-weight: 600;
}


ol li{
  font-family: "Source Sans 3";
  font-size: 1.1vw;
  line-height: 1.7;
  padding: 0.5vw 0;
}
ol li span{
  text-transform: uppercase;
  font-weight: 600;
  color: #f82b07;
}
.values-right{
  width: 35%;
}
.values-img-box{
  width: 50%;
  position: absolute;
  right: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.values-img-box img{
  width: 100%;
transform: rotate(-90deg);
}
.v-img-b1{
  width: 35vw;
  height: 35vw;
  background-color: pink;
  border-radius: 2vw;
  transform: rotate(45deg);
  right: -17.5vw;
  position: absolute;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.v-img-b{
  width: 12vw;
  height: 12vw;
  background-color: pink;
  border-radius: 2vw;
  transform: rotate(45deg);
  position: absolute;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  display: flex;
}
.vb2{
  margin-left: -18vw;
}
.vb3{
  margin-top: -20vw;
}
.vb4{
  margin-top: 20vw;
}
`;

const Team = styled.div`
width: 100%;
height: auto;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: relative;
gap: 1vw;
padding: 2vw 0vw;
overflow: hidden;
padding-bottom: 8vw;
`
const TeamH = styled.h2`
font-size: 3vw;
font-family: "heebo";
font-weight: 300;
position: relative;
padding-bottom: 5vw;

& span{
    color: #f82b07;
    font-weight: 900;
    position: relative;
}
`;
const TeamDots =styled.div`
width: 10vw;
height: auto;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
gap: 1vw;
position: absolute;
left: 0;

.dot{
  width: 0.3vw;
  height: 0.3vw;
  border-radius: 50%;
  background-color: grey;
}
`;
const TeamF = styled.div`
width: 20vw;
height: 20vw;
background-color: #04a7fd;
position: absolute;
top: 5vw;
right: -10vw;
border-radius: 50%;
filter: blur(80px);
opacity: 0.9;
`;

const TeamBox = styled.div`
width: 80%;
height: 80vh;
display: flex;
align-items: center;
justify-content: center;
position: relative;
z-index: 3;
gap: 7vw;

.team-img-box{
  width: 35%;
  height: 100%;
  display: flex;
align-items: center;
justify-content: flex-end;
}
.team-img-frame{
  width: 100%;
  height: 100%;
  background-color: #00000012;
  display: flex;
  justify-content: center;
}
.team-cont-box{
  width: 35%;
}
.person-name{
  font-family: "heebo";
  font-size: 1.5vw;
  font-weight: 800;
}
.job-title{
  font-size: 1.1vw;
  font-family: "heebo";
}
.bio{
  font-size: 1vw;
  font-family: "Source Sans 3";
  width: 100%;
  line-height: 1.7;
}

.team-img-wrap{
  width: 90%;
  height: 65vh;
  margin-top: 1.4vw;
  display: flex;
  position: relative;
  overflow: hidden;
  justify-content: center;
  align-items: flex-start;
  background-color: grey;
}
.team-img-wrap img{
  width: 100%;
  height: auto;
  object-fit: cover;
}
.tcb2{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
}
`;

export default function About() {
  const dots = Array.from({ length: 200 });
  useEffect(() => {
    gsap.utils.toArray(".s-up").forEach((box) => {
      gsap.to(box, {
        y: -50, // Move up by 50px
        scrollTrigger: {
          trigger: box,
          start: "top bottom", // Start when the box enters the viewport
          end: "bottom top", // End when the box leaves the viewport
          scrub: true, // Smooth scrubbing effect
        },
      });
    });
  }, []);
      useEffect(() => {
      AOS.init({
        duration: 500, 
      });
    }, []);
  return (
    <div>
     <AboutTop>
        <div className="About-overlay">

        </div>
       <AboutH data-aos="fade-left">
<span>ABOUT</span> US
       </AboutH>
       <AboutPara data-aos="fade-right">
       Our Values, Missions, and Vision
       </AboutPara>
      </AboutTop>
      <AboutContainer>
        <div className="about-circle">

        </div>
        <div className="about-circle2 s-up">

</div>
<div className="ab-box">

</div>
        <AboutLeft>
         <div className="about-images">
          <div className="about-img-box aib1" data-aos="fade-up">
<img src={about1} alt="" className="about-img" />
          </div>
          <div className="about-img-box aib2" data-aos="fade-up" data-aos-delay="100">
<img src={about2} alt="" className="about-img" />
          </div>
          <div className="about-img-box aib3" data-aos="fade-up" data-aos-delay="0">
<img src={about3} alt="" className="about-img" />
          </div>
          <div className="about-img-box aib4" data-aos="fade-up" data-aos-delay="100">
<img src={about4} alt="" className="about-img" />
          </div>
         </div>
         <div className="ab-left-circle">

         </div>
        </AboutLeft>
        <AboutRight>
          <h2 className="about-h" data-aos="fade-left">WHAT <span>WE DO</span> ?</h2>
          <p className="about-para" data-aos="fade-up">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque saepe voluptatum libero commodi similique repellat cum quasi pariatur inventore maiores eaque iure rem, quisquam nesciunt autem ea mollitia incidunt error.
          </p>
          <p className="about-para" data-aos="fade-right">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque saepe voluptatum libero commodi similique repellat cum quasi pariatur inventore maiores eaque iure rem, quisquam nesciunt autem ea mollitia incidunt error.
          </p>
        </AboutRight>
      </AboutContainer>
      <OurMission>
        <div className="mission-overlay">

        </div>
      <VisionBox className="s-up">
      <div className="vision-cont" data-aos="fade-right">
<h2 className="vision-h">Vision </h2>
<p className="vision-p">
To be a trusted partner of choice for corporate solutions, delivering exceptional experiences that enhance business productivity and employee well-being 
</p>
   </div>
   <div className="vision-line">

   </div>
</VisionBox>
      <MissionBox className="s-up">
      <div className="mission-cont" data-aos="fade-right">
<h2 className="mission-h">Mission</h2>
<p className="mission-p">
To provide innovative, customized, and reliable solutions to meet client expectations, foster long-term relationships, and contribute to the success of our clients and stakeholders
</p>
   </div>
   <div className="mission-line">

   </div>
      </MissionBox>
      </OurMission>
      <OurValues>
     <div className="values-cont">
      <div className="values-h">
      Values
      </div>
      <div className="values-p">
       <ol>
        <li><span>Customer Centricity</span>  - We prioritize client satisfaction, delivering personalized solutions to meet their unique needs</li>
        <li><span>Innovation</span>  – We encourage creativity, embracing new ideas and technologies to stay ahead of the curve</li>
        <li><span>Integrity</span>  – We uphold the highest standards of ethics, transparency, and accountability in all our business dealings</li>
        <li><span>Social Responsibility</span> – We recognize our responsibility to the community, promoting sustainable practices, and supporting local initiatives</li>
        <li><span>Teamwork</span>  – We foster a collaborative and inclusive work environment, promoting open communication, mutual respect, and collective growth.</li>
       </ol>
      </div>
     </div>
     <div className="values-right">

     </div>
     <div className="values-img-box">
      <div className="v-img-b1">
<img src={value1} alt="" className="v-img" />
      </div>
      <div className="v-img-b vb2">
      <img src={about1} alt="" className="v-img" />
</div>
<div className="v-img-b vb3">
<img src={about2} alt="" className="v-img" />
</div>
<div className="v-img-b vb4">
<img src={about3} alt="" className="v-img" />
</div>
     </div>
      </OurValues>
      <Team>
        <TeamDots>
        {dots.map((_, index) => (
        <div key={index} className="dot"></div>
      ))}
        </TeamDots>
        <TeamF>
      
        </TeamF>
    <TeamH data-aos="fade-up">
      MEET OUR <span>TEAM</span> 
    </TeamH>
    <TeamBox>
     <div className="team-img-box" data-aos="fade-right">
    <div className="team-img-frame">
     <div className="team-img-wrap">
<img src={gautham} alt="" />
     </div>
    </div>
     </div>
     <div className="team-cont-box" data-aos="fade-left">
      <div className="person-name">J Goutham Simha</div>
      <div className="job-title">FOUNDER AND CHAIRMAN</div>
      <p className="bio">
      Meet J Goutham Simha, the visionary founder of SLN Corporate Solutions Pvt Ltd with an impressive 20+ years of experience in spearheading expansion and growth across diverse industries, Goutham brings unparalleled expertise and passion to the table.  He is a passionate entrepreneur and his enthusiasm for innovation and entrepreneurship led him to establish SLN Corporate Solutions Pvt Ltd with a mission to provide seamless, integrated complete solutions that empower businesses to thrive.  He carries also an experience not only in India but also overseas that hails from Doha, Qatar. 
      </p>
     </div>
    </TeamBox>
    <TeamBox>
    <div className="team-cont-box tcb2" data-aos="fade-right">
      <div className="person-name">Deepthi S </div>
      <div className="job-title">HEAD OF OPERATIONS</div>
      <p className="bio">
      With over 25 years of extensive experience in Administration and Facilities, possessing a unique expertise that has enabled to excel in managing operations. Having success in handling complex administrative tasks, streamlining operations and driving process improvements.
      </p>
     </div>
    <div className="team-img-box tib2" data-aos="fade-left">
    <div className="team-img-frame">
     <div className="team-img-wrap">
{/* <img src={irshad} alt="" /> */}
     </div>
    </div>
     </div>
 
      </TeamBox>
      <TeamBox>
     <div className="team-img-box" data-aos="fade-right">
    <div className="team-img-frame">
     <div className="team-img-wrap">
     <img src={irshad} alt="" />
     </div>
    </div>
     </div>
     <div className="team-cont-box" data-aos="fade-left">
      <div className="person-name">Mr. Irshad Basha</div>
      <div className="job-title"> ACCOUNTS HEAD </div>
      <p className="bio">
      With a strong background in accounting and finance, Mr. Basha is responsible for overseeing budgeting, financial planning, and compliance with regulatory standards. His attention to detail, analytical skills, and commitment to financial integrity help maintain the company's fiscal health and contribute to its overall growth and success. Mr. Basha's expertise ensures that Bhoomika Foods remains financially sound and well-positioned for continued success.
      </p>
     </div>
    </TeamBox>
      </Team>
    </div>
  )
}
