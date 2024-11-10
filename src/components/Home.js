import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components'
import coverbg from '../assets/images/cover-bg.jpg'
import cat from '../assets/images/cat.jpg'
import event from '../assets/images/event.jpg'
import travel from '../assets/images/travel.jpg'
import over from '../assets/images/over-img.jpg'
import mask from '../assets/images/mask.png'

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

& .cover-box{
    width: 18vw;
    height: 26vw;
    background-color: rgba(200, 200, 200, 0.7);
    position: absolute;
    transform: rotate(-10deg);
    top: 4vw;
    left: 3vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 3;
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
    top: 18vw;
    transform: rotate(30deg);
    left: auto;
    right: 2vw;
    z-index: 2;
   
}

& .cb2 .cover-img-box{
    background-image:url(${event}) ;
}

& .cb3{
    top: 35vw;
    z-index: 1;
    transform: rotate(-30deg);
    left: 4vw;
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
align-items: center;
position: relative;

& .about-img-patch {
    width: 7.6vw;
    height: 5.3vw;
    position: absolute;
    background-color: #5c86cb;
    top: 11.6vw;
    right: 6.7vw;
    border-radius: 8px;
}
`;

const AboutImgBox = styled.div`
width: 28vw;
height: 33vw;
margin-top: 10vw;
display: flex;
align-items: center;
justify-content: center;
position: relative;
overflow: hidden;
-webkit-mask-image: url(${mask});
mask-image: url(${mask});
mask-size:100% 100%;

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
margin-top: 11.5vw;

& span{
  color: #f82b07;
  font-weight: 900;
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

const CommitBox = styled.div`
width: 100%;
height: 50vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 3vw 0vw;
background-color: #eaeaea;

& .commit-h{
  font-family: "heebo";
  font-size: 3vw;
  color:  #f82b07;
  font-weight: 900;

}

& .commit-h span{
  color: black;
  font-weight: 300;
}

& .commit-para{
  width: 60%;
  font-family: "Source Sans 3";
  text-align: center;
  font-size: 1.1vw;
  position: relative;
  margin-top: 1vw;
}

& .commit-para::before {
  content: "“"; 
  font-size: 10vw;
  color: #999;
  font-weight: 700;
left: -3.5vw;
top: -4vw;
position: absolute;
}

& .commit-para::after {
  content: "”"; /* Closing quote */
  font-size: 10vw;
  color: #999;
  font-weight: 700;
  position: absolute;
  right: -2.5vw;
  bottom: -8.5vw;
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


export default function Home() {
  const sectionRef = useRef(null);
    const textRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);
  
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
    

  return (
    <div>
     <CoverContainer>
        <CoverContent>
            <CoverLeft>
            <TagLine>
        Seamless Services for Every <br />
        <span> <span className='tagred'>Occasion</span>   and <br />
        Journey</span> 
</TagLine>
<CoverPara>
We offer expert catering, transport, corporate travel, gifts, and event services, designed to create seamless and memorable experiences. Trust us to handle the details, so you can focus on what truly matters.
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
<div className="cover-box">
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
     <AboutContainer>
      <AboutDots>
      {dotsArray.map((_, index) => (
        <div key={index} className="adot"></div>
      ))}
      </AboutDots>
      <AboutLeft>
      <div className="about-img-patch">

</div>
        <AboutImgBox>
        
<img src={over} alt="" />
        </AboutImgBox>
      </AboutLeft>
      <AboutRight>
       <AboutH><span>ABOUT </span>OUR COMPANY</AboutH>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem odio ab accusamus voluptatum minus, consectetur dicta neque quisquam ipsa mollitia perferendis voluptas corporis harum soluta quis necessitatibus laudantium, modi quos praesentium! Cum repellendus harum, doloremque dolor obcaecati laborum odio odit cupiditate provident. Est sapiente blanditiis provident ab voluptate? Optio inventore quae debitis exercitationem quas expedita autem, itaque dolores quia consectetur illum minus, alias ratione esse!</p>
      </AboutRight>
     </AboutContainer>
     <CommitBox ref={sectionRef}>
        <div className="commit-h">
          COMMITMENT <span>AND STRENGTH</span>
        </div>
        <div className="commit-para">
          <p>
            We have set up certain core values and adopt fair practices like honesty, integrity, responsibility, hard work, transparency, dedication, and involvement. Our strength is "The Art of Fine Catering".
          </p>
        </div>
<CustomCursor sectionRef={sectionRef} />

      </CommitBox>
    </div>
  )
}
