// inputs
const createdAtInput = document.querySelector('input[name=dataCriacao]')
const dateLimitInput = document.querySelector('input[name=prazo]')

// Transforma uma data no padrao (Ex: 2022-02-01)
function dateToString(date) {
  return date.toISOString().split('T')[0]
}

// Pega o valor de hoje
const todayDate = dateToString(new Date())

//Retorna o valor de amanhã
const tomorrowDate = new Date(todayDate);
tomorrowDate.setDate(tomorrowDate.getDate() + 1);

// Define o dia mínimo e o padrão para o input de prazo
dateLimitInput.min = todayDate;
dateLimitInput.value = dateToString(tomorrowDate);

// Retorna o valor do ano que vem: '28-11-2022' por exemplo
const oneYearLaterDate = dateToString(new Date(new Date().setFullYear(new Date().getFullYear() + 1)))
createdAtInput.value = todayDate

//Define minimo e máximo da data limite
dateLimitInput.min = todayDate
dateLimitInput.max = oneYearLaterDate

