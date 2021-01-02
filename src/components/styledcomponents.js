import styled from "styled-components"


export const HeaderContainer=styled.div`
padding-top:30px;
@media only screen and (min-width: 600px) {

  display:flex;
  justify-content:space-around;
  align-content:center;

}

`
export const LogoContainer=styled.div`
text-align:center;
fill:${({ dark }) => dark ? 'black' : 'white'};
`
export const HeaderButtonsContainer=styled.div`
 padding: 0 0.5rem; 
margin-top:20px;
display:flex;
justify-content:space-between;
align-items:center;

@media only screen and (min-width: 600px) {
padding: 0 4rem;
  width:100vw;
}

`
export const HamburgerButton=styled.div`
cursor:pointer;
  width: 2rem;
  height: 2rem;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    div {
    width: 2rem;
    height: 0.25rem;
    background:${({ dark }) => dark ? 'black' : 'white'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
    }

`
export const HamburgerButtonClosed=styled.div`

  width: 2rem;
  height: 2rem;
  display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    div {
    width: 2rem;
    height: 0.25rem;
    background-color:${({ dark }) => dark ? 'black' : 'white'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
  &:hover{
    cursor:pointer;
    div{
      background-color:${({ dark }) => dark ? 'white' : 'black'};
    }
  }

`

export const ToggleButton=styled.span`
background-color: red;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  box-shadow: inset 16px 0px ${({ dark }) => dark ? 'black' : 'white'}, inset 16px 0px 1px 1px red;
  -moz-box-shadow: inset 0px 16px #999, inset 0px 16px 1px 1px #999;
  cursor:pointer;

`

export const Navigation=styled.div`
margin-top:-2rem;
position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 120%;
    display: block;
    background: #ea281e;
    overflow: hidden;
    transition: transform .9s cubic-bezier(.4,0,.2,1);
    transform: ${({ open }) => open ? 'translateX(0)' : ' translateX(-100%) '};
    will-change: transform;
    z-index: 20;

    @media only screen and (min-width: 600px) {
      margin-top:0;
      height: 100%;
  }
`


export const ModelWrapper=styled.div`
margin-top:-5rem;

div{
 
canvas{
  width: 100vw;
height:40vh;

}

}


@media only screen and (min-width: 600px) {
  margin-top:25px;
div{
  padding:30px;
  canvas{
  width: 100vw;
height:70vh;

}

}

}

`
export const ModelContainer=styled.div`
  /* background: url("/banner-back.png") no-repeat fixed center;
background: url("https://www.incos.com.tr/wp-content/uploads/revslider/slider-dot-img-2-red.png") no-repeat fixed center   ; */
  height: 50vh;
  width: 90%;

margin-top:27px;
text-align:center;
margin-left:auto;
  margin-right:auto;


 @media only screen and (min-width: 600px) {
width:75%;
height: 70vh;
}


`

export const BackGWrapper=styled.div`
 top: 150px;
svg{
width:80vw;
}
path{
    fill:${({ dark }) => dark ? 'black' : ''};
   }

  @media only screen and (min-width: 600px) {
  
    position: absolute;
  top: 160px;
  left: 50%;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 800;
  font-size: 25em;
  transform: translate3d(-50%, 0, 0);
  margin: 0;
  color:${({ dark }) => dark ? 'black' : 'white'};
  fill:${({ dark }) => dark ? 'black' : 'white'};
  line-height: 0.8em;
  letter-spacing: -15px;
  text-align: center;
  svg{
    transform: scale(1.7 );
    fill:${({ dark }) => dark ? 'black' : 'white'};
    g{
      fill:${({ dark }) => dark ? 'black' : 'white'};
   path{
    fill:${({ dark }) => dark ? 'black' : ''};
   }
    }

  }
  }

  

`


export const BannerText=styled.h2`
color:${({ dark }) => dark ? 'black' : 'white'};
margin-top:10px;
width: 100%;
padding:0.5rem;
  font-size:min(2.3rem,5vh);
  font-weight: 400;
  margin-bottom:200px;

  @media only screen and (min-width: 600px) {
    margin-top:90px;
    margin-left: 16rem;
    width: 43%;
    margin-bottom:0;
    
}


`

