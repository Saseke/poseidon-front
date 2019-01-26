import {ITEM_CAT_NAV_WITH_ITEMS, ITEM_CAT_ROOT_WITH_ITEMS, ITEM_VIEW_URL} from '../constants/Constants';

/**
 * fetch data of root categories with items
 */
export async function fetchRootCategoriesWithItems(catNum, itemNum) {
  return await fetch(`${ITEM_CAT_ROOT_WITH_ITEMS}/${catNum}/${itemNum}`, {
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


/**
 * fetch data of nav categories with items
 */
export async function fetchNavCategoriesWithItems(catNum, itemNum) {
  return await fetch(`${ITEM_CAT_NAV_WITH_ITEMS}/${catNum}/${itemNum}`, {
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
