import styled from 'styled-components';

export const BannerMainContainer=styled.div`
background-color: #F6F6F6;
`

export const BannerSubContainer=styled.div`
width: 1440px;
display:flex;
flex-direction:column;
margin-top:90px;
height: 800px;
width: 1440px;
@media screen and (max-width: 768px){
  width: 360px;
  height:436px;
}
`

export const BannerHeading=styled.h1`
color: #2B2730;
font-family: Poppins;
font-size: 72px;
font-style: normal;
font-weight: 700;
line-height: 80px; /* 111.111% */
width: 922px;
margin-left:116px;
@media screen and (max-width: 768px) {
    color: #2B2730;
font-family: Poppins;
font-size: 32px;
font-style: normal;
font-weight: 700;
width: 328px;
line-height: 40px; /* 125% */
margin-left:16px;
  }
`

export const BannerCircle=styled.div`

width: 204px;
height: 204px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
flex-shrink: 0;
background-image:url('../../Ellipse.png');
margin-left:77px;
margin-top:25px;
@media screen and (max-width: 768px) {
 display:none;
}
`

export const SmallBannerCircle=styled.div`
display:none;
@media screen and (max-width: 768px) {
 display:flex;
 justify-content:center;
 align-items:center;
 margin-left:200px;
 margin-top:0px;
 padding-top:0px;
 width: 115px; 
            height: 115px; 
            border: 1px solid #2B2730; 
            border-radius: 50%; 
            position:relative;
            top:-12%;
}
`


export const CircleImage=styled.img`
display:none;
@media screen and (max-width: 768px) {
 display:block;
}
`

export const BannerImage=styled.img`
width: 1204px;
height: 675.654px;
flex-shrink: 0;
position: absolute;
top:477px;
border-radius: 32px;
margin-left:116px;
margin-top:116px;
@media screen and (max-width: 768px) {
width: 324px;
height: 181.821px;
top:354px;
margin-left:16px;
margin-right:16px;
}
`

export const BannerSecondSubContainer=styled.div`
background-color:#2B2730;
min-width: 1440px;
height: 1600px;
border: 16px solid #2B2730;
flex-shrink: 0;
@media screen and (max-width: 768px){
  min-width: 360px;
  height:2190px;
}
`

export const BannerSecondHeading=styled.div`
margin-top:400px;
color: #FFFFFF;
background-color:#2B2730;
font-family: Poppins;
font-size: 64px;
font-style: normal;
font-weight: 700;
margin-left:116px;
width: 1233px;
line-height: 72px; /* 112.5% */
letter-spacing: -1.6px;
@media screen and (max-width: 768px) {
  margin-top:146px;
  color: #FFF;
font-family: Poppins;
font-size: 32px;
font-style: normal;
margin-left:16px;
font-weight: 500;
width:328px;
line-height: 40px;
letter-spacing: -0.8px;
}
`

export const BannerImageContainer=styled.div`
margin-top:116px;
background-color:#2B2730;
display: flex;
justify-content: center;
align-items: center;
gap: 32px;
@media screen and (max-width: 768px){
  flex-direction:column;
  justify-content: center;
align-items: center;
gap: 0px;
}
`

export const Image=styled.img`
width: 392px;
height: 522px;
border-color:#2B2730;
border-radius: 31px;
@media screen and (max-width: 768px){
  display: flex;
width: 320px;
height: 436.776px;
margin-right:20px;
margin-left:16px;
margin-bottom:32px;
}
`

export const BannerFinalSubContainer=styled.div`
margin-top:116px;
display: flex;
width: 1240px;
justify-content: space-between;
align-items: flex-end;
margin-left:116px;
background-color:#2B2730;
@media screen and (max-width: 768px){
 display:flex;
 flex-direction:column;
 width: 300px;
 margin-top:0px;
 margin-left:0px;
 align-items: flex-start;
 justify-content: flex-start;
}
`
  



export const BannerFinalLeftContainer=styled.div`
display:flex;
align-items:center;
background-color:#2B2730;
width: 703px;
align-items: flex-end;
gap: 32px;
flex-shrink: 0;
@media screen and (max-width: 768px){
 display:flex;
 flex-direction:column;
 width: 320px;
 gap: 0px;
 display: flex;

}
`
export const BannerFinalRightContainer=styled.div`
background-color:#2B2730;
display: flex;
align-items: center;
gap: 16px;
@media screen and (max-width: 768px){
  display: flex;
justify-content: center;
align-items: center;
gap: 16px;
align-self: stretch;
width:328px;
margin-bottom:32px;
}
`

export const ContentSectionContainer=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
${'' /* gap: 8px; */}
flex: 1 0 0;
@media screen and (max-width: 768px){
  display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-self: stretch;
width:360px;
}
`

export const ContentHeading=styled.h1`
color: #FFB84C;
font-family: Poppins;
font-size: 64px;
font-style: normal;
font-weight: 700;
line-height:10px; /* 112.5% */

@media screen and (max-width: 768px){
  color: #FFB84C;
font-family: Poppins;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: 5px;
}
`

export const ContentDescription=styled.h1`
color: #FFF;
font-family: Poppins;
font-size: 32px;
font-style: normal;
font-weight: 400;
line-height: 10px; /* 125% */
@media screen and (max-width: 768px){
  color: #FFF;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 5px;
margin-bottom:32px;
}
`

export const MoreInfoHeading=styled.h1`
color: #FFF;
font-family: Poppins;
font-size: 32px;
font-style: normal;
font-weight: 500;
line-height: 40px; /* 125% */
width: 215px;
@media screen and (max-width: 768px){
  color: #FFF;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 40px;
margin-right:16px;
}
`