const delay = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

export const fetchUser = async () => {
  await delay(2000);
  return {
    status: 200,
    userName: "myname",
    photoUrl: "https://picsum.photos/40/40",
  };
};

const validPassword = "react";
export const login = async ({ name, password }) => {
  if (name && password === validPassword) {
    return fetchUser();
  }
  await delay(2000);
  return {
    status: 401,
  };
};
