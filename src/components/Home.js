import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components'
import coverbg from '../assets/images/cover-bg.jpg'
import cat from '../assets/images/cat.jpg'
import event from '../assets/images/event.jpg'
import travel from '../assets/images/travel.jpg'
import over from '../assets/images/over-img.jpg'
import over2 from '../assets/images/over-img2.jpg'


gsap.registerPlugin(ScrollTrigger);


const CoverContainer = styled.div`
width: 100%;
height: 100vh;
background-image: url(${coverbg});
background-size: cover;
position: relative;
display: flex;
align-items: center;
justify-content: center;

& .cover-patch{
    width: 100%;
    height: 10vh;
    background: linear-gradient(transparent,white);
    position: absolute;
    bottom:0;
}
`;

const CoverContent = styled.div`
width: 80%;
height: 90vh;
display: flex;
align-items: center;
`;
const CoverLeft = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 2;
`
const TagLine = styled.h1`
font-family: "heebo";
text-transform: uppercase;
font-weight: 400;
font-size: 1.8vw;
margin-top: 20vh;

& span{
    font-weight: 900;
    font-size: 5vw;
    line-height: 5vw;
}
& .tagred{
    color: #f82b07;
}
`;

const CoverPara = styled.div`
font-family: "source sans 3";
margin-top: 1vw;
font-size: 1.1vw;
`;

const CoverButton = styled.div`
font-family: "heebo";
background-color: #04a7fd;
width: fit-content;
padding: 0.5vw 1vw;
font-weight: 500;
margin-top: 1vw;
color:white;
`;
const Social = styled.div`
display: flex;
align-items: center;
margin-top: 2vw;
border: 1px solid gray;
width: fit-content;
padding: 0.5vw 1vw;
border-radius: 2vw;
gap: 1vw;

& .social-h{
font-family: "heebo";
font-size: 1vw;
font-weight: 300;
}

& .social-boxes{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1vw;
}
`;
const CoverNumbers = styled.div`
width: auto;
height: auto;
position: absolute;
bottom: -10vw;
display: flex;
gap: 1vw;


