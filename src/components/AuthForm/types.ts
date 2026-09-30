import React from "react";

export interface FieldConfig {
    name: string;
    id: string;
    type: string;
    placeholder: string;
    label?: boolean;
}

export interface AuthFormProps {
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    fields: FieldConfig[];
    buttonText: string;
    footerLink?: React.ReactNode;
    onSubmit?: (e: React.FormEvent) => void;
}
