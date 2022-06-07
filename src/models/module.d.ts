export as namespace models;

export interface Project {
  name: string;
}

export interface DropdownData {
  id?: string;
  name?: string;
  value?: string;
}

export interface HandleError {
  status: number;
  message: string;
}

export type CreateUser = {
  name: string;
  email: string;
  cellphone: string;
  password: string;
  grantType: string;
};

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface Params {
  name?: string;
  id?: string;
  date?: string;
}

export interface Pagination {
  offset?: number;
  limit?: number;
}

export interface UserCreation {
  name?: string;
  password?: string;
  email?: string;
  profileType?: number;
}

export interface ReportProps {
  id: string;
  title: string;
  description: string;
  typeId: string;
  type: {
    id: string;
    typeName: string;
    subTypes: string[];
    createdAt: string;
    updatedAt: string;
  };
  subTypes: string[];
  image: string;
  audio: string;
  updatedAt: string;
  createdAt: string;
}

export interface UserProps {
  id: string;
  email: string;
  name: string;
  password: string;
  profiletype: int;
  updateAt: string;
}
