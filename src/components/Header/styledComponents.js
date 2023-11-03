import styled from 'styled-components';

export const HeaderMainContainer=styled.div`
display: flex;
width: 1240px;
justify-content: space-between;
align-items: center;
margin-left:100px;
background-color: #F6F6F6;
margin-right:100px;
padding-top:15px;
@media screen and (max-width: 768px){
  display: flex;
width: 328px;
justify-content: space-between;
align-items: center;
margin-right:16px;
margin-left:16px;
}

`

export const LogoImage=styled.img`
width: 96px;
height: 32px;
`

export const HeaderSubContainer=styled.div`
display:flex;
align-items:center;
display: flex;
align-items: center;
gap: 40px;

`
export const HeaderRightSubContainer=styled.div`
display:flex;
align-items:center;
display: flex;
align-items: center;
gap: 40px;
@media screen and (max-width: 768px) {
    margin-right:10px;
  }
`

export const SmallLogoImage=styled.img`
display:none;
@media screen and (max-width: 768px) {
  display: block;
  width: 24px;
height: 24px;
flex-shrink: 0;
  }
`

export const NavSubContainer=styled.div`
display: flex;
align-items: flex-start;
gap: 24px;
@media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavItem=styled.h1`
color: '#2B2730';
font-family: 'Poppins';
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: normal;
gap: 24px;
@media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavButton=styled.button`

display: flex;
padding: 16px 32px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 100px;
background:#2B2730;
color: #FFF;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 20px; /* 142.857% */
@media screen and (max-width: 768px) {
    display: none;
  }
`