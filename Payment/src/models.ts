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

  getName(): string {
    return this.name
  }
}

/////////////////////////////////////////////////////////
export class Manager extends Employee {
  private teamBonus: number = 0

  constructor(name: string, salary: number) {
    super(name, salary)
  }

  setBonus(bonus: number, teamSize: number): void {
    this.teamBonus = bonus * teamSize
  }

  CalculateSalary(): number {
    return this.getSalary() + this.teamBonus
  }
}
/////////////////////////////////////////////////////////
export class Developer extends Employee {
  private projectBonus: number = 0

  constructor(name: string, salary: number) {
    super(name, salary)
  }

  setBonus(bonus: number, qntyProjects: number): void {
    this.projectBonus = bonus * qntyProjects
  }

  CalculateSalary(): number {
    return this.getSalary() + this.projectBonus
  }
}
