import getInstance from '@portal/api/axios';

const AuthAPI = {
  login: async (userData: models.LoginRequest) => {
    console.log('AAA');
    const instance = await getInstance();
    const { data } = await instance.post('/auth', userData);

    return data as models.LoginResponse;
  },
  recovery: async (email: string) => {
    const instance = await getInstance();
    await instance.post('/auth/recovery', { email });
  },
};

export default AuthAPI;
