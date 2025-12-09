// src/components/Team.tsx

const members = [
  {
    name: "Yovi",
    role: "Founder & Lead Web Architect",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    desc: "$20k+ earned on Upwork before launching Zero-Meeting Studio. Specializes in landing pages, funnels, and growth-driven UX with a focus on speed and clarity.",
  },
  {
    name: "Design Partner",
    role: "Senior UI/UX Designer",
    img: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    desc: "On-demand partner with a portfolio full of clean Apple-inspired interfaces and modern brand systems.",
  },
  {
    name: "Dev Partner",
    role: "Full-Stack Developer",
    img: "https://cdn-icons-png.flaticon.com/512/10285/10285772.png",
    desc: "Handles custom integrations, backend setups, and production-grade infrastructure when projects need more than static pages.",
  },
];

export default function Team() {
  return (
    <section className="border-t border-white/5 bg-black py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">Team</p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl md:text-4xl">Built by a lean, expert crew.</h2>
          <p className="mt-3 text-sm text-gray-300 sm:text-base">
            Small by design. You work with a focused, senior team — not a rotating cast of juniors.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {members.map((m) => (
            <div
              key={m.name}
              className="flex flex-col items-center rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center"
            >
              <img
                src={m.img}
                alt={m.name}
                className="h-24 w-24 rounded-full bg-white/5 p-2 object-contain"
              />
              <h3 className="mt-5 text-base font-semibold text-white sm:text-lg">{m.name}</h3>
              <p className="mt-1 text-xs font-medium text-indigo-200/90 sm:text-sm">{m.role}</p>
              <p className="mt-3 text-xs text-gray-300 sm:text-sm">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
