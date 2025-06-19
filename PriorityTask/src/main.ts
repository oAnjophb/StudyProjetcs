import { TaskManager } from "./managerClass"
import { PersonalTask, WorkTask } from "./tasks"

const managerTask = new TaskManager()
const p1 = new PersonalTask("ababababa", 2)
const p2 = new PersonalTask("xxxxxxxxx", 1)
const w1 = new WorkTask("alalalalal", 3)
const w2 = new WorkTask("twtwtwtwwtw", 0)

managerTask.addTask("p1", p1)
managerTask.addTask("p2", p2)
managerTask.addTask("w1", w1)
managerTask.addTask("w2", w2)



const priorityChoiced = 3

for (const [key, task] of managerTask.listTaskPrority(priorityChoiced)) {
  console.log(key, task)
}