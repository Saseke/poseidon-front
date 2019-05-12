import {REQUEST_TYPE} from '../model/Media';
import {WEB_CART_SERVICE} from '../constants/Constants';

export async function fetchCartByUserName(name) {
  return await fetch(`${WEB_CART_SERVICE}/list/${name}`, {
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
    let ret = json.data;
    ret.map((cart) => (
      cart.checked = false
    ));
    return ret;
  })
    .catch(error => {
      console.error(error);
    });
}

/**
 * 根据购物车id删除购物车中的商品`
 */
export async function deleteCart(nickName, itemId) {
  return await fetch(`${WEB_CART_SERVICE}/${nickName}/${itemId}`, {
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
  return await fetch(`${WEB_CART_SERVICE}`, {
    method: REQUEST_TYPE.POST,
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
  return await fetch(`${WEB_CART_SERVICE}/${curUser}/${itemId}/${quantity}`, {
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

export async function clean(itemCartIds) {
  return await fetch(`${WEB_CART_SERVICE}`, {
    method: REQUEST_TYPE.PATCH,
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify(itemCartIds)
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
}

