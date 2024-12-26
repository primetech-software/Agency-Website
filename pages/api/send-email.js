import { Resend } from "resend";
import { Email } from "../../email/EmailTemplate";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Attempt to parse the body if it's a string
    let parsedBody;
    if (typeof req.body === "string") {
      try {
        parsedBody = JSON.parse(req.body);
      } catch (error) {
        console.error("Error parsing request body:", error);
        return res.status(400).json({ error: "Invalid JSON in request body" });
      }
    } else {
      parsedBody = req.body;
    }

    const { name, email, service, phone } = parsedBody;

    if (!name || !email || !service || !phone) {
      return res.status(400).json({ error: "Faltan campos requeridos" });
    }

    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const response = await resend.emails.send({
        from: "PrimeTech<hello@primetech-agency.com>",
        to: [email],
        subject: ` Gracias ${name} por tu interés en nuestros servicios de ${service}`,
        react: <Email name={name} service={service} />,
      });

      if (response.error === null) {
        await resend.emails.send({
          from: "PrimeTech<hello@primetech-agency.com>",
          to: ["alex.kononenko6@protonmail.com", "hi.primetech@gmail.com"],
          subject: "Nueva petición de servicio desde Primetech",
          html: `
            <h1>Nueva petición de servicio desde Primetech</h1>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Servicio:</strong> ${service}</p>
            <p><strong>Numero de telefono:</strong> ${phone}</p>
          `,
        });
      }

      res.status(200).json(response);
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Error al enviar el correo" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
