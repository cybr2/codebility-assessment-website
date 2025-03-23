import { MainLayout } from '../../layouts/MainLayout';


export const NotFound = () => {
    return (
        <MainLayout>
            <div className="flex flex-col items-center justify-center text-center my-10 md:my-60">
                <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
                <p className="text-lg text-gray-600 mb-6">Oops! The page you're looking for doesn't exist.</p>
                <a href="/" className="text-blue-500 hover:underline">Go Back to Home</a>
            </div>
        </MainLayout>
    );
};

