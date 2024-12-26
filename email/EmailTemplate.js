import Image from "next/image";

export function Email({ name, service }) {
  return (
    <div
      style={{
        fontFamily: "'Arial', sans-serif",
        color: "#333",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "0",
        backgroundColor: "#f4f4f4",
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: "#5928e5",
          color: "white",
          padding: "20px",
          textAlign: "center",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
      >
        <h1>[PrimeTech]</h1>
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            margin: "0",
          }}
        >
          <strong>Gracias por ponerte en contacto con nosotros {name}!</strong>
        </h2>
      </div>

      {/* Main Content */}
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderBottomLeftRadius: "8px",
          borderBottomRightRadius: "8px",
        }}
      >
        <p style={{ marginBottom: "20px" }}>
          Hola <strong>{name}</strong>,
        </p>
        <p style={{ marginBottom: "20px", lineHeight: "1.6" }}>
          Te agradecemos por ponerte en contacto con nosotros y por interesarte
          en nuestros servicios de <strong>{service}</strong>. Estamos
          emocionados de trabajar juntos y ayudarte a alcanzar tus
          objetivos.Hemos recibido tu mensaje y te responderemos lo antes
          posible.
        </p>
        <p style={{ marginBottom: "30px", lineHeight: "1.6" }}>
          Mientras tanto, te invitamos a seguirnos en nuestras redes sociales
          para conocer más sobre nosotros y nuestros servicios.
        </p>

        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <a
            href="https://www.primetech-agency.com"
            style={{
              backgroundColor: "#5928e5",
              color: "white",
              padding: "12px 24px",
              borderRadius: "25px",
              textDecoration: "none",
              fontWeight: "bold",
              display: "inline-block",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#4a20c0")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#5928e5")
            }
          >
            Visita nuestro sitio web
          </a>
        </div>

        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <Image
            src="/images/MOCKUPS1/bussines.png"
            alt="Primetech Business"
            width={300}
            height={300}
            style={{
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>

        <p
          style={{
            fontSize: "14px",
            color: "#666",
            marginBottom: "20px",
            lineHeight: "1.6",
          }}
        >
          Si tienes alguna pregunta adicional, no dudes en responder a este
          correo. Estamos aquí para ayudarte. 😉
        </p>

        <p style={{ fontWeight: "bold" }}>
          Saludos,
          <br />
          El equipo de Primetech
        </p>
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: "30px",
          textAlign: "center",
          fontSize: "12px",
          color: "#666",
        }}
      >
        <p>
          © {new Date().getFullYear()} Primetech. Todos los derechos reservados.
        </p>
        <div style={{ marginTop: "10px" }}>
          <a
            href="#"
            style={{
              color: "#5928e5",
              textDecoration: "none",
              margin: "0 10px",
            }}
          >
            Política de Privacidad
          </a>
          <a
            href="#"
            style={{
              color: "#5928e5",
              textDecoration: "none",
              margin: "0 10px",
            }}
          >
            Términos de Servicio
          </a>
        </div>
      </div>
    </div>
  );
}
