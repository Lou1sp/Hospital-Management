import { useEffect, useState } from "react";

export function HospitalBranding() {
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const t = setInterval(() => setBlink((b) => !b), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div
      className="relative overflow-hidden flex flex-col justify-between h-screen"
      style={{
        background: "#0a1628",
        color: "#f0ece4",
        padding: "48px 52px",
        minHeight: "560px",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(180,220,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(180,220,255,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 pointer-events-none"
        style={{
          left: 52,
          right: 52,
          height: 1,
          background:
            "linear-gradient(90deg, transparent, #4a9eff55, #4a9eff, #4a9eff55, transparent)",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 280,
          height: 280,
          right: -60,
          top: 60,
          background:
            "radial-gradient(circle, rgba(74,158,255,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Logo */}
        <div className="flex items-center gap-3.5 mb-14">
          <div
            className="relative flex items-center justify-center flex-shrink-0"
            style={{
              width: 40,
              height: 40,
              border: "1px solid rgba(74,158,255,0.5)",
            }}
          >
            <div
              className="absolute"
              style={{
                top: 3,
                left: 3,
                right: -3,
                bottom: -3,
                border: "1px solid rgba(74,158,255,0.2)",
              }}
            />
            {/* Cross icon */}
            <div className="relative" style={{ width: 16, height: 16 }}>
              <div
                className="absolute"
                style={{
                  width: 2,
                  height: "100%",
                  left: "50%",
                  top: 0,
                  transform: "translateX(-50%)",
                  background: "#4a9eff",
                }}
              />
              <div
                className="absolute"
                style={{
                  height: 2,
                  width: "100%",
                  top: "50%",
                  left: 0,
                  transform: "translateY(-50%)",
                  background: "#4a9eff",
                }}
              />
            </div>
          </div>
          <div>
            <p
              style={{
                fontSize: 25,
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#f0ece4",
                margin: 0,
              }}
            >
              HospitalCare
            </p>
            <p
              style={{
                fontSize: 11,
                fontWeight: 300,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(240,236,228,0.4)",
                margin: 0,
              }}
            >
              Hospital Management System
            </p>
          </div>
        </div>

        {/* Eyebrow */}
        <div
          className="flex items-center gap-2.5 mb-10"
          style={{
            fontSize: 20,
            fontWeight: 400,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#4a9eff",
          }}
        >
          <span
            style={{
              display: "block",
              width: 24,
              height: 1,
              background: "#4a9eff",
            }}
          />
          Staff &amp; Patient Portal
        </div>

        {/* Headline */}
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 65,
            fontWeight: 400,
            lineHeight: 1.15,
            color: "#f0ece4",
            margin: "0 0 20px",
            maxWidth: 700,
          }}
        >
          Welcome to the
          <br />
          <em style={{ fontStyle: "italic", color: "#4a9eff" }}>
            Hospital Portal
          </em>
        </h2>

        <p
          style={{
            fontSize: 14,
            fontWeight: 300,
            color: "rgba(240,236,228,0.5)",
            lineHeight: 1.8,
            maxWidth: 300,
            letterSpacing: "0.01em",
            margin: "0 0 30px",
          }}
        >
          Secure access for hospital staff and patients. Streamlined workflows,
          real-time data.
        </p>

        {/* Status badge */}
        <div
          className="inline-flex items-center gap-1.5"
          style={{
            fontSize: 11,
            fontWeight: 400,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "rgba(74,158,255,0.8)",
            border: "1px solid rgba(74,158,255,0.2)",
            padding: "5px 12px",
          }}
        >
          <span
            style={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              background: "#4a9eff",
              opacity: blink ? 1 : 0.3,
              transition: "opacity 0.6s",
            }}
          />
          System operational
        </div>
      </div>

      {/* Stats */}
      <div className="relative z-10">
        <div
          style={{
            width: "100%",
            height: 1,
            background: "rgba(240,236,228,0.08)",
            marginBottom: 24,
          }}
        />
        <div className="flex">
          {[
            ["24/7", "Healthcare Access"],
            ["100%", "Secure Authentication"],
          ].map(([num, label], i) => (
            <div
              key={i}
              style={{
                flex: 1,
                paddingRight: i === 0 ? 28 : 0,
                paddingLeft: i === 1 ? 28 : 0,
                borderLeft:
                  i === 1 ? "1px solid rgba(240,236,228,0.1)" : "none",
              }}
            >
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 28,
                  fontWeight: 400,
                  color: "#f0ece4",
                  margin: "0 0 6px",
                }}
              >
                {num}
              </p>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 300,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(240,236,228,0.35)",
                  margin: 0,
                }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
