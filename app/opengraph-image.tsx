import { ImageResponse } from "next/og";

export const alt =
  "Nadav Ben-Haim: cloud platforms, developer tools, and AI workflows";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        background: "#f5efe3",
        color: "#211713",
        display: "flex",
        fontFamily: "Arial, sans-serif",
        height: "100%",
        overflow: "hidden",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          background: "#23051f",
          display: "flex",
          height: "100%",
          position: "absolute",
          right: 0,
          width: 360,
        }}
      />
      <div
        style={{
          background: "#071d24",
          bottom: 0,
          display: "flex",
          height: 170,
          position: "absolute",
          right: 0,
          width: 520,
        }}
      />
      <div
        style={{
          background: "#f25b19",
          display: "flex",
          height: 42,
          position: "absolute",
          right: 330,
          top: 130,
          width: 42,
        }}
      />
      <div
        style={{
          background: "#7ee787",
          display: "flex",
          height: 96,
          position: "absolute",
          right: 80,
          top: 78,
          width: 156,
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "60px 68px",
          position: "relative",
          width: 790,
        }}
      >
        <div
          style={{
            alignItems: "center",
            color: "#7e244f",
            display: "flex",
            fontFamily: "monospace",
            fontSize: 20,
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <span>NB/</span>
          <span>Senior Solution Engineer · Microsoft</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
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
              color: "#65574f",
              display: "flex",
              fontSize: 31,
              lineHeight: 1.28,
            }}
          >
            Cloud platforms, developer tools, and AI workflows for the point
            where the diagram meets production.
          </div>
        </div>
        <div
          style={{
            borderTop: "2px solid #f25b19",
            color: "#65574f",
            display: "flex",
            fontFamily: "monospace",
            fontSize: 17,
            justifyContent: "space-between",
            paddingTop: 18,
            width: "100%",
          }}
        >
          <span>Azure · Kubernetes · AI · Developer Productivity</span>
        </div>
      </div>
    </div>,
    size,
  );
}
