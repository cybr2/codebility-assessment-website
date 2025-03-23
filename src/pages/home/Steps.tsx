import Steps1 from "../../assets/steps1.png";
import Steps2 from "../../assets/steps2.png"
import Steps3 from "../../assets/steps3.png"
import Shield from "../../assets/shield.png"


import { Card } from "../../components/Card"
import { Button } from "../../components/Button"


export const Steps = () => {
    const cardData = [
        {
            image: Steps1,
            title: "fill in the smart form",
            description: "Indicate your illness and the desired duration. It's quick and intuitive.",
        },
        {
            image: Steps2,
            title: "Receive Your PDF In 1 Minute",
            description: "After you've completed the checkout, your pre-filled sick leave will be sent by email within 1 minute, and it will be ready on the payment confirmation page.",
        },
        {
            image: Steps3,
            title: "100% Satisfaction Guarantee",
            description: "Join hundreds of thousands of satisfied customers who trust us. Our sick leave plans are easy to use and designed to meet your needs quickly and efficiently!",
        },
    ]
    return (
        <div className="py-8 w-full px-3 flex flex-col justify-center items-center">
            <div className="flex flex-col w-[90%] lg:w-[64%] justify-center items-center">
                <h1 className="capitalize font-semibold text-center sm:leading-tight sm:text-4xl text-2xl mt-8 mb-6">
                    Get An Online Doctor's <br /> Note In 3 Easy Steps
                </h1>
                <p className="mb-10 text-gray-600 md:w-[70%] md:text-lg">
                    With our online platform we make it quick and simple for you to obtain a doctors note, so you can focus on rest and recovery.
                </p>
                <div className="flex flex-col md:flex-row justify-center max-md:items-center  gap-8 w-full mb-8">
                    {
                        cardData.map((card, index) => (
                            <Card key={index} {...card} />
                        ))
                    }
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