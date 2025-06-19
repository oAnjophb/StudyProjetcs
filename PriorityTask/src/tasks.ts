export interface TaskContract {
  complete(): string
}

////////////////////////////////////////////////////////

export enum priority {
  low,
  medium,
  high,
  urgent,
}

export abstract class Task {
  constructor(
    private description: string,
    protected priority: priority
  ) {}

  getPriority(): priority {
    return this.priority
  }

  getDescription(): string  {
    return this.description
  }
}

////////////////////////////////////////////////////////

export class PersonalTask extends Task {
  constructor(description: string, priority: priority) {
    super(description, priority)
  }
}

export class WorkTask extends Task {
  constructor(description: string, priority: priority) {
    super(description, priority)
  }
}
