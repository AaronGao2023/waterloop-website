import React from "react";
import styled from "styled-components";

import { ContactsType } from './interfaces'

const Container = styled.div`
  display: flex;
  flex-direction: columns;
  justify-content: space-between;
  width: 320px;
  height: 178px;
`
const PortraitContainer = styled.div`
  width: 60%;
  height: 100%;
  border: 1px solid #fbc531;
  border-radius: 25px 0px;
`
const Portrait = styled.img`
  max-width: 100%;
  max-height: 100%;
`
const InfoContainer = styled.div`
  width: 35%;
  display: grid;
  grid-row-template: repeat(3, 1fr);
  align-content: space-between;
  font-family: IBM Plex Sans;
  font-style: normal;
  color: #000000;
`
const InfoTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
`
const InfoPosition = styled.div`
  font-weight: 200;
  font-size: 14px;
`
const ContactsContainer = styled.div`
  display: flex;
`
const Contact = styled.a`
  padding-right: 5px;
  height: 22px;
  width: 22px;
`
const Icon = styled.img`
  max-height: 100%;
  max-width: 100%;
`

const Contacts = (props: ContactsType) => {
  return <ContactsContainer>
    {props.contacts.map((item, i) => {
      return <Contact key={i} href={item.url} target="_blank" onClick={(event: any) => {event.stopPropagation()}}>
        <Icon src={item.icon} alt="link"/>
      </Contact>
    })}
  </ContactsContainer>
}

const LeadProfile = (props: any) => {
  return (
    <Container onClick={props.onClick}>
        <PortraitContainer><Portrait src={props.portrait} alt="portrait"/></PortraitContainer>
        <InfoContainer>
          <InfoTitle>{props.name}</InfoTitle>
          <InfoPosition>{props.position}</InfoPosition>
          {props.contacts.length > 0 && <Contacts contacts={props.contacts}/>}
        </InfoContainer>
    </Container>
  );
}

export default LeadProfile;
