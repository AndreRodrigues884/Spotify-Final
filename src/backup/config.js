/* const getRefreshToken = async () => {
  // refresh token that has been previously stored
  const refreshToken = import.meta.env.VITE_API_REFRESH_TOKEN;
  const clientSecret = import.meta.env.VITE_API_CLIENT_SECRET;
  const url = "https://accounts.spotify.com/api/token";
  const clientId = import.meta.env.VITE_API_CLIENT_ID; 


  console.log(new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
    client_id: clientId,
    clientSecret: clientSecret
  }))

  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,   
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      cache: "no-cache"
    }),
  };
  

  try {
    const response = await fetch(url, payload);
    if (response.ok) {
      const data = await response.json();
      // Atualize o access_token e refresh_token no localStorage
      localStorage.setItem('access_token', data.access_token);
      const tokenExpirationTime = 3600000;
      setTimeout(getRefreshToken, tokenExpirationTime);
    } else {
      console.error("Erro na solicitação de renovação do token:", response.status, response.statusText);
    }
  } catch (error) {
    console.error("Erro ao renovar o token:", error);
  }
}

// Chame a função para obter e renovar o token pela primeira vez
getRefreshToken();
 */