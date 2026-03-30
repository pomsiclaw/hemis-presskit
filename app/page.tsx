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

export default function Home() {
  const links = {
    soundcloud: "https://soundcloud.com/hemisdj",
    spotify: "https://open.spotify.com/intl-es/artist/1RhWIv8wDWVmrhhvxTirfb",
    youtube: "https://www.youtube.com/c/Hemisits",
    instagram: "https://www.instagram.com/hemis",
    twitch: "https://www.twitch.tv/hemisdj",
    promos:
      "https://docs.google.com/forms/d/1S8rTqo_yHqWW7QiChmczG6wWfghuKQurzeLbFR6oQXM",
    email: "mailto:contacthemis@gmail.com",
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
          backgroundImage: "url(/globe.svg)",
          backgroundRepeat: "repeat",
          backgroundSize: "420px 420px",
        }}
      />
      <header className="border-b-2 border-foreground">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-5">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.35em]">
              presskit
            </span>
            <Separator orientation="vertical" className="h-5 bg-foreground" />
            <span className="font-mono text-xs uppercase tracking-[0.35em]">
              barcelona
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button asChild variant="brutal" size="sm">
              <a href={links.email}>Contacto</a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href={links.instagram} target="_blank" rel="noreferrer">
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
              <Badge variant="invert" className="font-mono">
                HEMIS
              </Badge>
              <Badge variant="brutal" className="font-mono">
                DJ / Producer
              </Badge>
              <Badge variant="brutal" className="font-mono">
                BCN
              </Badge>
            </div>

            <h1 className="mt-5 font-mono text-5xl leading-[0.95] tracking-tight md:text-7xl">
              HEMIS
              <br />
              DJ de Barcelona
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-foreground/80">
              Remixes, edits y sets para club. Publica en{" "}
              <span className="font-semibold text-foreground">SoundCloud</span> y
              mantiene catálogo y contenido en{" "}
              <span className="font-semibold text-foreground">Spotify</span> +
              <span className="font-semibold text-foreground">YouTube</span>.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="brutal" className="w-full sm:w-auto">
                <a href={links.soundcloud} target="_blank" rel="noreferrer">
                  SoundCloud (principal)
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <a href={links.spotify} target="_blank" rel="noreferrer">
                  Spotify (artista)
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <a href={links.youtube} target="_blank" rel="noreferrer">
                  YouTube (canal)
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <a href={links.twitch} target="_blank" rel="noreferrer">
                  Twitch
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
                    contacthemis@gmail.com
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
                          {r.date} · {r.duration}
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
                            >
                              Escuchar
                            </a>
                          </Button>
                          {"download" in r.links ? (
                            <Button asChild variant="brutal" size="sm">
                              <a
                                href={r.links.download}
                                target="_blank"
                                rel="noreferrer"
                              >
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
