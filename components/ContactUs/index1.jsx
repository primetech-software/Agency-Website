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
  HeroForm,
} from "./ContactUs.styled";

import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { send } from "emailjs-com";
import Link from "next/link";
const ContactUs1 = (props) => {
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
  const [senderTime, setSenderTime] = useState(hour + ":" + minute);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMail = (e) => {
    e.preventDefault();
    send(
      "service_p2zntyf",
      "template_f4vbnzh",
      { sender_name, sender_email, sender_service, senderDate, senderTime },
      "HiwseFxtuDnSuFCo_"
    )
      .then((response) => {
        console.log("message sent succesfully", response.status, response.text);
      })
      .catch((err) => {
        console.log("Failed", err);
      });
    set_sender_name("");
    set_sender_email("");
    set_sender_service("");
    set_sender_phone("");
    setSenderDate("");
    setSenderTime("");
    setService("");
    setEmail("");
    setName("");
    setPhone("");
    setCheck(false);
  };

  function clearForm() {
    set_sender_phone("");
    set_sender_email("");
    set_sender_name("");
    set_sender_service("");
    setCheck(false);
  }

  const submit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify({
        name: e.target[0].value,
        email: e.target[2].value,
        phone: e.target[3].value,
        service: e.target[1].value,
      }),
    });
    const data = await response.json();
    const isSuccessful = data.error === null;
    if (isSuccessful) {
      setIsLoading(false);
      clearForm();
      toast.success("Mensaje enviado correctamente 👏", {
        duration: 4000,
      });
    } else {
      setIsLoading(false);
      toast.error("Algo salio mal, intenta de nuevo 😥", {
        duration: 4000,
      });
    }
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <HeroForm
        id="heroContact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <Form onSubmit={submit}>
          <GetaQuote>Habla con nosotros</GetaQuote>
          {/* <ScheduleP>Schedule an Appointment</ScheduleP> */}
          <ContactForm>
            <label htmlFor="name"> Hey👋 mi nombre es... </label> &nbsp;
            <NameInput
              id="name"
              type="text"
              value={sender_name}
              placeholder="&nbsp; Tu Nombre"
              onChange={(e) => {
                set_sender_name(e.target.value);
                setName(e.target.value);
              }}
              required
            />
            &nbsp;<label htmlFor="service">Y estoy buscando </label>
            &nbsp;
            <Dropdowns
              id="service"
              value={sender_service}
              placeholder="&nbsp; Selecciona un setvicio"
              onChange={(e) => {
                set_sender_service(e.target.value);
              }}
              required
            >
              <option value="Web Development">Desarrollo Web</option>
              <option value="SEO">SEO</option>
              <option value="App Developement">Desarrollo Aplicaciones</option>
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
            <label htmlFor="email">Danos un toque 😉</label>&nbsp;
            <EmailInput
              id="email"
              type="email"
              value={sender_email}
              placeholder="&nbsp; Tu correo electronico"
              onChange={(e) => {
                set_sender_email(e.target.value);
                setEmail(e.target.value);
              }}
              required
            />
            <label htmlFor="phone">Numero de contacto📞</label>&nbsp;
            <PhoneInput
              id="phone"
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
                onChange={(e) => {
                  setCheck(e.target.checked);
                }}
                required
              />
              <CheckboxTitle>Acepto los terminos y condiciones</CheckboxTitle>
            </label>
          </TermsCheckbox>
          <SubmitForm type="Submit">Enviar peticion</SubmitForm>
        </Form>
      </HeroForm>
    </>
  );
};

export default ContactUs1;
