const makeTodos = (n) => {
    // this function returns n number of todo items

    const num = n || 15;
    const todos = [];

    for (let i = 0; i < num; i++) {
        todos.push({
            id: i,
            userId: i,
            title: `Todo Item ${i}`,
            completed: [true, false] [Math.floor(Math.random()*2)]
        })
    }

    return todos;
};

export const todos = makeTodos(200);