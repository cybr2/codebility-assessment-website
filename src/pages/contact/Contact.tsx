import { MainLayout } from "../../layouts/MainLayout"

export const Contact = () => {
    return (
        <MainLayout>
            <div className="py-8 w-full justify-center items-center flex flex-col">
                <div className="flex flex-col gap-8 w-[90%] lg:w-[64%] text-start">
                    <div className="flex flex-col gap-4 w-full capitalize text-neutral-700">
                        <h2 className="text-start text-5xl lg:text-5xl mb-8">contact us</h2>
                        <p className="mb-4 md:text-xl">We are available to answer any questions or concerns you may have.</p>
                        <p className="md:text-xl"><span className="font-bold text-lg md:text-xl">customer support:</span><br /> Mon-Fri, 9am-6pm CET </p>
                        <p className="md:text-xl"><span className="font-bold text-lg md:text-xl">email:</span><br /> support@medexcuse.com</p>
                        <p className="font-bold text-lg">Company details: <br />COMPANY NAME & ADDRESS</p>
                        <p className="md:text-xl"><span className="font-bold text-lg md:text-xl">Company registration number:</span> <br />76987496</p>

                    </div>
                </div>
            </div >
        </MainLayout >
    )
}