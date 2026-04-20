const sections = [
  {
    id: "designprinciper",
    label: "DESIGNPRINCIPER",
    title: "Principer",
    hero: "#1a1a1a",
    color: "#64748b",
    body: "Våra designprinciper är de grundläggande riktlinjerna som styr alla visuella och upplevelsemässiga beslut. De säkerställer konsekvens och kvalitet i allt vi skapar.",
    principles: [
      {
        title: "Enkelhet",
        body: "Vi håller det enkelt. Varje visuellt beslut ska förenkla – aldrig komplicera. Enkelhet skapar tydlighet och gör vår kommunikation tillgänglig för alla.",
      },
      {
        title: "Äkthet",
        body: "Vi är äkta i allt vi gör. Vår design speglar verkliga människor och verkliga drömmar – utan filter, utan överdrift.",
      },
      {
        title: "Konsekvens",
        body: "Vi är konsekventa i alla kanaler och sammanhang. Igenkänning bygger förtroende, och förtroende är grunden för allt vi gör.",
      },
    ],
  },
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
    colors: [
      { hex: "#06250d", name: "Mörkgrön" },
      { hex: "#07cc94", name: "Mint" },
      { hex: "#f4a2c2", name: "Rosa" },
      { hex: "#908ceb", name: "Lila" },
    ],
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
    id: "ikonografi",
    label: "IKONOGRAFI",
    title: "Ikonografi",
    hero: "#1a1a1a",
    color: "#0891b2",
    body: "Ikoner används för att kommunicera snabbt och tydligt. De ska vara enkla, konsekventa och alltid anpassade till Dreams visuella språk.",
  },
  {
    id: "bildmaner",
    label: "BILDMANÉR",
    title: "Bildmanér",
    hero: "#1a1a1a",
    color: "#ea580c",
    body: "",
    subsections: [
      {
        id: "fotografi",
        title: "Fotografi",
        body: "Fotografierna ska kännas levande och verkliga. Vi undviker stela poseringar och föredrar naturliga ögonblick som speglar vardagslivet och människors drömmar.",
        images: [
          "/fotografi/studio-1.png",
          "/fotografi/marathon.png",
          "/fotografi/venice-beach.png",
          "/fotografi/paris.png",
          "/fotografi/gardening.png",
          "/fotografi/scuba.png",
          "/fotografi/tokyo.png",
          "/fotografi/campervan.png",
          "/fotografi/tuscany.png",
        ],
        carousel: true,
        downloadLabel: "Download photos",
        promptHeader: "Bildmanér: Dreams Klassisk",
        prompt: `A beautifully composed, authentic lifestyle photograph shot by a professional photographer with a cinematic feel, natural lighting, and soft depth of field. The scene feels warm, aspirational, and emotionally engaging without being staged or exaggerated. Realistic colors with slightly muted tones, gentle contrast, and subtle highlights. Fine film grain texture for a timeless analog look. Captured on a high-end camera with a 50mm lens, shallow focus, and natural imperfections. The atmosphere feels calm, inspiring, and real — like a still from a high-quality film. No surreal elements, no artificial exaggeration, no overly polished or glossy finish.

With this in mind, create a photograph with this motive: "-INSERT WHAT YOU WANT TO VISUALIZE-"`,
      },
      {
        id: "illustrationer",
        title: "Illustrationer",
        body: "Ladda ner referensillustrationerna och använd följande prompt för att generera fler illustrationer i samma stil.",
        images: [
          "/illustrations/style-ref-1.png",
          "/illustrations/style-ref-2.png",
          "/illustrations/style-ref-3.png",
          "/illustrations/style-ref-4.png",
        ],
        prompt: `I want to create an illustration with same look and feel as the attached four reference images. The master style prompt is:

"Minimalist risograph-style illustration, heavy grain texture, dithered color blending, Limited bold color palette of 2-3 saturated hues. Minimalist composition with clean negative space. Soft volumetric lighting with subtle glow effects and color bleeding between shapes. Mid-century modern meets contemporary digital illustration. Matte finish, no sharp edges, organic geometric forms. Soft rounded organic shapes, flat illustration, no outlines, warm dreamy atmosphere."

With this in mind (reference images and master style prompt) create an elegant illustration with this motive: "-INSERT WHAT YOU WANT TO VISUALIZE-"`,
      },
    ],
  },
  {
    id: "rost",
    label: "RÖST",
    title: "Tonalitet",
    hero: "#1a1a1a",
    color: "#be123c",
    body: "Dreams röst är varm, rak och kunnig. Vi pratar med – inte till – våra användare. Tonen anpassas efter kanal och sammanhang, men personligheten är alltid densamma.",
  },
];

import DreamsEffect from "./components/DreamsEffect";
import CopyPrompt from "./components/CopyPrompt";
import Carousel from "./components/Carousel";
import ColorSwatch from "./components/ColorSwatch";

