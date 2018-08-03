import { Deserializable } from "./deserializable.model";

export class Alert implements Deserializable {
  id: number;
  apiId: number;
  time: string;
  code: number;
  message: string;
  
  deserialize(input: any) : this {
    Object.assign(this, input);
    return this;
  }
}