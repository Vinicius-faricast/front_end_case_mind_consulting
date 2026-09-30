import { AuthForm } from "../../components/AuthForm/AuthForm";

export const Register = (): React.JSX.Element => {
    const fields = [
        {
            name: "nome",
            id: "nome",
            type: "text",
            placeholder: "John Doe",
            label: "Nome Completo",
        },
        {
            name: "email",
            id: "email",
            type: "email",
            placeholder: "exemplo@email.com",
            label: "Email",
        },
        {
            name: "password",
            id: "password",
            type: "password",
            placeholder: "*********",
            label: "Senha",
        },
        {
            name: "confirmPassword",
            id: "confirmPassword",
            type: "password",
            placeholder: "*********",
            label: "Confirmar senha",
        },
    ];

    return (
        <AuthForm
            title="Entrar na Plataforma"
            subtitle="Acesse sua conta para gerenciar seus artigos"
            fields={fields}
            buttonText="Criar conta"
            footerLink={
                <>
                    Já tem uma conta? <a href="/login">Fazer login</a>
                </>
            }
        />
    );
};
