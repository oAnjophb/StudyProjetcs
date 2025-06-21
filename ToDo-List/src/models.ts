export enum Status {
  pending = 'em espera',
  inProgess = 'Em andamento',
  Completed = 'Completo',
}

export interface TaskContract {
  status: Status
  startTask(): string
}

export class Category {
  constructor(public readonly typeOfCategory: string) {}
}

export abstract class TaskModel {
  constructor(
    public readonly name: string,
    public readonly category: Category,
    public readonly description: string,
    public readonly status: Status
  ) {}
}