export const ShowReelWrapper=styled.div`
width:100%;
margin-bottom:200px;
padding-top:0;

video{
  width:100%;
  
}
padding:0.5rem;

@media only screen and (min-width: 600px) {
  padding:13%;
  margin-bottom:0;
}

`


export const AllProjectsWrapper=styled.div`
margin-left:2rem;
  margin-bottom: 200px;
  width: 60%;
  padding: 0;
  color:${({ dark }) => dark ? 'black' : 'white'};

  .featured-title {
    position: static;
    font-size: 3rem;
    font-weight: 900;
    line-height: 50px;
    cursor:pointer;
    .arrow {
      margin-left:4px;
      width: 160px;
      height: 80px;
      display: block;
      position: relative;
      overflow: hidden;
      svg {
        margin-top:-10px;
        position: absolute;
        top: 16px;
        left: -48px;
        width: 108px;
        transform:translateX(0);
        transition: transform .9s cubic-bezier(.4,0,.2,1);
        path {
          fill:${({ dark }) => dark ? 'black' : 'white'};
        }
      }
     
    }
  }
  .featured-title:hover{
    svg{
        transform: translateX(48px) ;
        transition: transform .9s cubic-bezier(.4,0,.2,1);
        
      }
  }
  @media only screen and (min-width: 600px) {
    margin-left: 16rem;
   .featured-title{
    font-size: 7rem;
    line-height: 90px;
.arrow{
  margin-left:6px;
  height: 110px;
  
  svg{
    margin-top:40px;  
transform:scale(1.5)
  }
}
   }
}
.featured-title:hover{
    svg{
        transform: scale(1.5) translateX(48px) !important;
        transition: transform .9s cubic-bezier(.4,0,.2,1);
      }
  }
`

export const ServicesWrapper=styled.div`
.reverse{
  

  transition: height .69s cubic-bezier(.4,0,.2,1);
    height: 3rem;
}
.hideagain{
  transition: height .69s cubic-bezier(.4,0,.2,1);
    height: 0px;
}



.lshape{

span:nth-child(1) {
  transition: transform .5s cubic-bezier(.4,0,.2,1);
    transform: rotate(0)  translateZ(0px); 

}
span:nth-child(2) {
  transition: transform .5s cubic-bezier(.4,0,.2,1);
     transform: rotate(0)  translateZ(0px); 

}
};



    margin-left: 0.5rem;
    margin-right:0.5rem;
    margin-bottom:200px;
    display:flex;
    justify-content:space-between;
    flex-direction:column;
    @media only screen and (min-width: 600px) {
 

      margin-left: 13%;
    margin-right:13%;
    flex-direction:row;
    
    }
`

export const ServicesListContainer=styled.div`
ul{
  list-style-type: none;

}

h2 {
    width: 80%;
    font-size: 2.3rem;
    font-weight: 400;
    
    color:black;
    margin-top:0px;
  }
  h3{
    color:${({ dark }) => dark ? 'black' : 'white'};
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    margin-top:0px;
  }

`
export const ServicesTextContainer=styled.div`
  p {
    width: 100%;
    font-size: min(1.9rem,4vh);
    font-weight: 400;
    color:${({ dark }) => dark ? 'black' : 'white'};

    margin-top: 0px;
  }

  
margin-bottom:150px;
  @media only screen and (min-width: 600px) {
    
    p {
    width: 80%;
    font-size: 2.3rem;
    font-weight: 400;
  
    margin-top: 0px;
  }
 
    }

`
export const AccordionHeader=styled.div`
    width: 100%;
    color: rgb(234, 40, 30);
    height: 32px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-weight: 600;
    font-size: 1.15rem;
    margin: 8px 0px;
    cursor: pointer;
display:flex;
align-items:center;
div{
  width:30px;
  span{
    background: red;
  width: 16px;
    height: 4px;
    
}

span:nth-child(1) {
  transition: transform .5s cubic-bezier(.4,0,.2,1);
    /* transform: rotate(0)  translateZ(0px); */
     transform:translateX(3px) rotate(45deg) translateZ(0px) ; 
}
span:nth-child(2) {
  transition: transform .5s cubic-bezier(.4,0,.2,1);
    /* transform: rotate(0)  translateZ(0px); */
    transform:translateX(-3px) rotate(-45deg) translateZ(0px) ;
}
}


`

