import React from 'react'
import {
    HomeMainContainer, HomeSubContainer, HomeLeftContainer
    , HomeRightContainer, CreatorItemContainer,
    HomeThankingContainer,
HomeFinalHeading,
HomeFinalDescription,
HomeFinalButton,
} from './styledComponents'
import './index.css'
import Footer from '../Footer'
const Home = () => {

    return (
        <HomeMainContainer>
            <HomeSubContainer>
                <HomeLeftContainer>
                    <h1 className='home-heading'>Why become a creator?</h1>
                    <p className='home-description'>Engage with your supporter and subscriber to sell your skills, knowledge and passions </p>
                    <button className='home-button'>Become a creator</button>
                </HomeLeftContainer>
                <HomeRightContainer>
                    <CreatorItemContainer>
                        <img className='creatorImage' src="../../engaze-svg.png" alt="" />
                        <h1 className='creator-heading'>Engagement</h1>
                        <p className='creator-description'>Engage on a deeper level with the fans that matter most</p>
                    </CreatorItemContainer>
                    <CreatorItemContainer>
                        <img className='creatorImage' src="../../autonomy-svg.png" alt="" />
                        <h1 className='creator-heading'>Autonomy</h1>
                        <p className='creator-description'>Full autonomy on when and who you talk to.</p>
                    </CreatorItemContainer>
                    <CreatorItemContainer>
                        <img className='creatorImage' src="../../free-svg.png" alt="" />
                        <h1 className='creator-heading'>Free</h1>
                        <p className='creator-description'>No monthly fee or sign-up fee</p>
                    </CreatorItemContainer>
                    <CreatorItemContainer>
                        <img className='creatorImage' src="../../earn-svg.png" alt="" />
                        <h1 className='creator-heading'>Earn </h1>
                        <p className='creator-description'>Add a new source of income that you can control</p>
                    </CreatorItemContainer>
                </HomeRightContainer>
            </HomeSubContainer>
            <HomeThankingContainer>
                <HomeFinalHeading>Engage without limits</HomeFinalHeading>
                <HomeFinalDescription>Join a growing community and talk directly with your favorites creators</HomeFinalDescription>
                <HomeFinalButton>Get Started</HomeFinalButton>
            </HomeThankingContainer>
            <Footer/>
        </HomeMainContainer>
    )
}

export default Home