const URL = `https://agenda-ferrari-back.herokuapp.com/agenda`;

const fetchClientData = async (idUser) => {
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({idUser: idUser}),
  })
  return response.json().then((data) => (data));
}

export default fetchClientData;