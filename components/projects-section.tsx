"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from "lucide-react"

/* ─── Data ─────────────────────────────────────────────── */

type Project = {
  id: number
  title: string
  image: string
  description: string
  location: string
  status: "ongoing" | "completed" | "upcoming"
}

const projects: Record<string, Project[]> = {
  ongoing: [
    { id: 2,  title: "Mahalaxmi Nagar-31",    image: "/ongoingProject8.webp",  description: "Ready to move residential layout on Besa-Pipla Road, opposite Zudio & Croma. Prime location with up to 90% bank finance.",                                                               location: "MOUZA - BESA",                  status: "ongoing"   },
    { id: 3,  title: "Mahalaxmi Nagar-39",    image: "/ongoingProject5.webp",  description: "New project on Katol Road, Fetri (Chicholi), touching Outer Ring Road. Fully developed NMRDA & RL sanctioned.",                                                                           location: "MOUZA - FETRI",                 status: "ongoing"   },
    { id: 4,  title: "Mahalaxmi Nagar-41",    image: "/ongoingProject3.webp",  description: "Premium layout near Samruddhi Mahamarg with clubhouse & swimming pool. NMRDA + RL approved. Up to 90% finance.",                                                                           location: "MOUZA - GOMGAON",               status: "ongoing"   },
    { id: 5,  title: "Mahalaxmi Nagar - 42",  image: "/ongoingProject2.webp",  description: "Well-connected plots near Jamtha, Wardha Road. NMRDA & RL sanctioned with excellent amenities.",                                                                                           location: "MOUZA - JAMTHA",                status: "ongoing"   },
    { id: 6,  title: "Mahalaxmi Nagar - 43",  image: "/project_43.jpg",        description: "Ready-to-move plots behind Royal Gondwana School, Shankarpur. Fully developed with 90% finance.",                                                                                          location: "MOUZA - SHANKARPUR",            status: "ongoing"   },
    { id: 7,  title: "Mahalaxmi Nagar - 44",  image: "/M-44.jpg",              description: "Mahalaxmi Developers launched Mahalaxmi Nagar 44. The layout is NIT / NMRDA sanctioned with RL. Bank finance available 75–80% from any nationalized bank.",                               location: "MOUZA - TARODI",                status: "ongoing"   },
    { id: 8,  title: "Mahalaxmi Nagar - 45",  image: "/project_M-45.jpg",      description: "Premium plotted development near Samruddhi Mahamarg, close to AIIMS, IIM, MIHAN & D-Mart.",                                                                                               location: "MOUZA - SUMTHANA",              status: "ongoing"   },
    { id: 9,  title: "Mahalaxmi Nagar - 46",  image: "/project_M-46.jpg",      description: "Premium plotted development near Samruddhi Mahamarg, close to AIIMS, IIM, MIHAN & D-Mart.",                                                                                               location: "MOUZA - SUMTHANA",              status: "ongoing"   },
    { id: 10, title: "Tattva Apas",           image: "/tatava apas.webp",      description: "Tattva Apas offers contemporary living with 100+ meticulously crafted apartments. Featuring landscaped gardens, play areas, and fitness centers.",                                          location: "MOUZA - BELTARODI",             status: "ongoing"   },
    { id: 11, title: "Mahalaxmi Nagar - 47",  image: "/project_M-47.jpg",  description: "New launch behind Haldiram & AM Cinema on Koradi Road. NMRDA & RL approved with 90% finance.",                                                                                            location: "KORADI ROAD (Behind Haldiram)", status: "ongoing"   },
  ],
}

const ALL: Project[] = [
  ...projects.ongoing,
]

const TABS = [
  { label: "All",       value: "all"       },
  { label: "Ongoing",   value: "ongoing"   },
  { label: "Completed", value: "completed" },
  { label: "Upcoming",  value: "upcoming"  },
] as const
type TabValue = (typeof TABS)[number]["value"]

/* ─── Status config ─────────────────────────────────────── */

const STATUS_CONFIG: Record<Project["status"], { label: string; bg: string; border: string; text: string }> = {
  ongoing:   { label: "● Ongoing",   bg: "rgba(201,134,43,0.15)", border: "rgba(201,134,43,0.4)", text: "#C9862B" },
  completed: { label: "✓ Completed",  bg: "rgba(48,83,74,0.2)",    border: "rgba(48,83,74,0.5)",   text: "#7bc8a4" },
  upcoming:  { label: "◷ Coming Soon", bg: "rgba(255,255,255,0.08)", border: "rgba(255,255,255,0.2)", text: "rgba(253, 5, 5, 0.5)" },
}

/* ─── ProjectCard ────────────────────────────────────────── */

