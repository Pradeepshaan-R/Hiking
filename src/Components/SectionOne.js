import React from "react";
import styled from "styled-components";
import { GrStatusGoodSmall } from "react-icons/gr";
import { MdKeyboardArrowRight } from "react-icons/md";
import breakImg from "../images/TopBarImgOutline.png";
import SectionOneImg from "../images/Section01Img.png";

const SectionOne = () => {
  return (
    <div>
      <Break src={breakImg} alt="Break" />
      <SectionWrapper>
        <SectionTopic>
          <h1 className="sectionOneTitle">
            The Mountains are<span> waiting for you</span>
          </h1>
        </SectionTopic>
        <SectionContent>
          <SectionLeft>
            <SectionImg src={SectionOneImg} alt="SectionOneImg" />
            <SectionPara>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis,
              facilis. Delectus totam, quod dolores excepturi recusandae error
              accusantium asperiores harum quaerat. Quidem cumque eaque
              doloribus esse. Nobis vero similique amet pariatur nostrum minus
              nihil ab ipsa? Vitae consectetur incidunt modi.
            </SectionPara>
          </SectionLeft>
          <SectionRight>
            <SectionRightContent>
              <h5>Mountain Survival Tutorial</h5>
              <IconWrap>
                <DotIcon className="dotIcon" />
                <DotIcon className="dotIconOther" />
                <DotIcon className="dotIconOther" />
                <DotIcon className="dotIconOther" />
                <NextIcon />
              </IconWrap>
            </SectionRightContent>
          </SectionRight>
        </SectionContent>
      </SectionWrapper>
    </div>
  );
};

export default SectionOne;

const Break = styled.img`
  position: relative;
  top: -220px;
  left: -60px;
  z-index: 1;
  margin-right: 50px;
`;

const SectionWrapper = styled.div`
  padding: 20px;
`;

const SectionTopic = styled.div`
  position: relative;
  top: -200px;
  text-align: center;
`;

const SectionContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: relative;
  top: -200px;
`;

const SectionLeft = styled.div``;

const SectionImg = styled.img`
  width: 600px;
  height: 400px;
  object-fit: cover;
  outline: white;
  margin: 20px 0px auto 50px;
  border: 20px solid white;
`;

const SectionPara = styled.p`
  padding: 10px;
  margin-left: 40px;
  margin-right: 30px;
`;

const SectionRight = styled.div``;

const SectionRightContent = styled.div`
  color: rgb(57, 19, 19);
  position: relative;
  top: 180px;
  text-align: center;
`;

const IconWrap = styled.div`
  justify-content: space-between;
  padding: 1rem 2rem;
`;

const DotIcon = styled(GrStatusGoodSmall)`
  width: 20px;
  height: 20px;
  margin: 5px;
`;

const NextIcon = styled(MdKeyboardArrowRight)`
  width: 50px;
  height: 50px;
`;
