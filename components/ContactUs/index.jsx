import {
  Section,
  Container,
  Detail,
  DetailIcons,
  ContactLinkImage,
  DetailDescription,
  DetailTitle,
  LeftSection,
  RightSection,
  Span,
  Contact,
  ContactDetails,
  Title,
  TitleContact,
  MailIcon,
  ContactForm,
  PhoneIcon,
  EmailInput,
  NameInput,
  ServiceInput,
  GetaQuote,
  Form,
  ScheduleP,
  TermsCheckbox,
  SubmitForm,
  CheckboxTitle,
  Checkbox,
  UpperSection,
  BottomSection,
  Dropdowns,
  PhoneInput,
  SocialIcon,
  SocialDiv,
} from "./ContactUs.styled";

import { useState } from "react";
import Link from "next/link";
import { Resend } from "resend";
const ContactUs = () => {
  const [sender_email, set_sender_email] = useState("");
  const [sender_phone, set_sender_phone] = useState("");
  const [sender_name, set_sender_name] = useState("");
  const Newdate = new Date();
  const date = Newdate.getDate();
  const month = Newdate.getMonth();
  const CurrentMonth = month + 1;
  const year = Newdate.getFullYear();
  const hour = Newdate.getHours();
  const minute = Newdate.getMinutes();
  const [sender_service, set_sender_service] = useState("");
  const [senderDate, setSenderDate] = useState(
    date + "-" + CurrentMonth + "-" + year
  );
  const [check, setCheck] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/send-email", {
      method: "POST",
    });
    const data = await response.json();
    alert("Tu mensaje ha sido enviado", data);
  };

  return (
    <Section id="contact-us">
      <Container>
        <UpperSection>
          <TitleContact>Hablemos sobre tus necesidades</TitleContact>
        </UpperSection>
        <BottomSection>
          <LeftSection>
            <ContactDetails>
              <Contact>
                <DetailIcons>
                  <MailIcon aria-label="Send us an email" />
                </DetailIcons>
                <Detail>
                  <DetailTitle>Email</DetailTitle>
                  <Link href="mailto:hi.primetech@gmail.com" passHref>
                    <DetailDescription>
                      hi.primetech@gmail.com
                    </DetailDescription>
                  </Link>
                </Detail>
              </Contact>
              <Contact>
                <DetailIcons>
                  <PhoneIcon aria-label="Call us" />
                </DetailIcons>
                <Detail>
                  <DetailTitle>Telefono</DetailTitle>
                  <Link href="tel:+34667257687" passHref>
                    <DetailDescription>+34 667257687</DetailDescription>
                  </Link>
                </Detail>
              </Contact>
              {/* <Contact>
                <DetailIcons>
                  <SocialIcon aria-label="Follow us on social media" />
                </DetailIcons>
                <Detail>
                  <DetailTitle>Social</DetailTitle>
                  <SocialDiv>
                    <Link
                      href="https://www.linkedin.com/company/intelpik/"
                      passHref
                    >
                      <DetailDescription>LinkedIn</DetailDescription>
                    </Link>
                    <Link
                      href="https://www.instagram.com/intelpik.official/"
                      passHref
                    >
                      <DetailDescription>Instagram</DetailDescription>
                    </Link>
                  </SocialDiv>
                </Detail>
              </Contact> */}
            </ContactDetails>
          </LeftSection>
          <RightSection>
            <Form onSubmit={submit} id="contact-form">
              <GetaQuote>Habla con nosotros</GetaQuote>
              {/* <ScheduleP>Schedule an Appointment</ScheduleP> */}
              <ContactForm>
                <label htmlFor="contact-name"> Hey👋 mi nombre es ...</label>{" "}
                &nbsp;
                <NameInput
                  id="contact-name"
                  type="text"
                  value={sender_name}
                  placeholder="&nbsp; Tu nombre"
                  onChange={(e) => {
                    set_sender_name(e.target.value);
                    setName(e.target.value);
                  }}
                  required
                />
                &nbsp;
                <label htmlFor="contact-service"> Y estoy buscando </label>
                &nbsp;
                <Dropdowns
                  id="contact-service"
                  value={sender_service}
                  placeholder="&nbsp; Select a service"
                  onChange={(e) => {
                    set_sender_service(e.target.value);
                  }}
                  required
                >
                  <option value="Web Development">Desarrollo Web</option>
                  <option value="SEO">SEO</option>
                  <option value="App Developement">
                    Desarrollo Aplicaciones
                  </option>
                  <option value="Chatbot">
                    Desarrollo chatbot y automatizaciones
                  </option>
                  <option value="cybersecurity">
                    Auditorias de Ciberseguridad
                  </option>
                  <option value="custom">Servicios personalizados</option>
                  <option value="maintenance">
                    Mantenimiento de aplicaciones web o mobile
                  </option>
                </Dropdowns>
                <br />
                <label htmlFor="contact-email">Danos un toque 😉</label>&nbsp;
                <EmailInput
                  id="contact-email"
                  type="email"
                  value={sender_email}
                  placeholder="&nbsp; Tu correo electronico"
                  onChange={(e) => {
                    set_sender_email(e.target.value);
                    setEmail(e.target.value);
                  }}
                  required
                />
                <label htmlFor="contact-phone">Telefono de contacto📞</label>
                &nbsp;
                <PhoneInput
                  id="contact-phone"
                  type="tel"
                  value={sender_phone}
                  placeholder="Tu numero de telefono"
                  onChange={(e) => {
                    set_sender_phone(e.target.value);
                    setPhone(e.target.value);
                  }}
                  required
                />
              </ContactForm>
              <TermsCheckbox>
                <label style={{ display: "flex", alignItems: "center" }}>
                  <Checkbox
                    type="checkbox"
                    required
                    onChange={(e) => {
                      setCheck(e.target.checked);
                    }}
                  />
                  <CheckboxTitle>
                    Estoy de acuerdo con los términos y condiciones
                  </CheckboxTitle>
                </label>
              </TermsCheckbox>
              <SubmitForm type="Submit">Enviar peticion</SubmitForm>
            </Form>
          </RightSection>
        </BottomSection>
      </Container>
    </Section>
  );
};

export default ContactUs;
