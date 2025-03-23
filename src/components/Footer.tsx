import logo from "../assets/icon.svg"

export const Footer = () => {
    return (
        <footer className="w-full flex flex-col ">
            <div className="grid grid-cols-1  sm:grid-cols-4 gap-8 border-t-1 border-neutral-200 py-7 md:px-8 lg:px-16">
                <div className="flex flex-col gap-4 lg:text-xl">
                    <a href="/"><img src={logo} alt="Doctors Note logo" className="h-8 w-40" /></a>
                    <p className="capitalize px-2"><span className="font-bold">support </span>(mon-fri,9am-6pm <span className="uppercase">est</span>)</p>
                    <p><span className="font-bold capitalize px-2">email: </span>help@urgebtsupport.co</p>
                </div>
                <div className="px-2 flex flex-col gap-4 lg:text-lg capitalize">
                    <h4 className="font-bold mb-2 lg:text-2xl">customer service</h4>
                    <a href="/pages/contact">contact us</a>
                    <a href="mailto:help@urgebtsupport.co">Refund Request</a>
                    <a href="/pages/frequently-asked-question">frequently asked questions</a>
                </div>

                <div className="px-2 flex flex-col gap-4 lg:text-lg capitalize">
                    <h4 className="font-bold mb-2 lg:text-2xl">policies</h4>
                    <a href="/pages/terms-of-service">terms of service</a>
                    <a href="/pages/refund-policy">refund policy</a>
                    <a href="/pages/privacy-policy">privacy policy</a>
                    <a href="/pages/disclaimer-policy">disclaimer policy</a>
                    <a href="/pages/intellectual-property-policy">intellectual property policy</a>
                    <a href="/pages/jurisdiction-policy">jurisdiction policy</a>
                    <a href="/pages/limitation-of-liability-policy">limitation of liability policy</a>
                    <a href="/pages/indemnification-policy">indemnification policy</a>
                </div>
                <div className="px-2 flex flex-col gap-4 lg:text-xl capitalize ">
                    <h4 className="font-bold mb-2 lg:text-2xl">company details</h4>
                    <p className="uppercase">company name & address</p>
                    <p>company registration number : 00000000</p>
                </div>
            </div>
            <div className="border-t-1 border-neutral-200 flex justify-center text-xs pt-4">
                <p>© 2025, My Doctors Note</p>
            </div>
        </footer>
    )
}