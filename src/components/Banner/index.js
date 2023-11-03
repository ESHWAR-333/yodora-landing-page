import React from 'react'
import { BannerMainContainer, BannerSubContainer, BannerHeading, BannerCircle, BannerImage, BannerSecondHeading, BannerSecondSubContainer, BannerImageContainer, Image, BannerFinalSubContainer,MoreInfoHeading,BannerFinalLeftContainer,ContentSectionContainer,ContentHeading,
    ContentDescription,SmallBannerCircle,
    BannerFinalRightContainer } from './styledComponents'
import './index.css'

const Banner = () => {
    return (
        <BannerMainContainer>
            <BannerSubContainer>
                <div className='banner-heading-container'>
                    <BannerHeading>
                        Learn from your<br />
                        favorite creators<br />
                        about <span className='heading-highlight'>fantasy reports</span>
                    </BannerHeading>
                    <BannerCircle>
                        <div className='circle-container'>
                            <h1 className='circle-content-heading'>
                                1:1 <br /><span className='circle-content'>video calls</span>
                            </h1>
                        </div>
                    </BannerCircle>
                    <SmallBannerCircle>
                    <div className='circle-container'>
                            <h1 className='circle-content-heading'>
                                1:1 <br /><span className='circle-content'>video calls</span>
                            </h1>
                        </div>
                    </SmallBannerCircle>
                    
                </div>
                <BannerImage src='../../img.png' alt="" />
            </BannerSubContainer>

            <BannerSecondSubContainer>
                <div className='second-sub-container'>
                    <BannerSecondHeading>
                        <span className='sub-heading-highlight'>Get direct </span><br />
                        knowledge and insight.
                    </BannerSecondHeading>
                    <BannerImageContainer>
                        <Image src="../../img-card.png" alt="img-card" />
                        <Image src="../../img-card (1).png" alt="img-card" />
                        <Image src="../../img-card (2).png" alt="img-card" />
                    </BannerImageContainer>
                    <BannerFinalSubContainer>
                        <BannerFinalLeftContainer>
                            <ContentSectionContainer>
                                <ContentHeading>300</ContentHeading>
                                <ContentDescription>creators</ContentDescription>
                            </ContentSectionContainer>
                            <ContentSectionContainer>
                                <ContentHeading>14.4k</ContentHeading>
                                <ContentDescription>users</ContentDescription>
                            </ContentSectionContainer>
                            <ContentSectionContainer>
                                <ContentHeading>9.11k</ContentHeading>
                                <ContentDescription>session</ContentDescription>
                            </ContentSectionContainer>
                        </BannerFinalLeftContainer>
                        <BannerFinalRightContainer>
                        <MoreInfoHeading>Explore the marketplace</MoreInfoHeading>
                        <img src="../../arrow-icon.png" alt="arrow-icon" className='arrow-img'/>
                        </BannerFinalRightContainer>

                    </BannerFinalSubContainer>
                </div>

            </BannerSecondSubContainer>
        </BannerMainContainer>
    )
}

export default Banner;