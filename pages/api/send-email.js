import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const resend = new Resend("re_dPcK6CSy_AfWn7JaRPLuHe3yAciP4NohS");
      const response = await resend.emails.send({
        from: "PrimeTech<hi.primetech@gmail.com>",
        to: ["alexkononenko6@protonmail.com"],
        subject: "Prueba de envio de correo",
        html: "<h1>Prueba de envio de correo</h1>",
      });

      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: "Error al enviar el correo" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