export const AccordionIcon=styled.div`
display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 100%;
    margin-right: 8px;



`


export const AccordionContent=styled.div`
width:20rem;
height:0;
overflow:hidden;
margin-left:0.3rem; 

p{
  
  color:${({ dark }) => dark ? 'black' : 'white'};

}
`


export const Footer=styled.div`


font-size:min( 22px,3vh);
font-weight: 600;
line-height: 8px;
margin-left: 0.5rem;
margin-right: 0.5rem;
margin-bottom:150px;
div{
 
  display:flex;

align-items:center;
flex-direction:row;

a{
  
  text-decoration:none;
  width:18px;
  height:18px;
  svg{
    width:100%;
    height:18px;
  }
}
a:first-child{
  margin-right:10px; 
}
}

div:first-child{
  justify-content:space-between;
  margin-bottom:2rem;
a{
  width:auto;
  height:auto;
}
a:first-child{
  margin-right:0px; 
}
}


@media only screen and (min-width: 600px) {
  font-size: 22px;
  margin-left: 9%;
  margin-right: 9%;
  flex-direction:row;
  
display:flex;
align-items:center;
justify-content:space-between;
div:first-child{
a{
  height:8px; 
  width:auto;
}
a:first-child{
  margin-right:150px;
}
}

div{
  display:flex;
  flex-direction:row;
  a{
    width: 24px;
    height: 24px;
    svg {
    width: 100%;
    height: 100%;
}

  
}


}
}
`

export const NavWrapper=styled.div`
 width:100vw;
 overflow:hidden;

.burger-item{
  display:flex;
  position:relative;
  justify-content:space-between;
  flex-direction: row-reverse;
  top:7vh;
  left:0px;
 width:100vw;
z-index:20;

padding-right:2rem;
h2{
margin-left:2rem;
color:${({ dark }) => dark ? 'black' : 'white'} ;
}

}

@media only screen and (min-width: 600px) {

  .burger-item{
    width: 100vw;
    padding-right: 9%;
    padding-left: 9%;

h2{
margin-left:0;
}
div{
margin-left:0;
}

}

  
}





`

export const MainFooterWrapper=styled.div`
position:relative;
top:0;
left:0;
div{
 
a{
  color: rgb(234, 40, 30);
}
a:hover{
    color:${({ dark }) => dark ? 'black' : 'white'};
    svg:hover{
   path{
      fill:${({ dark }) => dark ? 'black' : 'white'} ;
    }
  }
  }
}




`

export const NavFooterWrapper=styled.div`

position:relative;
top:70vh;
margin-left:0;
    padding: 0 2rem;
    color:${({ dark }) => dark ? 'black' : 'white'};
div:first-child{
  flex-direction:column;
  align-items:start;
 
  a{
    margin-bottom:5vh;
    color:${({ dark }) => dark ? 'black' : 'white'};
  }
  a:hover{
    color:${({ dark }) => dark ? 'white' : 'black'};
    svg:hover{
   path{
      fill:${({ dark }) => dark ? 'white' : 'black'} !important;
    }
  }
  }
  a:last-child{
    margin-bottom:0px;
   
  }
  }
div{
  margin-left: 0;
    margin-right: 0;

  flex-direction:row;
  align-items:start;
  color:${({ dark }) => dark ? 'black' : 'white'};

  a{
    margin-right:90px;
    color:${({ dark }) => dark ? 'black' : 'white'};
    svg{
 

  path{
    fill:${({ dark }) => dark ? 'black' : 'white'} !important;
  }
    }
  }

  a:first-child{
  margin-right:3rem !important; 
}
 
  
  }

  @media only screen and (min-width: 600px) {
    padding-right: 9%;
    padding-left: 9%;
    top:85vh;
  margin-left:0;
  margin-right:0;
 div{
  flex-direction:row !important;
 }

  }
div:last-child{
  a:last-child{
  margin-right:0;
}
}

.anJjE .burger-item div {
    margin-left: 0;
}
  `



