import testimonialIcon1 from "../../assets/testimonialIcon1.png";
import testimonialIcon2 from "../../assets/testimonialIcon2.png";
import testimonialIcon3 from "../../assets/testimonialIcon3.png";
import testimonialImg from "../../assets/testimonialImg.png";
import testimonialLine from "../../assets/testimonialLine.png";
import Shield from "../../assets/shield.png";

import { InfoBox } from "../../components/InfoBox";
import { Button } from "../../components/Button";


export const Testimonial = () => {
    return (
        <div className="py-8 w-full px-3 flex flex-col justify-center items-center">
            <div className="flex flex-col w-[90%] lg:w-[64%]  justify-center items-center ">
                <h1 className="w-full relative font-bold testimonialLine">
                    Get Peace of Mind <br />With <span className="text-[#2323FE]">My Doctors Note</span>
                </h1>
                <img className="relative mb-8 scale-80 lg:scale-125" src={testimonialLine} alt="line" />
                <p className="text-gray-600 mb-5 md:w-[70%] md:text-lg">My Doctor’s Note provides a fast, hassle-free solution for obtaining excuse notes. Focus on your recovery while we take care of the paperwork, delivering your note in minutes.</p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {/* InfoBox 1 - Trusted by Thousands */}
                    <div className="flex gap-4 flex-col">
                        <InfoBox
                            title="Trusted by Thousands Across the USA"
                            contents={[
                                {
                                    title: "Professional & Reliable",
                                    content: "Includes key medical absence details in a format widely recognized by workplaces.",
                                },
                                {
                                    title: "Essential Information Included",
                                    content: "Clearly structured while protecting your privacy.",
                                },
                                {
                                    title: "Instant & Hassle-Free",
                                    content: "No appointments, no waiting. Receive your document within seconds via email",
                                },
                            ]}
                            images={[{ image: testimonialIcon1 }, { image: testimonialIcon2 }, { image: testimonialIcon3 }]}
                        />
                        <InfoBox
                            title="Customer Support That Puts You First"
                            contents={[
                                {
                                    title: "Adjustable to Your Needs",
                                    content: "Easily modify details to match your situation.",
                                },
                                {
                                    title: "Always Here for You",
                                    content: "Get assistance whenever you need it, day or night.",
                                },
                                {
                                    title: "Real People, Real Support",
                                    content: "Our team is here to help, every step of the way.",
                                },
                            ]}
                            images={[{ image: testimonialImg, highlights: "We're ready to help!" }]}
                        />
                    </div>
                    <div className="flex gap-4 flex-col">
                        <InfoBox
                            title="Get Your Note In Under 1 Minute"
                            contents={[
                                {
                                    title: "Skip the Wait",
                                    content: "No appointments, no delays. Get what you need instantly, anytime.",
                                },
                                {
                                    title: "Available 24/7",
                                    content: "No need to schedule weeks in advance. Access your document on demand, day or night.",
                                },
                                {
                                    title: "Instant Email Delivery",
                                    content: "Receive your note directly in your inbox, ready to use.",
                                },
                            ]}
                        />
                        <InfoBox
                            title="The Best Price In The Market"
                            price={{ original: "42.99", current: "29.99", discount: "30% Discount - Limited Time!" }}
                        />
                    </div>
                </div>
                <Button onClick={() => alert("Primary Clicked")} className="xs:w-full sm:w-[24%] mb-4 items-center justify-center relative capitalize flex gap-2">get your note now <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
                </Button>
                <p className="capitalize relative text-sm md:text-base font-semibold flex items-center gap-1 text-gray-600">
                    <img src={Shield} alt="shield image with check in the middle" className="scale-80" />
                    100% risk-free money back guarantee
                </p>

            </div>
        </div>
    )
}