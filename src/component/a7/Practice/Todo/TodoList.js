import TodoItem from "./TodoItem";
import todos from "./todos.json";
const TodoList = () => {
    return(
        <ul>
            {
                todos.map((todo,idx) => {
                    return(<TodoItem todo={todo} key={idx}/>);
                })
            }
        </ul>
    );
}
export default TodoList;
