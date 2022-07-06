export const loadUsersApi = () =>
  fetch('https://reqres.in/api/users').then((response) => response.json());

export const getUserApi = (id) =>
  fetch(`https://reqres.in/api/users/${id}`).then((response) =>
    response.json(),
  );

export const deleteUserApi = async (id) =>
  await fetch(`https://reqres.in/api/users/${id}`, { method: 'DELETE' });

export const updateUserApi = (id, info) =>
  fetch(`https://reqres.in/api/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(info),
  }).then((response) => response.json());

export const loginUserApi = (data) =>
  fetch('https://reqres.in/api/login', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
