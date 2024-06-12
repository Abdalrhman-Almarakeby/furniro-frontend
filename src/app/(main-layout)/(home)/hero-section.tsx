import HeroCarousel from "./hero-carousel";

export function HeroSection() {
  return (
    <section className="space-y-8 pb-10">
      <HeroCarousel />
      <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="h4 lg:text-5xl 2xl:text-7xl text-neutral-7 text-balance">
          <span className="whitespace-nowrap">
            Simply Unique <span className="text-neutral-4">/</span>
          </span>{" "}
          Simply Better
          <span className="text-neutral-4">.</span>
        </h1>
        <p className="text-sm font-medium text-neutral-4 text-balance md:text-center lg:text-base 2xl:text-lg">
          <span className="text-neutral-7 font-semibold">Furniro</span> is a furniture & decorations
          store based in Austin, Texas. Est since 2016.{" "}
        </p>
      </div>
    </section>
  );
}
