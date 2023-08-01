export async function loginToPocketbase (email: string, password: string) {
    // Login
    const login = await fetch('http://127.0.0.1:8090/api/collections/users/auth-with-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        identity: email,
        password: password,
      })
    })
    .then(res => res.json())
    .then(res => {
        return res.token;
    })
    .catch(err => {
        console.error(err);
    });
    return login;
}

export async function getProfile (bearerToken: string) {
  
    //GetProfile
    const profile = await fetch('http://127.0.0.1:8090/api/collections/developer/records',
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + bearerToken
        }
    })
    .then(res => res.json())
    .catch(err => {
        console.error(err);
    });
    return profile;
}