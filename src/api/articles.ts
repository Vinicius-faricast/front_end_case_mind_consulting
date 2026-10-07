import type { Article } from './types';

const BASE_URL = 'http://localhost:3000/api';

export const getAllArticles = async (): Promise<Article[]> => {
  const response = await fetch(`${BASE_URL}/articles`);
  if (!response.ok) {
    throw new Error(`Erro ao buscar artigos: ${response.status}`);
  }
  return response.json() as Promise<Article[]>;
};
