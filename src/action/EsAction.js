import {ES_SERVICE_URL} from '../constants/Constants';
import {REQUEST_TYPE} from '../model/Media';

export async function fetchRecommendItems(itemIds, page, limit) {
  return await fetch(`${ES_SERVICE_URL}/recommend/${page}/${limit}`, {
    method: REQUEST_TYPE.POST,
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify(itemIds)
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

