import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ logos }: LogoCloudProps) {
  return (
    <div className="relative mx-auto max-w-full bg-gradient-to-r from-secondary via-transparent to-secondary section-sm md:border-x overflow-hidden">
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-full border-t" />

      <InfiniteSlider gap={62} reverse duration={60} durationOnHover={20}>
        {logos.map((logo) => (
          <img
            alt={logo.alt}
            className="pointer-events-none h-6 sm:h-8 md:h-10 select-none dark:brightness-0 dark:invert"
            height="auto"
            key={`logo-${logo.alt}`}
            loading="lazy"
            src={logo.src}
            width="auto"
          />
        ))}
      </InfiniteSlider>

      <ProgressiveBlur
        blurIntensity={1}
        className="pointer-events-none absolute top-0 left-0 h-full w-[160px]"
        direction="left"
      />
      <ProgressiveBlur
        blurIntensity={1}
        className="pointer-events-none absolute top-0 right-0 h-full w-[160px]"
        direction="right"
      />

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-full border-b" />
    </div>
  );
}
