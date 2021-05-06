const URL = `https://agenda-ferrari-back.herokuapp.com/agenda/register`;

const fetchClientData = async (clientData) => {
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({clientData}),
  })
  return response.json().then((data) => (data));
}

export default fetchClientData;