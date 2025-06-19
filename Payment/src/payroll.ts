import { EmployeeContract } from './models'

export class Payroll<T extends EmployeeContract> {
  private employees = new Map<string, T>()

  register(name: string, Employee: T): void {
    this.employees.set(name, Employee)
  }

  calculate(): Map<string, number> {
    const salaries = new Map<string, number>()

    for (const [name, employee] of this.employees.entries()) {
      salaries.set(name, employee.CalculateSalary())
    }
    return salaries
  }

  showPayroll(): void {
    console.log('Folha Salarial')
    console.log('-')
    console.log(this.calculate())
  }
}