export const NavListWrapper=styled.div`
position:absolute;
top:14vh;
width:100%;  
color:${({ dark }) => dark ? 'black' : 'white'};
padding:0 2rem;

ul{
  height:70vh;
  list-style:none;
  width:100%;
  
  overflow: hidden;
li{
  font-size:min( 2.4rem,4vh);
    text-transform: uppercase;
    font-weight: 900;
    height: 70px;
    line-height: 46px;
  display:flex;
  align-items:center;
  transition: transform .4s cubic-bezier(.4,0,.2,1);
  transform: translateX(0) translateZ(0);
}
li:hover{
  transition: text-shadow transform .5s cubic-bezier(.4,0,.2,1);

  transform: translateX(2%) translateZ(0);
  text-shadow:1px 1px 1px ${({ dark }) => dark ? 'white' : 'black'};
  color:black;
}
}

@media only screen and (min-width: 600px) {
  padding:0 9%;
  top:14vh;
ul{
  width:75%;
  li{
    height: 96px;
    font-size: 3rem;
    line-height: 96px;
  
  }
}
}

`


export const Cursor = styled.div`
  position: fixed;
  top: 400px;
  left: 400px;
  width: 32px;
  height: 32px;
  background: #ea281e;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease-out;
  transition-property: width, height, border;
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 999;
  @media only screen and (max-width: 501px ) {
visibility:hidden;
  
  }
  
  &.pointer {
    border: 4px solid ${props => props.theme.text} !important;
  }
  &.hovered {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid #ea281e;
    border: 4px solid #ea281e;
  }
  &.locked {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid ${props => props.theme.text} !important;
    top: ${props => props.theme.top} !important;
    left: ${props => props.theme.left} !important;
  }
  &.nav-open {
    background: ${props => props.theme.text};
  }
  &.image-hovered-0{
    background:url("https://media3.giphy.com/media/SL8STZCvNld4m0VY6A/giphy.gif?cid=ecf05e4760309ae9c9d661e6207012854d7c3903c42092da&rid=giphy.gif")no-repeat !important;
    width:360px;
    height:360px;
    border-radius: 0%;
border:none;
z-index:101;

  }
  &.image-hovered-1{
    background:url("http://www.reactiongifs.com/wp-content/uploads/2013/07/running.gif")no-repeat !important;
    width:300px;
    height:400px;
    border-radius: 0%;
border:none;
z-index:101;

  }
  
  &.image-hovered-2{
    background:url("https://i.giphy.com/media/l2JJtAJB0h6Nu8PMk/giphy.webp")no-repeat !important;
    width:380px;
    height:215px;
    border-radius: 0%;
border:none;
z-index:101;

  }
  &.image-hovered-3{
    background:url("https://media1.giphy.com/media/ztqsj058Zbp3G/giphy.gif")no-repeat !important;
    width:360px;
    height:360px;
    border-radius: 0%;
border:none;
z-index:101;

  }
  &.image-hovered-4{
    background:url("https://media2.giphy.com/media/l4JyScrtqxqbG8lDW/giphy.gif?cid=ecf05e47681a2b521f85a420b75eae07a90711e29c5b250d&rid=giphy.gif")no-repeat !important;
    width:380px;
    height:215px;
    border-radius: 0%;
border:none;
z-index:101;  

  }
  &.image-hovered-5{
    background:url("https://media0.giphy.com/media/5zgVnlKAijw22ZScnh/giphy.gif")no-repeat fixed center!important;
    width:300px;
    height:400px;
    border-radius: 0%;
border:none;      
z-index:101;

  }


`



