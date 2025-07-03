import { ErrorHanding } from './utils'

interface ContractContractor {
  name: string
  cpf: number
}

export class Adress {
  constructor(
    public readonly street: string,
    public readonly neighborhood: string,
    public readonly zip_code: number,
    public readonly city: string,
    public readonly state: string
  ) {}
}

export abstract class Contractor implements ContractContractor {
  constructor(
    public readonly name: string,
    public readonly cpf: number,
    public readonly adress: Adress,
    public readonly consumptionOfMonth: number
  ) {}

  getAdressOfContractor(contractor: Contractor): Adress {
    ErrorHanding(contractor)
    return this.adress
  }

  getConsumptionOfMonth(contractor: Contractor): number {
    ErrorHanding(contractor)
    return this.consumptionOfMonth
  }
}
