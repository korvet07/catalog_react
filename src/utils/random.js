import { COMMENTS, COUNTRIES, FABRICATORS, NAME_PRODUCT, URLS_IMG } from './const';

export const getRandomIntInclusive = (min, max) => {
  if (min >= max) {
    return 0;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandom = (min, max) => {
  const previousValues = [];
  return function () {
    let currentValue = getRandomIntInclusive(min, max);

    while (previousValues.includes(currentValue)) {
      currentValue = getRandomIntInclusive(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const createIndexGenerator = () => {
  let sumCount = -1;
  return (n) => sumCount >= n ? sumCount = 0 : ++sumCount;
};

function getMonthDate(date) {
  let month = ['Янв.', 'Фев.', 'Мар.', 'Апр.', 'Мая', 'Июня', 'Июля', 'Авг.', 'Сент.', 'Окт.', 'Нояб.', 'Дек.'];

  return month[date.getMonth()];
}


export function showMessageDateTime(n = getRandomIntInclusive(1, 7)) {
  let today = new Date();
  let roomLastMessageDate = new Date();
  roomLastMessageDate.setDate(today.getDate() + n);

  return `${roomLastMessageDate.getDate()} ${getMonthDate(roomLastMessageDate)}`;

};

const getIndexName = createIndexGenerator();
const getIndexImg = createIndexGenerator();
const getIndexComments = createIndexGenerator();
const getIndexCountry = createIndexGenerator();
const getIndexFabricator = createIndexGenerator();
export const getRandomCode = getRandom(500000, 799999);

export const getName = (arr, n = (NAME_PRODUCT?.length - 1)) => arr[getIndexName(n)];
export const getArrayImg = (arr, n = (URLS_IMG?.length - 1)) => arr[getIndexImg(n)];
export const getArrayComments = (arr, n = (COMMENTS?.length - 1)) => arr[getIndexComments(n)];
export const getArrayCountry = (arr, n = (COUNTRIES.length - 1)) => arr[getIndexCountry(n)];
export const getArrayFabricator = (arr, n = (FABRICATORS.length - 1)) => arr[getIndexFabricator(n)];
export  const sumPrice = (arrs) => arrs.reduce((sum, item) => sum + item, 0);