export interface ButtonProps {
    children: React.ReactNode;

    onClick?: () => void;

    type?: "button" | "submit";

    disabled?: boolean;

    fullWidth?: boolean;
}