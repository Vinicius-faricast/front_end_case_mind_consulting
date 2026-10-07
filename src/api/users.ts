const BASE_URL = 'http://localhost:3000/api';

export interface UserPayload {
  name: string;
  email: string;
  password: string;
}

export const createUser = async (payload: UserPayload): Promise<{ id: number }> => {
  const response = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw new Error(`Criar usuário falhou: ${response.status}`);
  return response.json();
};
