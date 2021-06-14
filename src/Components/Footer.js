import React from "react";
import styled, { css } from "styled-components";
import { FaFacebookF, FaWhatsapp, FaInstagram, FaTumblr } from "react-icons/fa";

const Footer = () => {
  return (
    <SectionWrapper>
      <SectionHeader>
        <h1 className="sectionThreeTitle">About Us</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
          officiis modi ipsum, voluptatum fugit ut asperiores molestias
          doloremque excepturi cupiditate ab. Eius dolorum eveniet cupiditate!
          Repellat odio explicabo libero incidunt similique, nesciunt magni
          reprehenderit atque repellendus provident quas id sint!
        </p>
      </SectionHeader>
      <IconSection>
        <FacebookIcon />
        <InstagramIcon />
        <WhatsAppIcon />
        <TumblrIcon />
      </IconSection>
    </SectionWrapper>
  );
};

export default Footer;

const SectionWrapper = styled.div`
  background: white;
  padding: 50px;
  margin-top: 70px;
  height: 500px;
`;

const SectionHeader = styled.div`
  padding-top: 100px;
  position: relative;
  top: -40px;
  text-align: center;

  p {
    text-align: center;
    padding: 50px 300px 0 300px;
  }
`;

const IconSection = styled.div`
  text-align: center;
  justify-content: space-between;
  padding: 1rem 2rem;
`;
const IconSocial = css`
  width: 40px;
  height: 40px;
  margin: 5px;
  border: 1px solid black;
  border-radius: 50px;
  padding: 7px;
  color: white;
  background: black;
`;

const FacebookIcon = styled(FaFacebookF)`
  ${IconSocial}
`;
const InstagramIcon = styled(FaInstagram)`
  ${IconSocial}
`;
const WhatsAppIcon = styled(FaWhatsapp)`
  ${IconSocial}
`;
const TumblrIcon = styled(FaTumblr)`
  ${IconSocial}
`;
