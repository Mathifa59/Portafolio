import { ImageResponse } from "next/og";

export const alt = "Mathias Vasquez — Generative AI, Backend & Architecture";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#101014",
          padding: "80px",
          color: "#f0eff5",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#a99bf5",
            fontSize: 20,
            marginBottom: 50,
          }}
        >
          <span>SOFTWARE DEVELOPER</span>
          <span>LIMA, PERÚ</span>
        </div>
        <div
          style={{
            fontSize: 100,
            letterSpacing: -5,
            fontWeight: 700,
            display: "flex",
          }}
        >
          Mathias Vasquez<span style={{ color: "#a99bf5" }}>.</span>
        </div>
        <div style={{ color: "#b6b4c2", fontSize: 30, marginTop: 25 }}>
          Generative AI / Backend / Architecture
        </div>
        <div
          style={{
            display: "flex",
            borderTop: "1px solid #33313f",
            paddingTop: 30,
            marginTop: 60,
            fontSize: 20,
            justifyContent: "space-between",
            color: "#8b889a",
          }}
        >
          <span>Agentes de IA · Servicios backend · Búsqueda semántica</span>
          <span>mathiasvasquez.dev</span>
        </div>
      </div>
    ),
    size,
  );
}
