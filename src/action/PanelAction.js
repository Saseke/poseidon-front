import {CAT_PANEL_ITEMS_URL} from '../constants/Constants';

export async function fetchPanel(catId) {
  return await fetch(`${CAT_PANEL_ITEMS_URL}/${catId}`, {
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