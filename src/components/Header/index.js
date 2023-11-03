import React from "react";
import { HeaderMainContainer, LogoImage, HeaderSubContainer, NavItem,NavSubContainer,NavButton ,HeaderRightSubContainer,SmallLogoImage} from './styledComponents'
const Header = () => {
    return (
        <HeaderMainContainer>
            <HeaderSubContainer>
                <LogoImage src="../../logo.png" alt="" />
                <NavSubContainer>
                    <NavItem>Explore</NavItem>
                    <NavItem>Company</NavItem>
                    <NavItem>Support</NavItem>
                </NavSubContainer>
            </HeaderSubContainer>
            <HeaderRightSubContainer>
            <NavItem>Become a member</NavItem>
            <NavButton>Sign in</NavButton>
            <SmallLogoImage src="../../menu-3.png" alt="menu" />
            </HeaderRightSubContainer>

        </HeaderMainContainer>
    )
}

export default Header