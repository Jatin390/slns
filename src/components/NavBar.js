import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/images/slnis_logo.png';
import { Link } from 'react-router-dom';

const NavContainer = styled.div`
  width: 100%;
  position: fixed;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  transition: all 0.3s ease;
  top: 0;
  z-index: 100000000;

  &.scrolled {
    background-color: rgba(255, 255, 255, 0.7);
    padding-top: 0;
    backdrop-filter: blur(10px);
  }
`;

const Img = styled.img`
  width: 40px;
  margin-left: 40px;
`;

const NavList = styled.ul`
  width: 40%;
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: space-around;

  & li {
    color: black;
    font-family: 'Source Sans 3';
    font-size: 15px;
    font-weight: 600;
    position: relative;
    cursor: pointer;
  }
 
  & .nav-arrow{
    font-family: "manrope";
    font-size: 1.2vw;
    position: absolute;
    transform: translate(4px,-4px);
    color: #f82b07;
    transition: all 0.3s ease;
  }
  /* Dropdown styling */
  .dropdown {
    position: relative;
  }


  .dropdown-content {
    transition: all 0.3s ease;
    transform: translateY(-10px);
    opacity: 0;
    visibility: hidden;
    position: absolute;
    width: 220px;
    top: 100%;
    left: 0;
    background-color: #ffffff;
    padding: 10px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    list-style: none;
  }

  .sub-drop-down-content{
    transition: all 0.5s ease;
    transform: translateY(-10px);
    opacity: 0;
    width: 220px;
    visibility: hidden;
    position: absolute;
    top: -5px;
    left: -255px;
    background-color: #ffffff;
    padding: 10px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    list-style: none;
  }

  .sub-drop-down-content li:hover{
    background-color: #f82b07;
  }

  .dropdown:hover .dropdown-content {
   visibility: visible;
   transform: translateY(0);
   opacity: 1;
  }
  .sub-drop-down{
    color: red;
  }
  .sub-drop-down:hover{
    background-color: #f82b07;
  }
  .sub-drop-down:hover .sub-drop-down-content {
   visibility: visible;
   transform: translateY(0);
   opacity: 1;
  }
  & .dropdown:hover .nav-arrow{
    transform: rotate(90deg) translate(-2px,-8px);
  }

  .dropdown-content li {
    padding: 8px 10px;
  }

  .dropdown-content li a {
    color: black;
    text-decoration: none;
  }
`;

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <NavContainer className={scrolled ? 'scrolled' : ''}>
        <Img src={logo} alt="SLNIS LOGO" />
        <NavList>
          <li><Link to="/slns">HOME</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li className="dropdown">
           <Link to="/services">OUR SERVICES <span className='nav-arrow'>&gt;</span></Link> 
            <ul className="dropdown-content">
              <li className='sub-drop-down'><Link to="/services" >Facility Management Services</Link>
              </li>
              <li className='sub-drop-down'><Link to="/services" >Corporate Gifting</Link>
                <ul className="sub-drop-down-content">
                <li><Link to="">Premium Gifts</Link></li>
              <li><Link to="">Customized Gifts</Link></li>
              <li><Link to="">Tech Gifts</Link></li>
              <li><Link to="">Luxury Gifts</Link></li>
              <li><Link to="">Wellness Gifts</Link></li>
              <li><Link to="">Eco-Friendly Gifts</Link></li>
              <li><Link to="">Food and Beverage Gifts</Link></li>
              <li><Link to="">Travel Accessories</Link></li>
              <li><Link to="">Stationery and Office Gifts</Link></li>
              <li><Link to="">Premium Gifts</Link></li>
              <li><Link to="">Customized Gifts</Link></li>
              <li><Link to="">Tech Gifts</Link></li>
              <li><Link to="">Luxury Gifts</Link></li>
                </ul>
              </li>
              <li className='sub-drop-down'><Link to="/services" >Corporate Catering Services</Link>
                <ul className="sub-drop-down-content">
                <li><Link to="">Catering Services</Link></li>
              <li><Link to="">Food Delivery Services</Link></li>
              <li><Link to="">Cafeteria Management</Link></li>
              <li><Link to="">Concession Management</Link></li>
              <li><Link to="">Vending Services</Link></li>
              <li><Link to="">Other Food-Related Services</Link></li>
                </ul>
              </li>
              <li className='sub-drop-down'><Link to="/services" >Corporate Transport Services</Link>
              </li>
              <li className='sub-drop-down'><Link to="/services" > Event Management</Link>
                <ul className="sub-drop-down-content">
                <li><Link to="">Event Services</Link></li>
              <li><Link to="">Event Formats</Link></li>
              <li><Link to="">Corporate Event Activities</Link></li>
              <li><Link to="">Corporate Event Venues</Link></li>
                </ul>
              </li>
              <li className='sub-drop-down'><Link to="/services" >Supply of Pantry, Stationery, and Housekeeping Consumables</Link>
                <ul className="sub-drop-down-content">
                <li><Link to="">Transport Services</Link></li>
              <li><Link to="">Corporate Leisure Travel</Link></li>
              <li><Link to="">Gifts</Link></li>
              <li><Link to="">Event Services</Link></li>
                </ul>
              </li>
              <li className='sub-drop-down'><Link to="/services" >Corporate/Apartment/Tech Park Landscape Solutions and Management</Link>
               
              </li>
              <li className='sub-drop-down'><Link to="/services" >Technology for Corporate Catering</Link>
          
              </li>
              <li className='sub-drop-down'><Link to="/services" >Corporate Travel Bookings and Offsite Training Arrangements</Link>
           
              </li>
            </ul>
          </li>
          <li><Link to="/contact">CONTACT US</Link></li>
        </NavList>
      </NavContainer>
    </div>
  );
}
