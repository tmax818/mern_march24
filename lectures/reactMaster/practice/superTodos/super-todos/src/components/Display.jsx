import Item from './Item'

const Display = (props) => {

  //Destructure props object
  const { todoList, toggleCompleted, deleteTodo } = props;


  return (
    <>

      {
      todoList.map((todo, index) => (
        <div key={todo.id}>
          <Item styled={todo.markedDelete ? "completed" : ""} 
          itemText="Todo: "
          itemContent={todo.content} 
          checkboxHandler={()=>toggleCompleted(todo.id)}
          buttonHandler={()=>deleteTodo(todo.id)}
          buttonText="Delete Todo"
          />
        </div>
      ))
      }

    </>
  );
};

export default Display;




// const Display = (props) => {

//   //Destructure props object
//   const { todoList, toggleCompleted, deleteTodo } = props;


//   return (
//     <>

//       {
//         todoList.map((todo, index) => (
//           <div key={todo.id}>
//             <p className={todo.markedDelete ? "completed" : ""}>{todo.content}</p>
//             <input type="checkbox" onChange={() => toggleCompleted(todo.id)} />
//             <button onClick={() => deleteTodo(todo.id)}>Delete</button>
//           </div>
//         ))
//       }

//     </>
//   );
// };

// export default Display;