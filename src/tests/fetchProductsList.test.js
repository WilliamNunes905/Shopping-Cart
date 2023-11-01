import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus teste aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', async () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
   fetchProductsList('computador');
   expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', () => {
    fetchProductsList('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('Ao chamar a função fetchProductsList sem argumento, retorna um erro', async () => {
    const messageError = new Error('Termo de busca não informado');
    fetchProductsList('').catch((error) => {
      expect(error).toEqual(messageError);
    });
  });
});
