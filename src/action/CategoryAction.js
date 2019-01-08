import {ITEM_CAT_ROOT_URL, ITEM_PANEL_REMARK_URL} from '../constants/Constants';

export async function fetchCategory(num) {
  return await fetch(`${ITEM_CAT_ROOT_URL}/${num}`, {
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

export async function fetchPanelByRemark(remark) {
  return await fetch(`${ITEM_PANEL_REMARK_URL}/${remark}`, {
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