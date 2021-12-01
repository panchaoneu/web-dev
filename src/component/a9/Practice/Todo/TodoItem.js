const TodoItem=({
        todo={
            done:true,
            title:'Buy milk',
            status:'COMPLETED'
        },key
    })=> {
    return(
        <li key={key}>
            <p>test</p>
            <input type="checkbox"
                   defaultChecked={todo.done}/>
            {todo.title}
            ({todo.status})
        </li>
    );
}
export default TodoItem;