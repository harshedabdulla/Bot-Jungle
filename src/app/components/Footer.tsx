"use client"
import React from "react";
import {Logo, SocialMediaIcons, SocialMediaIconsLink, WebsiteRights, Wrapper} from './footer-elements'
import {BsInstagram, BsLinkedin, BsX, BsYoutube} from'react-icons/bs';

type Props = {}

const Footer = (props : Props) => {
    return (
        <div>
            <Wrapper>
                <Logo href='/'>
                    Bot Jungle
                </Logo>
                <WebsiteRights>
                    Bot Jungle © {new Date().getFullYear()} All rights reserved.
                </WebsiteRights>
                <SocialMediaIcons>
                    <SocialMediaIconsLink href="//www.linkedin.com" target="_blank" aria-label="Linkedin">
                        <BsLinkedin/>
                    </SocialMediaIconsLink>
                      <SocialMediaIconsLink href="//www.instagram.com" target="_blank" aria-label="Instagram">
                        <BsInstagram/>
                    </SocialMediaIconsLink>
                      <SocialMediaIconsLink href="//www.x.com" target="_blank" aria-label="Twitter">
                        <BsX/>
                    </SocialMediaIconsLink>
                      <SocialMediaIconsLink href="//www.youtube.com" target="_blank" aria-label="Youtube">
                        <BsYoutube/>
                    </SocialMediaIconsLink>
                </SocialMediaIcons>
            </Wrapper>
        </div>
    )
}

export default Footer;