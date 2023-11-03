import React from "react";
import { FooterContainer,
    FooterLeftSubContainer,
    FooterRightSubContainer,
    FooterIconContainer,
    FooterContentContainer,
FooterHeading,
FooterDescription,
    IconImage} from './styledComponents'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterLeftSubContainer>
                <img src="../../logo (1).png" alt="logo" />
                <FooterIconContainer>
                    <IconImage src="../../instagram.png" alt="instagram"/>
                    <IconImage src="../../twitter.png" alt="twitter"/>
                    <IconImage src="../../facebook.png" alt="facebook"/>
                </FooterIconContainer>
            </FooterLeftSubContainer>
            <FooterRightSubContainer>
            <FooterContentContainer>
                <FooterHeading>About</FooterHeading>
                <FooterDescription>How it works</FooterDescription>
                <FooterDescription>Company</FooterDescription>
                <FooterDescription>Help & support</FooterDescription>
            </FooterContentContainer>
            <FooterContentContainer>
            <FooterHeading>For creators</FooterHeading>
                <FooterDescription>How can I get paid</FooterDescription>
                <FooterDescription>Become a creator</FooterDescription>
            </FooterContentContainer>
            <FooterContentContainer>
            <FooterHeading>Learn</FooterHeading>
                <FooterDescription>Blog</FooterDescription>
                <FooterDescription>Cookies policy </FooterDescription>
                <FooterDescription>Privacy policy</FooterDescription>
            </FooterContentContainer>
            <FooterContentContainer>
            <FooterHeading>Support</FooterHeading>
                <FooterDescription>Service status</FooterDescription>
                <FooterDescription>Report abuse</FooterDescription>
                <FooterDescription>Dispute a payment</FooterDescription>
            </FooterContentContainer>
            </FooterRightSubContainer>

        </FooterContainer>
    )
}

export default Footer