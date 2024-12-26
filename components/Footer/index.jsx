import Link from "next/link";
import { Container, FooterTitles, Section } from "./Footer.styled";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <Section>
      <Container>
        <FooterTitles>&copy; {year} Todos los derechos reservados</FooterTitles>
        <FooterTitles>
          Desarrollado por
          <strong>
            <Link href="/"> &nbsp;[PrimeTech]</Link>
          </strong>
        </FooterTitles>
        <Link href="mailto:hello@intelpik.com">
          <FooterTitles>hi.primetech@gmail.com</FooterTitles>
        </Link>
      </Container>
    </Section>
  );
};

export default Footer;
