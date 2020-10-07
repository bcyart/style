import React,{useState,useEffect} from "react"
import Seo from '../components/seo'
import {Link} from 'gatsby'
import { createGlobalStyle } from "styled-components"
import {HeaderContainer,LogoContainer,HeaderButtonsContainer,HamburgerButton,ToggleButton,Navigation,ModelContainer,BannerText,ShowReelWrapper,AllProjectsWrapper,
  ServicesWrapper,ServicesListContainer,ServicesTextContainer,AccordionHeader,AccordionIcon,AccordionContent,Footer,NavWrapper,HamburgerButtonClosed,MainFooterWrapper,NavFooterWrapper
,NavListWrapper} from '../components/styledcomponents'

import DDDModel from '../components/cameramodel'

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
*{
margin:0px;
padding:0px;
box-sizing:border-box;

}
body{
  background:${({ dark }) => dark ? 'white' : 'black'};
  color:${({ dark }) => dark ? 'black' : 'white'};
  position: relative;
  overflow-x:hidden;
  overflow-y:${({ open }) => open ? 'hidden' : ' auto'};
  font-size:16px;
  font-family:"Montserrat",-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  a {
  color: inherit; /* blue colors for links too */
  text-decoration: inherit; /* no underline */
}

}

body::-webkit-scrollbar {
  width:${({ open }) => open ? '0px' : ' 0.25rem'};
}

body::-webkit-scrollbar-track {
  background: #1e1e24;
}

body::-webkit-scrollbar-thumb {
  background: red;
}

.part2{
 
 width: 100%;
 height: 100%;
 margin: 0;
 border: 0;
 outline: 0;

 position: absolute;
 top: 0px;
 right: 0;
 left: 0;
 z-index: 100;

 animation: kill 8s ease forwards 3s; 
}
.svg-part{
 top: 0;
 left: 0;
 position: absolute;
 height: 100vh;
 width:100vw;
 overflow: hidden;


}
.eyo{

height: 100vh;
background: black;
display: flex;
align-items: center;
justify-content: center;
animation: shot 7s ease forwards 3s;
}

#logo {
transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 5, 45, 0, 1);
animation: fill 7s ease forwards 3s;
transform: scale(0.9);
}

#logo path:nth-child(1){
 stroke-dasharray: 123px; 
 stroke-dashoffset: 123px;
 animation: line-anim 2s ease forwards;
 
}
#logo path:nth-child(2){
 stroke-dasharray: 122px; 
 stroke-dashoffset: 122px; 
 animation: line-anim 2s ease forwards;
}
#logo path:nth-child(3){
stroke-dasharray: 348px; 
stroke-dashoffset: 348px; 
animation: line-anim 2s ease forwards;
}
#logo path:nth-child(4){
stroke-dasharray: 351px; 
stroke-dashoffset: 351px;
animation: line-anim 2s ease forwards 0.3s;
}
#logo path:nth-child(5){
stroke-dasharray: 244px; 
stroke-dashoffset: 244px; 
animation: line-anim 2s ease forwards 0.6s;
}
#logo path:nth-child(6){
stroke-dasharray: 308px;
stroke-dashoffset: 308px; 
animation: line-anim 2s ease forwards 1.3s;
}
#logo path:nth-child(7){
stroke-dasharray: 347px; 
stroke-dashoffset: 347px; 
animation: line-anim 2s ease forwards 0.5s;
}
#logo path:nth-child(8){
stroke-dasharray: 240px; 
stroke-dashoffset: 240px; 
animation: line-anim 2s ease forwards 1.0s;
}
#logo path:nth-child(9){
stroke-dasharray: 128px; 
stroke-dashoffset: 128px; 
animation: line-anim 2s ease forwards 1.3s;
}
#logo path:nth-child(10){
stroke-dasharray: 129px; 
stroke-dashoffset: 129px; 
animation: line-anim 2s ease forwards 1.2s;
}
#logo path:nth-child(11){
stroke-dasharray: 120px; 
stroke-dashoffset: 120px; 
animation: line-anim 2s ease forwards 0.4s;
}
#logo path:nth-child(12){
stroke-dasharray: 121px; 
stroke-dashoffset: 121px; 
animation: line-anim 2s ease forwards 0.6s;
}
#logo path:nth-child(13){
stroke-dasharray: 701px; 
stroke-dashoffset: 701px; 
animation: line-anim 2s ease forwards 0.9s;
}
#logo path:nth-child(14){
stroke-dasharray: 1194px; 
stroke-dashoffset: 1194px; 
animation: line-anim 2s ease forwards 0.5s;
}
#logo path:nth-child(15){
stroke-dasharray: 32px; 
stroke-dashoffset: 32px; 
animation: line-anim 2s ease forwards 0.1s;
}
#logo path:nth-child(16){
stroke-dasharray: 584px; 
stroke-dashoffset: 584px; 
animation: line-anim 2s ease forwards 0.6s;
}
#logo path:nth-child(17){
stroke-dasharray: 13px; 
stroke-dashoffset: 13px; 
animation: line-anim 2s ease forwards 0.3s;
}
#logo path:nth-child(18){
stroke-dasharray: 5px; 
stroke-dashoffset: 5px; 
animation: line-anim 2s ease forwards 1.3s;
}
#logo path:nth-child(19){
stroke-dasharray: 12px; 
stroke-dashoffset: 12px; 
animation: line-anim 2s ease forwards 0.4s;
}
#logo path:nth-child(20){
stroke-dasharray: 5px; 
stroke-dashoffset: 5px;
animation: line-anim 2s ease forwards 1.0s; 
}


@keyframes line-anim {
to{
 stroke-dashoffset: 0;
}
}
@keyframes kill{

100%{
position: static;
overflow: auto; 
}


}
@keyframes shot{
to{
opacity: 0%;
 width:0px;  
 height: 0px;
 display:none;
}

}

@keyframes dissappear{
to{
  height: 0px;

}

}


@media screen and (min-width: 992px) {
.svg-part{
animation: dissappear 7s ease forwards 3s; 
}


}


