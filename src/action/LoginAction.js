export async function fetchLogin(user) {
  return await fetch('http://101.7.151.202:8769/auth', {
    headers: new Headers({
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }).then(rep => {
    console.log(rep);
    return rep.headers;
  });
}
