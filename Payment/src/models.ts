export interface EmployeeContract {
  CalculateSalary(): number
}

/////////////////////////////////////////////////////////
export abstract class Employee implements EmployeeContract {
  constructor(
    private name: string,
    private salary: number
  ) {}

  abstract CalculateSalary(): number

  getSalary(): number {
    return this.salary
  }

  setSalary(value: number): void {
    this.salary = value
  }
}

/////////////////////////////////////////////////////////
export class Manager extends Employee {
  constructor(name: string, salary: number) {
    super(name, salary)
  }

  setBonus(bonus: number, qtyOfTeam: number): void {
    if (bonus && qtyOfTeam) {
      this.setSalary(bonus * qtyOfTeam)
    }
  }

  CalculateSalary(): number {
    return this.getSalary()
  }
}
/////////////////////////////////////////////////////////
export class Developer extends Employee {
  constructor(name: string, salary: number) {
    super(name, salary)
  }

  setBonus(bonus: number, qtyOfProjetcs: number): void {
    if (bonus && qtyOfProjetcs) {
      this.setSalary(bonus * qtyOfProjetcs)
    }
  }

  CalculateSalary(): number {
    return this.getSalary()
  }
}
