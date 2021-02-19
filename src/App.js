import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ToDoListItem from "./ToDoListItem.js";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
    };
  }

  render() {
    return (
      <div className="App">
        <form
          className="App-form"
          onSubmit={(e) => {
            e.preventDefault();
            const titleElement = e.target.elements["title"];
            const descriptionElement = e.target.elements["description"];

            this.setState(
              {
                todoList: this.state.todoList.concat({
                  title: titleElement.value,
                  description: descriptionElement.value,
                }),
              },
              // state変更後に入力値を空にする
              () => {
                titleElement.value = "";
                descriptionElement.value = "";
              }
            );
          }}
        >
          <div>
            <input id="title" placeholder="title"></input>
            <textarea id="description" placeholder="description"></textarea>
          </div>
          <div>
            <button type="submit">登録</button>
          </div>
        </form>
        <div>
          {/* todoList配列の要素数分のToDoListItemコンポーネントを展開 */}
          {this.state.todoList.map((todo) => (
            <ToDoListItem
              key={todo.title}
              title={todo.title}
              description={todo.description}
              // クリックされたItemをstateのtodoListから削除
              onClick={() => {
                this.setState({
                  todoList: this.state.todoList.filter((x) => x !== todo),
                });
              }}
            ></ToDoListItem>
          ))}
        </div>
      </div>
    );
  }
}
export default App;
