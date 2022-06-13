import getInstance from '@portal/api/axios';

const UserAPI = {
  create: async (userData: models.UserCreation) => {
    const instance = await getInstance();
    await instance.post('/user', userData);
  },
  me: async () => {
    const instance = await getInstance();
    const { data } = await instance.get('/user/me');

    return data;
  },
  list: async () => {
    const instance = await getInstance();
    const { data } = await instance.get('/user');

    return data;
  },
  update: async (userData: models.User, id: string) => {
    const instance = await getInstance();
    const { data } = await instance.put(`/user/${id}`);

    return data;
  },
};

export default UserAPI;
