import { MainLayout } from "../../layouts/MainLayout"
import { Hero } from "./Hero"
import { Steps } from "./Steps"
import { Promo } from "./Promo"
import { Testimonial } from "./Testimonial"

export const Home = () => {
    return (
        <MainLayout>
            <Hero />
            <Steps />
            <Promo />
            <Testimonial />
        </MainLayout>
    )
}