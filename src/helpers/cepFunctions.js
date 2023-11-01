const cepInput = document.querySelector('.cep-input');
const cartAddress = document.querySelector('.cart__address');

export const getAddress = async (cep) => {
  try {
    const fetchCep = await fetch(`https://cep.awesomeapi.com.br/json/${cep}`);
    const data = await fetchCep.json();
    return `${data.address} - ${data.district} - ${data.city} - ${data.state}`;
  } catch (error) {
    cartAddress.innerText = 'CEP não encontrado';
  }
};

export const searchCep = async () => {
  const inputValue = cepInput.value;
  const getAddressByInput = await getAddress(inputValue);
  cartAddress.innerHTML = getAddressByInput;
};
