import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
    console.log(toDos);
  };
  const onDelete = (e) => {
    const element = e.target.id;
    console.log(e.target.id);
    setToDos((currentArray) =>
      currentArray.filter((item) => {
        return item !== element;
      })
    );
  };
  return (
    <div>
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do...."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.reverse().map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={onDelete} id={item}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
