import { model, Schema } from 'mongoose';

export interface IPerson {
  name: string;
  age: number;
  createdAt: Date;
  updatedAt: Date;
}

export const PersonSchema = new Schema<IPerson>(
  {
    name: { type: 'String', required: true },
    age: { type: 'Number', required: false },
  },
  { timestamps: true }
);

export const Person = model<IPerson>('Person', PersonSchema);
