import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "#23051f",
        border: "2px solid #f25b19",
        color: "#f5efe3",
        display: "flex",
        fontFamily: "monospace",
        fontSize: 24,
        height: "100%",
        justifyContent: "center",
        letterSpacing: "-1px",
        width: "100%",
      }}
    >
      NB<span style={{ color: "#7ee787" }}>/</span>
    </div>,
    size,
  );
}
