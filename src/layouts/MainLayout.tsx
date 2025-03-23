import React from "react";
import { ILayoutProps } from "../Types/types";
import { Banner } from "../components/Banner";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export const MainLayout: React.FC<ILayoutProps> = ({ children }) => {
    return (
        <div className="w-screen overflow-x-hidden">
            <header className="w-full overflow-x-hidden">
                <Banner />
                <NavBar />
            </header>
            <main className="h-auto w-full overflow-x-hidden pt-18 md:pt-23 ">{children}</main>
            <Footer />
        </div>
    )
}
