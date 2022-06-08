import getInstance from '@portal/api/axios';

const TypeAPI = {
  list: async () => {
    const instance = await getInstance();
    const { data } = await instance.get('/types');

    return data;
  },
  create: async (data: models.TypesProps) => {
    const instance = await getInstance();
    await instance.post('/types', data);
  },
  update: async (data: models.TypesProps, id: string) => {
    const instance = await getInstance();
    await instance.put(`/types/${id}`, data);
  },
};

export default TypeAPI;
