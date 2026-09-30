import * as S from "./styles";
import type { AuthFormProps } from "./types";
import { Input } from "../Input/Input";
import { Button } from "../Buttom/Buttom";

export const AuthForm = ({
    title,
    subtitle,
    fields,
    buttonText,
    footerLink,
    onSubmit,
}: AuthFormProps) => {
    return (
        <S.Container>
            <S.Logo>{"<M/>"}</S.Logo>
            <S.Title>{title}</S.Title>
            {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
            <S.Card onSubmit={onSubmit}>
                {fields.map((field) => (
                    <Input
                        key={field.id}
                        type={field.type}
                        name={field.name}
                        id={field.id}
                        placeholder={field.placeholder}
                        label={field.label ?? true}
                    />
                ))}
                <Button primary={true} type="submit">
                    {buttonText}
                </Button>
                {footerLink && <S.FooterLink>{footerLink}</S.FooterLink>}
            </S.Card>
        </S.Container>
    );
};
