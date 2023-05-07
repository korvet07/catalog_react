import { COMMENTS, COUNTRIES, FABRICATORS, MAX_PRICE, MIN_PRICE, NAME_PRODUCT, QUANTITY, URLS_IMG } from './utils/const';
import { getArrayComments, getArrayImg, getName, getRandomCode, getRandomIntInclusive, showMessageDateTime, getArrayFabricator, getArrayCountry } from './utils/random';

export const deliveryDay = getRandomIntInclusive(1, 7)
class Data {
  constructor() {
    this.name = getName(NAME_PRODUCT);
    this.code = getRandomCode();
    this.oldPrice = getRandomIntInclusive(MIN_PRICE, MAX_PRICE);
    this.price = getRandomIntInclusive(MIN_PRICE, MAX_PRICE);
    this.delivery = showMessageDateTime(deliveryDay);
    this.images = getArrayImg(URLS_IMG);
    this.comments = getArrayComments(COMMENTS);
    this.fabricator = getArrayFabricator(FABRICATORS);
    this.country = getArrayCountry(COUNTRIES );
    this.description = `это "текст-рыба", часто используемый в печати и веб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.`;
  }
}
const getMokes = (value) => {
  const arr = [];
  for (let i = 0; i < value; i++) {
    arr.push(new Data());
  }
  return arr;
};
const PRODUCTS = getMokes(QUANTITY)
localStorage.setItem('data', JSON.stringify(PRODUCTS));

export const getLocalData = () => JSON.parse(localStorage.getItem('data'));
export const getLocalDataBasked = () => JSON.parse(localStorage.getItem('data-basked'));