function ProjectCard({ item, idx, total }: { item: Project; idx: number; total: number }) {
  const cfg = STATUS_CONFIG[item.status]
  const isUpcoming = item.status === "upcoming"

  return (
    <article
      className="group relative flex-shrink-0 overflow-hidden rounded-3xl"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={`${item.title}${item.location ? ` – ${item.location}` : ""}`}
          loading="lazy"
          className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105  }`}
        />
         

        {/* Status pill */}
        <span
          className="absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-bold"
          style={{
            background: "#fff",
            border: `1.5px solid ${cfg.border}`,
            color: cfg.text,
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
        >
          {cfg.label}
        </span>

        {/* Counter */}
        {total > 1 && (
          <span className="absolute right-3 top-3 text-[10px] font-bold text-white/25">
            {String(idx + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
          </span>
        )}

        {/* Upcoming overlay */}
        {isUpcoming && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="rounded-2xl px-4 py-2 text-xs font-bold text-white/70"
              style={{ background: "rgba(9,18,16,0.7)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              🔔 Notify Me
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 p-5">
        {item.location && (
          <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[var(--secondary)]">
            <MapPin size={9} /> {item.location}
          </p>
        )}
        <h3 className="text-base font-bold text-black">{item.title}</h3>
        {item.description && (
          <p className="text-[13px] leading-relaxed  text-black/60">{item.description}</p>
        )}

        <a
          href={`https://wa.me/919762007743?text=${encodeURIComponent(`Hi, I'm interested in ${item.title}.`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 flex w-full items-center justify-center gap-2 rounded-2xl py-3 text-sm font-bold text-white transition-all active:scale-95 hover:opacity-90"
          style={{
            background: "linear-gradient(90deg, #C9862B, #b5741f)",
            boxShadow: "0 4px 16px rgba(201,134,43,0.3)",
          }}
        >
          {isUpcoming ? "Register Interest" : "Enquire on WhatsApp"} <ArrowRight size={14} />
        </a>
      </div>

      {/* Hover border glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ border: "1px solid rgba(201,134,43,0.28)" }}
      />
    </article>
  )
}

/* ─── Main Section ───────────────────────────────────────── */

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<TabValue>("all")
  const [current, setCurrent] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const filtered: Project[] =
    activeTab === "all" ? ALL : ((projects as Record<string, Project[]>)[activeTab] ?? [])

  const total = filtered.length

  /* Reset carousel position when tab changes */
  useEffect(() => {
    setCurrent(0)
    if (scrollRef.current) scrollRef.current.scrollLeft = 0
  }, [activeTab])

  /* Dot scroll target */
  const scrollTo = useCallback((index: number) => {
    const el = scrollRef.current
    if (!el) return
    const card = el.children[index] as HTMLElement
    if (!card) return
    el.scrollTo({ left: card.offsetLeft - 16, behavior: "smooth" })
    setCurrent(index)
  }, [])

  /* Sync dots while dragging */
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const onScroll = () => {
      const cardEl = el.children[0] as HTMLElement
      const cardW = (cardEl?.offsetWidth ?? 0) + 16
      if (cardW === 0) return
      const idx = Math.round(el.scrollLeft / cardW)
      setCurrent(Math.max(0, Math.min(idx, total - 1)))
    }
    el.addEventListener("scroll", onScroll, { passive: true })
    return () => el.removeEventListener("scroll", onScroll)
  }, [total])

  /* Max visible dots (collapse to segments if many) */
  const maxDots = 8
  const showDots = total <= maxDots

  return (
    <section
      id="projects"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #ffffff 0%, #ffffff 100%)" }}
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full"
        style={{ background: "radial-gradient(circle at top right, rgba(201,134,43,0.1), transparent 55%)" }} />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(48,83,74,0.2), transparent 70%)" }} />

      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">

        {/* ── Header ── */}
        <div className="mb-8">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--secondary)]">
            Our Portfolio
          </p>
          <h2
            className="text-4xl font-bold leading-tight text-[var(--secondary)] md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Other{" "}
            <em
              className="not-italic"
              style={{ WebkitTextStroke: "1.5px rgba(201,134,43,0.6)", color: "transparent" }}
            >
              Projects
            </em>
          </h2>
        </div>
 

        {/* ════════════════════════════════════════
            MOBILE  —  snap carousel
        ════════════════════════════════════════ */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              paddingRight: "32px", /* peek */
            }}
          >
            {filtered.map((item, idx) => (
              <div
                key={item.id}
                className="flex-shrink-0"
                style={{
                  scrollSnapAlign: "start",
                  width: "calc(100vw - 56px)",
                }}
              >
                <ProjectCard item={item} idx={idx} total={total} />
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          {total > 1 && (
            <div className="mt-5 flex items-center justify-center gap-2">
              {showDots
                ? filtered.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => scrollTo(idx)}
                      aria-label={`Go to project ${idx + 1}`}
                      className="transition-all duration-300"
                      style={{
                        height: "6px",
                        borderRadius: "999px",
                        width: current === idx ? "24px" : "6px",
                        background: current === idx
                          ? "var(--gold)"
                          : "rgba(255,255,255,0.2)",
                      }}
                    />
                  ))
                : /* Condensed progress bar for many items */
                  (
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-white/40">
                        {current + 1} / {total}
                      </span>
                      <div
                        className="relative h-1 w-32 overflow-hidden rounded-full"
                        style={{ background: "rgba(255,255,255,0.1)" }}
                      >
                        <div
                          className="absolute left-0 top-0 h-full rounded-full transition-all duration-300"
                          style={{
                            background: "var(--gold)",
                            width: `${((current + 1) / total) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  )}
            </div>
          )}

          {/* Prev / Next arrows */}
          {total > 1 && (
            <div className="mt-4 flex items-center justify-center gap-3">
              <button
                onClick={() => scrollTo(Math.max(0, current - 1))}
                disabled={current === 0}
                className="flex h-11 w-11 items-center justify-center rounded-full border text-white transition disabled:opacity-25"
                style={{ border: "1.5px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.05)" }}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scrollTo(Math.min(total - 1, current + 1))}
                disabled={current === total - 1}
                className="flex h-11 w-11 items-center justify-center rounded-full border text-white transition disabled:opacity-25"
                style={{ border: "1.5px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.05)" }}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>

        {/* ════════════════════════════════════════
            DESKTOP  —  responsive grid
        ════════════════════════════════════════ */}
        <div className="hidden gap-5 md:grid md:grid-cols-3">
          {filtered.map((item, idx) => (
            <ProjectCard key={item.id} item={item} idx={idx} total={total} />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-lg text-white/30">No projects in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  )
}
