import React from "react";

export interface CTAProps {
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    buttonText?: string;
    onButtonClick?: () => void;
}
