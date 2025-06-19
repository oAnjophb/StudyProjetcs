import { TaskContract } from "./tasks";

export class TaskManager <T extends TaskContract> {
  private tasks = new Map <string, T>()

  addTask(): string

  complete(): string {
    return ''
  }
}