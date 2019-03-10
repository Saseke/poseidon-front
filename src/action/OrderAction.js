import {ORDER_SERVICE_URL} from '../constants/Constants';

export async function addOrder(orderInfo) {
  return await fetch(`${ORDER_SERVICE_URL}`, {
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify(orderInfo)
  }).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      return new Error('请求错误');
    }
  }).then(json => {
    return json.data;
  })
    .catch(error => {
      console.error(error);
    });
}