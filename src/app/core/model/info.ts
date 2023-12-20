import { Converter } from './converter';

export interface Info {
  id?: string;
  numeroSelecionado: string;
  nome: string;
  celular: string;
  email: Date;
  createdAt: Date;
}

export const InfoConverter: Converter<Info> = {
  toFirestore: (data) => data,
  fromFirestore: (snapshot, options) => {

    const obj = snapshot.data(options)!;

    return {
      ...obj,
      createdAt: obj['createdAt']?.toDate(),
    } as Info;
  },
};