export const ProjectsArrow=styled.div`
    width: 60px;
    height: 80px;
    display: block;
    position: fixed;
    overflow: hidden;
    transform: rotate(180deg) scale(0.6);
    z-index: 22;

svg{
  position: absolute;
    top: 16px;
    left: -48px;
    width: 108px;
    cursor:pointer;
path{
  fill:red;
}
}

`

export const ProjectsHeader=styled.h1`
display:none;

@media only screen and (min-width: 830px) {
display:block;
      position: fixed;
  z-index:24;
transform: rotate(90deg) ;
top: 88px;

    right: -60px;

    display:none;

    }  


`


export const ProjectsContainer = styled.div`
div{
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
text-align:center;
h1{margin-top: 7rem;}
  .responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  padding:0.5rem;
 
}
.responsive-iframe:first-child{
  margin-top:3rem;
}
margin-bottom:3rem;
}

.ifpic{
  padding:0.5rem;
margin-bottom:-7rem;
  overflow:hidden;
  width:100%;
  img{
    width:100%;
  height:auto;

  }
}
.ifpic:first-child{
  margin-top:-7rem;
}

@media only screen and (min-width: 600px) {
  position: relative;
display: flex;
flex-direction:column;

.ifpic:first-child{
  margin-top:5rem;
}
  div{
    text-align:start;
    padding-top: 0;
    
    display: flex;

    .ifpic{
      padding: 0;
  width:680px;
  height:auto;
  margin-bottom:2.5rem;
  img{
    width:680px;
  height:auto;
 
  }
}
   
  .responsive-iframe {
    width: 700px;
    height: 420px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:0;
    margin-bottom:2.3rem;
}

}
#a30{
margin-left:3.8rem;
}
#a29{
  justify-content: flex-end;
    padding-right:3.8rem;
}
#a28{
margin-left:3.8rem;
}
#a27{
  justify-content: flex-end;
    padding-right:3.8rem;
}
#a26{
  margin-left:3.8rem;
}
#a25{
  justify-content: flex-end;
    padding-right:3.8rem;
}
#a24{
margin-left:3.8rem;
}
#a23{
  justify-content: flex-end;
    padding-right:3.8rem;
}
#a22{
margin-left:3.8rem;
}
#a21{
  justify-content: flex-end;
    padding-right:3.8rem;
}
#a20{
margin-left:3.8rem;
}
#a19{
  justify-content: flex-end;
    padding-right:3.8rem;
}
#a18{
margin-left:3.8rem;
}
#a17{
  justify-content: flex-end;
    padding-right:3.8rem;
}
#a16{
margin-left:3.8rem;
}
#a15{
  justify-content: flex-end;
    padding-right:3.8rem;
}
#a14{
  margin-left:3.8rem;
}
#a13{
  justify-content: flex-end;
    padding-right:3.8rem;
}
#a12{
  margin-left:3.8rem;
}
#a11{
  justify-content: flex-end;
    padding-right:3.8rem;
}
#a10{
  margin-left:3.8rem;
}
#a9{
  justify-content: flex-end;
    padding-right:3.8rem;
}
#a8{
  margin-left:3.8rem;
}
#a7{
  justify-content: flex-end;
    padding-right:3.8rem;
}
#a6{
margin-left:3.8rem;

}
#a5{
  justify-content: flex-end;
    padding-right:3.8rem;
}
#a4{
  margin-left:3.8rem;
}
#a3{
  justify-content: flex-end;
    padding-right:3.8rem;
}
#a2{
  margin-left:3.8rem;
}
#a1{
  justify-content: flex-end;
    padding-right:3.8rem;
}
#a0{
margin-left:3.8rem;

}




}



`

export const ProjectItemHeader=styled.h1`
padding-top:1.5rem;
 font-size:1.5rem;

@media only screen and (min-width: 600px) {
  font-size:2rem;
  text-align:inherit;
padding-top:0 !important;
position: absolute;
    bottom: 0;
}

`

