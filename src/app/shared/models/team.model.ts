import { Deserializable } from "./deserializable.model";

export class Team implements Deserializable {
  id: number;
  name: string;

  deserialize(input: any) : this {
    Object.assign(this, input);
    return this;
  }
}