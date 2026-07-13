import { ImageResponse } from "next/og";

export const alt =
  "Nadav Ben-Haim — cloud platforms, developer tools, and AI workflows";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        background: "#171717",
        color: "#f3f0e8",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Arial, sans-serif",
        height: "100%",
        justifyContent: "space-between",
        padding: "68px 76px",
        width: "100%",
      }}
    >
      <div
        style={{
          alignItems: "center",
          color: "#ddcd82",
          display: "flex",
          fontFamily: "monospace",
          fontSize: 22,
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <span>NB/</span>
        <span>Senior Solution Engineer · Microsoft</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: "-3px",
            lineHeight: 1,
            marginBottom: 30,
          }}
        >
          Nadav Ben-Haim
        </div>
        <div
          style={{
            color: "#b9b5ad",
            display: "flex",
            fontSize: 34,
            lineHeight: 1.3,
          }}
        >
          Cloud platforms, developer tools, and AI workflows for the point where
          the diagram meets production.
        </div>
      </div>
      <div
        style={{
          borderTop: "2px solid #739ce8",
          color: "#b9b5ad",
          display: "flex",
          fontFamily: "monospace",
          fontSize: 18,
          justifyContent: "space-between",
          paddingTop: 20,
          width: "100%",
        }}
      >
        <span>Azure · Kubernetes · AI · Developer Productivity</span>
        <span>github.com/msftnadavbh</span>
      </div>
    </div>,
    size,
  );
}
