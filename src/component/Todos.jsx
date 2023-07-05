import React from "react";
import TodoItem from "./TodoItem";

export default function Todos ({todos}) {
    return (
      <div>
        {todos.map((todo) => {
            return <TodoItem key={todo.id} todo={todo}/>
        })}
      </div>
    )
  }