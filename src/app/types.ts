export type Todo = {
    id: number;
    body: string;
    completed: boolean;
    goalId: string;
}

export type Query = {
    allTodos: Todo[];
}