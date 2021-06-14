import React from "react";
import styled from "styled-components";

const SectionTwo = () => {
  return (
    <SectionWrapper>
      <SectionHeader>
        <span>"</span>
      </SectionHeader>
      <SectionBody>
        <SectionTopic>
          <h1>Testimonies</h1>
        </SectionTopic>
        <SectionContent>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            voluptate itaque temporibus aut, accusantium incidunt impedit animi
            corrupti sed voluptates deleniti, nisi cupiditate in voluptatibus
            architecto placeat deserunt repudiandae sint voluptatum magni alias.
            Reiciendis sunt veritatis amet eaque atque officia!
          </span>
        </SectionContent>
      </SectionBody>
      <SectionFooter>
        <span>"</span>
      </SectionFooter>
    </SectionWrapper>
  );
};

export default SectionTwo;

const SectionWrapper = styled.div`
  background: white;
  position: relative;
  top: -220px;
  display: grid;
  padding-top: 150px;
  grid-template-columns: repeat(12, 1fr);
`;

const SectionHeader = styled.div`
  grid-column: 3/4;
  //   padding-bottom: 50px;

  span {
    font-family: "Shadows Into Light", cursive;
    font-size: 150px;
  }
`;

const SectionBody = styled.div`
  grid-column: 4/10;
`;

const SectionTopic = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  h1 {
    padding-bottom: 30px;
    text-align: center;
    font-family: Roboto;
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: 5px;
  }
`;

const SectionContent = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  span {
    text-align: center;
  }
`;

const SectionFooter = styled.div`
  grid-column: 11/12;
  padding-top: 150px;
  span {
    font-family: "Shadows Into Light", cursive;
    font-size: 150px;
  }
`;
