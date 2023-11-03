import styled from 'styled-components'

export const FooterContainer=styled.div`
height: 4083px;
display:flex;
justify-content:space-between;
background: #F6F6F6;
margin-top:116px;
margin-bottom:10px;
width:1220px;
@media screen and (max-width: 768px){
    flex-direction:column;
    margin-left:16px;
    width:360px;
}
`
export const FooterLeftSubContainer=styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
flex: 0.5;
${'' /* align-self: stretch; */}
width:524px;
height:130px;
@media screen and (max-width: 768px){
order:2;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 16px;
align-self: stretch;
width:328px;
margin-top:32px;
margin-bottom:44.8px;
}
`
export const FooterRightSubContainer=styled.div`
display: flex;
align-items: flex-start;
gap: 32px;
margin-top:0px;
align-self: stretch;
width:750px;
@media screen and (max-width: 768px){
flex-direction:column;
width:360px;
}
`
export const FooterIconContainer=styled.div`
display: flex;
align-items: flex-start;
gap: 8px;

`
export const IconImage=styled.img``

export const FooterContentContainer=styled.div`
display: flex;
width: 180px;
flex-direction: column;
align-items: flex-start;
gap: 16px;
@media screen and (max-width: 768px){

}
`
export const FooterHeading=styled.h1`
color: #2B2730;
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 26px; 
margin-bottom:0px;
@media screen and (max-width: 768px){
    width: 96px;
height: 32px;
}

`
export const FooterDescription=styled.p`
color: #2B2730;
font-family: Poppins;
font-size: 16px;
font-style: normal;
margin-top:0px;
margin-bottom:0px;
font-weight: 400;
line-height: 24px; 
@media screen and (max-width: 768px){

}
`