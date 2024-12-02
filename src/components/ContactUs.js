import React from 'react'
import styled from 'styled-components';
import contact from '../assets/images/contact_bg.jpg'


const ContactTop = styled.div`
width: 100%;
height: 80vh;
display: flex;
flex-direction: column;
align-items: center;
background-image: url(${contact});
background-size: cover;
background-position: center;
position: relative;

& .Contact-overlay{
  width: 100%;
  height: 100%;
  position: absolute;
  
}
`;

const ContactH = styled.div`
font-size: 4vw;
font-family: "heebo";
font-weight: 300;
position: relative;
text-transform: uppercase;
margin-top: 10vw;

& span{
    color: #f82b07;
    font-weight: 900;
    position: relative;
}
`;

const ContactPara = styled.div`
font-weight: 500;
font-family: "Source Sans 3";
position: relative;
font-size: 1.1vw;
`;

const TouchH1 = styled.h2`
font-size: 1vw;
font-family: "heebo";
color:#f82b07;
font-weight: 300;
text-align: center;
`

const TouchPara = styled.p`
font-family: "Source Sans 3";
font-size: 1vw;
text-align: center;
width: 100%;
text-align: center;
`;

const Touch = styled.h2`
text-align: center;
font-size: 2vw;
text-transform: uppercase;
font-family: "heebo";
font-weight: 800;
color: black;
`;
const ContactBoxes = styled.div`
width: 100%;
height: auto;
display: flex;
align-items: center;
justify-content: center;
gap: 2vw;
margin-top: 3vw;
`;

const ContBox= styled.div`
width: 22vw;
height: 19vw;
border-radius: 1vw;
background-color:  #001b29;
backdrop-filter: blur(40px);
display: flex;
gap: 0.4vw;
flex-direction: column;
align-items: center;
justify-content: center;
overflow: hidden;

svg{
    width: 4vw;
    fill: #04a7fd;
}

.cont-heading{
    font-size: 1.3vw;
    font-family: "Source Sans 3";
    font-weight: 500;
    color: white;
}
.cont-data{
    font-family: "heebo";
    color: white;
    opacity: 0.8;
    text-align: center;
    font-size: 1.1vw;
    max-width: 80%;
}
.cont-glow{
    width: 10vw;
    height: 10vw;
    border-radius: 50%;
    background-color: #04a7fd;
    position: absolute;
    filter: blur(80px);
    right: -5vw;
    top: -5vw;
}
`;

const FormBox = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 3vw;
`;

const FormH = styled.h2`
font-size: 2vw;
font-family: "heebo";
text-align: center;
`;


export default function ContactUs() {
  return (
    <div>
        <ContactTop>
        <div className="Contact-overlay">

        </div>
       <ContactH>
<span>Contact</span> US
       </ContactH>
       <ContactPara>
       Our Story, Values, and Vision
       </ContactPara>
      </ContactTop>
      <TouchH1>CONTACT</TouchH1>
      <Touch>GET IN TOUCH WITH US</Touch>
      <TouchPara>We’re here to help! Contact us today for any inquiries or assistance.</TouchPara>
      <ContactBoxes>
            <ContBox>
                <div className="cont-glow">

                </div>
             <div className="cont-logo">
             <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0"
        y="0"
        viewBox="0 0 513.64 513.64"
        style={{ enableBackground: 'new 0 0 512 512' }}
        xmlSpace="preserve"
        className=""
      >
        <g>
          <path
            d="m499.66 376.96-71.68-71.68c-25.6-25.6-69.12-15.359-79.36 17.92-7.68 23.041-33.28 35.841-56.32 30.72-51.2-12.8-120.32-79.36-133.12-133.12-7.68-23.041 7.68-48.641 30.72-56.32 33.28-10.24 43.52-53.76 17.92-79.36l-71.68-71.68c-20.48-17.92-51.2-17.92-69.12 0L18.38 62.08c-48.64 51.2 5.12 186.88 125.44 307.2s256 176.641 307.2 125.44l48.64-48.64c17.921-20.48 17.921-51.2 0-69.12z"
            opacity="1"
            data-original="#000000"
            className=""
          ></path>
        </g>
      </svg>
             </div>
             <div className="cont-heading">
             PHONE
             </div>
             <div className="cont-data">
             +919897969594
             </div>
            </ContBox>
            <ContBox>
                <div className="cont-glow">

                </div>
             <div className="cont-logo">
             <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink"  x="0" y="0" viewBox="0 0 512 512" style={{enableBackground:'new 0 0 512 512'}} xmlSpace="preserve" class=""><g><path d="M298.789 313.693c-12.738 8.492-27.534 12.981-42.789 12.981-15.254 0-30.05-4.489-42.788-12.981L3.409 173.82A76.269 76.269 0 0 1 0 171.403V400.6c0 26.278 21.325 47.133 47.133 47.133h417.733c26.278 0 47.133-21.325 47.133-47.133V171.402a75.21 75.21 0 0 1-3.416 2.422z"  opacity="1" data-original="#000000" class=""></path><path d="m20.05 148.858 209.803 139.874c7.942 5.295 17.044 7.942 26.146 7.942 9.103 0 18.206-2.648 26.148-7.942L491.95 148.858c12.555-8.365 20.05-22.365 20.05-37.475 0-25.981-21.137-47.117-47.117-47.117H47.117C21.137 64.267 0 85.403 0 111.408a44.912 44.912 0 0 0 20.05 37.45z"  opacity="1" data-original="#000000" class=""></path></g></svg>
             </div>
             <div className="cont-heading">
           EMAIL
             </div>
             <div className="cont-data">
     info@slnis.in
             </div>
            </ContBox>
            <ContBox>
                <div className="cont-glow">

                </div>
             <div className="cont-logo">
             <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 512 512" style={{enableBackground:"new 0 0 512 512"}} xmlSpace="preserve" class=""><g><path d="M256 0C166.035 0 91 72.47 91 165c0 35.202 10.578 66.592 30.879 96.006l121.494 189.58c5.894 9.216 19.372 9.198 25.254 0l122.021-190.225C410.512 232.28 421 199.307 421 165 421 74.019 346.981 0 256 0zm0 240c-41.353 0-75-33.647-75-75s33.647-75 75-75 75 33.647 75 75-33.647 75-75 75z"  opacity="1" data-original="#000000" class=""></path><path d="m373.264 344.695-75.531 118.087c-19.551 30.482-64.024 30.382-83.481.029l-75.654-118.085C72.034 360.116 31 388.309 31 422c0 58.462 115.928 90 225 90s225-31.538 225-90c0-33.715-41.091-61.923-107.736-77.305z"  opacity="1" data-original="#000000" class=""></path></g></svg>
             </div>
             <div className="cont-heading">
ADDRESS
             </div>
             <div className="cont-data">
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet numquam architecto vel ducimus dolorem velit beatae dolorum ipsum
             </div>
            </ContBox>
      </ContactBoxes>
      <FormBox>
        <FormH>Reach Out to Us</FormH>
        <form action="">
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <textarea name="" id=""></textarea>
        </form>
      </FormBox>
    </div>
  )
}
