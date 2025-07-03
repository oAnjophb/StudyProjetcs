import { Contractor } from './contracts'

export class Enterprise {
  constructor(
    public readonly name: string,
    public readonly cpnj: string,
    public readonly contractor: Contractor[]
  ) {}
}
