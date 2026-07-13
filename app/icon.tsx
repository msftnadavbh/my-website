import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "#171717",
        border: "2px solid #739ce8",
        color: "#f3f0e8",
        display: "flex",
        fontFamily: "monospace",
        fontSize: 24,
        height: "100%",
        justifyContent: "center",
        letterSpacing: "-1px",
        width: "100%",
      }}
    >
      NB<span style={{ color: "#ddcd82" }}>/</span>
    </div>,
    size,
  );
}
