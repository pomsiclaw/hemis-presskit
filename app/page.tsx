import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

function Icon({
  children,
  label,
}: {
  children: React.ReactNode;
  label?: string;
}) {
  return (
    <span
      className="inline-flex size-4 shrink-0 items-center justify-center"
      aria-hidden={label ? undefined : true}
      aria-label={label}
    >
      {children}
    </span>
  );
}

function DownloadIcon() {
  // Heroicons Solid: arrow-down-tray
  return (
    <Icon>
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-4"
        focusable="false"
      >
        <path
          fillRule="evenodd"
          d="M12 3a.75.75 0 0 1 .75.75v9.69l2.72-2.72a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06l2.72 2.72V3.75A.75.75 0 0 1 12 3ZM3.75 15a.75.75 0 0 1 .75.75v3a1.5 1.5 0 0 0 1.5 1.5h12a1.5 1.5 0 0 0 1.5-1.5v-3a.75.75 0 0 1 1.5 0v3a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-3a.75.75 0 0 1 .75-.75Z"
          clipRule="evenodd"
        />
      </svg>
    </Icon>
  );
}

function ListenIcon() {
  // Heroicons Solid: play
  return (
    <Icon>
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-4"
        focusable="false"
      >
        <path
          fillRule="evenodd"
          d="M4.5 5.653c0-1.425 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.574 0 3.286L7.279 19.99c-1.25.687-2.779-.218-2.779-1.643V5.653Z"
          clipRule="evenodd"
        />
      </svg>
    </Icon>
  );
}

function ContactIcon() {
  // Heroicons Solid: envelope
  return (
    <Icon>
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-4"
        focusable="false"
      >
        <path d="M1.5 8.67v8.58A2.25 2.25 0 0 0 3.75 19.5h16.5A2.25 2.25 0 0 0 22.5 17.25V8.67l-8.46 5.07a3.75 3.75 0 0 1-3.58 0L1.5 8.67Z" />
        <path d="M22.5 6.908V6.75A2.25 2.25 0 0 0 20.25 4.5H3.75A2.25 2.25 0 0 0 1.5 6.75v.158l9.73 5.838a2.25 2.25 0 0 0 2.04 0l9.23-5.538Z" />
      </svg>
    </Icon>
  );
}

function SpotifyMark() {
  // Simplified Spotify mark (monochrome)
  return (
    <Icon>
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-4"
        focusable="false"
      >
        <path
          fillRule="evenodd"
          d="M12 2.25A9.75 9.75 0 1 0 21.75 12 9.76 9.76 0 0 0 12 2.25Zm4.71 13.46a.75.75 0 0 1-1.03.24 10.58 10.58 0 0 0-7.25-1.18.75.75 0 0 1-.34-1.46 12.08 12.08 0 0 1 8.27 1.35.75.75 0 0 1 .35 1.05Zm.63-3.02a.9.9 0 0 1-1.24.3 12.67 12.67 0 0 0-8.1-1.28.9.9 0 1 1-.37-1.76 14.46 14.46 0 0 1 9.25 1.48.9.9 0 0 1 .46 1.26Zm.21-3.14a1.05 1.05 0 0 1-1.44.38 15.2 15.2 0 0 0-9.3-1.36 1.05 1.05 0 0 1-.4-2.06 17.29 17.29 0 0 1 10.59 1.57 1.05 1.05 0 0 1 .55 1.47Z"
          clipRule="evenodd"
        />
      </svg>
    </Icon>
  );
}

function SoundCloudMark() {
  // SoundCloud mark (SVG blanco de public)
  return (
    <Icon>
      <img
        src={"/soundcloud-white.svg"}
        alt="SoundCloud"
        style={{ width: 22, height: 22, display: 'inline-block', verticalAlign: 'middle' }}
        loading="lazy"
      />
    </Icon>
  );
}

function YouTubeMark() {
  return (
    <Icon>
      <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
      </svg>
    </Icon>
  );
}

