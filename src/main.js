import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import { createProductElement, createCartProductElement } from './helpers/shopFunctions';
import { saveCartID, getSavedCartIDs } from './helpers/cartFunctions';
import './style.css';

const sectionProducts = document.querySelector('.products');
const productAdd = document.getElementsByClassName('cart__products')[0];
const totalPrice = document.getElementsByClassName('total-price')[0];
const inputSearch = document.querySelector('.search');

document.querySelector('.cep-button').addEventListener('click', searchCep);

const loading = () => { // Cria uma tag P e adiciona a classe loading e o texto carregando...
  const loadingElement = document.createElement('p');
  loadingElement.className = 'loading';
  loadingElement.innerText = 'carregando...';
  sectionProducts.appendChild(loadingElement);
};
loading();

const apiProductsList = await fetchProductsList('computador');
apiProductsList.forEach((product) => {
  sectionProducts.appendChild(createProductElement(product));
});

const removeLoading = () => { // Remove a tag P com a classe loading, bota o removeLoading depois da apiProductsList.
  const loadingElement = document.getElementsByClassName('loading')[0];
  loadingElement.remove(loadingElement);
};
removeLoading();

const calcPrice = (prices) => prices.reduce((acc, curr) => {
  acc += curr;
  return acc;
}, 0);

const arrayOfPrice = [];

const addToCart = () => {
  const buttonAdd = document.querySelectorAll('.product__add');
  buttonAdd.forEach((element) => {
    element.addEventListener('click', async ({ target }) => {
      const item = target.parentNode.children;
      const id = item[0].innerText;
      saveCartID(id);
      const productElement = await fetchProduct(id);
      productAdd.appendChild(createCartProductElement(productElement));
      arrayOfPrice.push(productElement.price);
      totalPrice.innerText = calcPrice(arrayOfPrice);
    });
  });
};
addToCart();

const getItemLocalStorage = async () => {
  const savedCartIDs = getSavedCartIDs();
  const promiseAll = await Promise.all(savedCartIDs.map((id) => fetchProduct(id)));
  promiseAll.forEach((item) => {
    productAdd.appendChild(createCartProductElement(item));
    arrayOfPrice.push(item.price);
  });
  totalPrice.innerText = calcPrice(arrayOfPrice);
};
getItemLocalStorage();
