"use client";

import { Content, asText } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { Bounded } from "@/components/Bounded";
import Button from "@/components/Button";
import { TextSplitter } from "@/components/TextSplitter";


gsap.registerPlugin(useGSAP);
/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  useGSAP(() => {
    const introTl = gsap.timeline();

    introTl
    .set(".hero", {opacity: 1})
    .from(".hero-header-word", {
      scale: 3,
      opacity: 0,
      ease: "power4.in",
      delay: 0.3,
      stagger: 1,
    })
    .from(".hero-subheading", {
      y: 30,
      opacity: 0,
    },
    "+=.8"
    )
    .from(".hero-body", {
      y: 10,
      opacity: 0,
    },
    )
    .from(".hero-button", {
      y: 10,
      opacity: 0,
      duration: 0.6,
    },
    )
  }
  );

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="hero opacity-0"
    >
      <div className="grid">
          <div className="grid h-screen place-items-center">
            <div className="grid auto-rows-min place-items-center text-center">
              <h1 className="hero-header text-7xl font-black uppercase leading-[.8] text-orange-500 md:text-[9rem] lg:text-[13rem]">
                <TextSplitter 
                text={asText(slice.primary.heading)}
                wordDisplayStyle="block"
                className="hero-header-word"
                />
              </h1>
              <div className="hero-subheading mt-12 text-5xl font-semibold text-sky-950 lg:text-6xl">
                <PrismicRichText field={slice.primary.subheading} />
              </div>
              <div className="hero-body text-2xl font-normal text-sky-950">
                <PrismicRichText field={slice.primary.body} />
              </div>
              <Button buttonLink={slice.primary.button_link} buttonText={slice.primary.button_text} className="hero-button mt-12"/>
            </div>
          </div>
          <div className="grid text-side relative z-[80] h-screen items-center gap-4 md:grid-cols-2">
            <PrismicNextImage 
              className="md:hidden w-full"
              field={slice.primary.cans_image} />
              <div className="">
                <h2 className="text-side-heading text-balance text-6xl font-black uppercase text-sky-950 lg:text-8xl">
                  <TextSplitter text={asText(slice.primary.second_heading)} />
                  </h2>
                  <div className="text-side-heading mt-4 max-w-xl text-balance text-xl font-normal text-sky-950">
                    <TextSplitter text={asText(slice.primary.second_body)} />
                  </div>
              </div>
          </div>
      </div>
    </Bounded>
  );
};

export default Hero;
