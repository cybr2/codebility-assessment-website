import { IInfoBoxProps } from "../Types/types"

export const InfoBox: React.FC<IInfoBoxProps> = ({ title, contents, images, price, actionText, actionLink }) => {
    return (
        <div className="bg-blue-100 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>

            {contents && (
                <ul className="list-disc pl-5 mb-5">
                    {contents.map((content, index) => (
                        <li key={index} className="font-semibold text-gray-600 mb-4">{content.title} - <span className="text-gray-500 font-medium">
                            {content.content}</span></li>
                    ))}
                </ul>
            )}
            {images && (
                <div className="flex gap-4 mb-4">
                    {images.map((img, index) => (
                        <div key={index} className="flex justify-center  w-full items-center gap-2">
                            <img src={img.image} alt={`logo-${index}`} className={` ${img.highlights ? 'h-6 sm:h-8 md:h-12' : 'h-4 sm:h-6 md:h-8'}`} />
                            {img.highlights && (
                                <div className="flex items-center gap-2">
                                    <p className="text-green-500 md:text-2xl font-semibold">{img.highlights}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}


            {price && (
                <div className="mb-4">
                    {price.original && (
                        <p className="text-gray-400 md:text-3xl line-through mb-2">${price.original}</p>
                    )}
                    <p className="text-3xl md:text-7xl font-bold mb-2">${price.current}</p>
                    {price.discount && (
                        <p className="text-green-500 md:text-2xl font-semibold">{price.discount}</p>
                    )}
                </div>
            )}

            {actionText && actionLink && (
                <a
                    href={actionLink}
                    className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mt-4 inline-block"
                >
                    {actionText}
                </a>
            )}

        </div>
    )
}