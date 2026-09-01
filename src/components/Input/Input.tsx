import * as S from "./styles";
import type { InputProps } from "./types";

export const Input = ({ type, name, id, placeholder, label }: InputProps) => {
    return (
        <S.Container>
            {label && <S.LabelField htmlFor={id}>{name}</S.LabelField>}
            <S.Inputfield type={type} name={name} id={id} placeholder={placeholder} />
        </S.Container>
    );
}