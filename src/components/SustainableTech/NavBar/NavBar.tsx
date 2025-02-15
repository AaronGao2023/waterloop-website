import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import IconBlackImg from '../../../static/img/sustainable-tech/Icon_Black.svg';
import scrollTo from '../utils/LinkScroll';

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 64px;
  background-color: #e5f6fa;
  position: fixed;
  top: 0;
  scroll-behavior: smooth;
  z-index: 1;
`;

const IconBlack = styled.img`
  width: 55px;
  height: 35px;
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
  position: absolute;
  left: 40px;
  top: 13px;

  @media screen and (max-width: 900px) {
    width: 50px;
    height: 32px;
  }

  @media screen and (max-width: 600px) {
    width: 40px;
    height: 27px;
    left: 20px;
    top: 15px;
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
`;

const ScrollLink = styled.button`
  color: black;
  margin: 0 14px;
  font-family: 'IBM Plex Sans';
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 500;
  background-color: #e5f6fa;
  border: none;
  cursor: pointer;

  text-decoration: none;
  &:visited,
  &:link {
    text-decoration: none;
  }

  &:focus,
  &:hover,
  &:active {
    text-decoration: none;
    color: #3c8c4a;
  }

  @media screen and (max-width: 1250px) {
    margin: 0 2%;
    font-size: 16px;
  }

  @media screen and (max-width: 1000px) {
    margin: 0 8px;
    padding: 0;
    font-size: 16px;
  }

  @media screen and (max-width: 720px) {
    font-size: 13px;
  }
`;

const ButtonContainer = styled.button`
  border-radius: 25px;
  background-color: #203d7a;
  text-decoration: none;
  color: white;
  font-family: 'IBM Plex Sans';
  font-size: 17px;
  font-weight: 500;
  padding: 10px 3%;
  border: #203d7a;
  position: absolute;
  right: 40px;
  top: 10px;

  &:hover {
    background-color: white;
    color: #203d7a;
    border: white;
  }

  @media screen and (max-width: 1250px) {
    font-size: 16px;
  }

  @media screen and (max-width: 720px) {
    font-size: 13px;
  }

  @media screen and (max-width: 600px) {
    right: 11px;
    top: 16px;
    font-size: 8px;
  }
`;

const NavBar: React.FC = () => (
  <NavbarContainer>
      <Link to="/">
        <IconBlack src={IconBlackImg} />
      </Link>
    <ListContainer>
      <ScrollLink onClick={(): void => scrollTo('home-scroll')}>
        HOME
      </ScrollLink>
      <ScrollLink onClick={(): void => scrollTo('about-scroll')}>
        ABOUT
      </ScrollLink>
      <ScrollLink onClick={(): void => scrollTo('schedule-scroll')}>
        SCHEDULE
      </ScrollLink>
      <ScrollLink onClick={(): void => scrollTo('teams-scroll')}>
        TEAMS
      </ScrollLink>
      <ScrollLink onClick={(): void => scrollTo('faq-scroll')}>FAQ</ScrollLink>
    </ListContainer>
    <ButtonContainer
      as="a"
      href="https://tinyurl.com/uwgreentech"
      target="_blank"
      rel="noopener noreferrer"
    >
      SIGN UP
    </ButtonContainer>
  </NavbarContainer>
);
export default NavBar;
