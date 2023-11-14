{
  const clientId = import.meta.env.CLIENT_ID;
  const clientSecret = import.meta.env.CLIENT_SECRET;
  const redirectUri = 'SUA_REDIRECT_URI';

  const tokenUrl = 'https://accounts.spotify.com/api/token';

  const data = new URLSearchParams();
  data.append('grant_type', 'authorization_code');
  data.append('code', code);
  data.append('redirect_uri', redirectUri);

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
  };

  fetch(tokenUrl, {
    method: 'POST',
    headers: headers,
    body: data,
  })
    .then(response => response.json())
    .then(data => {
      const refreshToken = data.refresh_token;
      console.log('Refresh Token:', refreshToken); // Exibe o Refresh Token na console
    })
    .catch(error => {
      console.error('Erro ao obter Refresh Token:', error);
    });
}
