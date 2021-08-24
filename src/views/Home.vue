<template>
    <div class="home">
        <h1>Todo List</h1>

        <div>
            <input
                type="text"
                placeholder="What do you want to do?"
                v-model="title"
                @keyup.enter="addTodo"
            />

            <button @click="addTodo" :disabled="!title">Add Todo</button>
        </div>

        <p class="error" v-if="!title">{{ error }}</p>

        <div class="todos">
            <h2>Todos</h2>
            <ul>
                <li v-for="(todo, index) in todos" :key="index">
                    <p>
                        <!-- <span>+</span> -->
                        {{ todo }}
                    </p>
                    <span class="delete-todo" @click="deleteTodo(index)">
                        x
                    </span>
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
                // "Finish course",
                // "Exercise for 20 minutes",
                // "Read a book",
            ],
            error: "Please enter todo!",
        };
    },
    methods: {
        addTodo() {
            if (this.title !== "") {
                this.todos.push(this.title);
                this.title = "";
            }
            this.saveTodos();
        },
        deleteTodo(index) {
            // using javascript
            // this.todos.splice(index, 1);

            // using vue delete helper
            this.$delete(this.todos, index);
            this.saveTodos();
        },
        saveTodos() {
            localStorage.setItem("Todos", JSON.stringify(this.todos));
        },
        getTodos() {
            this.todos = JSON.parse(localStorage.getItem("Todos"));
        },
    },
    mounted() {
        this.getTodos();
    },
};
</script>

<style lang="scss">
h1 {
    margin-top: 30px;
    margin-bottom: 30px;
}

input {
    min-width: 170px;
    padding: 7px 10px;
    border-radius: 3px;
    border: 2px solid #4bc58e;
    outline: none;
    appearance: none;
    box-shadow: none;
    font-family: sans-serif;
}

button {
    padding: 7px 10px;
    border-radius: 3px;
    margin-left: 5px;
    outline: none;
    appearance: none;
    border: 2px solid #38a775;
    background: #38a775;
    color: #fff;
    transition: 0.4s ease;

    &:active,
    &:focus,
    &:hover {
        background: #2c8f62;
        border-color: #2c8f62;
        cursor: pointer;
    }

    &:disabled {
        border: 2px solid #4bc58e;
        background: #4bc58e;
    }
    &:disabled:hover {
        cursor: unset;
    }
}

.error {
    color: rgb(207, 27, 27);
    // font-style: italic;
    font-size: 13px;
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

        // & p span {
        //     background: #f1f1f1;
        //     border-radius: 3px;
        //     padding: 1px 5px;

        //     &:hover {
        //         cursor: pointer;
        //     }
        // }
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