<template>
    <div class="home">
        <h1>Todo List</h1>

        <div>
            <input
                type="text"
                placeholder="What will you do today?"
                v-model="title"
                @keyup.enter="addTodo"
            />

            <button @click="addTodo" :disabled="!title">Add Todo</button>
        </div>

        <p class="error" v-if="!title">You have not entered a todo!</p>

        <div class="todos">
            <h2>Todos</h2>
            <ul>
                <li v-for="(todo, index) in todos" :key="index">
                    {{ todo }}
                    <span class="delete-todo" @click="deleteTodo(index)"
                        >x</span
                    >
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            title: "",
            todos: [
                "Finish course",
                "Exercise for 20 minutes",
                "Read a book",
                "Take a walk",
            ],
        };
    },
    methods: {
        addTodo() {
            if (this.title !== "") {
                this.todos.push(this.title);
                this.title = "";
            }
        },
        deleteTodo(index) {
            // using javascript
            // this.todos.splice(index, 1);

            // using vue delete helper
            this.$delete(this.todos, index);
        },
    },
};
</script>

<style lang="scss">
h1 {
    margin-top: 30px;
    margin-bottom: 30px;
}

input {
    padding: 7px 12px;
    border-radius: 3px;
    border: 2px solid #83b9a1;
    outline: none;
    appearance: none;
    box-shadow: none;
}

button {
    padding: 7px 12px;
    border-radius: 3px;
    margin-left: 8px;
    outline: none;
    appearance: none;
    border: 2px solid #42b983;
    background: #42b983;
    color: #fff;
    transition: 0.4s ease;

    &:active,
    &:focus,
    &:hover {
        background: #25855a;
        border-color: #25855a;
        cursor: pointer;
    }
}

.error {
    color: red;
    font-style: italic;
    font-size: 14px;
    margin-top: 15px;
}

.todos {
    max-width: 400px;
    // min-height: 20px;
    margin: 30px auto;
    padding: 20px;
    background: #f1f1f1;
    text-align: left;

    h2 {
        text-align: center;
    }

    ul > li {
        margin: 10px;
        background: #fff;
        padding: 7px 12px;
        border-radius: 3px;
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}

.delete-todo {
    background: #f1f1f1;
    color: red;
    border-radius: 3px;
    padding: 2px 7px;
    transition: 0.4s ease;

    &:hover {
        background: red;
        color: #fff;
        cursor: pointer;
    }
}
</style>