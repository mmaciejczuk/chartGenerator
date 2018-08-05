import { Deserializable } from "./deserializable.model";

export class Alert implements Deserializable {
  id: number;
  teamId: number;
  time: string;
  code: number;
  message: string;
  interval: number;
  
  deserialize(input: any) : this {
    Object.assign(this, input);
    return this;
  }
}