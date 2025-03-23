import { MainLayout } from '../../layouts/MainLayout';
import { termsOfService } from '../../data/termsOfService';
import { ITermsSection, ITermsContentList } from '../../Types/types';

export const TermsOfService: React.FC = () => {
    return (
        <MainLayout>
            <div className="max-w-4xl mx-auto p-8">
                <h2 className="text-4xl font-bold mb-6">{termsOfService.title}</h2>
                <p className="text-gray-600 text-sm  mb-12">Last Updated: {termsOfService.updated}</p>
                <p className="text-gray-700 mb-6">{termsOfService.notice}</p>

                {termsOfService.sections.map((section: ITermsSection, index: number) => (
                    <div key={section.sectionId} className="mb-12 border-b pb-8 border-neutral-300">
                        <h2 className="text-2xl font-semibold mb-4">{index + 1}. {section.title}</h2>
                        {section.notice && <p className="text-neutral-600 font-semibold mb-4">{section.notice}</p>}

                        {section.content.map((item, i) => {
                            if (typeof item === 'string') {
                                return <p key={i} className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: item }} />;
                            }
                            const contentItem = item as ITermsContentList;
                            return (
                                <div key={i} className="mb-6">
                                    {contentItem.header && <h3 className="text-xl font-semibold mb-2">{contentItem.header}</h3>}
                                    <ul className="list-disc list-inside text-gray-700">
                                        {contentItem.items.map((listItem, j) => (
                                            <li key={j}><p key={i} className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: listItem }} /></li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                ))}

                <p className="text-gray-700 mt-12">{termsOfService.description}</p>
            </div>
        </MainLayout>
    );
};

