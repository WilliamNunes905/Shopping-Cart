export const fetchProduct = async (id) => {
  const result = await fetch(`https://api.mercadolibre.com/items/${id}`);
  if (!id) throw new Error('ID não informado');
  const data = await result.json();
  return data;
};

export const fetchProductsList = async (query) => {
  const result = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  if (!query) throw new Error('Termo de busca não informado');
  const { results } = await result.json();
  return results;
};
