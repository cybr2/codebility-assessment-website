import HeroLine from "../../assets/hero_line.png";
import HeroImg from "../../assets/hero.png";
import Shield from "../../assets/shield.png"

import { Button } from "../../components/Button";

export const Hero = () => {
    return (
        <div className="relative overflow-hidden bg-cover bg-center flex items-center justify-center flex-col px-4 py-16 lg:py-32  text-neutral-50" style={{ backgroundImage: `url(${HeroImg})` }}>
            <div className="absolute inset-0 bg-black/60"></div>

            <h1 className="min-sm:w-[50%] w-full relative font-bold mb-2.5">
                your doctor's note <br />in 1 minute, for $29.99!
            </h1>
            <img className="relative mb-8 scale-80 lg:scale-125" src={HeroLine} alt="line" />
            <Button onClick={() => alert("Primary Clicked")} className="xs:w-full sm:w-[24%] mb-4 items-center justify-center relative capitalize flex gap-2">get your note now <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
            </Button>
            <p className="capitalize relative text-sm md:text-base font-semibold flex items-center gap-1">
                <img src={Shield} alt="shield image with check in the middle" className="scale-80" />
                100% risk-free money back guarantee
            </p>
        </div>
    );
};
