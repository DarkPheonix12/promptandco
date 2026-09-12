import { ImageResponse } from "next/og";

export const alt = "Prompt&Co. — AI Search Optimization Agency (AEO & GEO)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 100px",
          backgroundColor: "#0b1120",
          color: "#ffffff",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 12,
            backgroundColor: "#2563eb",
            display: "flex",
          }}
        />

        {/* Brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            marginBottom: 48,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              backgroundColor: "#2563eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontWeight: 700,
            }}
          >
            P
          </div>
          <div style={{ fontSize: 44, fontWeight: 700, display: "flex" }}>
            Prompt<span style={{ color: "#06b6d4", display: "flex" }}>&amp;</span>Co.
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: 950,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span style={{ display: "flex" }}>Be the brand</span>
          <span style={{ display: "flex" }}>
            AI{" "}
            <span style={{ color: "#06b6d4", display: "flex" }}>&nbsp;recommends</span>
            .
          </span>
        </div>

        {/* Subline */}
        <div
          style={{
            marginTop: 40,
            fontSize: 32,
            color: "#94a3b8",
            display: "flex",
          }}
        >
          AI Search Optimization · AEO · GEO
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 100,
            fontSize: 26,
            color: "#64748b",
            display: "flex",
          }}
        >
          promptco.online
        </div>
      </div>
    ),
    { ...size }
  );
}
