import { AuthForm } from "../../components/AuthForm/AuthForm";

export const Login = (): React.JSX.Element => {
    const fields = [
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
    ];

    return (
        <AuthForm
            title="Entrar na Plataforma"
            subtitle="Acesse sua conta para gerenciar seus artigos"
            fields={fields}
            buttonText="Entrar"
            footerLink={
                <>
                    Não tem uma conta? <a href="/register">Criar conta</a>
                </>
            }
        />
    );
};