export default function Home() {
  return (
    <>
      {/* Sticky nav */}
      <nav
        style={{ borderBottom: "1px solid #e5e5e5", height: 64 }}
        className="sticky top-0 z-50 bg-white"
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
          <div className="flex items-center" style={{ gap: 12 }}>
            {sections.map((s, i) => (
              <span key={s.id} className="flex items-center" style={{ gap: 12 }}>
                <a
                  href={`#${s.id}`}
                  className="text-black transition-colors"
                  style={{ fontSize: 16, fontWeight: 400 }}
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
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", lineHeight: 1, paddingTop: 40 }}>
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
            <p style={{ fontSize: 20, fontWeight: 700, color: "#111", marginBottom: 36 }}>
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
                    fontSize: 80,
                    fontWeight: 700,
                    color: "#111",
                    textDecoration: "none",
                    lineHeight: "calc(1.15em + 20px)",
                    display: "block",
                  }}
                >
                  {"contentsLines" in s && s.contentsLines ? (
                    <span style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
                      {s.contentsLines.map((line, i) => (
                        <span key={i}>{line}</span>
                      ))}
                    </span>
                  ) : s.title}
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
              <div style={{ maxWidth: 1035, margin: "0 auto", width: "100%", paddingBottom: 80 }}>
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
              {"subsections" in s && s.subsections ? (
                s.subsections.map((sub) => (
                  <div key={sub.id} id={sub.id} style={{ maxWidth: 1035, margin: "0 auto", padding: "80px 0 0 0" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "310px 1fr", gap: 45, marginBottom: 80 }}>
                      <div>
                        <h2 style={{ fontSize: 40, fontWeight: 700, marginBottom: 24, color: "#111" }}>
                          {sub.title}
                        </h2>
                        <p style={{ fontSize: 16, color: "#666", lineHeight: 1.7, marginBottom: 0 }}>
                          {sub.body}
                        </p>
                        {"prompt" in sub && sub.prompt && (
                          <CopyPrompt text={sub.prompt} header={"promptHeader" in sub ? sub.promptHeader as string : undefined} />
                        )}
                        {sub.images.length > 0 && !("carousel" in sub && sub.carousel) && (
                          <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
                            <a
                              href="/illustrations.zip"
                              download
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                padding: "12px 24px",
                                backgroundColor: "#111",
                                color: "#fff",
                                fontSize: 14,
                                fontWeight: 600,
                                textDecoration: "none",
                                borderRadius: 999,
                                whiteSpace: "nowrap",
                              }}
                            >
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 8 }}>
                                <path d="M12 4v12M7 13l5 5 5-5" />
                                <line x1="4" y1="20" x2="20" y2="20" />
                              </svg>
                              Download references
                            </a>
                          </div>
                        )}
                      </div>
                      {"carousel" in sub && sub.carousel ? (
                        <Carousel images={sub.images} alt={sub.title} />
                      ) : sub.images.length > 0 ? (
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12, alignContent: "start" }}>
                          {sub.images.map((src, i) => (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img key={i} src={src} alt={`${sub.title} ${i + 1}`} style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", borderRadius: 40 }} />
                          ))}
                        </div>
                      ) : (
                        <div style={{ backgroundColor: "#f0f0f0", borderRadius: 40, minHeight: 280 }} />
                      )}
                    </div>
                    <hr style={{ borderTop: "1px solid #e5e5e5" }} />
                  </div>
                ))
              ) : "colors" in s && s.colors ? (
                <div style={{ maxWidth: 1035, margin: "0 auto", padding: "80px 0 0 0" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginBottom: 80 }}>
                    {s.colors.map((c) => (
                      <ColorSwatch key={c.hex} hex={c.hex} name={c.name} />
                    ))}
                  </div>
                  <hr style={{ borderTop: "1px solid #e5e5e5" }} />
                </div>
              ) : "principles" in s && s.principles ? (
                <div style={{ maxWidth: 1035, margin: "0 auto", padding: "80px 0 0 0" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, marginBottom: 80 }}>
                    {s.principles.map((p, i) => (
                      <div key={i}>
                        <div style={{ backgroundColor: "#f0f0f0", borderRadius: 24, aspectRatio: "4/3", marginBottom: 24 }} />
                        <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12, color: "#111" }}>
                          {p.title}
                        </h3>
                        <p style={{ fontSize: 16, color: "#666", lineHeight: 1.7, margin: 0 }}>
                          {p.body}
                        </p>
                      </div>
                    ))}
                  </div>
                  <hr style={{ borderTop: "1px solid #e5e5e5" }} />
                </div>
              ) : (
                <div style={{ maxWidth: 1035, margin: "0 auto", padding: "80px 0 0 0" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "310px 1fr", gap: 45, marginBottom: 80 }}>
                    <div>
                      <h2 style={{ fontSize: 40, fontWeight: 700, marginBottom: 24, color: "#111" }}>
                        {s.title}
                      </h2>
                      <p style={{ fontSize: 16, color: "#666", lineHeight: 1.7 }}>
                        {s.body}
                      </p>
                    </div>
                    <div style={{ backgroundColor: "#f0f0f0", borderRadius: 40, minHeight: 280 }} />
                  </div>
                  <hr style={{ borderTop: "1px solid #e5e5e5" }} />
                </div>
              )}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
