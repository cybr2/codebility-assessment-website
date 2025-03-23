import PromoImg from "../../assets/promo.png";

export const Promo = () => {
    return (
        <div className="py-8 w-full px-3 flex flex-col justify-center items-center">
            <div className="flex flex-col md:flex-row gap-8 w-[90%] lg:w-[64%]  p-8 justify-center items-center bg-green-200  rounded-xl">
                <img src={PromoImg} alt="Promo 100 percent risk free" />
                <div className="flex flex-col gap-4">
                    <h3 className="text-2xl md:text-4xl capitalize font-semibold text-center md:text-start">money back guarantee!</h3>
                    <p className="md:text-lg md:w-[80%] ">We will refund 100% of your payment, in case you're not 100% satisfied with our service.</p>
                </div>
            </div>
        </div>
    )
}