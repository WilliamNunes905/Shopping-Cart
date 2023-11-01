import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes
describe('Teste a função fetchProduct', () => {
  it('Teste se fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });

  it('Execute a função fetchProduct com o argumento do produto "MLB1405519561" e teste se fetch foi chamada',
   async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList',
   async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1405519561');
  });

  it('função fetchProduct com o argumento do produto "MLB1405519561" é uma estrutura de dados igual ao objeto product',
   async () => {
    expect(await fetchProduct('MLB1405519561')).toEqual(product);
  });

  it('Ao chamar a função fetchProductsList sem argumento, retorna um erro', async () => {
    const messageError = new Error('ID não informado');
    fetchProduct('').catch((error) => {
      expect(error).toEqual(messageError);
    });
  });
});
