import {
  AboutTitle,
  About,
  AboutBelow,
  AboutImage,
  AboutContent,
  AboutDescription,
  AboutQuote,
  AboutLink,
  Section,
  Container,
  AboutContentLowerContainer,
  AboutButton,
  AboutImageDiv,
} from "./AboutUs.styled";
import Link from "next/link";

const AboutUs = () => {
  return (
    <Section id="about-us">
      <Container>
        <AboutBelow>
          <AboutImageDiv>
            <AboutImage
              src="/images/about.jpeg"
              alt="Two female team members discussing project"
            />
          </AboutImageDiv>
          <AboutContent>
            <AboutTitle>Sobre nosotros</AboutTitle>
            <AboutDescription>
              Nos enfocamos en desarrollar soluciones que puedan ayudarte a
              hacer crecer tu negocio, aumentar tus ventas y mejorar tus
              resultados. Hacemos esto entendiendo tus necesidades y desafíos
              específicos, desarrollando soluciones personalizadas y siendo
              apasionados por nuestro trabajo. Si estás buscando una agencia de
              desarrollo web que pueda ayudarte a alcanzar tus objetivos
              comerciales, entonces [Primetech] es la solución para ti.
            </AboutDescription>
            <Link href="#contact-us">
              <AboutButton>Acelera tu crecimiento</AboutButton>
            </Link>
          </AboutContent>
        </AboutBelow>
      </Container>
    </Section>
  );
};

export default AboutUs;
