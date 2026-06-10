import { ImageResponse } from "next/og";

// Branded social share image, generated at build. Next wires this up as the
// og:image and twitter:image for the whole site (inherited by /team, /advisory),
// so link previews render without needing a separately hosted PNG.
export const alt =
  "Satinwood — senior finance teams from Sri Lanka, embedded in your business.";
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
          justifyContent: "space-between",
          padding: "76px 84px",
          backgroundColor: "#1E261A",
          backgroundImage:
            "radial-gradient(900px 520px at 88% 6%, rgba(194,162,78,0.18), rgba(194,162,78,0) 60%)",
          color: "#F2EBDB",
        }}
      >
        {/* Top gold rule */}
        <div style={{ display: "flex", height: 6, width: 132, backgroundColor: "#C2A24E" }} />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#C2A24E",
              fontWeight: 600,
            }}
          >
            Senior finance teams · Crafted in Ceylon
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 92,
              lineHeight: 1.04,
              fontWeight: 700,
              color: "#F6F1E6",
              maxWidth: 980,
            }}
          >
            A controller-grade finance team, embedded in your business.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(244,239,226,0.16)",
            paddingTop: 28,
          }}
        >
          <div style={{ fontSize: 40, fontWeight: 700, color: "#F6F1E6", letterSpacing: 0.5 }}>
            Satinwood
          </div>
          <div style={{ fontSize: 26, color: "#C5BCA6" }}>satinwood.co</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
