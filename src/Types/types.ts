import { ReactNode } from 'react';

export interface ILayoutProps {
    children : ReactNode;
}

export interface IButtonProps {
    children : ReactNode;
    onClick ?: () => void;
    variant ?: "primary" | "secondary" | "danger" | "outline";
    size ?: "sm" | "md" | "lg";
    disabled ?: boolean;
    className ?: string;
}

export interface ICardProps {
    image : string;
    title : string;
    description : string;
}

export interface IInfoBoxProps {
    title : string;
    contents ?: { title: string; content: string }[];
    highlights ?: string[];
    images ?: { image ?: string; highlights ?: string}[];
    price ?: {
        original ?: string;
        current ?: string;
        discount ?: string;
    };
    actionText ?: string;
    actionLink ?: string;

}

export interface IFAQSimpleAnswer {
    type: 'simple';
    content: string;
}

export interface IFAQDetailedAnswer {
    type: 'detailed';
    description: string;
    examples: { title: string; description: string}[] | string[];
}

export type IFAQAnswer = IFAQSimpleAnswer | IFAQDetailedAnswer;

export interface IFAQItem {
    question: string;
    answer: IFAQAnswer
}

export interface IFAQSectionProps {
    faqsList: IFAQItem[];
}

// ✅ Types for Terms of Service Data

export interface ITermsOfService {
    title: string;
    updated: string;
    notice: string;
    sections: ITermsSection[];
    description: string;
}

export interface ITermsSection {
    sectionId: string;
    title: string;
    content: (string | ITermsContentList)[];
    notice?: string;
}

export interface ITermsContentList {
    header?: string;
    items: string[];
}