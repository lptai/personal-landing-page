import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
    faGithub,
    faLinkedin,
    faInstagram,
    faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';

import SocialLink from './SocialLink';

const Container = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const Description = styled.p`
    font-size: 1rem;
    letter-spacing: 0.12em;
    margin: 0.8rem 0;
    padding-left: 0.12em;
    color: #94a4ba;
    text-transform: lowercase;

    @media (max-width: 430px) {
        font-size: 0.7rem;
    }
`;

const NameHeader = styled.h1`
    margin: 0;
    font-size: 2.5rem;
    letter-spacing: 10px;
    text-transform: uppercase;

    @media (max-width: 430px) {
        font-size: 2rem;
    }
    @media (max-width: 380px) {
        font-size: 1.8rem;
        letter-spacing: 8px;
    }

    &:hover {
        cursor: pointer;
    }
`;

const SocialLinkList = styled.div`
    display: flex;
    justify-content: center;
    margin: 3rem 0;
`;

const socialLinks = [
    {
        name: 'Instagram',
        icon: faInstagram,
        url: 'https://www.instagram.com/chupchoithui/',
    },
    {
        name: 'GitHub',
        icon: faGithub,
        url: 'https://github.com/lptai',
    },
    {
        name: 'StackOverflow',
        icon: faStackOverflow,
        url: 'https://stackoverflow.com/users/4886453/tai-le',
    },
    {
        name: 'LinkedIn',
        icon: faLinkedin,
        url: 'https://www.linkedin.com/in/taile-779a97131/',
    },
];

const LandingBio = ({ title, subtitle }) => (
    <Container>
        <NameHeader onClick={() => window.open('http://phuctaile.com/resume')}>{title}</NameHeader>
        <Description>{`{ ${subtitle} }`}</Description>
        <SocialLinkList>
            {socialLinks.map((item, idx) => (
                <SocialLink key={idx} {...item} />
            ))}
        </SocialLinkList>
    </Container>
);

NameHeader.propTypes = {
    siteTitle: PropTypes.string,
    subtitle: PropTypes.string,
};

NameHeader.defaultProps = {
    siteTitle: ``,
    subtitle: ``,
};

export default LandingBio;
