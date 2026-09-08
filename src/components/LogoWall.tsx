import React from 'react';

export const LogoWall: React.FC = () => {
  const logos = [
    { name: 'Vercel', url: 'https://cdn.simpleicons.org/vercel/ffffff' },
    { name: 'Linear', url: 'https://cdn.simpleicons.org/linear/ffffff' },
    { name: 'GitHub', url: 'https://cdn.simpleicons.org/github/ffffff' },
    { name: 'Stripe', url: 'https://cdn.simpleicons.org/stripe/ffffff' },
    { name: 'Raycast', url: 'https://cdn.simpleicons.org/raycast/ffffff' },
    { name: 'Figma', url: 'https://cdn.simpleicons.org/figma/ffffff' },
    { name: 'Notion', url: 'https://cdn.simpleicons.org/notion/ffffff' },
  ];

  return (
    <section className="py-10 bg-zinc-950 border-y border-zinc-900/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-mono uppercase tracking-widest text-zinc-500 mb-8">
          Powering high-velocity engineering & product teams
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-70 hover:opacity-100 transition-opacity">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors cursor-pointer group"
            >
              <img
                src={logo.url}
                alt={`${logo.name} logo`}
                className="w-5 h-5 object-contain filter grayscale group-hover:grayscale-0 transition-all"
              />
              <span className="text-sm font-semibold tracking-tight text-zinc-400 group-hover:text-white">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

