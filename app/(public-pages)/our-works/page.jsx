"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

/* ── DATA ───────────────────────────────────────── */

const SECTIONS = [
  { id: "hero", label: "Overview" },
   { id: "consultation", label: "Project Consultation" },
  { id: "model", label: "3D Modeling" },
  { id: "print", label: "3D Printing" },
  { id: "electronics", label: "Electronics Wiring" },
  { id: "uiux", label: "ios App UI/UX Design" },
  { id: "testing", label: "Hardware & Software Testing" },
];

const HERO_IMAGES = [
  { src: "/projects/escape-iot/hero1.png" },
  { src: "/projects/escape-iot/hero2.png" },
  { src: "/projects/escape-iot/hero3.png" },
  { src: "/projects/escape-iot/hero4.png" },
];

const MODEL = [
  { src: "/projects/escape-iot/3dmodel1.png" },
  { src: "/projects/escape-iot/3dmodel2.png" },
  { src: "/projects/escape-iot/3dmodel3.png" },
  { src: "/projects/escape-iot/3dmodel4.png" },
];

const PRINT = [
  { src: "/projects/escape-iot/3dprint1.png" },
  { src: "/projects/escape-iot/3dprint2.png" },
];

const ELECTRONICS = [
  { src: "/projects/escape-iot/electronics1.png", wide: true },
];

const UIUX = [
  { src: "/projects/escape-iot/mockup1.png", contain: true },
  { src: "/projects/escape-iot/mockup2.png", contain: true },
];

/* ── LIGHTBOX ───────────────────────────────────── */

function Lightbox({ src, onClose }) {
  if (!src) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.92)",
        zIndex: 999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "zoom-out",
      }}
    >
      <div style={{ position: "relative", width: "85%", height: "85%" }}>
        <Image src={src} alt="" fill style={{ objectFit: "contain" }} />
      </div>
    </div>
  );
}

/* ── IMAGE GRID ─────────────────────────────────── */

function ImgGrid({ images, cols = 4, onClick }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols},1fr)`,
        gap: 12,
        marginTop: 20,
      }}
    >
      {images.map((img, i) => (
        <div
          key={i}
          onClick={() => onClick(img.src)}
          style={{
            position: "relative",
            aspectRatio: img.contain ? "9/16" : img.wide ? "16/7" : "4/3",
            background: "#0a0a0b",
            overflow: "hidden",
            cursor: "zoom-in",
            border: "1px solid #1e1e26",
            transition: "transform 0.25s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <Image
            src={img.src}
            alt=""
            fill
            style={{
              objectFit: img.contain ? "contain" : "cover",
            }}
          />
        </div>
      ))}
    </div>
  );
}

/* ── SECTION ────────────────────────────────────── */

function Section({ id, title, children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-120px" });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      style={{ marginBottom: 120 }}
    >
      <h2
        style={{
          fontSize: 32,
          marginBottom: 20,
          fontWeight: 700,
        }}
      >
        {title}
      </h2>
      {children}
    </motion.section>
  );
}

/* ── MAIN PAGE ───────────────────────────────────── */

export default function EscapeIotPage() {
  const [lightbox, setLightbox] = useState(null);
  const [active, setActive] = useState("hero");

  /* ── ACTIVE SECTION TRACKING ── */
  useEffect(() => {
    const onScroll = () => {
      SECTIONS.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top < 200 && rect.bottom > 200) {
          setActive(sec.id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ display: "flex", background: "#0a0a0b", color: "#fff" }}>
      
      {/* ── STICKY NAV ── */}
      <div
        style={{
          width: 220,
          position: "sticky",
          top: 100,
          height: "100vh",
          padding: 30,
          borderRight: "1px solid #1a1a1e",
        }}
      >
        {SECTIONS.map((s) => (
          <div
            key={s.id}
            onClick={() =>
              document.getElementById(s.id).scrollIntoView({ behavior: "smooth" })
            }
            style={{
              cursor: "pointer",
              marginBottom: 12,
              fontSize: 13,
              letterSpacing: "0.08em",
              color: active === s.id ? "#5DCAA5" : "#666",
              transition: "0.3s",
            }}
          >
            {s.label}
          </div>
        ))}
      </div>

      {/* ── CONTENT ── */}
      <div style={{ flex: 1, padding: "80px 60px" }}>

        {/* HERO */}
        <Section id="hero" title="Escape IoT Clip - IoT Phone Screen Time Monitoring Device & iOS App">
          <p style={{ maxWidth: 600, color: "#bbb", lineHeight: 1.7 }}>
            A full-stack IoT product combining embedded hardware and iOS app.
            Built from scratch — from industrial design and electronics to firmware
            and mobile application.
          </p>

          <ImgGrid images={HERO_IMAGES} onClick={setLightbox} />
        </Section>
        <Section id="consultation" title="Project Consultation">
          <p style={{ color: "#bbb" }}>
            Client Brief : Design and build a compact clip-form IoT device that passively detects phone screen time using a light sensor, displays usage data on a built-in OLED screen, and transmits real-time data to an iOS app via Bluetooth.
          </p> <br/>
                    <p style={{ color: "#bbb" }}>
                      Our Approach : Following an in-depth consultation and collaborative brainstorming session with the client and our internal team, we finalized and submitted a detailed budget estimate, project timeline, PRD (Product Requirements Document), and SOW (Scope of Work) before development began.
          </p>
        </Section>



        <Section id="model" title="3D Modeling">
          <p style={{ color: "#bbb" }}>
            CAD modeling and enclosure design with multiple iterations.
          </p>
          <ImgGrid images={MODEL} onClick={setLightbox} />
        </Section>

        <Section id="print" title="3D Printing">
          <p style={{ color: "#bbb" }}>
            Rapid prototyping and mechanical validation.
          </p>
          <ImgGrid images={PRINT} cols={2} onClick={setLightbox} />
        </Section>

        <Section id="electronics" title="Electronics">
          <p style={{ color: "#bbb" }}>
            Full PCB assembly and hardware integration.
          </p>
          <ImgGrid images={ELECTRONICS} cols={1} onClick={setLightbox} />
        </Section>

        <Section id="uiux" title="UI/UX Design">
          <p style={{ color: "#bbb" }}>
            Clean and minimal mobile UI crafted in Figma.
          </p>
          <ImgGrid images={UIUX} cols={2} onClick={setLightbox} />
        </Section>

<Section id="testing" title="Hardware & Software Testing ">
  <p style={{ color: "#bbb" }}>
 
  </p>

  <div style={{ position: "relative", width: "80%", paddingBottom: "56.25%", height: 0 }}>
    <iframe
      src="https://www.youtube.com/embed/lvtSJ0K_6Kw?si=_06WRjK4nqSBftRV"
      title="Hardware & Software Testing Video"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        border: 0,
        borderRadius: "12px",
      }}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
</Section>

      </div>

      {/* LIGHTBOX */}
      <Lightbox src={lightbox} onClose={() => setLightbox(null)} />
    </div>
  );
}