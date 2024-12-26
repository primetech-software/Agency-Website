import React from "react";
import {
  BeginButton,
  Container,
  Left,
  LeftCaption,
  LeftDescription,
  LeftHeader,
  LeftHeading,
  LeftImg,
  LeftImgDiv,
  Numbers,
  Right,
  RightParagraph,
  RightSections,
  Section,
} from "./Features.styled";
import Link from "next/link";

function Features() {
  return (
    <Section>
      <Container>
        <Left>
          <LeftHeader>
            <LeftCaption>Porque nosotros</LeftCaption>
            <LeftHeading>Sigues con dudas?</LeftHeading>
            <LeftDescription>
              Algunas de las razones por las que deberías elegirnos.
            </LeftDescription>
          </LeftHeader>
        </Left>
        <LeftImg>
          <Link href="#contact-form" passHref>
            <BeginButton>Empecemos</BeginButton>
          </Link>
        </LeftImg>
        <Right>
          <RightSections>
            <Numbers>
              <h2>100%</h2>
              <p>Clientes satisfechos</p>
            </Numbers>
            <RightParagraph>
              Hemos tenido un 100% de satisfacción del cliente con nuestros
              servicios.
            </RightParagraph>
          </RightSections>
          <RightSections>
            <Numbers>
              <h2>78%</h2>
              <p>Incremento en leads</p>
            </Numbers>
            <RightParagraph>
              Nuestros clientes han visto un aumento del 78% en leads después de
              trabajar con nosotros.
            </RightParagraph>
          </RightSections>
          <RightSections>
            <Numbers>
              <h2>3x</h2>
              <p>Crecimiento de nuestros clientes</p>
            </Numbers>
            <RightParagraph>
              Nuestros clientes han experimentado un crecimiento 3 veces mayor
              después de trabajar con nosotros
            </RightParagraph>
          </RightSections>
          <RightSections>
            <Numbers>
              <h2>Presupuesto</h2>
              <p>Nos adaptamos a tu forma de pago</p>
            </Numbers>
            <RightParagraph>
              Entendemos que cada cliente es diferente, por lo que nos adaptamos
              a tu forma de pago
            </RightParagraph>
          </RightSections>
          <RightSections>
            <Numbers>
              <h2>Know how</h2>
              <p>
                Ponemos el conocimiento de las grandes multinacionales a
                disposicion de PYMES
              </p>
            </Numbers>
            <RightParagraph>
              Hemos trabajado con grandes empresas y ahora queremos poner ese
              conocimiento a disposicion de las PYMES de una forma asequible
            </RightParagraph>
          </RightSections>
        </Right>
      </Container>
    </Section>
  );
}

export default Features;
