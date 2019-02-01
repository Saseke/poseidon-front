import {CART} from '../constants/Constants';
import {REQUEST_TYPE} from '../model/Media';

export async function fetchCartByUserName(name) {
  return await fetch(`${CART}/list/${name}`, {
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
 * 根据购物车id删除购物车中的商品`
 */
export async function deleteCart(nickName, itemId) {
  return await fetch(`${CART}/${nickName}/${itemId}`, {
    method: REQUEST_TYPE.DELETE,
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
}

/**
 * 添加商品到购物车中
 */
export async function addCart(cartInfo) {
  return await fetch(`${CART}`, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify(cartInfo)
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
}

/**
 * 更新购物车中某个商品的数量
 */

export async function updateCart(curUser, itemId, quantity) {
  return await fetch(`${CART}/${curUser}/${itemId}/${quantity}`, {
    method: REQUEST_TYPE.PATCH,
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
}
