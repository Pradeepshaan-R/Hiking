import React from "react";
import styled from "styled-components";

const SectionThree = () => {
  return (
    <SectionWrapper>
      <SectionHeader>
        <h1 className="sectionThreeTitle">
          Choose<span> your tour</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam,
          cupiditate adipisci fuga saepe ipsum odio, sed minus temporibus
          pariatur provident fugiat reprehenderit sunt, consequuntur sequi
          aperiam et tempora veniam dolorum? Aliquid porro nulla dolorum error,
          harum quaerat, ut voluptates dignissimos non dolore dicta quisquam
          adipisci ex maiores illo possimus atque!
        </p>
      </SectionHeader>
    </SectionWrapper>
  );
};

export default SectionThree;

const SectionWrapper = styled.div`
  padding: 50px 50px 0px 50px;
  margin-top: 70px;
`;

const SectionHeader = styled.div`
  position: relative;
  top: -200px;
  text-align: center;

  p {
    text-align: center;
    padding: 50px 300px 0 300px;

    @media screen and (max-width: 768px) {
      padding: 50px 10px 0 10px;
    }
  }
`;