`



const App=()=>{
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, [])


const[dark,setDark]=useState(true);
let comp;

const accordionHandler =(id,nd)=>{

if(document.getElementById(id).classList.length>2){
  document.getElementById(id).classList.toggle("hideagain");
  document.getElementById(nd).classList.toggle("lshape");
}
else{
  document.getElementById(id).classList.toggle("reverse");
  document.getElementById(nd).classList.toggle("lshape");
 
}

}

  return(
    < >
      {loading === false ? (
<div>
      <GlobalStyle open={open} dark={dark}/>  
   
<Header open={open} setOpen={setOpen} dark={dark} setDark={setDark}/>
<ModelContainer  dark={dark}>
<DDDModel/>
</ModelContainer>
 <BannerText dark={dark}>
<MyBannerText/>
 </BannerText>
 <ShowReel />
<AllProjects  dark={dark} open={open} setOpen={setOpen} />
<Services dark={dark} accordionHandler={accordionHandler} />
<MainFooterWrapper dark={dark} >
<MyFooter dark={dark} />
</MainFooterWrapper >
< NavigationContainer dark={dark} comp={comp}   open={open} setOpen={setOpen}/>
</div>
 ) : (
            
              <div className="svg-part">
              <div className="part2">
              <div className="eyo">
                <svg id="logo" xmlns="http://www.w3.org/2000/svg" width="824.166" height="187.125" viewBox="0 0 824.166 187.125">
                  <g id="svgbcy" transform="translate(-45 519.039)">
                    <path id="Path_1" data-name="Path 1" d="M438.8-516.1c-4.8,1.6-15.8,7.5-15.8,8.6,0,.2,4,7,8.8,15.3l8.8,15,11.2-19.4C458-507.2,463-516.4,463-517,463-518.8,445.1-518.1,438.8-516.1Z" fill="none" stroke="#fff" strokeWidth="2"/>
                    <path id="Path_2" data-name="Path 2" d="M461.7-500.2l-8.5,14.7,11.4.3c6.3.1,16.6.1,22.9,0l11.5-.3-2.4-5c-4.7-10.1-13.8-19.2-23-23l-3.5-1.5Z" fill="none" stroke="#fff" strokeWidth="2"/>
                    <path id="Path_3" data-name="Path 3" d="M171.5-505.7c-9.9,3.3-18,9.9-22.4,18.1-6.5,12.4-4.5,30.1,4.5,40.9,13.3,16,41.8,17,56.5,2.1,2.3-2.4,4.1-4.5,3.8-4.7-.2-.2-2-1.6-4-3l-3.5-2.7-3.4,3.5c-4.8,4.9-12.1,7.8-20,7.8-15.8,0-27.2-10.9-27.2-26.2-.1-11.4,4.5-19.1,14.3-24,11.1-5.5,23.9-3.8,32.3,4.3l4.4,4.3,3.8-3.2,3.8-3.2-4.8-4.7c-7-7.1-14.1-9.9-25.1-10.3C178.9-506.9,174-506.5,171.5-505.7Z" fill="none" stroke="#fff" strokeWidth="2"/>
                    <path id="Path_4" data-name="Path 4" d="M46-470.1V-435H58.3c14.2,0,18.4-1,23.3-5.2,10-8.8,9.8-23.1-.4-30.6l-3.7-2.7,2.3-2.4c5.3-5.7,5-16.5-.6-22.4-4.8-5.1-7.7-6-20.9-6.5L46-505.2Zm24.9-22.5c2.3,2.1,2.8,7.4,1,10.8-1.4,2.6-6.8,4.8-11.9,4.8H56v-18.2l6.4.4C66.9-494.5,69.5-493.8,70.9-492.6Zm-.7,26.8C79.9-462.9,82-452,73.8-447c-2.5,1.5-5.1,2-10.5,2H56v-22h5.1A35.814,35.814,0,0,1,70.2-465.8Z" fill="none" stroke="#fff" strokeWidth="2"/>
                    <path id="Path_5" data-name="Path 5" d="M270-504.6c0,.3,5,8.6,11,18.3l11,17.8V-435h10v-32.6L312.6-485c5.9-9.6,10.8-18,11.1-18.7.4-1-.9-1.3-5-1.3h-5.4l-8.1,13.1-8,13.1-8-12.9-7.9-12.8-5.7-.3C272.5-505,270-504.9,270-504.6Z" fill="none" stroke="#fff" strokeWidth="2"/>
                    <path id="Path_6" data-name="Path 6" d="M611.6-496.8c-4.7,10.3-28.7,61.1-29.3,62-.2.5,2.1.8,5.2.8h5.7l5.1-11,5.2-11h26.6l5.2,11,5.2,10.9,5.3.1c2.8,0,5.2-.2,5.2-.5s-7.2-16-16-34.8c-12.6-27-16.3-34.3-18-34.5C615.4-504.1,614.4-502.8,611.6-496.8Zm9.5,21.2c2.1,4.6,3.9,8.7,3.9,9s-3.8.6-8.5.6h-8.4l4.2-9c2.3-4.9,4.3-8.9,4.5-9C617-484,618.9-480.2,621.1-475.6Z" fill="none" stroke="#fff" strokeWidth="2"/>
                    <path id="Path_7" data-name="Path 7" d="M710-469.1V-434h10v-15.5c0-8.5.3-15.5.8-15.5.4,0,6.1,7,12.6,15.5L745.3-434h5.9c3.2,0,5.8-.3,5.8-.6,0-.5-18.2-24.5-21.8-28.6-1.3-1.5-1-1.8,2.4-3.3,10.2-4.2,15-15.4,10.9-25.2-3.8-9.1-9-11.5-25.7-12.1l-12.8-.4ZM735.1-493c5.1,2.8,6,11.1,1.7,15.7-1.9,2-3.1,2.3-9.5,2.3H720v-19h6.6C730.2-494,734-493.5,735.1-493Z" fill="none" stroke="#fff" strokeWidth="2"/>
                    <path id="Path_8" data-name="Path 8" d="M817.2-499.3l.3,4.8,10.3.3,10.2.3V-434h10v-59.9l9.8-.3,9.7-.3.3-4.8.3-4.7H816.9Z" fill="none" stroke="#fff" strokeWidth="2"/>
                    <path id="Path_9" data-name="Path 9" d="M414.7-499.3c-6.8,9.9-10.7,24-9.3,33.6l.7,4.7h35.7l-11.9-20.7c-6.6-11.3-12.1-20.8-12.3-21C417.5-502.9,416.1-501.3,414.7-499.3Z" fill="none" stroke="#fff" strokeWidth="2"/>
                    <path id="Path_10" data-name="Path 10" d="M476.3-459c6.7,11.5,12.4,21,12.7,21s2.3-2.6,4.3-5.7c5.5-8.2,7.9-17,7.5-27.4l-.3-8.4-18.2-.3-18.1-.2Z" fill="none" stroke="#fff" strokeWidth="2"/>
                    <path id="Path_11" data-name="Path 11" d="M454.2-443.3c-6.2,10.8-11,19.9-10.6,20.2.3.3,4.9.6,10.2.5,8,0,10.8-.5,16-2.6,6.7-2.8,13.2-6.8,13.2-8.2,0-.9-14.8-26.5-16.4-28.3C465.8-462.6,462.7-458.1,454.2-443.3Z" fill="none" stroke="#fff" strokeWidth="2"/>
                    <path id="Path_12" data-name="Path 12" d="M408-455c0,2.9,6.8,13.9,11.4,18.6,4.6,4.6,13.8,10.4,16.4,10.4.7,0,13.7-21.3,17.9-29.3.2-.4-10-.7-22.6-.7C415.9-456,408-455.6,408-455Z" fill="none" stroke="#fff" strokeWidth="2"/>
                    <path id="Path_13" data-name="Path 13" d="M308.6-399c-2.5,5.4-2.9,5.8-6.9,6.4-2.3.3-7.7,1.4-11.9,2.3-6.2,1.2-7.8,2-7.8,3.4,0,2.6,1.5,2.7,11.2.9,8.1-1.6,8.8-1.6,8.2-.1-.4.9-1.9,4.8-3.3,8.8-1.5,4-3.8,8.4-5.1,9.9-2.9,3.1-9.9,8.4-11.2,8.4-1.8,0-.6-4.4,2.9-10.9,3.2-5.8,3.6-7.1,2.5-8.4-1.2-1.4-1.8-1.4-5.3-.2-2.2.8-4.6,1.2-5.3.9-2.2-.8-5.6,1.4-4.9,3.2S261.1-361,258.6-361c-1.5,0-1.7-.6-1.3-3.8a62.4,62.4,0,0,1,1.2-6.2c.5-2.2.1-2.7-3.4-4.4l-4-1.9-4.5,2.7c-9.4,5.5-13.9,12-11.1,16.2,2.1,3.3,6,3.1,11.6-.5l4.5-2.8,2.1,2.3c3.5,3.9,6.9,3.2,12.7-2.9a106.406,106.406,0,0,0,7.5-8.5c1.3-1.8,3.2-3.2,4.3-3.2a11.241,11.241,0,0,0,3.9-1c2.6-1.5,2.4-.7-1.7,6-7.5,12.2-.5,17.7,10.1,7.9l4.3-4v3.6c0,7.2,5.6,9.9,13,6.3,6.3-3,17.2-13.6,17.2-16.8,0-2.2-.2-2-2.8,1.4-4,5.3-15.8,12.8-19.7,12.4-2.9-.3-3-.5-3.1-5.3-.1-4.9,2.6-14.3,6.1-21.7,1.5-3,2.5-3.8,5.4-4.2,7.5-1.1,27.2-2.5,42.6-3.1,20.6-.7,43.1-1.6,52-2,3.9-.2,10.3-.4,14.3-.4,4.3-.1,7.2-.5,7.2-1.2,0-.5-.4-.7-1-.4-.5.3-1,.2-1-.3,0-1.5-76.6-.4-96.4,1.3-9.3.8-17.1,1.4-17.2,1.2-.2-.2.5-2.1,1.6-4.2,2.2-4.4,2.2-5.7-.2-6.1C311.8-404.7,310.3-402.8,308.6-399ZM253-371.2c0,2.8-2.9,6.2-7.8,9.3-5.4,3.4-6.2,3.5-6.2.9,0-3.6,10.8-13.8,13.2-12.4A3.2,3.2,0,0,1,253-371.2Z" fill="none" stroke="#fff" strokeWidth="2"/>
                    <path id="Path_14" data-name="Path 14" d="M606.2-399.3l-2.8,5.7L592-391.3c-12.3,2.5-14.3,3.4-12,5.7,1.3,1.3,2.7,1.2,10.3-.4,10.1-2,9.6-3,5.3,8.4a27.108,27.108,0,0,1-7.6,11.8c-7.4,7.1-10.4,6-7.4-2.8.8-2.5,1.4-4.7,1.2-4.8-6.2-3.7-7.3-3.9-11.9-1.6a46.239,46.239,0,0,0-10.1,8.1c-5.4,5.7-5.8,6-9.9,5.7-5-.4-6.1-2.2-2.1-3.6,4.1-1.4,9.4-7,9-9.6-.7-5.1-9.4-1.8-14.1,5.3-2.2,3.4-10.3,10.1-12.1,10.1-1.6,0-.3-6,1.9-9.2,5.5-8.2,5.3-12.7-.5-10.6a30.937,30.937,0,0,1-6.2,1.2c-1.8.2-3.9.4-4.6.5-.8,0-1.1.8-.8,1.9.9,2.7-5.9,10.1-11.8,12.8-5.7,2.7-11.4,3.1-12.2,1-.8-2,1.8-6.5,6-10.5,3.3-3.2,3.6-3.3,3.6-1.3,0,3.2,3.8,3,4.6-.3s-.1-5.5-2.4-5.5c-2.4,0-8.8,4.6-12.9,9.4-6,6.7-3.4,13.6,5,13.6,7.7-.1,15.9-5.4,22.4-14.5a10.866,10.866,0,0,1,6.2-4.1l4.2-1.1-1.8,2.6c-4.7,7.1-6.5,11.3-5.9,13.6,1.2,4.5,8.8,4.2,13.2-.6,1.6-1.8,1.7-1.8,4.6.6,3.2,2.7,7,3.1,11.4,1.5,2.2-.9,2.9-.8,3.6.5,1.4,2.5,7,1.8,11.8-1.4l4.4-2.9,1.9,2.4c2.8,3.6,6.8,3.2,11.7-1.2l4-3.6v2.9c0,6.5,6.1,9.8,12.2,6.7a72.306,72.306,0,0,0,7.9-4.9l4.7-3.3.6,2.8c1.3,6.9,9.2,7.6,16.4,1.4,2.3-2,4.2-3.3,4.2-2.9s-.9,4.3-2,8.7c-3.4,13.2-1.6,22.5,3.8,19.2,2.5-1.6,6.9-10.9,9-19.4l1.9-7.5,4.6-.5c2.5-.3,5.6-1.5,6.7-2.5,2.3-2.1,6.5-9.5,5.4-9.5-.4,0-2.6,1.8-5,4-6.1,5.6-9.5,5.3-10.7-.8-.6-2.9-.2-3.7,2.7-6.3,3.6-3.1,8.6-11.9,8.6-15.1,0-1.6,1-1.8,8.3-1.9a85.62,85.62,0,0,0,9.8-.4c.9-.1,9.9-.6,20-.9,20.4-.7,21.5-.8,22.6-2.1.4-.4.2-.5-.4-.1-.7.4-1.3.3-1.3-.3,0-.7-13.1-.8-38.7-.6-39.3.5-47.6.8-63.8,2.5-4.9.5-9.6,1-10.3,1-.9,0-.6-1.2.8-4.1,2.1-4,2.1-6.9.1-6.9C609.5-405,607.8-402.4,606.2-399.3Zm46,8.7c-1.1,1.1-3.7,5.2-5.7,9.1-4.9,8.9-5.5,9.9-10.7,15.3-4.8,5.1-9.4,8.2-12,8.2-2.4,0-2.4-6.6-.1-11.5,1.3-2.7,1.4-3.8.5-4.7-1-1-1.6-.7-2.9,1.2-3.4,4.9-6.9,8-12.7,11.5-12.2,7.2-15,3.5-9.9-13,2.9-9.1,6-14.3,9-14.9,3.3-.6,27.2-2.6,35.8-2.9,3.3-.1,7-.3,8.3-.3C654.1-392.7,654.1-392.7,652.2-390.6Zm6.4,3c-.6,2.3-9.6,11.9-10.4,11.1-.5-.5,3.2-6.5,7.6-12.4C658.4-392.4,659.7-391.8,658.6-387.6ZM552-371.5a13.075,13.075,0,0,1-3.4,2.7c-2,1.1-2,1-.6-.8,1.9-2.4,4.4-4.4,4.9-3.8C553.1-373.2,552.7-372.3,552-371.5Zm24,.4c0,2.2-7.6,9.7-11.2,11-2.5,1-2.8.8-2.8-1.2.1-2.7,4.4-7.9,8.9-10.6C574.6-374.1,576-373.9,576-371.1Zm71,8.6c0,3.3-3.9,16.4-6.2,20.9-1.9,3.5-2.3,3.8-2.6,1.9-.4-2.7,2.3-16.7,4.5-23.6,1.4-4.4,1.6-4.7,2.9-3A8.031,8.031,0,0,1,647-362.5Z" fill="none" stroke="#fff" strokeWidth="2"/>
                    <path id="Path_15" data-name="Path 15" d="M628.2-387.9c-5.3,3-6.3,5.1-2.6,5.7,2.3.3,10.4-5.4,10.4-7.4C636-391.7,634.1-391.3,628.2-387.9Z" fill="none" stroke="#fff" strokeWidth="2"/>
                    <path id="Path_16" data-name="Path 16" d="M449-393.8c-3.3,10.7-9,25-10.9,27.2-2.1,2.5-9.1,7.6-10.4,7.6-1.7,0,.2-6.1,3.3-11,3.2-4.9,3.8-8.5,1.8-9.3-.7-.2-3,.2-5.1.9-2,.7-4.4,1.1-5.1.8-2.1-.8-5.6,1.4-5,3,.5,1.2-6.3,7.6-6.9,6.5-.1-.2-.9-1.8-1.8-3.4-1.4-2.8-1.9-3-6.7-3-3.7.1-5.7.6-7.4,2.2-2.1,1.8-7.8,4.3-9.9,4.3-.5,0-.9-1.6-.9-3.5s-.4-3.5-.8-3.5c-1.3,0-4.2,3.5-4.2,5,0,1.9-6.3,9.2-9.8,11.2-2.7,1.6-3.1,1.6-4.3.2-1-1.2-1-2.2-.1-4.8,2.8-7.5.8-7.4-6.6.4-3.2,3.3-6.5,6-7.5,6-2.7,0-2.1-4.7,1.3-10.9a54.665,54.665,0,0,0,3-5.8c0-.3-1-.3-2.2-.1-2.4.3-4.9,4-7.3,11.1-1.6,4.4-1.6,5-.1,7.2,2.4,3.6,6.6,3.3,10.9-.8l3.5-3.2,1.5,2.7c1.3,2.2,2.3,2.8,5.2,2.8s4.5-.9,8.9-5.3c4.5-4.3,6-5.1,8.5-4.9a9.431,9.431,0,0,0,4.9-.7c1.7-.9,2-.6,2.5,1.8,1.2,6,7.2,8.7,11.5,5.2,1.5-1.1,5-3.7,7.8-5.6a82.828,82.828,0,0,0,8.7-7c2-1.9,4.3-3.5,5.2-3.5a10.9,10.9,0,0,0,3.6-1c2.7-1.5,2.4-.3-1.6,6-3.6,5.6-4.4,9.7-2.3,11.8,1.9,1.9,5.9,1.4,9.5-1.4,3.6-2.7,3.7-2.7,2.3,1-.6,1.7-.6,2.7.1,3.2,1.6.9,3.3-1.1,5.4-6.5,1.1-2.8,2.2-5.1,2.5-5.1s1.5,1.6,2.8,3.6c2.9,4.5,7.5,6.5,11.4,5.2,3.5-1.3,11.7-8.6,14.1-12.7,2.9-5,.1-3.8-6.9,2.9-8,7.7-10.9,8-15.4,1.8l-3.1-4.2,2.8-1.4c6.3-3.2,12.3-7.5,12.3-8.8,0-2.3-3.3-1.6-7,1.4-3.4,2.8-7.3,5.2-8.4,5.2-.3,0,1.5-5.7,4-12.7,4.4-12.5,4.8-15.3,2-15.3C451.7-401,450.4-398.4,449-393.8Zm-43.1,23.2c1.3,1.6-.1,5.6-1.9,5.6-1.3,0-4-3-4-4.4C400-372.3,403.9-373,405.9-370.6ZM397-367c0,.6,1.1,2,2.5,3.2,1.3,1.1,2.2,2.5,1.9,3-.9,1.4-5.2.9-5.8-.8-.9-2.5-.7-6.4.4-6.4A1,1,0,0,1,397-367Z" fill="none" stroke="#fff" strokeWidth="2"/>
                    <path id="Path_17" data-name="Path 17" d="M435.5-397c-3,.8-3,.8.8.9,2,0,3.7-.4,3.7-.9C440-398.1,439.8-398.1,435.5-397Z" fill="none" stroke="#fff" strokeWidth="2"/>
                    <path id="Path_18" data-name="Path 18" d="M441-396.9c0,.5.5.7,1,.4.6-.3,1-.8,1-1.1,0-.2-.4-.4-1-.4A1.1,1.1,0,0,0,441-396.9Z" fill="none" stroke="#fff" strokeWidth="2"/>
                    <path id="Path_19" data-name="Path 19" d="M733-397c-2.4.8-2.3.8.8.9,1.7.1,3.2-.4,3.2-.9C737-398.1,736.5-398.1,733-397Z" fill="none" stroke="#fff" strokeWidth="2"/>
                    <path id="Path_20" data-name="Path 20" d="M428.5-396c.3.5.8,1,1.1,1,.2,0,.4-.5.4-1a1.028,1.028,0,0,0-1.1-1C428.4-397,428.2-396.6,428.5-396Z" fill="none" stroke="#fff" strokeWidth="2"/>
                  </g>
                </svg>
              </div>
              </div>
              
              </div>
              
      )}

    </>
  )
}
export default  App;

const HamburgerButtonElement=({open,setOpen,dark})=>(
  <HamburgerButton dark={dark} open={open} onClick={() => setOpen(!open)} >
<div></div>
<div></div>
<div></div>
</HamburgerButton>
)

const HamburgerButtonElementClosed=({open,setOpen,dark})=>(
  <HamburgerButtonClosed dark={dark}  open={open} onClick={() => setOpen(!open)} >
<div></div>
<div></div>
<div></div>
</HamburgerButtonClosed>
)
const Header=({open,setOpen,setDark,dark})=>(
  <HeaderContainer>


<LogoContainer dark={dark} >
<MainLogo/>
</LogoContainer>


<HeaderButtonsContainer dark={dark} >
<ToggleButton dark={dark} onClick={()=>setDark(!dark)} />
  

<HamburgerButtonElement dark={dark}  open={open} setOpen={setOpen} />


</HeaderButtonsContainer>

</HeaderContainer>

);

const MyBannerText = ()=>(
  <div loading="lazy" >
     BCY ART’ a hoş geldiniz. Burası isteklerin 
 ve fikirlerin sanatla harmanlanıp, filme 
 dönüştüğü yer. Kısaca burası sinematik
  çalışmaların doğduğu topraklar.
  </div>
)
const MainLogo = () => (
 <div loading="lazy"> 
    <svg xmlns="http://www.w3.org/2000/svg" width="280.874" height="60" viewBox="0 0 280.874 60">
  <g  id="svgbcy" transform="translate(-46 518.037)">
    <path id="Path_21" data-name="Path 21" d="M428.4-517.409c-1.64.519-5.4,2.431-5.4,2.788,0,.065,1.367,2.269,3.007,4.959l3.007,4.862,3.827-6.288c2.118-3.436,3.827-6.418,3.827-6.612C436.666-518.284,430.551-518.057,428.4-517.409Z" transform="translate(-248.196)"/>
    <path id="Path_22" data-name="Path 22" d="M456.1-510.2l-2.9,4.765,3.895.1c2.152.032,5.672.032,7.824,0l3.929-.1-.82-1.621a15.87,15.87,0,0,0-7.858-7.455l-1.2-.486Z" transform="translate(-268.079 -2.052)"/>
    <path id="Path_23" data-name="Path 23" d="M154.241-506.41a13.326,13.326,0,0,0-7.653,5.867,12.157,12.157,0,0,0,1.537,13.257c4.544,5.186,14.281,5.51,19.3.681.786-.778,1.4-1.459,1.3-1.523-.068-.065-.683-.519-1.367-.972l-1.2-.875L165-488.842a9.858,9.858,0,0,1-6.833,2.528c-5.4,0-9.293-3.533-9.293-8.492a7.806,7.806,0,0,1,4.886-7.779,10.024,10.024,0,0,1,11.035,1.394l1.5,1.394,1.3-1.037,1.3-1.037-1.64-1.523c-2.392-2.3-4.817-3.209-8.576-3.339A16.092,16.092,0,0,0,154.241-506.41Z" transform="translate(-65.363 -7.628)"/>
    <path id="Path_24" data-name="Path 24" d="M46-493.823v11.377h4.2c4.851,0,6.286-.324,7.961-1.686,3.417-2.852,3.348-7.488-.137-9.919l-1.264-.875.786-.778a5.423,5.423,0,0,0-.2-7.261c-1.64-1.653-2.631-1.945-7.141-2.107L46-505.2Zm8.507-7.293a3.134,3.134,0,0,1,.342,3.5c-.478.843-2.323,1.556-4.066,1.556H49.417v-5.9l2.187.13A5.354,5.354,0,0,1,54.507-501.116Zm-.239,8.687c3.314.94,4.032,4.473,1.23,6.094a6.672,6.672,0,0,1-3.587.648H49.417v-7.131h1.742A12.859,12.859,0,0,1,54.268-492.429Z" transform="translate(0 -8.676)"/>
    <path id="Path_25" data-name="Path 25" d="M270-504.87c0,.1,1.708,2.788,3.758,5.932l3.758,5.77v10.859h3.417v-10.567l3.622-5.64c2.016-3.112,3.69-5.835,3.792-6.061.137-.324-.307-.421-1.708-.421h-1.845l-2.767,4.246-2.733,4.246-2.733-4.181-2.7-4.149-1.947-.1A5.177,5.177,0,0,0,270-504.87Z" transform="translate(-147.469 -8.811)"/>
    <path id="Path_26" data-name="Path 26" d="M592.3-501.558c-1.606,3.339-9.805,19.8-10.01,20.1-.068.162.718.259,1.777.259h1.947l1.743-3.566,1.776-3.566h9.088l1.777,3.566,1.777,3.533,1.811.032a4.915,4.915,0,0,0,1.777-.162c0-.1-2.46-5.186-5.466-11.28-4.3-8.752-5.569-11.118-6.15-11.183C593.6-503.924,593.259-503.5,592.3-501.558Zm3.246,6.872c.717,1.491,1.332,2.82,1.332,2.917a11.534,11.534,0,0,1-2.9.195h-2.87l1.435-2.917c.786-1.588,1.469-2.885,1.537-2.917A25.233,25.233,0,0,1,595.548-494.686Z" transform="translate(-353.063 -9.595)"/>
    <path id="Path_27" data-name="Path 27" d="M710-492.823v11.377h3.416v-5.024c0-2.755.1-5.024.273-5.024a58.9,58.9,0,0,1,4.3,5.024l4.066,5.024h2.016a5.475,5.475,0,0,0,1.982-.194c0-.162-6.218-7.941-7.448-9.27-.444-.486-.342-.583.82-1.07a6.139,6.139,0,0,0,3.724-8.168c-1.3-2.95-3.075-3.728-8.781-3.922L710-504.2Zm8.576-7.747a3.294,3.294,0,0,1,.581,5.089c-.649.648-1.059.746-3.246.746h-2.494v-6.159h2.255A10.673,10.673,0,0,1,718.576-500.57Z" transform="translate(-437.142 -9.352)"/>
    <path id="Path_28" data-name="Path 28" d="M817-502.477l.1,1.556,3.519.1,3.485.1v19.416h3.417v-19.416l3.348-.1,3.314-.1.1-1.556.1-1.523H816.9Z" transform="translate(-507.519 -9.487)"/>
    <path id="Path_29" data-name="Path 29" d="M408.391-501.609c-2.323,3.209-3.656,7.779-3.177,10.891l.239,1.523h12.2l-4.066-6.71c-2.255-3.663-4.134-6.742-4.2-6.807A4.161,4.161,0,0,0,408.391-501.609Z" transform="translate(-236.423 -10.354)"/>
    <path id="Path_30" data-name="Path 30" d="M468.334-473.193c2.289,3.728,4.237,6.807,4.339,6.807a9.469,9.469,0,0,0,1.469-1.848,13.743,13.743,0,0,0,2.562-8.881l-.1-2.723-6.218-.1L464.2-480Z" transform="translate(-275.32 -25.708)"/>
    <path id="Path_31" data-name="Path 31" d="M447.206-455.81a47.822,47.822,0,0,0-3.622,6.548,16.877,16.877,0,0,0,3.485.162,12.454,12.454,0,0,0,5.466-.843c2.289-.908,4.51-2.2,4.51-2.658,0-.292-5.056-8.59-5.6-9.173C451.169-462.066,450.11-460.607,447.206-455.81Z" transform="translate(-261.743 -38.002)"/>
    <path id="Path_32" data-name="Path 32" d="M408-455.676c0,.94,2.323,4.506,3.895,6.029,1.572,1.491,4.715,3.371,5.6,3.371a103.049,103.049,0,0,0,6.116-9.5,63.3,63.3,0,0,0-7.721-.227C410.7-456,408-455.87,408-455.676Z" transform="translate(-238.321 -41.928)"/>
    <path id="Path_33" data-name="Path 33" d="M259.933-402.787c-.854,1.75-.991,1.88-2.357,2.074-.786.1-2.631.454-4.066.745-2.118.389-2.665.648-2.665,1.1,0,.843.512.875,3.827.292,2.767-.519,3.007-.519,2.8-.032-.137.292-.649,1.556-1.127,2.852a13.355,13.355,0,0,1-1.742,3.209,14.357,14.357,0,0,1-3.827,2.723c-.615,0-.2-1.426.991-3.533,1.093-1.88,1.23-2.3.854-2.723-.41-.454-.615-.454-1.811-.065a3.981,3.981,0,0,1-1.811.292c-.752-.259-1.913.454-1.674,1.037s-3.622,4.343-4.476,4.343c-.512,0-.581-.195-.444-1.232a19.3,19.3,0,0,1,.41-2.01c.171-.713.034-.875-1.162-1.426l-1.367-.616-1.537.875c-3.212,1.783-4.749,3.89-3.792,5.251.717,1.07,2.05,1,3.963-.162l1.537-.908.717.746c1.2,1.264,2.357,1.037,4.339-.94a35.136,35.136,0,0,0,2.562-2.755,2.486,2.486,0,0,1,1.469-1.037,4.008,4.008,0,0,0,1.332-.324c.888-.486.82-.227-.581,1.945-2.562,3.954-.171,5.737,3.451,2.561l1.469-1.3v1.167c0,2.334,1.913,3.209,4.441,2.042,2.152-.972,5.876-4.408,5.876-5.446,0-.713-.068-.648-.957.454-1.367,1.718-5.4,4.149-6.731,4.019-.991-.1-1.025-.162-1.059-1.718a18.835,18.835,0,0,1,2.084-7.034,2,2,0,0,1,1.845-1.361c2.562-.357,9.293-.81,14.554-1,7.038-.227,14.725-.519,17.766-.648,1.332-.065,3.519-.13,4.886-.13,1.469-.032,2.46-.162,2.46-.389,0-.162-.137-.227-.342-.13-.171.1-.342.065-.342-.1,0-.486-26.171-.13-32.935.421-3.177.259-5.842.454-5.876.389a3.415,3.415,0,0,1,.547-1.361c.752-1.426.752-1.848-.068-1.977C261.026-404.635,260.514-404.019,259.933-402.787Zm-19,9.011c0,.908-.991,2.01-2.665,3.014-1.845,1.1-2.118,1.134-2.118.292,0-1.167,3.69-4.473,4.51-4.019A1.007,1.007,0,0,1,240.937-393.776Z" transform="translate(-124.215 -76.665)"/>
    <path id="Path_34" data-name="Path 34" d="M531.037-403.152l-.957,1.848-3.895.746c-4.2.81-4.886,1.1-4.1,1.848.444.421.922.389,3.519-.13,3.451-.648,3.28-.972,1.811,2.723a8.754,8.754,0,0,1-2.6,3.825c-2.528,2.3-3.553,1.945-2.528-.908a5.567,5.567,0,0,0,.41-1.556c-2.118-1.2-2.494-1.264-4.066-.519a15.693,15.693,0,0,0-3.451,2.626c-1.845,1.848-1.982,1.945-3.382,1.848-1.708-.13-2.084-.713-.718-1.167,1.4-.454,3.212-2.269,3.075-3.112-.239-1.653-3.212-.583-4.817,1.718-.752,1.1-3.519,3.274-4.134,3.274-.547,0-.1-1.945.649-2.982,1.879-2.658,1.811-4.117-.171-3.436a11.079,11.079,0,0,1-2.118.389c-.615.065-1.332.13-1.572.162-.273,0-.376.259-.273.616.307.875-2.016,3.274-4.032,4.149-1.947.875-3.895,1-4.168.324-.273-.648.615-2.107,2.05-3.4,1.127-1.037,1.23-1.07,1.23-.421,0,1.037,1.3.972,1.572-.1s-.034-1.783-.82-1.783c-.82,0-3.007,1.491-4.407,3.047-2.05,2.172-1.162,4.408,1.708,4.408,2.631-.032,5.432-1.75,7.653-4.7a3.729,3.729,0,0,1,2.118-1.329l1.435-.357-.615.843c-1.606,2.3-2.221,3.663-2.016,4.408.41,1.459,3.007,1.361,4.51-.194.547-.583.581-.583,1.572.194a3.844,3.844,0,0,0,3.895.486c.752-.292.991-.259,1.23.162.478.81,2.392.583,4.031-.454l1.5-.94.649.778c.957,1.167,2.323,1.037,4-.389l1.367-1.167v.94c0,2.107,2.084,3.177,4.168,2.172a24.971,24.971,0,0,0,2.7-1.588l1.606-1.07.2.908c.444,2.237,3.143,2.464,5.6.454.786-.648,1.435-1.07,1.435-.94s-.307,1.394-.683,2.82c-1.162,4.279-.547,7.293,1.3,6.223.854-.519,2.357-3.533,3.075-6.288l.649-2.431,1.572-.162a5.264,5.264,0,0,0,2.289-.81c.786-.681,2.221-3.079,1.845-3.079a8.78,8.78,0,0,0-1.708,1.3c-2.084,1.815-3.246,1.718-3.656-.259-.2-.94-.068-1.2.923-2.042,1.23-1,2.938-3.857,2.938-4.895,0-.519.342-.583,2.836-.616a30.812,30.812,0,0,0,3.348-.13c.308-.032,3.382-.194,6.833-.292,6.97-.227,7.346-.259,7.721-.681.137-.13.068-.162-.137-.032-.239.13-.444.1-.444-.1,0-.227-4.476-.259-13.222-.194-13.427.162-16.263.259-21.8.81-1.674.162-3.28.324-3.519.324-.307,0-.205-.389.273-1.329.717-1.3.717-2.237.034-2.237C532.164-405,531.583-404.157,531.037-403.152Zm15.716,2.82a16.494,16.494,0,0,0-1.947,2.95,16.709,16.709,0,0,1-3.656,4.959c-1.64,1.653-3.211,2.658-4.1,2.658-.82,0-.82-2.139-.034-3.728.444-.875.478-1.232.171-1.523-.342-.324-.547-.227-.991.389a12.558,12.558,0,0,1-4.339,3.728c-4.168,2.334-5.125,1.134-3.382-4.214.991-2.95,2.05-4.635,3.075-4.83,1.127-.194,9.293-.843,12.231-.94,1.127-.032,2.391-.1,2.836-.1C547.4-401.013,547.4-401.013,546.753-400.332Zm2.187.972c-.205.746-3.28,3.857-3.553,3.6-.171-.162,1.093-2.107,2.6-4.019C548.871-400.916,549.315-400.721,548.94-399.36Zm-36.42,5.219a4.438,4.438,0,0,1-1.162.875c-.683.357-.683.324-.2-.259.649-.778,1.5-1.426,1.674-1.232C512.895-394.692,512.758-394.4,512.519-394.141Zm8.2.13c0,.713-2.6,3.144-3.827,3.566-.854.324-.957.259-.957-.389.034-.875,1.5-2.561,3.041-3.436C520.241-394.984,520.719-394.919,520.719-394.012Zm24.257,2.788a26.5,26.5,0,0,1-2.118,6.775c-.649,1.134-.786,1.232-.888.616-.137-.875.786-5.413,1.537-7.65.478-1.426.547-1.523.991-.972A2.521,2.521,0,0,1,544.976-391.224Z" transform="translate(-293.642 -76.397)"/>
    <path id="Path_35" data-name="Path 35" d="M625.034-389.92c-1.811.972-2.152,1.653-.888,1.848.786.1,3.553-1.75,3.553-2.4C627.7-391.151,627.049-391.022,625.034-389.92Z" transform="translate(-380.123 -85.935)"/>
    <path id="Path_36" data-name="Path 36" d="M380.063-398.666c-1.127,3.468-3.075,8.1-3.724,8.817a12.138,12.138,0,0,1-3.553,2.463c-.581,0,.068-1.977,1.127-3.566,1.093-1.588,1.3-2.755.615-3.014a4.783,4.783,0,0,0-1.742.292,3.931,3.931,0,0,1-1.742.259c-.717-.259-1.913.454-1.708.972.171.389-2.152,2.463-2.357,2.107-.034-.065-.307-.583-.615-1.1-.478-.908-.649-.972-2.289-.972a3.568,3.568,0,0,0-2.528.713,8.354,8.354,0,0,1-3.382,1.394c-.171,0-.307-.519-.307-1.135s-.137-1.134-.273-1.134c-.444,0-1.435,1.134-1.435,1.621,0,.616-2.152,2.982-3.348,3.63-.922.519-1.059.519-1.469.065-.342-.389-.342-.713-.034-1.556.957-2.431.273-2.4-2.255.13a8.033,8.033,0,0,1-2.562,1.945c-.922,0-.717-1.523.444-3.533a17.384,17.384,0,0,0,1.025-1.88c0-.1-.342-.1-.752-.032-.82.1-1.674,1.3-2.494,3.6-.547,1.426-.547,1.621-.034,2.334.82,1.167,2.255,1.07,3.724-.259l1.2-1.037.512.875a1.662,1.662,0,0,0,1.777.908c.991,0,1.537-.292,3.041-1.718,1.538-1.394,2.05-1.653,2.9-1.588a3.38,3.38,0,0,0,1.674-.227c.581-.292.683-.194.854.583a2.483,2.483,0,0,0,3.929,1.686c.512-.357,1.708-1.2,2.665-1.815a28.1,28.1,0,0,0,2.972-2.269,4.492,4.492,0,0,1,1.777-1.135,3.882,3.882,0,0,0,1.23-.324c.922-.486.82-.1-.547,1.945-1.23,1.815-1.5,3.144-.786,3.825.649.616,2.016.454,3.246-.454,1.23-.875,1.264-.875.786.324-.205.551-.205.875.034,1.037.547.292,1.127-.357,1.845-2.107a5.748,5.748,0,0,1,.854-1.653,4.548,4.548,0,0,1,.957,1.167,3.56,3.56,0,0,0,3.895,1.685,14.485,14.485,0,0,0,4.817-4.117c.991-1.621.034-1.232-2.357.94-2.733,2.5-3.724,2.593-5.261.583l-1.059-1.361.957-.454c2.152-1.037,4.2-2.431,4.2-2.852,0-.745-1.127-.519-2.392.454a9.051,9.051,0,0,1-2.87,1.686,26.685,26.685,0,0,1,1.367-4.117c1.5-4.052,1.64-4.959.683-4.959C380.985-401,380.541-400.157,380.063-398.666Zm-14.725,7.52c.444.519-.034,1.815-.649,1.815a2.168,2.168,0,0,1-1.367-1.426C363.322-391.7,364.654-391.924,365.337-391.146Zm-3.041,1.167c0,.195.376.648.854,1.037.444.357.752.81.649.972-.308.454-1.777.292-1.982-.259-.307-.81-.239-2.074.137-2.074A.334.334,0,0,1,362.3-389.979Z" transform="translate(-196.376 -79.101)"/>
    <path id="Path_37" data-name="Path 37" d="M434.079-397.558c-1.025.259-1.025.259.273.292.683,0,1.264-.13,1.264-.292C435.616-397.914,435.548-397.914,434.079-397.558Z" transform="translate(-255.004 -81.247)"/>
    <path id="Path_38" data-name="Path 38" d="M441-397.643c0,.162.171.227.342.13.205-.1.342-.259.342-.357,0-.065-.137-.13-.342-.13A.363.363,0,0,0,441-397.643Z" transform="translate(-260.047 -81.128)"/>
    <path id="Path_39" data-name="Path 39" d="M731.9-397.558c-.82.259-.786.259.273.292.581.032,1.093-.13,1.093-.292C733.263-397.914,733.092-397.914,731.9-397.558Z" transform="translate(-451.18 -81.247)"/>
    <path id="Path_40" data-name="Path 40" d="M428.407-396.676c.1.162.273.324.376.324.068,0,.137-.162.137-.324a.344.344,0,0,0-.376-.324C428.373-397,428.3-396.87,428.407-396.676Z" transform="translate(-251.725 -81.804)"/>
  </g>
</svg>
 </div>
)

const ShowReel =()=>(
  <ShowReelWrapper>
     <video
 loading="lazy"
 muted
     loop
     autoPlay
     src="https://firebasestorage.googleapis.com/v0/b/my-project-1532587923582.appspot.com/o/SHOWRELL%20LOW%20B%C4%B0TRATE.mp4?alt=media&token=576f1ec4-e48c-4db5-86fc-9034dd45d936"
   >    <track default
   kind="captions" 
   srcLang="en"
  /></video>
  </ShowReelWrapper>
 
)

const AllProjects=({open,setOpen,dark})=>(
  <AllProjectsWrapper dark={dark} open={open} onClick={() => setOpen(!open)}  >
  <h2 className="featured-title" 
        >
              TÜM <br /> PROJELER
              <span className="arrow">
                <svg
              
                >
                  <path
                    d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                    fill="#FFF"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </span>
            </h2>
  </AllProjectsWrapper>
)

export const Services=({dark,accordionHandler})=>(
<ServicesWrapper >
<ServicesTextContainer dark={dark}>
<p>
            Ben Burak Can Yüksel. Sinematik çalışmaların doğduğu toprakların bahçıvanıyım.  Çalışmaları sanatla işler, profesyonellikle sunarım. Kısacası elmadan armut, çamurdan altın üretirim. 
            </p>
</ServicesTextContainer>
<ServicesListContainer dark={dark} >
<h3>Hizmetler</h3>




<AccordionHeader >
  <AccordionIcon id="aaaa" onClick={(e)=>accordionHandler("aaa","aaaa")} >
<span></span>
<span></span>
  </AccordionIcon>
  Video Reklam
 </AccordionHeader>

 <AccordionContent dark={dark} id="aaa"   >
<p>  Markanızı en iyi şekilde yansıtacak tasarımsal video reklam.</p>
  </AccordionContent>
 

<AccordionHeader id="bbbb" onClick={()=>accordionHandler("bbb","bbbb")} >
  <AccordionIcon >
<span></span>
<span></span>
  </AccordionIcon>
  Video İçerik</AccordionHeader>
  <AccordionContent  dark={dark} id="bbb" >
  <p>  Son teknoloji ekipmanlarla çekim ve kurgulama.</p>
  </AccordionContent>

  
  
<AccordionHeader >
  <AccordionIcon  id="cccc" onClick={(e)=>accordionHandler("ccc","cccc")} >
<span></span>
<span></span>
  </AccordionIcon>
  Kurgu - Color Grading
 </AccordionHeader>

 <AccordionContent  dark={dark} id="ccc"   >
<p>  Son teknoloji kurgu seti ile görüntüleri mükemmel filme dönüştürme.</p>
  </AccordionContent>
 
 
<AccordionHeader >
  <AccordionIcon   id="dddd" onClick={(e)=>accordionHandler("ddd","dddd")} >
<span></span>
<span></span>
  </AccordionIcon>
  Drone
 </AccordionHeader>

 <AccordionContent dark={dark} id="ddd"   >
<p>  Son teknoloji ekipmanlarla sinematik havadan çekim.</p>
  </AccordionContent>
 
 
<AccordionHeader >
  <AccordionIcon  id="eeee" onClick={(e)=>accordionHandler("eee","eeee")} >
<span></span>
<span></span>
  </AccordionIcon>
  Youtube
 </AccordionHeader>

 <AccordionContent dark={dark} id="eee"   >
<p>  Son teknoloji ekipmanlarla çekim, kurgu ve kanal yönetimi hizmeti.</p>
  </AccordionContent>
 
 
<AccordionHeader >
  <AccordionIcon id="ffff"  onClick={(e)=>accordionHandler("fff","ffff")} >
<span></span>
<span></span>
  </AccordionIcon>
  Fotoğraf
 </AccordionHeader>

 <AccordionContent dark={dark} id="fff"   >
<p>  Düğün, Etkinlik, Konser, Sanatsal kişisel portre, moda, ürün çekimleri.</p>
  </AccordionContent>
 





</ServicesListContainer>
</ServicesWrapper>

)

 const MyFooter=()=>(
  <Footer>
<div>
<a href="tel:0543-593-68-94">0543 593 68 94</a>
<a href="mailto:bcyart@studio.com">bcyart@studio.com</a>  
</div>

<div>
  <a  href="https://www.instagram.com/brkcany/?hl=tr"
              target="https://www.instagram.com/brkcany/?hl=tr"><Instagram/></a>
  <a   href="https://vimeo.com/burakcanyuksel"
              target="https://vimeo.com/burakcanyuksel"><Vimeo/></a>
</div>
  </Footer>
)





export const Instagram = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21">
    <g fill="#EA281E" fillRule="evenodd">
      <path d="M10.5 0C7.648 0 7.29.012 6.17.063 5.054.114 4.29.292 3.623.551a5.146 5.146 0 00-1.86 1.211 5.147 5.147 0 00-1.21 1.86C.291 4.29.113 5.053.062 6.171.012 7.29 0 7.648 0 10.5c0 2.852.012 3.21.063 4.33.051 1.117.229 1.88.488 2.548.269.69.628 1.276 1.211 1.86.584.583 1.17.942 1.86 1.21.668.26 1.431.438 2.549.489 1.12.05 1.477.063 4.329.063 2.852 0 3.21-.012 4.33-.063 1.117-.051 1.88-.229 2.548-.488a5.146 5.146 0 001.86-1.211 5.147 5.147 0 001.21-1.86c.26-.668.438-1.431.489-2.549.051-1.12.063-1.477.063-4.329 0-2.852-.012-3.21-.063-4.33-.051-1.117-.229-1.88-.488-2.548a5.147 5.147 0 00-1.211-1.86 5.146 5.146 0 00-1.86-1.21c-.668-.26-1.431-.438-2.549-.489C13.71.012 13.352 0 10.5 0m0 1.892c2.804 0 3.136.01 4.243.061 1.024.047 1.58.218 1.95.362.49.19.84.418 1.207.785.367.368.595.717.785 1.207.144.37.315.926.362 1.95.05 1.107.061 1.44.061 4.243 0 2.804-.01 3.136-.061 4.243-.047 1.024-.218 1.58-.362 1.95-.19.49-.418.84-.785 1.207a3.252 3.252 0 01-1.207.785c-.37.144-.926.315-1.95.362-1.107.05-1.44.061-4.243.061-2.804 0-3.136-.01-4.243-.061-1.024-.047-1.58-.218-1.95-.362-.49-.19-.84-.418-1.207-.785a3.254 3.254 0 01-.785-1.207c-.144-.37-.315-.926-.362-1.95-.05-1.107-.061-1.44-.061-4.243 0-2.804.01-3.136.061-4.243.047-1.024.218-1.58.362-1.95.19-.49.418-.84.785-1.207a3.253 3.253 0 011.207-.785c.37-.144.926-.315 1.95-.362 1.107-.05 1.44-.061 4.243-.061"></path>
      <path d="M10.5 14.07a3.57 3.57 0 110-7.14 3.57 3.57 0 010 7.14m0-9.07a5.5 5.5 0 100 11 5.5 5.5 0 000-11"></path>
      <path d="M17 5a1 1 0 11-2 0 1 1 0 012 0"></path>
    </g>
  </svg>
)
export const Vimeo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 18">
    <path
      d="M20.99 4.164c-.094 2.026-1.521 4.8-4.283 8.32C13.852 16.162 11.436 18 9.461 18c-1.225 0-2.261-1.12-3.107-3.359l-1.695-6.16C4.03 6.244 3.357 5.123 2.636 5.123c-.158 0-.707.328-1.649.98L0 4.842a259.826 259.826 0 003.064-2.709C4.446.95 5.485.328 6.176.265c1.634-.156 2.64.951 3.018 3.32.408 2.557.69 4.147.849 4.77.472 2.121.99 3.18 1.556 3.18.439 0 1.1-.687 1.98-2.064.879-1.376 1.35-2.422 1.413-3.142.126-1.187-.345-1.782-1.413-1.782-.503 0-1.021.114-1.554.34 1.032-3.349 3.003-4.976 5.914-4.883 2.158.063 3.175 1.45 3.05 4.16"
      fill="#EA281E"
      fillRule="evenodd"
    ></path>
  </svg>
)

const NavigationContainer=({open,setOpen,dark,comp})=>(
<>

<NavWrapper dark={dark} >

  < Navigation open={open} setOpen={setOpen}>
  <NavList comp={comp} dark={dark} />
  <div  className="burger-item"> <HamburgerButtonElementClosed dark={dark} open={open} setOpen={setOpen}/>
  <h2 >Projeler</h2>
  </div>
  <div>
  </div>
<NavFooterWrapper dark={dark}  className="footer-area-nav">

<MyFooter />

</NavFooterWrapper>

  </Navigation>
  </NavWrapper>
</>

)

const NavList =({dark,comp})=>(
<NavListWrapper dark={dark}>
<ul >
  <li ><Link state={{ comp: "videoContentList" , dark:{dark}}}  to="/projects">
VİDEO-İÇERİK
</Link> 
  </li>
  <li>
  <Link state={{ comp: "videoAdList" , dark:{dark} }}  to="/projects">
  VİDEO-REKLAM
</Link> 
 
  </li>
  <li>
  <Link state={{ comp: "picList", dark:{dark} }}  to="/projects">
  FOTOĞRAF
</Link> 
  </li>
  <li>
    <Link state={{ comp: "droneList", dark:{dark} }}  to="/projects">
    DRONE
</Link> 
  </li>
  <li>
    <Link state={{ comp: "bannerList", dark:{dark} }}  to="/projects">
    BANNER
</Link> 
  </li>

</ul>


</NavListWrapper>
)