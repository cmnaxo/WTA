export interface UserI {
  nombre: string;
  apellido: string;
  email: string;
  uid: string;
  password: string;
  password2: string;
  celular: string;
  direccion: string;
  imagen: string;
  perfil: 'Pasajero';
}

export interface ConductorI {
  nombre: string;
  apellido: string;
  email: string;
  uid: string;
  password: string;
  password2: string;
  celular: string;
  perfil: 'Conductor';
}

export interface VehiculoI {
  uid: string;
  patente: string;
  marca: string;
  modelo: string;
  color: string;
  capacidad: number;
  dueño: ConductorI;
}

export interface ViajeI {
  uid: string;
  estado: string;
  valor: string;
  direccion: string;
  hora: string;
  conductorName: string;
  conductorApellido: string;
  coverConductor: string;
}

