import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/slnis_logo.png'


const FooterContainer = styled.div`
width: 100%;
height: 17vw;
display: flex;
flex-direction: column;
position: relative;
align-items: center;
justify-content: center;
background: linear-gradient(45deg, #141414, #121212);


.footer-lines{
  width: 90%;
  padding: 0.4vw 0vw;
  border-top: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.9vw;
  color: white;
}
.footer-lines a{
  color: white;
}
.terms{
display: flex;
align-items: center;
justify-content: center;
gap: 2vw;
font-size: 0.9vw;
color: white;
}
`;

const FooterContent = styled.div`
width: 80%;
height: 80%;
display: flex;
align-items: center;
justify-content: center;
gap: 2vw;

.footer-left{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1vw;
  width: 20%;
}
.social-box{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5vw;
}
.social-box a{
  width: 2vw;
  height: 2vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg,#f82b07,#bb1c00);
  color: white;
  border-radius: 0.4vw;
  font-size: 0.8vw;
}
.footer-list{
  display: flex;
  padding: 0;
  margin: 0;
  align-items: center;
  justify-content: center;
  gap: 3vw;
  list-style: none;
  font-size: 1.1vw;
  font-family: "Source Sans 3";
  color: white;
  width: 60%;
}
.footer-logo{
  width: 4vw;
}
.footer-address{
  width: 20%;
  
}
.footer-ch{
  font-size: 1.5vw;
  font-family: "heebo";
  color: white;
  font-weight: 700;
  margin-left: 3vw;
}
.address{
  color: white;
  display: flex;
}
.address i {
  width: 2.5vw;
  height: 2.5vw;
  margin-right: 0.5vw;
  border-radius: 50%;
  background: #f82b07;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8vw;
}
.address p{
  padding: 0;
  width: 80%;
  margin: 0;
  margin-top: 0.4vw;
}
`;
export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <div className="footer-left">
           <img src={logo} alt="" className="footer-logo" />
        <div className="social-box">
          <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
          <a href="#"><i class="fa-brands fa-instagram"></i></a>
          <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
          <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
        </div>
        </div>
     
        <ul className="footer-list">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>SERVICES</li>
          <li>CONTACT US</li>
        </ul>
       <div className="footer-address">
<div className="footer-ch">CONTACT US</div>
<div className="address">
<i class="fa-solid fa-location-dot"></i>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, ipsa necessitatibus.</p>
</div>
       </div>
      </FooterContent>
      <div className="footer-lines">
        <div className="fline">Copyright © 2025 SLN Corporate Solutions Pvt Ltd . All Rights Reserved.</div>
        <div className="terms">
          <a href="#">TERMS</a>
          <a href="#">PRIVACY POLICY</a>
        </div>
      </div>
    </FooterContainer>
  )
}
