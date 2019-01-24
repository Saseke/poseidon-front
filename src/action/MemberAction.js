import {MEMBER_SERVICE} from '../constants/Constants';

export async function fetchMemberByName(name) {
  return await fetch(`${MEMBER_SERVICE}/${name}`, {
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
