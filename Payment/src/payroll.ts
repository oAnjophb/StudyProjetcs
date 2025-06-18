import { EmployeeContract } from './models'

export class Payroll<T extends EmployeeContract> {
  private employees = new Map<string, T>()

  register(name: string, Employee: T): void {
    this.employees.set(name, Employee)
  }

  calculate(): void {
  }

  showPayroll(): void {}
}
