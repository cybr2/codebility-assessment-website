import { ICardProps } from "../Types/types"

export const Card: React.FC<ICardProps> = ({ image, title, description }) => {
    return (
        <div className="bg-blue-100 rounded-xl w-full p-6 pb-12 shadow-lg max-w-sm text-center  items-center flex flex-col">
            <img src={image} alt={title} className="rounded-lg mb-4 scale-80" />
            <h3 className="text-xl font-semibold mb-2 capitalize">{title}</h3>
            <p className="text-gray-600 text-start">{description}</p>
        </div>
    )
}