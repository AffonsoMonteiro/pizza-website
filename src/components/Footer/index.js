import React from 'react';

import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink } from './styled'


export default function Footer() {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'> Pizza </SocialLogo>
                        <SocialIcons >
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook" rel="noopener">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram" rel="noopener">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn" rel="noopener">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}