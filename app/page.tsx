const sections = [
  {
    id: "logotyp",
    label: "LOGOTYP",
    title: "Logotyp",
    hero: "#1a1a1a",
    color: "#2563eb",
    body: "Vår logotyp är grunden i vår visuella identitet. Den representerar vad Dreams står för – trygghet, enkelhet och framtidstro. Använd den alltid med omsorg och respekt för marginalzoner och kontraster.",
  },
  {
    id: "farger",
    label: "FÄRGER",
    title: "Färger",
    hero: "#1a1a1a",
    color: "#16a34a",
    body: "Färgpaletten är noggrant utvald för att spegla Dreams värderingar. Primärfärgerna används konsekvent i alla kanaler och bidrar till igenkänning och förtroende.",
  },
  {
    id: "typografi",
    label: "TYPOGRAFI",
    title: "Typografi",
    hero: "#1a1a1a",
    color: "#9333ea",
    body: "Typografin skapar tydlighet och hierarki i kommunikationen. Vi använder ett fåtal typsnitt med starka kontraster mellan rubrik och brödtext för att guida läsaren.",
  },
  {
    id: "bildmaner",
    label: "BILDMANÉR",
    title: "Bildmanér",
    hero: "#1a1a1a",
    color: "#ea580c",
    body: "Bilderna vi väljer ska kännas äkta, inkluderande och inspirerande. De ska spegla verkliga människors liv och ekonomiska drömmar – inte sterila stockbilder.",
  },
  {
    id: "rost",
    label: "RÖST",
    title: "Röst",
    hero: "#1a1a1a",
    color: "#be123c",
    body: "Dreams röst är varm, rak och kunnig. Vi pratar med – inte till – våra användare. Tonen anpassas efter kanal och sammanhang, men personligheten är alltid densamma.",
  },
];

import DreamsEffect from "./components/DreamsEffect";

export default function Home() {
  return (
    <>
      {/* Sticky nav */}
      <nav
        style={{ borderBottom: "1px solid #e5e5e5" }}
        className="sticky top-0 z-50 bg-white h-14"
      >
        <div
          style={{ maxWidth: 1035, margin: "0 auto" }}
          className="h-full flex items-center justify-between"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://cdn.prod.website-files.com/671a3641d8130c32f06a192d/67238c5385c9534ac47faa84_logotype-white%20(1).svg"
            alt="Dreams"
            style={{ width: 100, filter: "invert(1)" }}
          />
          <div className="flex items-center gap-1">
            {sections.map((s, i) => (
              <span key={s.id} className="flex items-center gap-1">
                <a
                  href={`#${s.id}`}
                  className="text-sm text-black transition-colors px-2"
                >
                  {s.title}
                </a>
                {i < sections.length - 1 && (
                  <span className="text-gray-300 select-none">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </nav>

      <main>
        {/* Hero image */}
        <div
          style={{
            width: "100%",
            height: "80vh",
            backgroundImage: "url('/hero.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          <div style={{ maxWidth: 1035, margin: "0 auto", height: "100%", display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", lineHeight: 1 }}>
              <span style={{ fontSize: 120, fontWeight: 700, color: "#fff" }}>Hilma</span>
              <span style={{ fontSize: 120, fontWeight: 700, color: "#fff" }}>Brand Portal</span>
            </div>
          </div>
        </div>

        {/* Dreamseffekten counter */}
        <DreamsEffect />

        {/* Contents section */}
        <div className="bg-white" style={{ paddingTop: 80, paddingBottom: 80 }}>
          <div style={{ maxWidth: 1035, margin: "0 auto" }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: "#111", marginBottom: 56 }}>
              Contents
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                rowGap: 8,
                columnGap: 40,
              }}
            >
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  style={{
                    fontSize: 64,
                    fontWeight: 700,
                    color: "#111",
                    textDecoration: "none",
                    lineHeight: 1.15,
                    display: "block",
                  }}
                >
                  {s.title}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Sections */}
        {sections.map((s) => (
          <section key={s.id} id={s.id}>
            {/* Hero block */}
            <div
              style={{ backgroundColor: s.hero, height: 480 }}
              className="relative w-full flex items-end"
            >
              <div style={{ maxWidth: 1035, margin: "0 auto", width: "100%", paddingBottom: 48 }}>
                <span
                  style={{
                    fontSize: 80,
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                  className="text-white"
                >
                  {s.title}
                </span>
              </div>
            </div>

            {/* Content area */}
            <div className="bg-white">
              <div style={{ maxWidth: 1035, margin: "0 auto", padding: "80px 0 0 0" }}>
                <h2
                  style={{
                    fontSize: 40,
                    fontWeight: 700,
                    marginBottom: 24,
                    color: "#111",
                  }}
                >
                  {s.title}
                </h2>
                <p
                  style={{
                    fontSize: 16,
                    color: "#666",
                    maxWidth: 600,
                    lineHeight: 1.7,
                    marginBottom: 80,
                  }}
                >
                  {s.body}
                </p>
                <hr style={{ borderTop: "1px solid #e5e5e5" }} />
              </div>
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