& .num-box{
    width: 15vw;
    height: 8vw;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background:linear-gradient(to right,#c6c6c6,transparent) ; */
    margin: 1vw 0vw;
    border-radius: 1vw;
    gap: 1vw;
    position: relative;
  background-color: #f5f5f5;
}
/* & .num-box::after{
content: "";
width: 96.5%;
height: 95%;
position: absolute;
border-radius: 0.8vw;
} */
& .num{
    font-size: 2.5vw;
    font-weight: 900;
    font-family: "heebo";
    position: relative;
    z-index: 2;
}

& .num-des{
    position: relative;
    z-index: 2;
    font-size: 1.1vw;
    text-transform: uppercase;
    font-family: "heebo";
    font-weight: 300;
}

/* & .nb2{
  
    margin-left: 3vw;
} */

/* & .nb2::after{
background:linear-gradient(to left,#e8e8e8,white) ;
} */
`;

const CoverRight = styled.div`
width: 50%;
height: 100%;
position: relative;
display: flex;
align-items: center;
justify-content: center;

& .cover-box{
    width: 18vw;
    height: 26vw;
    background-color: rgba(200, 200, 200, 0.7);
    position: absolute;
    /* transform: rotate(-10deg); */
    /* top: 4vw;
    left: 3vw; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 3;
    transition: all 0.3s ease;
}

& .cover-img-box{
    width: 90%;
    height: 20vw;
    background-image:url(${cat}) ;
    background-size: cover;
}
& .cover-img-des{
    height: 4vw;
    width: 100%;
}

& .cb2{
    /* top: 18vw; */
    /* transform: rotate(30deg); */
    /* left: auto;
    right: 2vw; */
    z-index: 2;
   
}

& .cb2 .cover-img-box{
    background-image:url(${event}) ;
}

& .cb3{
    /* top: 35vw; */
    z-index: 1;
    /* transform: rotate(-30deg); */
    /* left: 4vw; */
}
& .cb3 .cover-img-box{
    background-image:url(${travel}) ;
}
`;

const TextContainer = styled.div`
  width: auto;
  overflow: hidden;
  padding: 1.5vw 0;
  background-color: #04a7fd;
  backdrop-filter: blur(4px);
  position: absolute;
  bottom: -18vw;
  transform: rotate(-5deg);
`;

const ScrollingLine = styled.div`
  font-size: 2vw;
  font-family: "heebo";
  text-transform: uppercase;
  white-space: nowrap;
  color: #333;
  position: relative;

  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 1vw;
  text-align: left;


  & .tdot{
    width: 1vw;
    height: 1vw;
    border-radius: 50%;
    background-color: black;
  }

  & i{
    color: red;
  }
`;

const AboutContainer = styled.div`
width: 100%;
height: 100vh;
margin-top: 15vw;
display: flex;
align-items: center;
justify-content: center;
position: relative;
`
const AboutLeft = styled.div`
width: 35%;
height: 100%;
display: flex;
position: relative;

& .about-img-patch {
    width: 14vw;
    height: 14vw;
    position: absolute;
    border: 2px dashed black;
    top: 6.5vw;
    right: 5vw;
   opacity: 0.1;
}
`;

const AboutImgBox = styled.div`
width: 23vw;
height: 28vw;
margin-top: 10vw;
display: flex;
align-items: center;
justify-content: center;
position: relative;
overflow: hidden;


& img{
  width: 100%;
}


`;

const AboutImgBoxTwo = styled.div`
width: 17vw;
height: 17vw;
position: absolute;
right: 3vw;
bottom: 3vw;
border: 0.4vw solid white;
background-color: red;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;


& img{
  width: 100%;
}
`;

const AboutRight = styled.div`
width: 45%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

& p{
  font-family: "Source Sans 3";
  font-size: 1.1vw;
  line-height: 1.7;
  width: 90%;
}
`;

const AboutH = styled.h2`
font-family: "heebo";
font-size: 3vw;
font-weight: 300;
margin-top: 6.5vw;
line-height: 3.5vw;

& span{
  color: #f82b07;
  font-weight: 900;
  font-size: 5vw;
}
`
const AboutDots = styled.div`
width: 30vw;
height: auto;
position: absolute;
right: 0;
top: 5vw;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
gap: 1vw;

& .adot{
  width: 0.2vw;
  height: 0.2vw;
  background: gray;
  border-radius: 50%;
}
`;

const dotsArray = Array.from({ length: 250 });

const WhyBox = styled.div`
width: 100%;
height: 50vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 3vw 0vw;
background-color: #eaeaea;

& .Why-h{
  font-family: "heebo";
  font-size: 3vw;
  color:  #f82b07;
  font-weight: 900;

}

& .Why-h span{
  color: black;
  font-weight: 300;
}

& .Why-para{
  width: 60%;
  font-family: "Source Sans 3";
  text-align: center;
  font-size: 1.1vw;
  position: relative;
  margin-top: 1vw;
}

& .Why-para::before {
  content: "“"; 
  font-size: 10vw;
  color: #999;
  font-weight: 700;
left: -4vw;
top: -4vw;
position: absolute;
}

& .Why-para::after {
  content: "”"; /* Closing quote */
  font-size: 10vw;
  color: #999;
  font-weight: 700;
  position: absolute;
  right: -0.5vw;
  bottom: -9vw;
}

& .cursor {
  width: 5vw;
  height: 5vw;
  background-color:#04a7fd;
  border-radius: 50%;
  filter: blur(30px);
  position: absolute;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease;
  z-index: 1000;
}
`;

// CustomCursor Component
const CustomCursor = ({ sectionRef }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.pageX, y: e.pageY });
    };

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      section.addEventListener('mouseenter', handleMouseEnter);
      section.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
        section.removeEventListener('mouseenter', handleMouseEnter);
        section.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [sectionRef]);

  return (
    visible && (
      <div
        className="cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    )
  );
};


const Services = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 3vw 0vw;
padding-bottom: 8vw;
`;

const ServiceH = styled.h2`
  font-family: "heebo";
  font-size: 3vw;
  font-weight: 900;
  text-transform: uppercase;

  & span{
    color:  #f82b07;
  }
`;

const ServicesCont = styled.div`
width: 80%;
height:auto;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
gap: 1vw;
margin-top: 2vw;
`;

const ServicesBox = styled.div`
width: 19vw;
height: 9vw;
background: white;
border-radius: 1vw;
display: flex;
background: linear-gradient(-45deg, #e8e8e8, #04a7fd0f);
align-items: center;

.service-cont{
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Source Sans 3";
  font-size: 1vw;
  padding: 0vw 1vw;
}

.service-icon{
width: 25%;
height: 100%;
position: relative;
display: flex;
align-items: center;
justify-content: center;
}
.s-iconbg{
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
}
.s-iconbg i{
font-size: 5vw;
  color: #0000000a;
  transition: all 0.3s ease;
}

&:hover .s-iconbg i{
  color: #f82b07;
}

.s-icon{
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
position: relative;
}
.s-icon svg{
  width: 50%;
}
`;



export default function Home() {
  const sectionRef = useRef(null);
    const textRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const boxRef = useRef(null)
    const boxTwoRef = useRef(null)

     useEffect(() => {
    AOS.init({
      duration: 500, 
    });
  }, []);
  
    useEffect(() => {
      const handleScroll = () => {
        // Get scroll position as a percentage
        const scrollPosition = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = (scrollPosition / documentHeight) * 100;
  
        setScrollProgress(scrollPercentage);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    useEffect(() => {
      if (textRef.current) {
        gsap.to(textRef.current, {
          xPercent: -scrollProgress*0.08, // Adjust the movement based on scroll progress
          ease: 'none',
        });
      }
    }, [scrollProgress]); 
    
    useEffect(() => {
      // Initial animation on load: centers the boxes, then animates to final positions
      gsap.fromTo(
        ".cb1",
        { x: 0, y: 0, rotation: 0 },
        { x: '-8vw', y: '-3vw', rotation: -10, duration: 1.5, delay: 0.2, ease: "none" }
      );
      gsap.fromTo(
        ".cb2",
        { x: 0, y: 0, rotation: 0 },
        { x: '8.5vw', y: '10.5vw', rotation: 30, duration: 1.5, delay: 0.4, ease: "none" }
      );
      gsap.fromTo(
        ".cb3",
        { x: 0, y: 0, rotation: 0 },
        { x: "-7vw", y: "28vw", rotation: -30, duration: 1.5, delay: 0.6, ease: "none" }
      );
    }, []);
    
    useEffect(() => {
      const elements = [
        { element: '.cb1', initialRotation: -10, tiltAngle: 10 },
        { element: '.cb2', initialRotation: 30, tiltAngle: -10 },
        { element: '.cb3', initialRotation: -30, tiltAngle: 10 },
      ];
    
      elements.forEach(({ element, initialRotation, tiltAngle }) => {
        gsap.to(element, {
          scrollTrigger: {
            trigger: element,
            start: "top center",
            end: "bottom top",
            scrub: true,
            onUpdate: (self) => {
              // Calculate rotation based on initial rotation and scroll progress
              const newRotation = initialRotation + tiltAngle * self.progress;
              gsap.set(element, { rotate: newRotation });
            },
          },
        });
      });
    }, []);
    
    useEffect(()=>{
      gsap.to(boxRef.current, {
        x: "2vw", // Move 80% of the viewport width to the right
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 70%",
          end: "top 30%",
          scrub: true,
          markers: false, // Remove this after testing
        },
      });
  
      // ScrollTrigger for the second image box (moving down to top)
      gsap.to(boxTwoRef.current, {
        y: "-6vh", // Move 50% of the viewport height upwards
        scrollTrigger: {
          trigger: boxTwoRef.current,
          start: "top 90%",
          end: "top 30%",
          scrub: true,
          markers: false, // Remove this after testing
        },
      });
    },[])

  return (
    <div>
     <CoverContainer>
        <CoverContent>
            <CoverLeft>
            <TagLine data-aos="fade-right">
            Empowering Businesses  <br />
        <span> <span className='tagred'> Enhancing </span>   <br />
        Success</span> 
</TagLine>
<CoverPara data-aos="fade-left">
SLN Corporate Solutions is a company focusing for all Corporate needs, providing comprehensive solutions to businesses across various industries. Our expertise spans multiple domains and valuing our Customer delight, Innovation, teamwork and integrity upholding the highest standards of ethics, transparency and accountability in all our business dealings. 
</CoverPara>
<CoverButton>
    EXPLORE MORE
</CoverButton>
<Social>
    <div className="social-h">
        Follow
    </div>
    <div className="social-boxes">
    <i class="fa-brands fa-linkedin-in"></i>
    <i class="fa-brands fa-instagram"></i>
    <i class="fa-brands fa-x-twitter"></i>
    </div>
</Social>
<CoverNumbers>
<div className="num-box">
<div className="num">100<sup>+</sup></div>
<div className="num-des">Partners</div>
</div>
<div className="num-box nb2">
<div className="num">30<sup>+</sup></div>
<div className="num-des">Services</div>
</div>
</CoverNumbers>
            </CoverLeft>
            <CoverRight>
<div className="cover-box cb1">
<div className="cover-img-box">

</div>
<div className="cover-img-des">
    
</div>
</div>
<div className="cover-box cb2">
<div className="cover-img-box">

</div>
<div className="cover-img-des">
    
</div>
</div>
<div className="cover-box cb3">
<div className="cover-img-box">

</div>
<div className="cover-img-des">
    
</div>
</div>
            </CoverRight>
        </CoverContent>
      <div className="cover-patch">

      </div>
      <TextContainer>
      <ScrollingLine ref={textRef}>CATERING <div className='tdot'></div> TRANSPORT <div className='tdot'></div>CORPORATE<div className='tdot'></div> TRAVEL<div className='tdot'></div> GIFTS<div className='tdot'></div> EVENT SERVICES <i class="fa-solid fa-star"></i>CATERING <div className='tdot'></div> TRANSPORT <div className='tdot'></div>CORPORATE<div className='tdot'></div> TRAVEL<div className='tdot'></div> GIFTS<div className='tdot'></div> EVENT SERVICES <i class="fa-solid fa-star"></i>CATERING <div className='tdot'></div> TRANSPORT <div className='tdot'></div>CORPORATE<div className='tdot'></div> TRAVEL<div className='tdot'></div> GIFTS<div className='tdot'></div> EVENT SERVICES <i class="fa-solid fa-star"></i>CATERING <div className='tdot'></div> TRANSPORT <div className='tdot'></div>CORPORATE<div className='tdot'></div> TRAVEL<div className='tdot'></div> GIFTS<div className='tdot'></div> EVENT SERVICES <i class="fa-solid fa-star"></i>CATERING <div className='tdot'></div> TRANSPORT <div className='tdot'></div>CORPORATE<div className='tdot'></div> TRAVEL<div className='tdot'></div> GIFTS<div className='tdot'></div> EVENT SERVICES <i class="fa-solid fa-star"></i>CATERING <div className='tdot'></div> TRANSPORT <div className='tdot'></div>CORPORATE<div className='tdot'></div> TRAVEL<div className='tdot'></div> GIFTS<div className='tdot'></div> EVENT SERVICES <i class="fa-solid fa-star"></i>CATERING <div className='tdot'></div> TRANSPORT <div className='tdot'></div>CORPORATE<div className='tdot'></div> TRAVEL<div className='tdot'></div> GIFTS<div className='tdot'></div> EVENT SERVICES <i class="fa-solid fa-star"></i> </ScrollingLine>
    </TextContainer>
     </CoverContainer>
     <AboutContainer data-aos="fade-up">
      <AboutDots>
      {dotsArray.map((_, index) => (
        <div key={index} className="adot"></div>
      ))}
      </AboutDots>
      <AboutLeft>
      <div className="about-img-patch">

</div>
        <AboutImgBox ref={boxRef}>
        
<img src={over} alt="" />
        </AboutImgBox>
        <AboutImgBoxTwo ref={boxTwoRef}>
        <img src={over2} alt="" />
        </AboutImgBoxTwo>
      </AboutLeft>
      <AboutRight>
       <AboutH data-aos="fade-up"><span>ABOUT </span> <br />
       OUR COMPANY</AboutH>
       <p data-aos="fade-left">SLN Corporate Solutions Pvt Ltd came into existence in the year 2016 with a foresight of providing proficient complete solutions to businesses as per their requirements which ascertain our integrity in the industry. 
        <br />
        <br />
Our Whyments in services and customer gratification are the secret to our accomplishment and trust we have generated in the industry. Our team takes it as a mission to deliver the best output by a great workforce. We are comprehensive acquiescence sensitive organization
</p>
      </AboutRight>
     </AboutContainer>
     <WhyBox ref={sectionRef} data-aos="fade-up">
        <div className="Why-h">
          WHY <span>CHOOSE US</span> ?
        </div>
        <div className="Why-para">
          <p>
          Our team works closely with clients to understand their unique requirements and deliver tailored solutions that meet specific needs and we are committed to delivering exceptional quality and reliability in all our services, ensuring that our clients receive the best possible experience. 
          <br />
          <br />
Bu outsourcing these activities/services to us, clients can reduce costs, improve efficiency and focus on their core business. We help create positive and engaging work environment that fosters employee satisfaction, retention and loyalty. 

          </p>
        </div>
<CustomCursor sectionRef={sectionRef} />

      </WhyBox>
      <Services data-aos="fade-up">
        <ServiceH data-aos="fade-up">Our <span>Services</span></ServiceH>
<ServicesCont>
  <ServicesBox data-aos="fade-up" data-aos-delay="0">
    <div className="service-cont">
    Corporate Catering
    </div>
    <div className="service-icon">
      <div className="s-iconbg">
      <i class="fa-solid fa-certificate"></i>
      </div>
      <div className="s-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" style={{"enable-background":"new 0 0 64 64"}} xmlSpace="preserve"><path d="M61.101 40.512h-.411c-.469-12.96-9.983-23.647-22.404-25.928v-3.588a4.96 4.96 0 0 0-4.955-4.955 4.959 4.959 0 0 0-4.952 4.955v3.58A27.27 27.27 0 0 0 6.033 39.464h-3A2.036 2.036 0 0 0 1 41.498v13.753c0 1.121.912 2.033 2.034 2.033h8.348c.962 0 1.766-.672 1.976-1.571l15.007 2.07c.879.121 1.775.178 2.682.178 8.893 0 18.712-5.455 21.583-9.15h8.24c1.007 0 2.13-.75 2.13-1.826v-4.657c0-1.001-.852-1.816-1.899-1.816zM30.38 10.996a2.956 2.956 0 0 1 2.952-2.955 2.958 2.958 0 0 1 2.955 2.955v3.294a27.54 27.54 0 0 0-2.955-.163c-.998 0-1.982.058-2.952.161v-3.292zM11.382 55.284 3 55.251V41.498c0-.019.016-.034.034-.034l8.382.033-.034 13.786zm0-15.82H8.036a25.293 25.293 0 0 1 25.295-23.337c13.661 0 24.83 10.85 25.358 24.385H32.855a178.9 178.9 0 0 1-2.238-.925c-4.023-1.69-4.276-1.703-8.994-.503L13.38 41.14a2.033 2.033 0 0 0-1.998-1.675zm17.256 16.338-15.222-2.1v-10.51l8.7-2.17c4.207-1.07 4.207-1.068 7.727.409.679.285 1.478.62 2.365.973 1.23.625 1.772 1.54 1.524 2.58-.25 1.041-1.212 1.827-2.24 1.827h-5.69a1 1 0 0 0 0 2h24.11c-3.91 3.553-13.497 8.07-21.274 6.99zM61 46.772a.378.378 0 0 1-.13.04H35.09c.267-.411.47-.87.587-1.363a3.927 3.927 0 0 0-.473-2.937H61v4.26z"/></svg>
      </div>
    </div>
  </ServicesBox>
  <ServicesBox data-aos="fade-up" data-aos-delay="100">
    <div className="service-cont">
    Housekeeping/Janitorial services
    </div>
    <div className="service-icon">
      <div className="s-iconbg">
      <i class="fa-solid fa-certificate"></i>
      </div>
      <div className="s-icon">
      <svg data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="m111.9 57.951-44.6-30.74a5.853 5.853 0 0 0-6.608 0L44.967 38.053v-6.126h.82a1.75 1.75 0 0 0 1.75-1.75V23.1a1.75 1.75 0 0 0-1.75-1.75H29.21a1.75 1.75 0 0 0-1.75 1.75v7.081a1.75 1.75 0 0 0 1.75 1.75h.82V48.35L16.1 57.951a5.822 5.822 0 0 0 2.253 10.519 5.918 5.918 0 0 0 1.065.1 5.779 5.779 0 0 0 3.291-1.03l3.451-2.379V106.1a1.75 1.75 0 0 0 1.75 1.75h72.18a1.75 1.75 0 0 0 1.75-1.75V65.159l3.451 2.379a5.822 5.822 0 0 0 6.608-9.587zM30.96 24.847h13.078v3.581H30.96zm10.507 7.081v8.538l-7.937 5.461v-14zm56.873 72.421H29.66v-41.6L64 39.075l34.34 23.671zm12.165-40.287a2.379 2.379 0 0 1-3.228.593L64.994 35.509a1.75 1.75 0 0 0-1.986 0L26.917 60.385l-6.193 4.269a2.321 2.321 0 0 1-2.634-3.823l25.9-17.852.224-.154 18.47-12.733a2.333 2.333 0 0 1 2.635 0l44.594 30.74a2.325 2.325 0 0 1 .592 3.23zM99.993 26.326a1.75 1.75 0 0 0 1.75-1.75V21.9a1.75 1.75 0 0 0-3.5 0v2.675a1.75 1.75 0 0 0 1.75 1.751zM94.059 29.78h2.675a1.75 1.75 0 0 0 0-3.5h-2.675a1.75 1.75 0 0 0 0 3.5zM100.188 29.538a1.75 1.75 0 0 0-1.75 1.75v2.675a1.75 1.75 0 0 0 3.5 0v-2.675a1.75 1.75 0 0 0-1.75-1.75zM103.447 29.585h2.675a1.75 1.75 0 0 0 0-3.5h-2.675a1.75 1.75 0 0 0 0 3.5z"/><path d="M48.081 70.257a1.75 1.75 0 0 0 1.75-1.75v-2.675a1.75 1.75 0 0 0-3.5 0v2.675a1.75 1.75 0 0 0 1.75 1.75zM44.822 70.21h-2.675a1.75 1.75 0 0 0 0 3.5h2.675a1.75 1.75 0 0 0 0-3.5zM48.276 73.469a1.75 1.75 0 0 0-1.75 1.75v2.675a1.75 1.75 0 0 0 3.5 0v-2.675a1.75 1.75 0 0 0-1.75-1.75zM54.209 70.016h-2.674a1.75 1.75 0 0 0 0 3.5h2.675a1.75 1.75 0 0 0 0-3.5zM79.724 84.994a1.75 1.75 0 0 0 1.75-1.75V80.57a1.75 1.75 0 1 0-3.5 0v2.675a1.75 1.75 0 0 0 1.75 1.749zM73.79 88.448h2.675a1.75 1.75 0 0 0 0-3.5H73.79a1.75 1.75 0 0 0 0 3.5zM79.919 88.207a1.75 1.75 0 0 0-1.75 1.75v2.675a1.75 1.75 0 0 0 3.5 0v-2.675a1.75 1.75 0 0 0-1.75-1.75zM83.178 88.253h2.675a1.75 1.75 0 0 0 0-3.5h-2.675a1.75 1.75 0 0 0 0 3.5z"/></svg>
      </div>
    </div>
  </ServicesBox>
  <ServicesBox data-aos="fade-up" data-aos-delay="200">
    <div className="service-cont">
    Fleet Management
    </div>
    <div className="service-icon">
      <div className="s-iconbg">
      <i class="fa-solid fa-certificate"></i>
      </div>
      <div className="s-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
    <path fill="#282D33" d="m44.158 19.694-3.997-.14.322-9.193h47.033l.32 9.193-3.998.139-.186-5.332H44.345zM13.656 56.704H6.75c-3.722 0-6.75-3.108-6.75-6.93 0-3.819 3.028-6.928 6.75-6.928h12.094v4H6.75C5.234 46.847 4 48.16 4 49.774c0 1.615 1.234 2.93 2.75 2.93h6.906v4zM121.248 56.703h-8.205v-4h8.205c1.518 0 2.752-1.314 2.752-2.93 0-1.614-1.234-2.928-2.752-2.928h-12.096v-4h12.096c3.723 0 6.752 3.108 6.752 6.928 0 3.822-3.029 6.93-6.752 6.93z"/>
    <path fill="#282D33" d="m110.67 55.537-9.441-25.915c-.084-.229-.52-.533-.764-.533h-72.93c-.231 0-.654.3-.73.518L17.959 54.92l-3.776-1.319 8.846-25.313c.637-1.823 2.574-3.198 4.506-3.198h72.93c1.92 0 3.863 1.359 4.521 3.163l9.441 25.916-3.757 1.368zM21.118 117.639h-5.381c-6.19 0-11.227-5.087-11.227-11.34V99.6h4v6.699c0 4.047 3.242 7.34 7.227 7.34h5.381c3.984 0 7.226-3.293 7.226-7.34V99.6h4v6.699c0 6.253-5.036 11.34-11.226 11.34zM112.262 117.639h-5.382c-6.19 0-11.228-5.087-11.228-11.34v-8.054h4v8.054c0 4.047 3.242 7.34 7.228 7.34h5.382c3.983 0 7.225-3.293 7.225-7.34v-8.054h4v8.054c-.001 6.253-5.036 11.34-11.225 11.34z"/>
    <path fill="#282D33" d="M121.932 100.288H6.068c-3.144 0-5.702-2.578-5.702-5.748V69.491c0-2.646 1.479-5.965 3.44-7.72l9.826-8.786c1.907-1.706 5.265-2.992 7.81-2.992h85.11c2.546 0 5.904 1.286 7.812 2.992l9.828 8.784c1.963 1.759 3.442 5.077 3.442 7.721v25.05c.001 3.17-2.558 5.748-5.702 5.748zM21.443 53.993c-1.537 0-3.989.94-5.144 1.974l-9.826 8.786c-1.103.986-2.107 3.245-2.107 4.738V94.54c0 .964.763 1.748 1.702 1.748h115.864c.939 0 1.703-.784 1.703-1.748V69.49c0-1.491-1.006-3.751-2.109-4.74l-9.827-8.783c-1.155-1.033-3.607-1.974-5.146-1.974h-85.11z"/>
    <path fill="#282D33" d="M102.113 100.287H27.769V90.98c0-4.202 3.388-7.621 7.552-7.621h59.236c4.167 0 7.557 3.419 7.557 7.621v9.307zm-70.344-4h66.344V90.98c0-1.997-1.596-3.621-3.557-3.621H35.321c-1.958 0-3.552 1.624-3.552 3.621v5.307zM11.256 85.232h9.873v4h-9.873zM108.134 85.232h8.576v4h-8.576z"/>
    <g>
      <path fill="#282D33" d="M45.72 71.121h36.559v4H45.72z"/>
    </g>
    <g>
      <path fill="#282D33" d="M30.041 79.24H11.104v-4H30.04c1.227-.001 1.678-.354 1.724-.44.024-.046.045-.421-.43-1.112-1.63-2.369-3.947-3.819-4.665-3.819H3.321v-4h23.348c2.718 0 6.062 2.793 7.96 5.553 1.235 1.797 1.481 3.706.676 5.24-.861 1.637-2.78 2.577-5.264 2.578zM116.895 79.24H97.959c-2.483 0-4.402-.939-5.264-2.577-.807-1.534-.562-3.444.674-5.241 1.898-2.76 5.241-5.554 7.96-5.554h22.053v4h-22.053c-.718 0-3.034 1.45-4.664 3.819-.438.639-.469 1.039-.43 1.113.046.087.497.439 1.724.439h18.936v4.001z"/>
    </g>
  </svg>
      </div>
    </div>
  </ServicesBox>
  <ServicesBox data-aos="fade-up" data-aos-delay="300">
    <div className="service-cont">
    Event Management 
    </div>
    <div className="service-icon">
      <div className="s-iconbg">
      <i class="fa-solid fa-certificate"></i>
      </div>
      <div className="s-icon">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width="655.359"
      height="655.359"
      style={{
        shapeRendering: "geometricPrecision",
        textRendering: "geometricPrecision",
        imageRendering: "optimizeQuality",
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
      viewBox="0 0 6.827 6.827"
    >
      <defs>
        <style>{`.fil0{fill:#212121;fill-rule:nonzero}`}</style>
      </defs>
      <g id="Layer_x0020_1">
        <g id="_558167744">
          <path
            id="_558168296"
            className="fil0"
            d="M1.03 1.176h.655V1.4h.46V1.176H4.682V1.4h.46V1.176h.655a.176.176 0 0 1 .176.177v4.345a.176.176 0 0 1-.177.177H1.03a.176.176 0 0 1-.177-.177V1.353a.176.176 0 0 1 .177-.177zm.442.213h-.405v4.273H5.76V1.389h-.405v.065a.159.159 0 0 1-.16.16h-.567a.159.159 0 0 1-.16-.16V1.39h-2.11v.065a.159.159 0 0 1-.16.16h-.567a.159.159 0 0 1-.159-.16V1.39z"
          />
          <path
            id="_558168944"
            className="fil0"
            d="M1.631.951H2.2a.159.159 0 0 1 .16.16v.343a.159.159 0 0 1-.16.16h-.568a.158.158 0 0 1-.16-.16l.001-.343a.159.159 0 0 1 .16-.16zm.514.214h-.46V1.4h.46v-.235z"
          />
          <path
            id="_558168416"
            className="fil0"
            d="M4.628.951h.567a.159.159 0 0 1 .16.16v.343a.159.159 0 0 1-.16.16h-.567a.158.158 0 0 1-.16-.16v-.343a.159.159 0 0 1 .16-.16zm.513.214h-.46V1.4h.46v-.235z"
          />
          <path id="_558168992" className="fil0" d="M.96 1.96h4.907v.214H.96z" />
          <path
            id="_558168800"
            className="fil0"
            d="M1.507 2.41h.779v.886H1.4v-.887h.107zm.566.213h-.46v.46h.46v-.46z"
          />
          <path
            id="_558168032"
            className="fil0"
            d="M2.853 2.41h.779v.886h-.886v-.887h.107zm.566.213h-.46v.46h.46v-.46z"
          />
          <path
            id="_558167984"
            className="fil0"
            d="M1.507 3.755h.779v.887H1.4v-.887h.107zm.566.214h-.46v.46h.46v-.46z"
          />
          <path
            id="_558167696"
            className="fil0"
            d="M2.853 3.755h.779v.887h-.886v-.887h.107zm.566.214h-.46v.46h.46v-.46z"
          />
          <path
            id="_558167600"
            className="fil0"
            d="m4.747 2.703.521.213-.08.196-.521-.213z"
          />
          <path
            id="_558167960"
            className="fil0"
            d="m4.028 4.462.521.213-.08.197-.521-.213z"
          />
          <path
            id="_558167528"
            className="fil0"
            d="m4.581 4.84-.547.6-.169-.067.026-.815.007-.034.855-2.094a.27.27 0 0 1 .095-.12.17.17 0 0 1 .163-.022m-.943 2.827.358-.395.849-2.077a.08.08 0 0 0 .006-.035l-.328-.134a.077.077 0 0 0-.02.03L4.084 4.58l-.016.534zm.943-2.827.358.147c.112.045.126.182.085.281L4.581 4.84"
          />
        </g>
      </g>
      <path style={{ fill: "none" }} d="M0 0h6.827v6.827H0z" />
    </svg>
      </div>
    </div>
  </ServicesBox>
  <ServicesBox data-aos="fade-up" data-aos-delay="0">
    <div className="service-cont">
    Indoor plants, Gardening and Landscape Maintenance
    </div>
    <div className="service-icon">
      <div className="s-iconbg">
      <i class="fa-solid fa-certificate"></i>
      </div>
      <div className="s-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M27 25H15v-3.09c7.91 1.12 13.19-5 11.56-12.64a1 1 0 0 0-.77-.77c-4.29-.91-8.63.25-11.1 3.95C13.47 7.24 8.51 4 2.21 5.3a1 1 0 0 0-.77.77C-.18 13.73 5.08 19.83 13 18.71V25H1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1.12L4 47.13A1 1 0 0 0 5 48h18a1 1 0 0 0 1-.87L25.88 33H27a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-2.27-14.67c.89 5.8-2.86 10-8.53 9.71l5.24-5.25A1 1 0 0 0 20 13.38l-5 5c0-5.53 4.21-8.9 9.73-8.05zM3.27 7.13C9.08 6.23 13.32 10 13 15.69l-5-5a1 1 0 0 0-1.44 1.41l4.74 4.74c-5.52.06-8.88-4.19-8.03-9.71zM22.12 46H5.88L4.14 33h19.72zM26 31H2v-4h24zM39.45.11a1 1 0 0 0-.9 0A15.38 15.38 0 0 0 30 13.94V24a1 1 0 0 0 1 1h5v5.18A3 3 0 0 0 34 33v10a5 5 0 0 0 10 0V33a3 3 0 0 0-2-2.82V25h5a1 1 0 0 0 1-1V13.94A15.38 15.38 0 0 0 39.45.11zM37 32h4a1 1 0 0 1 1 1v1h-6v-1a1 1 0 0 1 1-1zm2 14a3 3 0 0 1-3-3v-7h6v7a3 3 0 0 1-3 3zm1-16h-2v-5h2zm6-7H32v-9.06a13.4 13.4 0 0 1 7-11.81 13.4 13.4 0 0 1 7 11.81z"/></svg>
      </div>
    </div>
  </ServicesBox>
  <ServicesBox data-aos="fade-up" data-aos-delay="100">
    <div className="service-cont">
    Food and Beverages
    </div>
    <div className="service-icon">
      <div className="s-iconbg">
      <i class="fa-solid fa-certificate"></i>
      </div>
      <div className="s-icon">
      <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
      }}
    >
      <path style={{ fill: "none" }} d="M0 0h64v64H0z" />
      <path
        d="M35.986 27H8.36l2.822 25.009A2.242 2.242 0 0 0 13.41 54h17.525a2.243 2.243 0 0 0 2.229-1.991L35.986 27z"
        style={{ fill: "none", stroke: "#000000", strokeWidth: 2 }}
      />
      <path
        d="M38.346 23.266a2.244 2.244 0 0 0-2.243-2.243H8.243A2.24 2.24 0 0 0 6 23.266v1.491A2.24 2.24 0 0 0 8.243 27h27.86a2.242 2.242 0 0 0 2.243-2.243v-1.491z"
        style={{ fill: "none", stroke: "#000000", strokeWidth: 2 }}
      />
      <path
        d="M33.276 21.023H11.07v-1.762a2.243 2.243 0 0 1 2.243-2.243h17.72a2.243 2.243 0 0 1 2.243 2.243v1.762zM21.221 35.019c.468 2.843 1.048 3.492-.255 7.305-.592 1.733-.382 3.373.105 4.727l-.105.016c-2.224 0-4.029-2.708-4.029-6.043s1.805-6.043 4.029-6.043l.255.038zM23.634 34.981c2.103.166 3.775 2.794 3.775 6.004 0 3.288-1.755 5.967-3.925 6.027-.487-1.354-.697-2.993-.105-4.726 1.303-3.813.723-4.462.255-7.305zM37.662 52l14.98 1.477a4.691 4.691 0 0 0 5.118-4.101c.709-5.916-.657-15.745-17.063-17.362-1.897-.187-3.624-.228-5.197-.145"
        style={{ fill: "none", stroke: "#000000", strokeWidth: 2 }}
      />
      <path
        d="M47.05 33.708c.657 1.217 1.786 4.066 1.762 9.249M38.662 32.204s2.254 2.669 2.22 9.971M22 17.018 23 10l8 1"
        style={{ fill: "none", stroke: "#000000", strokeWidth: 2 }}
      />
    </svg>
      </div>
    </div>
  </ServicesBox>
  <ServicesBox data-aos="fade-up" data-aos-delay="200">
    <div className="service-cont">
    Pest Control and Disinfectant Services
    </div>
    <div className="service-icon">
      <div className="s-iconbg">
      <i class="fa-solid fa-certificate"></i>
      </div>
      <div className="s-icon">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 482 511.85"
    >
      <path d="M439.58 393.45c.21 5.31.03 35.96-.53 41.24l24.89 12.63c2.64 1.33 4.36 3.77 4.89 6.47l10.6 46.83c1.12 4.95-1.99 9.87-6.96 10.99-4.95 1.12-9.87-2-10.98-6.95l-9.72-42.87-16.47-8.37c-8.3 27.57-27.55 46.89-49.97 46.89-22.54 0-41.88-19.55-50.1-47.37l-18 8.17-8.26 43.26c-.96 4.99-5.78 8.27-10.77 7.31-5-.96-8.27-5.78-7.32-10.77l9.12-47.77c.5-2.91 2.4-5.53 5.29-6.83l26.3-11.95c-.53-5.2-.7-35.73-.5-40.96l-27.76-9.58c-2.92-1-5-3.32-5.82-6.06l-10.19-33.69c-1.45-4.88 1.32-10.01 6.2-11.46 4.87-1.46 10 1.32 11.45 6.2l8.81 29.19 22.24 7.67 98.76.01 20.36-7.03 8.81-29.2c1.46-4.87 6.59-7.65 11.47-6.19a9.204 9.204 0 0 1 6.19 11.46l-10.16 33.7-.04-.01a9.152 9.152 0 0 1-5.8 6.06l-26.03 8.98zM42.65 0h356.9c11.68 0 22.33 4.8 30.08 12.52l.05.06c7.74 7.76 12.52 18.41 12.52 30.07v212c-1.57.22-3.14.57-4.71 1.03-8.65 2.54-15.81 4.76-21.8 6.9V42.65c0-4.45-1.8-8.48-4.7-11.38l-.05-.06c-2.9-2.9-6.94-4.7-11.39-4.7H42.65c-4.43 0-8.46 1.82-11.39 4.75-2.93 2.93-4.75 6.96-4.75 11.39v421.43c0 4.45 1.8 8.49 4.7 11.39l.05.05c2.91 2.9 6.94 4.71 11.39 4.71H267l-2.97 15.55c-.71 3.7-.83 7.38-.42 10.95H42.65c-11.68 0-22.33-4.79-30.08-12.52l-.05-.05C4.78 486.39 0 475.75 0 464.08V42.65c0-11.74 4.8-22.42 12.52-30.13C20.23 4.8 30.9 0 42.65 0zm121.12 395.29c-5.47 0-9.9-4.43-9.9-9.9 0-5.47 4.43-9.9 9.9-9.9h95.64l3.09 10.18c1.02 3.39 2.55 6.64 4.54 9.62H163.77zm-62.68-29.85c11.02 0 19.96 8.93 19.96 19.95s-8.94 19.95-19.96 19.95c-11.02 0-19.95-8.93-19.95-19.95s8.93-19.95 19.95-19.95zm62.68-58.5c-5.47 0-9.9-4.44-9.9-9.91s4.43-9.9 9.9-9.9h116.35a33.68 33.68 0 0 0 4.11 16.83l.57 1.01c-1.89.13-3.79.42-5.68.85l-2.25.57c-.57.17-1.12.35-1.68.55H163.77zm-62.68-29.86c11.02 0 19.96 8.93 19.96 19.95s-8.94 19.96-19.96 19.96c-11.02 0-19.95-8.94-19.95-19.96 0-11.02 8.93-19.95 19.95-19.95zm62.68-66.39c-5.47 0-9.9-4.44-9.9-9.91s4.43-9.9 9.9-9.9h185.59c5.47 0 9.9 4.43 9.9 9.9 0 5.47-4.43 9.91-9.9 9.91H163.77zm-54.38-29.92a8.143 8.143 0 0 1 11.59-.05c3.23 3.23 3.23 8.45.05 11.73l-8.14 8.33 8.14 8.33c3.18 3.23 3.14 8.41-.09 11.64-3.23 3.22-8.41 3.18-11.55 0l-8.04-8.24-8.09 8.28c-3.19 3.23-8.42 3.28-11.6.05-3.23-3.23-3.23-8.45-.04-11.73l8.14-8.33-8.14-8.34c-3.19-3.22-3.14-8.4.09-11.63 3.23-3.23 8.41-3.18 11.55 0l8.04 8.24 8.09-8.28zm54.38-66.34c-5.47 0-9.9-4.43-9.9-9.9 0-5.47 4.43-9.9 9.9-9.9h185.59c5.47 0 9.9 4.43 9.9 9.9 0 5.47-4.43 9.9-9.9 9.9H163.77zM79 96.66c3.93-2.64 9.27-1.6 11.94 2.37l4.3 5.13 15.05-19.1c3.01-3.66 8.43-4.2 12.1-1.18 3.66 3.01 4.2 8.44 1.19 12.09l-22.2 27.77c-.57.73-1.26 1.41-2.07 1.98-3.93 2.64-9.27 1.6-11.94-2.37l-8.37-9.99c-2.67-3.97-1.61-9.31 2.32-11.96z" />
    </svg>
      </div>
    </div>
  </ServicesBox>
  <ServicesBox data-aos="fade-up" data-aos-delay="300">
    <div className="service-cont">
    Corporate team travel and stays (offsite training/venue arrangements)
    </div>
    <div className="service-icon">
      <div className="s-iconbg">
      <i class="fa-solid fa-certificate"></i>
      </div>
      <div className="s-icon">
      <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 122.88 109.45"
    >
      <defs>
        <style>{`.cls-1{fill-rule:evenodd;}`}</style>
      </defs>
      <title>office-address</title>
      <path
        className="cls-1"
        d="M49,76.93A47.76,47.76,0,0,1,37.49,99.08a46.14,46.14,0,0,1-9.89,8.21,3.45,3.45,0,0,1-3.91.14A56,56,0,0,1,9.83,95.06,44.45,44.45,0,0,1,.44,74.72C-.71,67.62.38,60.76,4,55.15a24.51,24.51,0,0,1,5.44-6A26.2,26.2,0,0,1,25.9,43.08a23.48,23.48,0,0,1,15.83,6.43A23.38,23.38,0,0,1,46,54.66c3.81,6.3,4.66,14.26,3,22.27Zm-8,29.09h78.51V32.12H88.54V106H85.11V3.43H32.85v33.2h-.11l-.05,0h-.16l-.05,0h-.21l-.06,0h-.1l-.11,0h-.16l-.06,0H29.42V18h0V3A3,3,0,0,1,30.3.89h0A3,3,0,0,1,32.43,0h53.1a3,3,0,0,1,2.13.88l.12.14a3,3,0,0,1,.76,2V28.69h31.82a2.47,2.47,0,0,1,1.77.74h0a2.47,2.47,0,0,1,.74,1.77v76.53a1.71,1.71,0,0,1-1.72,1.71H37.1l0,0,.08-.07.09-.07.08-.07.09-.07.06-.05,0,0,0,0,.06,0,0,0,0,0,0,0h0l.05,0,0,0,0,0,.06,0h0l0,0,.05,0h0l.06,0,0,0,0,0,.06,0h0l0,0,0,0h0l.06-.05h0l0,0,0,0h0l0,0,0,0,0,0,0,0h0l0,0,0,0h0l0-.05,0,0,0,0,0,0h0l.06,0,0,0h0l.05,0,0,0,0,0,.05,0h0l.06-.05,0,0,0,0,.06,0h0l0,0,0,0h0l.06,0,0,0,0,0,.05,0h0l0,0,0,0h0l0,0,0,0,0,0,0,0h0L40,107l.11-.09v0l0,0,0,0h0l.06,0,0,0,0,0,0,0h0l0,0,0,0h0l0,0,0,0,0,0,0,0h0l.05-.05,0,0v0l0,0h0l0,0,0,0h0l.05-.05,0,0,0,0ZM56.08,60.54h4a.59.59,0,0,1,.59.59v9.53a.6.6,0,0,1-.59.59H57A41.14,41.14,0,0,0,56.7,64c-.15-1.15-.36-2.29-.62-3.41Zm-.4,19.71h4.38a.59.59,0,0,1,.58.59v9.53a.58.58,0,0,1-.58.59h-8.3a53.08,53.08,0,0,0,3.92-10.71Zm-5-39.42h9.4a.58.58,0,0,1,.58.58v9.53a.58.58,0,0,1-.58.59h-7.5l-.38-.64a34,34,0,0,0-2.11-3.1V41.41a.58.58,0,0,1,.59-.58Zm17,39.42H77a.59.59,0,0,1,.58.59v9.53A.58.58,0,0,1,77,91h-9.4a.58.58,0,0,1-.59-.59V80.84a.59.59,0,0,1,.59-.59Zm0-19.71H77a.58.58,0,0,1,.58.59v9.53a.58.58,0,0,1-.58.59h-9.4a.59.59,0,0,1-.59-.59V61.13a.58.58,0,0,1,.59-.59Zm0-19.71H77a.58.58,0,0,1,.58.58v9.53a.58.58,0,0,1-.58.59h-9.4a.58.58,0,0,1-.59-.59V41.41a.58.58,0,0,1,.59-.58Zm30,30.57h13.6c.16,0,.29.1.29.2v5.59c0,.1-.15.21-.29.21H97.6c-.14,0-.29-.1-.29-.21V71.6c0-.11.13-.2.29-.2ZM40.53,10.89h36.9a1.39,1.39,0,0,1,1.38,1.37V26.85a1.39,1.39,0,0,1-1.38,1.37H40.53a1.39,1.39,0,0,1-1.38-1.37V12.26a1.38,1.38,0,0,1,1.38-1.37ZM97.6,59.17h13.6c.16,0,.29.11.29.21V65c0,.1-.15.21-.29.21H97.6c-.14,0-.29-.1-.29-.21V59.38c0-.12.13-.21.29-.21ZM97.6,47h13.6c.16,0,.29.11.29.21v5.58c0,.1-.15.21-.29.21H97.6c-.14,0-.29-.09-.29-.21V47.16c0-.12.13-.21.29-.21ZM24.88,56.89A11.35,11.35,0,1,1,13.54,68.24,11.35,11.35,0,0,1,24.88,56.89Z"
      />
    </svg>
      </div>
    </div>
  </ServicesBox>
  <ServicesBox data-aos="fade-up" data-aos-delay="0">
    <div className="service-cont">
    Supply of Housekeeping and Pantry Consumables
    </div>
    <div className="service-icon">
      <div className="s-iconbg">
      <i class="fa-solid fa-certificate"></i>
      </div>
      <div className="s-icon">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 512 305.71"
    >
      <path d="M427.81 204.37c-26.88 0-48.53 21.8-48.53 48.52 0 26.87 21.8 48.52 48.53 48.52 26.86 0 48.51-21.8 48.51-48.52 0-26.87-21.8-48.52-48.51-48.52zM108.36 0h76.19c4 0 7.28 3.27 7.28 7.28v60.95c0 4-3.28 7.27-7.28 7.27h-76.19c-4 0-7.27-3.27-7.27-7.27V7.28c0-4.01 3.27-7.28 7.27-7.28zM77.39 114.59c2.4.1 4.11.89 5.08 2.39 2.67 3.99-.97 7.94-3.5 10.73-7.16 7.85-24.72 26.76-28.26 30.92-2.68 2.96-6.49 2.96-9.17 0-3.65-4.27-22.1-24.03-28.91-31.68-2.36-2.66-5.28-6.29-2.82-9.97 1-1.5 2.68-2.29 5.08-2.39h14.06V95.75c0-3.96 3.24-7.2 7.2-7.2h19.98c3.96 0 7.2 3.24 7.2 7.2v18.84h14.06zm0-87.23c2.4.11 4.11.89 5.08 2.39 2.67 4-.97 7.95-3.5 10.73-7.16 7.86-24.72 26.77-28.26 30.93-2.68 2.96-6.49 2.96-9.17 0-3.65-4.27-22.1-24.03-28.91-31.68-2.36-2.66-5.28-6.29-2.82-9.98 1-1.5 2.68-2.28 5.08-2.39h14.06V8.52c0-3.95 3.24-7.19 7.2-7.19h19.98c3.96 0 7.2 3.25 7.2 7.19v18.84h14.06zm139.39 59.32h76.19c4 0 7.28 3.27 7.28 7.28v60.95c0 4-3.28 7.27-7.28 7.27h-76.19c-4 0-7.27-3.27-7.27-7.27V93.96c0-4.01 3.27-7.28 7.27-7.28zm26.15 8.27h23.89v25.25l-11.83-9.99-12.06 9.99V94.95zM216.78 0h76.19c4 0 7.28 3.27 7.28 7.28v60.95c0 4-3.28 7.27-7.28 7.27h-76.19c-4 0-7.27-3.27-7.27-7.27V7.28c0-4.01 3.27-7.28 7.27-7.28zm26.15 8.26h23.89v25.25l-11.83-9.99-12.06 9.99V8.26zM108.36 86.68h76.19c4 0 7.28 3.27 7.28 7.28v60.95c0 4-3.28 7.27-7.28 7.27h-76.19c-4 0-7.27-3.27-7.27-7.27V93.96c0-4.01 3.27-7.28 7.27-7.28zm26.14 8.27h23.9v25.25l-11.83-9.99-12.07 9.99V94.95zm0-86.69h23.9v25.25l-11.83-9.99-12.07 9.99V8.26zm15.28 200.42c-26.88 0-48.52 21.8-48.52 48.51 0 26.88 21.8 48.52 48.52 48.52 26.87 0 48.52-21.79 48.52-48.52 0-26.86-21.8-48.51-48.52-48.51zm0 29.85c-10.3 0-18.66 8.36-18.66 18.66 0 10.31 8.36 18.66 18.66 18.66s18.66-8.35 18.66-18.66c0-10.3-8.36-18.66-18.66-18.66zm166.81-60.29H0v49.98c0 12.08 9.89 21.98 21.99 21.98h63.7c1.62-14.91 8.38-28.35 18.48-38.49l.03-.04.07-.06c11.67-11.65 27.76-18.88 45.51-18.88 17.77 0 33.91 7.22 45.59 18.89 10.1 10.11 16.87 23.56 18.49 38.58H367.2c3.28-74.64 110.31-84.94 121.21 0H512c-13.59-94.56.02-73.64-85.63-107.33-.73-10.9-3.65-21.85-7.56-32.62-16.94-46.7-45.03-42.64-102.22-43.04v111.03zm55.84-85.52-27.44-.44v50.59h50.8c-2.53-16.5-9.09-35.99-23.36-50.15zm55.38 141.51c-10.31 0-18.66 8.36-18.66 18.66s8.35 18.66 18.66 18.66c10.29 0 18.65-8.36 18.65-18.66s-8.36-18.66-18.65-18.66z" />
    </svg>
      </div>
    </div>
  </ServicesBox>
  <ServicesBox data-aos="fade-up" data-aos-delay="100">
    <div className="service-cont">
    Corporate Gifting 
    </div>
    <div className="service-icon">
      <div className="s-iconbg">
      <i class="fa-solid fa-certificate"></i>
      </div>
      <div className="s-icon">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      style={{
        shapeRendering: 'geometricPrecision',
        textRendering: 'geometricPrecision',
        imageRendering: 'optimizeQuality',
        fillRule: 'evenodd',
        clipRule: 'evenodd',
      }}
      viewBox="0 0 6.827 6.827"
    >
      <defs>
        <style>{'.fil0{fill:#212121;fill-rule:nonzero}'}</style>
      </defs>
      <g id="Layer_x0020_1">
        <path
          className="fil0"
          d="M.96 2h5.013v1.05H.853V2H.96zm4.8.213H1.067v.624H5.76v-.624z"
        />
        <path
          className="fil0"
          d="M1.306 2.837H5.627V5.79H1.2V2.837h.106zm4.108.213h-4v2.525h4V3.05z"
        />
        <path className="fil0" d="M3.52 2.944v2.738h-.213V2.944z" />
        <path className="fil0" d="M1.306 4.206H5.52v.213H1.306zM3.307 2.944v-.838h.213v.838z" />
        <path
          className="fil0"
          d="M3.307 2.105c.006-.561.213-.864.443-.992a.537.537 0 0 1 .524-.012c.154.089.233.258.147.46-.087.203-.369.444-.974.646l-.141.047.001-.149zm.546-.806c-.153.085-.292.285-.326.654.435-.164.638-.335.698-.476.037-.085.005-.156-.058-.192-.079-.046-.2-.05-.314.014z"
        />
        <path
          className="fil0"
          d="M3.3 1.953c-.034-.369-.173-.569-.326-.654-.115-.063-.236-.06-.315-.014-.062.036-.094.107-.057.192.06.14.263.312.698.476zm-.223-.84c.23.128.437.431.443.992l.001.149-.141-.047c-.606-.202-.887-.443-.974-.647-.086-.201-.007-.37.147-.46.137-.08.339-.089.524.013z"
        />
      </g>
      <path style={{ fill: 'none' }} d="M0 0h6.827v6.827H0z" />
    </svg>
      </div>
    </div>
  </ServicesBox>
  <ServicesBox data-aos="fade-up" data-aos-delay="200">
    <div className="service-cont">
    Café Smart Technology
    </div>
    <div className="service-icon">
      <div className="s-iconbg">
      <i class="fa-solid fa-certificate"></i>
      </div>
      <div className="s-icon">
      <svg
    version="1.1"
    id="Layer_1"
    viewBox="0 0 122.88 100.38"
    style={{ enableBackground: 'new 0 0 122.88 100.38' }}
    xmlSpace="preserve"
  >
    <style type="text/css">
      {`.st0{fill-rule:evenodd;clip-rule:evenodd;}`}
    </style>
    <g>
      <path
        className="st0"
        d="M112.29,98.55c0,1.01-0.82,1.84-1.84,1.84H11.93c-1.01,0-1.84-0.82-1.84-1.84V51.67c-2.06,0.79-3.97,0.8-5.57,0.27c-1.25-0.42-2.3-1.17-3.07-2.15c-0.77-0.97-1.26-2.16-1.41-3.46C-0.18,44.3,0.43,42,2.15,39.85l0,0c0.09-0.11,0.19-0.21,0.3-0.3L60.05,0.48c0.65-0.6,1.65-0.66,2.37-0.1l57.71,38.99l0,0c0.08,0.06,0.15,0.13,0.22,0.2c2.32,2.5,2.9,5.27,2.34,7.62c-0.28,1.15-0.83,2.2-1.59,3.05c-0.76,0.86-1.73,1.52-2.84,1.92c-1.76,0.64-3.84,0.61-5.96-0.39C112.29,67.37,112.29,82.96,112.29,98.55L112.29,98.55z M38.59,59.98l-0.08,0.07c-0.42,0.34-0.93,0.48-1.42,0.44c-0.5-0.04-0.99-0.26-1.35-0.66l-0.07-0.09c-0.34-0.42-0.48-0.93-0.44-1.42c0.04-0.52,0.28-1.02,0.7-1.38c3.88-3.33,8.02-5.85,12.3-7.53c4.31-1.69,8.77-2.54,13.26-2.5c4.42,0.04,8.87,0.93,13.21,2.72c4.22,1.73,8.34,4.3,12.28,7.74c0.42,0.37,0.65,0.87,0.69,1.39l0,0.02c0.03,0.51-0.13,1.03-0.5,1.45c-0.37,0.42-0.87,0.65-1.39,0.69l-0.02,0c-0.51,0.03-1.03-0.13-1.45-0.5c-3.57-3.12-7.29-5.45-11.09-7.02c-3.89-1.61-7.84-2.41-11.77-2.45c-3.98-0.03-7.95,0.73-11.8,2.25C45.82,54.71,42.1,56.98,38.59,59.98L38.59,59.98z M61.44,77.96c1.28,0,2.44,0.52,3.28,1.36c0.84,0.84,1.36,2,1.36,3.28s-0.52,2.44-1.36,3.28c-0.84,0.84-2,1.36-3.28,1.36c-1.28,0-2.44-0.52-3.28-1.36c-0.84-0.84-1.36-2-1.36-3.28s0.52-2.44,1.36-3.28C59,78.48,60.16,77.96,61.44,77.96L61.44,77.96z M53.04,74.99c-0.03,0.03-0.06,0.06-0.1,0.08c-0.42,0.32-0.93,0.45-1.43,0.4c-0.49-0.05-0.97-0.28-1.32-0.68c-0.03-0.03-0.06-0.07-0.09-0.11c-0.32-0.42-0.45-0.93-0.4-1.43c0.05-0.51,0.3-1.01,0.74-1.36c1.72-1.4,3.52-2.46,5.36-3.18c1.85-0.72,3.75-1.09,5.66-1.1c1.89-0.01,3.78,0.34,5.64,1.06c1.81,0.7,3.59,1.75,5.32,3.16c0.43,0.35,0.68,0.85,0.74,1.36c0.05,0.51-0.09,1.05-0.44,1.48l-0.01,0.01c-0.35,0.43-0.84,0.68-1.36,0.73c-0.51,0.05-1.05-0.09-1.48-0.44l0,0c-1.37-1.11-2.76-1.94-4.16-2.49c-1.42-0.56-2.84-0.83-4.24-0.82c-1.42,0-2.85,0.29-4.26,0.85C55.79,73.06,54.4,73.89,53.04,74.99L53.04,74.99z M45.97,67.96c-0.42,0.37-0.95,0.54-1.46,0.51c-0.52-0.03-1.02-0.26-1.39-0.68c-0.37-0.42-0.54-0.95-0.5-1.46c0.03-0.52,0.26-1.02,0.68-1.39c2.91-2.58,5.92-4.53,8.98-5.82c3.06-1.29,6.18-1.92,9.32-1.87c3.1,0.05,6.19,0.77,9.25,2.18c2.98,1.37,5.92,3.4,8.8,6.11c0.41,0.38,0.62,0.9,0.64,1.41c0.02,0.52-0.17,1.04-0.55,1.45c-0.38,0.41-0.9,0.62-1.41,0.64c-0.52,0.02-1.04-0.17-1.45-0.55c-2.31-2.01-4.77-3.54-7.37-4.55c-2.57-0.98-5.26-1.47-7.99-1.47c-2.67,0-5.34,0.49-7.97,1.47C50.89,63.43,47.84,65.34,45.97,67.96L45.97,67.96z"
      />
    </g>
  </svg>
      </div>
    </div>
  </ServicesBox>
  <ServicesBox data-aos="fade-up" data-aos-delay="300">
   
  </ServicesBox>
 

</ServicesCont>
      </Services>
    </div>
  )
}
