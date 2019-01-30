export type Todo = {
    id: String;
    body: String;
    completed: Boolean;
    goalId: String;
}
export type Goal = {
    id: String,
    name: String,
    description: String,
    dueDate: String,
    completed: Boolean,
    todos:[Todo]
}

export type Query = {
    todos: Todo[];
    todo: Todo;
    goals: Goal[];
    goal: Goal;
    todoDetail(id: String): Todo;
}
