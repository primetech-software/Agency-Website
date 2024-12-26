import Link from "next/link";
import { motion } from "framer-motion";
import {
  ServiceContent,
  ServicesText,
  ServiceNavImage,
  ServiceHeading,
  ServiceList,
  ServiceDetails,
  HorizontalLine,
  Span,
  ServiceTitle,
  ServiceLink,
  Service,
  ServiceIndex,
  ServiceDescription,
  Section,
  Container,
  ServiceLinkContainer,
  ServiceTextMainContainer,
  ArrowIcon,
  ServiceImage,
  WhatWeDo,
  ServiceHeader,
  ServiceHeadingDiv,
  ContactButton,
} from "./Services.styled";

const Services = () => {
  return (
    <Section id="services">
      <Container>
        <ServiceHeader>
          <WhatWeDo>Lo que hacemos</WhatWeDo>
          <ServiceHeadingDiv>
            <ServiceHeading>Servicios que ofrecemos</ServiceHeading>
            <Link href="#contact-us">
              <ContactButton>Contacta con nosotros</ContactButton>
            </Link>
          </ServiceHeadingDiv>
        </ServiceHeader>

        <ServiceContent>
          <ServiceList>
            <Service
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <ServiceImage
                alt="Web Development Icon"
                initial={{ opacity: 0, x: -130 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                viewport={{ once: true }}
                src="/images/website development.svg"
              ></ServiceImage>

              <ServiceTitle>Desarrollo web</ServiceTitle>

              <ServiceDetails>
                Aprovecha al máximo el desarrollo web y haz crecer tu negocio.
              </ServiceDetails>
            </Service>

            <Service
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <ServiceImage
                alt="App Development Icon"
                initial={{ opacity: 0, x: -130 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                viewport={{ once: true }}
                src="/images/app development.svg"
              ></ServiceImage>

              <ServiceTitle>Desarrollo Aplicaciones Movil</ServiceTitle>

              <ServiceDetails>
                Soluciones de desarrollo de aplicaciones móviles que te ayudan a
                alcanzar tu audiencia objetivo.
              </ServiceDetails>
            </Service>

            <Service
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <ServiceImage
                alt="Digital Marketing Icon"
                initial={{ opacity: 0, x: -130 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                viewport={{ once: true }}
                src="/images/digital marketing.svg"
              ></ServiceImage>

              <ServiceTitle>Auditoria y mejora SEO</ServiceTitle>

              <ServiceDetails>
                <p>
                  Soluciones Estratégicas de Auditoría SEO para el Crecimiento
                  de tu Negocio
                </p>
              </ServiceDetails>
            </Service>
            <Service
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <ServiceImage
                alt="Digital Marketing Icon"
                initial={{ opacity: 0, x: -130 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                viewport={{ once: true }}
                src="/images/cybersecurity.png"
              ></ServiceImage>

              <ServiceTitle>Auditoria Ciberseguridad</ServiceTitle>

              <ServiceDetails>
                <p>
                  Auditoría de Ciberseguridad para la Protección de tu Negocio
                </p>
              </ServiceDetails>
            </Service>
            <Service
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <ServiceImage
                alt="Digital Marketing Icon"
                initial={{ opacity: 0, x: -130 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                viewport={{ once: true }}
                src="/images/IA.png"
              ></ServiceImage>

              <ServiceTitle>
                Soluciones de Inteligencia Artificial y Automatizaciones
              </ServiceTitle>

              <ServiceDetails>
                <p>Desarrollo de chatbots y automatizaciones de tu negocio</p>
              </ServiceDetails>
            </Service>
          </ServiceList>
        </ServiceContent>
      </Container>
    </Section>
  );
};

export default Services;
