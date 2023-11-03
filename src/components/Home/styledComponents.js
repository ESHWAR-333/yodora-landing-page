import styled from 'styled-components'

export const HomeMainContainer=styled.div`
display: flex;
flex-direction:column;
width: 1240px;
margin-left:100px;
background-color: #F6F6F6;
margin-right:100px;
padding-top:15px;
width: 1400px;
height: 1650px;
flex-shrink: 0;
@media screen and (max-width: 768px){
width:360px;
margin-left:16px;
height: 3120px;
}
`

export const HomeSubContainer=styled.div`
display:flex;
height:592px;
width:1240px;
margin-top:116px;
display: inline-flex;
align-items: flex-start;
gap: 30px;
@media screen and (max-width: 768px){
display:flex;
flex-direction:column;
justify-content:flex-start;
gap: 0px;
height:1900px;
width:360px;
margin-top:0px;
padding-top:0px;
}
`


export const HomeLeftContainer=styled.div`
display: flex;
width: 604px;
flex-direction: column;
justify-content: flex-end;
align-items: flex-start;
gap: 24px;
margin-left:32px;
@media screen and (max-width: 768px){
    margin-left:14px;
    width: 323px;
    margin-top:0px;
    padding-top:0px;
}
`
export const HomeRightContainer=styled.div`
display: flex;
flex-wrap:wrap;
align-items: flex-start;
gap: 32px;
margin-left:30px;
@media screen and (max-width: 768px){
    display:flex;
    flex-direction:column;
    margin-top:64px;
    margin-left:16px;
}
`

export const CreatorItemContainer=styled.div`
display: flex;
width: 286px;
height: 280px;
flex-direction: column;
align-items: flex-start;
gap: 16px;
@media screen and (max-width: 768px){
    display: flex;
width: 328px;
flex-direction: column;
align-items: center;
gap: 18.356px;
text-align:center;
}
`

export const HomeThankingContainer=styled.div`
display: flex;
width: 1240px;
padding: 116px 0px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 24px;
margin-top:116px;
border-radius: 32px;
background: #2B2730;
@media screen and (max-width: 768px){
    display: flex;
width: 328px;
padding: 24px 16px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 16px;
margin-top:64px;
}
`
export const HomeFinalHeading=styled.h1`
color: #FFF;
font-family: Poppins;
font-size: 56px;
font-style: normal;
margin-bottom:5px;
font-weight: 700;
line-height: 64px; 
@media screen and (max-width: 768px){
text-align: center;
font-size: 32px;
line-height: 40px;
}
`
export const HomeFinalDescription=styled.p`
color: #FFF;
font-family: Poppins;
font-size: 16px;
margin-top:5px;
margin-bottom:5px;
font-style: normal;
font-weight: 400;
line-height: 24px; 
@media screen and (max-width: 768px){
text-align: center;
}
`
export const HomeFinalButton=styled.button`
display: flex;
padding: 16px 32px;
align-items: flex-start;
gap: 10px;
border-radius: 32px;
background: #FFB84C;
border:0px;
@media screen and (max-width: 768px){

}
`