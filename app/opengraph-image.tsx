import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Mathias Vasquez - Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Glow de fondo */}
        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "rgba(16,185,129,0.08)",
            filter: "blur(100px)",
          }}
        />

        {/* Badge disponible */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "28px",
            padding: "10px 24px",
            border: "1px solid rgba(16,185,129,0.3)",
            borderRadius: "100px",
            background: "rgba(16,185,129,0.05)",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#10b981",
            }}
          />
          <span style={{ color: "#10b981", fontSize: "18px" }}>
            Disponible para proyectos & roles
          </span>
        </div>

        <h1
          style={{
            color: "white",
            fontSize: "80px",
            fontWeight: "bold",
            textAlign: "center",
            margin: "0 0 16px 0",
            lineHeight: 1.1,
          }}
        >
          Mathias Vasquez
        </h1>

        <p
          style={{
            color: "#a1a1aa",
            fontSize: "30px",
            margin: "0 0 48px 0",
            textAlign: "center",
          }}
        >
          Full Stack Developer &amp; Founder @ DevHorses
        </p>

        <div style={{ display: "flex", gap: "12px" }}>
          {["Next.js", "TypeScript", "Node.js", "React"].map((tech) => (
            <span
              key={tech}
              style={{
                background: "rgba(16,185,129,0.1)",
                border: "1px solid rgba(16,185,129,0.25)",
                color: "#34d399",
                padding: "10px 24px",
                borderRadius: "100px",
                fontSize: "18px",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Dominio */}
        <p
          style={{
            position: "absolute",
            bottom: "40px",
            color: "#3f3f46",
            fontSize: "16px",
          }}
        >
          mathiasvasquez.dev
        </p>
      </div>
    ),
    { ...size }
  );
}
