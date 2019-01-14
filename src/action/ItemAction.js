import {ITEM_URL} from '../constants/Constants';

export async function fetchItem(itemId) {
  return await fetch(`${ITEM_URL}/${itemId}/1`, {
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
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