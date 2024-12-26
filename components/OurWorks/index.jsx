import Slider from "react-slick";
import {
  Container,
  WorkTitle,
  Work,
  WorkOne,
  WorkLinkImage,
  WorkTwo,
  WorkThree,
  WorkDescription,
  WorkImage,
  WorkHeading,
  Section,
  WorkInnerContainer,
  SubHeading,
  ImageDiv,
  WorkHeader,
  ArrowDiv,
  ViewButton,
  StyledSlider,
  WorkDiv,
} from "./OurWorks.styled";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { IconContext } from "react-icons";
import { useRef } from "react";
import works from "./OurWorkData";
import Link from "next/link";

const OurWorks = () => {
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <BsArrowLeft />,
    nextArrow: <BsArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderRef = useRef(null);

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <Section id="our-works">
      <Container>
        <WorkHeader>
          <div>
            <WorkHeading>Algunos de nuestros proyectos</WorkHeading>
            <SubHeading>
              Hemos ayudado a estas empresas a digitalizarse.
            </SubHeading>
          </div>
          <ArrowDiv>
            <BsArrowLeft onClick={handlePrev}></BsArrowLeft>
            <BsArrowRight onClick={handleNext}></BsArrowRight>
          </ArrowDiv>
        </WorkHeader>
        <WorkInnerContainer>
          <StyledSlider {...settings} ref={sliderRef}>
            {works.map((work) => (
              <WorkDiv key={work.id} style={{ paddingRight: "10px" }}>
                <ImageDiv
                  style={{
                    background: `url(${work.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  alt={work.alt}
                >
                  <a
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visita ${work.name}`}
                  >
                    <ViewButton>{work.name}</ViewButton>
                  </a>
                </ImageDiv>
              </WorkDiv>
            ))}
          </StyledSlider>
        </WorkInnerContainer>
      </Container>
    </Section>
  );
};

export default OurWorks;
