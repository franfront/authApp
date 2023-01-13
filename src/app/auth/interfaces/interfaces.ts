export interface AuthResponse {
  estado: boolean;
  id?: string;
  token?: string;
  nombre?: string;
  msg?: string;
  email?: string;
}

export interface Usuario {
  id: string;
  nombre: string;
  email: string;
}
