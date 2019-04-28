import {ORDER_SERVICE_URL} from '../constants/Constants';
import {REQUEST_TYPE} from '../model/Media';

export async function addOrder(orderInfo) {
  return await fetch(`${ORDER_SERVICE_URL}`, {
    method: REQUEST_TYPE.POST,
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
  })
    .catch(error => {
      console.error(error);
    });
}


/**
 * 查询指当前用户指定类型的订单
 * @param buyerId 买家的id
 * @param op 订单的类型: 0为未支付的订单,1为已经支付的订单
 * @param cur 当前页数
 * @param size 每一页返回的条数
 * @returns {Promise<Response>}
 */
export async function fetchByBuyerId(buyerId, op, cur, size) {
  return await fetch(`${ORDER_SERVICE_URL}/list/${buyerId}/${op}/${cur}/${size}`, {
    method: REQUEST_TYPE.GET,
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  }).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      return new Error('请求错误');
    }
  })
    .catch(error => {
      console.error(error);
    });
}

export async function fetchByBuyerIdAll(buyerId, op) {
  return await fetch(`${ORDER_SERVICE_URL}/list/${buyerId}/${op}`, {
    method: REQUEST_TYPE.GET,
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  }).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      return new Error('请求错误');
    }
  })
    .catch(error => {
      console.error(error);
    });
}

export async function updateOrder(orderId, status) {
  return await fetch(`${ORDER_SERVICE_URL}/${orderId}/${status}`, {
    method: REQUEST_TYPE.PATCH,
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  }).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      return new Error('请求错误');
    }
  })
    .catch(error => {
      console.error(error);
    });
}

export async function statisticOrder(buyerId) {
  return await fetch(`${ORDER_SERVICE_URL}/${buyerId}`, {
    method: REQUEST_TYPE.GET,
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  }).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      return new Error('请求错误');
    }
  })
    .catch(error => {
      console.error(error);
    });
}