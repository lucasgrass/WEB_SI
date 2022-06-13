import getInstance from '@portal/api/axios';

const ReportsAPI = {
  list: async () => {
    const instance = await getInstance();
    const { data } = await instance.get('/report');

    return data;
  },
  delete: async (id: string) => {
    const instance = await getInstance();
    await instance.delete(`/types/${id}`);
  },
};

export default ReportsAPI;
