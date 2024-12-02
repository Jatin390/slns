import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from 'styled-components';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import services from '../assets/images/services.jpg';
import ser1 from '../assets/images/ser1.jpg';
import ser2 from '../assets/images/ser2.jpg';

gsap.registerPlugin(ScrollTrigger);

const ServiceTop = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${services});
  background-size: cover;
  background-position: center;
  position: relative;

  & .service-overlay{
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(rgba(255,255,255,0.6), white);
  }
`;

const ServiceH = styled.div`
  font-size: 3vw;
  font-family: "heebo";
  font-weight: 300;
  position: relative;

  & span{
      color: #f82b07;
      font-weight: 900;
  }
`;

const ServicePara = styled.div`
  font-weight: 500;
  font-family: "Source Sans 3";
  font-size: 1.1vw;
  position: relative;
`;

const ServiceBoxes = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ServiceBox = styled.div`
  width: 80%;
  height: 22vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  

  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 1px;
    background-color: black;
  }
  .service-dot {
    width: 1vw;
    height: 1vw;
    border-radius: 50%;
    position: absolute;
    border: 2px solid #04a7fd;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }
  .service-fill {
    width: 0.5vw;
    height: 0.5vw;
    border-radius: 50%;
    background-color: #04a7fd;
  }
  .service-img-box {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .services-img {
    width: 80%;
    height: 90%;
    background-color: rebeccapurple;
    overflow: hidden;
  }
  .s-img {
    width: 100%;
  }
  .service-content {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .service-des {
    width: 80%;
  }
  .ser-h {
    font-family: "heebo";
    font-size: 1.5vw;
    font-weight: 800;
  }
  .ser-para {
    font-family: "Source Sans 3";
    font-size: 1.1vw;
    line-height: 1.5;
  }
  .ser-h span {
    position: absolute;
    font-size: 10vw;
    z-index: -1;
    opacity: 0.1;
    top: 0vw;
  }
`;

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });

  }, []);
  return (
    <div>
      <ServiceTop>
        <div className="service-overlay">

        </div>
       <ServiceH>
OUR <span>SERVICES</span> 
       </ServiceH>
       <ServicePara>
       From Concept to Completion, We've Got You Covered
       </ServicePara>
      </ServiceTop>
      <ServiceBoxes>
        <ServiceBox>
          <div className="service-dot">
            <div className="service-fill">

            </div>
          </div>
        <div className="service-img-box" data-aos="fade-right">
         <div className="services-img">
         <img src={ser1} alt="" className="s-img" />
         </div>
        </div>
        <div className="service-content" data-aos='fade-left'>
          <div className="service-des">
              <div className="ser-h"><span>1</span> Facility Management Services</div>
          <div className="ser-para">We provide comprehensive facility management solutions, including housekeeping, pest control, and F&B services, ensuring seamless operations and a productive work environment.</div>
          </div>
        </div>
        </ServiceBox>
        <ServiceBox>
          <div className="service-dot">
            <div className="service-fill">

            </div>
          </div>
        <div className="service-content" data-aos="fade-right">
          <div className="service-des">
              <div className="ser-h"><span>2</span>  Corporate Catering Services</div>
          <div className="ser-para">Delight your employees and clients with our customized corporate catering services, offering a range of cuisines and dietary options, from breakfast to dinner, and everything in between.</div>
          </div>
        </div>
        <div className="service-img-box" data-aos='fade-left'>
         <div className="services-img">
         <img src={ser2} alt="" className="s-img" />
         </div>
        </div>
        </ServiceBox>
        <ServiceBox>
          <div className="service-dot">
            <div className="service-fill">

            </div>
          </div>
        <div className="service-img-box" data-aos="fade-right">
         <div className="services-img">
         
         </div>
        </div>
        <div className="service-content" data-aos='fade-left'>
          <div className="service-des">
              <div className="ser-h"><span>3</span> Corporate Transport Services</div>
          <div className="ser-para">Streamline your company's transportation needs with our reliable and efficient corporate transport services, including employee pickups, drops, and event transportation.</div>
          </div>
        </div>
        </ServiceBox>
        <ServiceBox>
          <div className="service-dot">
            <div className="service-fill">

            </div>
          </div>
        <div className="service-content" data-aos="fade-right">
          <div className="service-des">
              <div className="ser-h"><span>4</span>Event Management</div>
          <div className="ser-para">From conferences to celebrations, our expert event management team crafts unforgettable experiences, handling logistics, décor, and entertainment to perfection.</div>
          </div>
        </div>
        <div className="service-img-box" data-aos='fade-left'>
         <div className="services-img">
         
         </div>
        </div>
        </ServiceBox>
        <ServiceBox>
          <div className="service-dot">
            <div className="service-fill">

            </div>
          </div>
        <div className="service-img-box" data-aos="fade-right">
         <div className="services-img">
         
         </div>
        </div>
        <div className="service-content" data-aos='fade-left'>
          <div className="service-des">
              <div className="ser-h"><span>5</span> Supply of Pantry, Stationery, and Housekeeping Consumables</div>
          <div className="ser-para">Source all your office essentials from us, including pantry items, stationery, and housekeeping supplies, ensuring convenience and cost-effectiveness.</div>
          </div>
        </div>
        </ServiceBox>
        <ServiceBox>
          <div className="service-dot">
            <div className="service-fill">

            </div>
          </div>
        <div className="service-content" data-aos="fade-right">
          <div className="service-des">
              <div className="ser-h"><span>6</span>Corporate Gifting</div>
          <div className="ser-para">Show appreciation and build relationships with our thoughtful corporate gifting solutions for events, festivals, or special occasions, tailored to your brand and budget.</div>
          </div>
        </div>
        <div className="service-img-box" data-aos='fade-left'>
         <div className="services-img">
         
         </div>
        </div>
        </ServiceBox>
        <ServiceBox>
          <div className="service-dot">
            <div className="service-fill">

            </div>
          </div>
        <div className="service-img-box" data-aos="fade-right">
         <div className="services-img">
         
         </div>
        </div>
        <div className="service-content" data-aos='fade-left'>
          <div className="service-des">
              <div className="ser-h"><span>7</span> Corporate/Apartment/Tech Park Landscape Solutions and Management</div>
          <div className="ser-para">Transform your outdoor spaces with our innovative landscape design and management services, enhancing aesthetics, functionality, and employee well-being.</div>
          </div>
        </div>
        </ServiceBox>
        <ServiceBox>
          <div className="service-dot">
            <div className="service-fill">

            </div>
          </div>
        <div className="service-content" data-aos="fade-right">
          <div className="service-des">
              <div className="ser-h"><span>8</span> Technology for Corporate Catering</div>
          <div className="ser-para">Revolutionize your catering operations with our cutting-edge technology solutions, featuring online ordering, menu management, and real-time tracking.</div>
          </div>
        </div>
        <div className="service-img-box" data-aos='fade-left'>
         <div className="services-img">
         
         </div>
        </div>
        </ServiceBox>
        <ServiceBox>
          <div className="service-dot">
            <div className="service-fill">

            </div>
          </div>
        <div className="service-img-box" data-aos="fade-right">
         <div className="services-img">
         
         </div>
        </div>
        <div className="service-content" data-aos='fade-left'>
          <div className="service-des">
              <div className="ser-h"><span>9</span>Corporate Travel Bookings and Offsite Training Arrangements</div>
          <div className="ser-para">Simplify business travel and training logistics with our expert services, covering flight bookings, accommodation, and offsite training arrangements, ensuring seamless experiences</div>
          </div>
        </div>
        </ServiceBox>
      </ServiceBoxes>
    </div>
  )
}
