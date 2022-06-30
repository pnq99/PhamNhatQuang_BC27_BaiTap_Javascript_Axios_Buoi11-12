const URL =
  'https://6292f50a7aa3e6af1a029079.mockapi.io/qlsp-api/user-management-cybersoft';

export const getDataHandler = async () => {
  try {
    const res = await fetch(URL, {
      method: 'GET',
    });

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
