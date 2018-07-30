import { Deserializable } from "./deserializable.model";

//import {Team} from './team.model';

export class Api implements Deserializable {
  id: number;
  teamId: number;
  name: string;
  url: string;
  controller: string;
  acrion: string;
  //team: Team;
  
  deserialize(input: any) : this {
    Object.assign(this, input);
    return this;
  }
}