function InstagramMark() {
  return (
    <Icon>
      <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
      </svg>
    </Icon>
  );
}

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const withBasePath = (path: string) =>
    `${basePath}${path.startsWith("/") ? path : `/${path}`}`;

  const links = {
    soundcloud: "https://soundcloud.com/hemisdj",
    spotify: "https://open.spotify.com/intl-es/artist/1RhWIv8wDWVmrhhvxTirfb",
    youtube: "https://www.youtube.com/c/Hemisits",
    instagram: "https://www.instagram.com/hemis",
    promos:
      "https://docs.google.com/forms/d/1S8rTqo_yHqWW7QiChmczG6wWfghuKQurzeLbFR6oQXM",
    email: "mailto:itshemis@gmail.com",
  };

  const embeds = {
    soundcloud:
      "https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Fusers%2F40229296&show_artwork=true",
    spotify:
      "https://open.spotify.com/embed/artist/1RhWIv8wDWVmrhhvxTirfb?utm_source=generator",
    youtube: "https://www.youtube.com/embed/660OrDZhwak?si=EuaY_BBRMx5iOOuE",
  };

  const releases = [
    {
      title: "Skrillex, Young Miko - DURO (HEMIS Remix)",
      date: "2026-03-30",
      duration: "2:27",
      tags: ["Remix", "SoundCloud"],
      links: {
        soundcloud: "https://soundcloud.com/hemisdj/duro-remix",
      },
    },
    {
      title: "Tokischa, Skrillex - Surfboard (HEMIS Remix)",
      date: "2026-03-22",
      duration: "2:48",
      tags: ["Remix", "SoundCloud"],
      links: {
        soundcloud:
          "https://soundcloud.com/hemisdj/tokischa-skrillex-surfboard",
        download:
          "https://pumpyoursound.com/f/dj-whim/tokischa-skrillex-surfboard-hemis-remix/222022",
      },
    },
    {
      title:
        "Skrillex, Dylan Brady & Caroline Polachek - hit me where it hurts x (HEMIS Remix)",
      date: "2025-11-15",
      duration: "2:49",
      tags: ["Remix", "SoundCloud"],
      links: {
        soundcloud: "https://soundcloud.com/hemisdj/hmwt-remix",
        download:
          "https://pumpyoursound.com/f/pys/hit-me-where-it-hurts-hemis-remix/214571",
      },
    },
    {
      title: "Skrillex & ISOxo - FUZE (HEMIS Remix)",
      date: "2025-11-14",
      duration: "3:15",
      tags: ["Remix", "SoundCloud"],
      links: {
        soundcloud: "https://soundcloud.com/hemisdj/fuze-remix",
        download:
          "https://pumpyoursound.com/f/pys/skrillex-isoxo-fuze-hemis-remix/214526",
      },
    },
  ] as const;

  return (
    <div className="relative flex flex-1 flex-col bg-background text-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url(${withBasePath("/58926.jpg")})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      <header className="border-b-2 border-foreground">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-5">
          <div className="flex items-baseline gap-3">
            <span className="inline-flex items-center">
              <img src={withBasePath("/cara%20transparente%20marmol.webp")}
                alt="Carita mármol"
                style={{ width: 28, height: 28, display: 'inline-block', verticalAlign: 'middle' }}
              />
            </span>
            <Separator orientation="vertical" className="h-5 bg-foreground" />
            <span className="font-mono text-xs uppercase tracking-[0.35em]">barcelona</span>
          </div>
          <div className="flex items-center gap-2">
            <Button asChild variant="brutal" size="sm">
              <a href={links.email} className="inline-flex items-center gap-2">
                <ContactIcon />
                Contacto
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a
                href={links.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2"
              >
                <InstagramMark />
                Instagram
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-6 py-10">
        <section className="grid gap-6 border-2 border-foreground p-6 md:grid-cols-12 md:gap-0 md:p-0">
          <div className="md:col-span-7 md:border-r-2 md:border-foreground md:p-10">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="brutal" className="font-mono">
                DJ / Producer
              </Badge>
              <Badge variant="brutal" className="font-mono">
                BCN
              </Badge>
            </div>

            <h1 className="mt-5 font-mono text-5xl leading-[0.95] tracking-tight md:text-7xl flex flex-col items-start gap-0">
              <span className="sr-only">HEMIS</span>
              <img
                src={withBasePath("/HEMIS%20LOGO%20marmol.webp")}
                alt="Logo Hemis mármol"
                style={{ width: 380, height: 'auto', objectFit: 'contain', display: 'block', marginBottom: 2, maxWidth: '100%' }}
              />
              <span>DJ / PRODUCER</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-foreground/80">
              Remixes, edits y sets para club. Publica en{' '}
              <span className="font-semibold text-foreground">SoundCloud</span> y
              mantiene catálogo y contenido en{' '}
              <span className="font-semibold text-foreground">Spotify</span> +
              <span className="font-semibold text-foreground">YouTube</span>.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="brutal" className="w-full sm:w-auto">
                <a
                  href={links.soundcloud}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <SoundCloudMark />
                  SoundCloud (principal)
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <a
                  href={links.spotify}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <SpotifyMark />
                  Spotify (artista)
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <a
                  href={links.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <YouTubeMark />
                  YouTube (canal)
                </a>
              </Button>
            </div>
          </div>

          <div className="md:col-span-5 md:p-10">
            <div className="flex flex-col gap-4">
              <div className="border-2 border-foreground p-4">
                <div className="font-mono text-xs uppercase tracking-[0.35em]">
                  resumen
                </div>
                <div className="mt-3 text-sm leading-6 text-foreground/80">
                  DJ / producer (Barcelona). Remixes, edits y sets para club.
                  Disponible para bookings, collabs y promos.
                </div>
              </div>

              <div className="border-2 border-foreground p-4">
                <div className="font-mono text-xs uppercase tracking-[0.35em]">
                  contacto
                </div>
                <div className="mt-3 grid gap-2 text-sm">
                  <a
                    className="underline decoration-foreground/40 underline-offset-4 hover:decoration-foreground"
                    href={links.email}
                  >
                    itshemis@gmail.com
                  </a>
                  <div className="text-foreground/70">
                    Bookings / collabs / info.
                  </div>
                </div>
              </div>

              <div className="border-2 border-foreground p-4">
                <div className="font-mono text-xs uppercase tracking-[0.35em]">
                  promos
                </div>
                <div className="mt-3 grid gap-2 text-sm">
                  <a
                    className="underline decoration-foreground/40 underline-offset-4 hover:decoration-foreground"
                    href={links.promos}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Enviar promo (formulario)
                  </a>
                  <div className="text-foreground/70">
                    Escucha y feedback según disponibilidad.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <Card className="border-2 border-foreground">
              <CardHeader className="border-b-2 border-foreground">
                <CardTitle className="font-mono uppercase tracking-[0.25em]">
                  últimos lanzamientos
                </CardTitle>
                <CardDescription>
                  Últimas subidas en SoundCloud.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y-2 divide-foreground">
                  {releases.map((r) => (
                    <div
                      key={`${r.date}-${r.title}`}
                      className="grid gap-4 p-5 md:grid-cols-12 md:items-center"
                    >
                      <div className="md:col-span-3">
                        <div className="font-mono text-xs uppercase tracking-[0.35em] text-foreground/70">
                          {r.date}
                        </div>
                      </div>
                      <div className="md:col-span-6">
                        <div className="text-base font-semibold">{r.title}</div>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {r.tags.map((t) => (
                            <Badge
                              key={t}
                              variant="brutal"
                              className="font-mono"
                            >
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="md:col-span-3">
                        <div className="flex flex-wrap gap-2">
                          <Button asChild variant="outline" size="sm">
                            <a
                              href={r.links.soundcloud}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2"
                            >
                              <ListenIcon />
                              Escuchar
                            </a>
                          </Button>
                          {"download" in r.links ? (
                            <Button asChild variant="brutal" size="sm">
                              <a
                                href={r.links.download}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2"
                              >
                                <DownloadIcon />
                                Descargar
                              </a>
                            </Button>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-5">
            <Card className="border-2 border-foreground">
              <CardHeader className="border-b-2 border-foreground">
                <CardTitle className="font-mono uppercase tracking-[0.25em]">
                  widgets
                </CardTitle>
                <CardDescription>
                  Reproductores embebidos de plataformas.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="border-2 border-foreground">
                  <div className="border-b-2 border-foreground px-3 py-2 font-mono text-xs uppercase tracking-[0.35em]">
                    SoundCloud
                  </div>
                  <iframe
                    title="HEMIS on SoundCloud"
                    src={embeds.soundcloud}
                    className="h-[220px] w-full"
                    allow="autoplay"
                    loading="lazy"
                  />
                </div>

                <div className="border-2 border-foreground">
                  <div className="border-b-2 border-foreground px-3 py-2 font-mono text-xs uppercase tracking-[0.35em]">
                    Spotify
                  </div>
                  <iframe
                    title="HEMIS on Spotify"
                    src={embeds.spotify}
                    className="h-[152px] w-full"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                </div>

                <div className="border-2 border-foreground">
                  <div className="border-b-2 border-foreground px-3 py-2 font-mono text-xs uppercase tracking-[0.35em]">
                    YouTube
                  </div>
                  <div className="aspect-video">
                    <iframe
                      title="HEMIS on YouTube"
                      src={embeds.youtube}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <footer className="border-t-2 border-foreground py-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="font-mono text-xs uppercase tracking-[0.35em] text-foreground/70">
              © {new Date().getFullYear()} HEMIS — Barcelona
            </div>
            <div className="flex flex-wrap gap-2">
              <Button asChild variant="ghost" size="sm" className="font-mono">
                <a href={links.soundcloud} target="_blank" rel="noreferrer">
                  SoundCloud
                </a>
              </Button>
              <Button asChild variant="ghost" size="sm" className="font-mono">
                <a href={links.spotify} target="_blank" rel="noreferrer">
                  Spotify
                </a>
              </Button>
              <Button asChild variant="ghost" size="sm" className="font-mono">
                <a href={links.youtube} target="_blank" rel="noreferrer">
                  YouTube
                </a>
              </Button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
