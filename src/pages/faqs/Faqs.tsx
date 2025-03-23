import { MainLayout } from "../../layouts/MainLayout";
import { useState } from "react";
import { IFAQDetailedAnswer } from "../../Types/types";
import { faqsList } from "../../data/faqs";
import { Button } from "../../components/Button";
import Shield from "../../assets/shield.png"

export const Faqs: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Type guard for identifying detailed answer type
    const isDetailedAnswer = (answer: unknown): answer is IFAQDetailedAnswer =>
        !!answer && typeof answer === "object" && "description" in answer;

    return (
        <MainLayout>
            <section className="max-w-3xl  flex-col mx-auto">
                <h1 className="text-center text-3xl font-bold my-8">FAQ</h1>
                {faqsList.map((faq, index) => (
                    <div key={index} className=" px-4 mb-4">
                        {/* Accessible FAQ Toggle Button */}
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full text-left p-4 flex justify-between items-center border-1 border-neutral-300"
                            aria-expanded={openIndex === index}
                            aria-controls={`faq-content-${index}`}
                        >
                            <span className="font-medium">{faq.question}</span>
                            <span className={`transition-transform duration-500 ${openIndex === index ? 'rotate-45' : 'rotate-0'}`}>+</span>
                        </button>

                        {/* Smooth Expandable FAQ Content */}
                        <div
                            id={`faq-content-${index}`}
                            className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${openIndex === index ? "max-h-96" : "max-h-0"
                                }`}
                        >
                            <div className="p-4">
                                {typeof faq.answer === "string" ? (
                                    <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
                                ) : isDetailedAnswer(faq.answer) ? (
                                    <>
                                        <p dangerouslySetInnerHTML={{ __html: faq.answer.description }} />
                                        {faq.answer.examples?.length > 0 && (
                                            <ul className="mt-2 list-disc pl-5">
                                                {Array.isArray(faq.answer.examples) &&
                                                    (faq.answer.examples as Array<string | { title: string; description: string }>).map((example, i) =>
                                                        typeof example === "string" ? (
                                                            <li key={i} dangerouslySetInnerHTML={{ __html: example }} />
                                                        ) : (
                                                            <li key={i}>
                                                                <strong dangerouslySetInnerHTML={{ __html: example.title }} />:{" "}
                                                                <span dangerouslySetInnerHTML={{ __html: example.description }} />
                                                            </li>
                                                        )
                                                    )}
                                            </ul>
                                        )}
                                    </>
                                ) : null}
                            </div>

                        </div>
                    </div>
                ))}
                <div className="w-full flex flex-col items-center my-10">
                    <Button onClick={() => alert("Primary Clicked")} className="w-[44%] mb-4 items-center justify-center relative capitalize flex gap-2">get your note now <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                    </Button>
                    <p className="capitalize relative text-sm md:text-base font-semibold flex items-center gap-1 text-gray-600">
                        <img src={Shield} alt="shield image with check in the middle" className="scale-80" />
                        100% risk-free money back guarantee
                    </p>
                </div>
            </section>
        </MainLayout>
    );
};
