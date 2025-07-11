import { priority, Task, TaskContract } from "./tasks";

export class TaskManager<T extends TaskContract> {
  private tasks = new Map<string, Task>();

  private SearchPriority(priorityChoice: number): string {
    return priority[priorityChoice]
  }

  addTask(name: string, task: Task): void {
    this.tasks.set(name, task);
  }

  listTaskPrority(priorityChoice?: number): Map<string, Task> {
    const priorities = new Map<string, Task>()

    for (const [name, task] of this.tasks.entries()) {
      if (
        priorityChoice === undefined ||
        task.getPriority() === priorityChoice
      ) {
        priorities.set(name, task)
      }
    }
    return priorities
  }
  

  complete(): void {
    console.log(this.listTaskPrority());
  }
}