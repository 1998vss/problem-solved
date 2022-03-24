import Button from "./components/Button";
import List from "./components/List";
function App() {
  return (
    <div className="App">
      <h1>Problem Solved</h1>
      <h2>Products to help you in daily tasks</h2>
      <Button color={"#000000"} text={"Vinicius"} textColor={"#ffffff"}/>
      <Button color={"#645838"} text={"Thiago"}/>
      <Button color={"#ff4638"} text={"Gabriel"}/>
      <Button color={"#267500"} text={"Mylena"}/>
      <Button color={"#ffffff"} text={"Caique"}/>
      <List items={["Cake", "Mylena", "Tingao", "Bingo", "Vini"]}/>
    </div>
  );
}

export default App;
