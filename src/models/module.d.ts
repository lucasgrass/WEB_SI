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
  id?: string;
  userId: string;
  title: string;
  description: string;
  typeId: string;
  subTypes: string;
  image: string;
  audio: string;
  latitude: string;
  longitude: string;
  type?: models.TypesProps;
  createdAt?: string;
}

export interface UserProps {
  id: string;
  email: string;
  name: string;
  password: string;
  profiletype: int;
  updateAt: string;
}

export interface TypesProps {
  id?: string;
  typeName: string;
  subTypes?: string[];
}

export interface User {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  profileType?: number;
  createdAt?: string;
  updatedAt?: string;
}

interface MapFeaturesProps {
  type: string;
  properties: { nome: string; tipo: string; subtipos: string };
  geometry: { type: string; coordinates: [lng: number, lat: number] };
}

export interface MapInfoProps {
  type: string;
  name: string;
  crs: { type: string; properties: { name: string } };
  features: MapFeaturesProps[];
}
