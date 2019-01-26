export async function fetchToken(user) {
  return await fetch('http://www.test.com:8769/auth', {
    method: 'post',
    mode: 'cors',
    headers: new Headers({

      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(user)
  }).then(response => {
    if (response.ok) {
      let token = response.headers.get('Authorization');
      let curUser = response.headers.get('cur');
      localStorage.setItem('token', token);
      localStorage.setItem('curUser', curUser);
    } else {
      console.log('user login failed');
    }
    return response.ok;
  }).catch(error => {
    console.error(error);
  });
}
