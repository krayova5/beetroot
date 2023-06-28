import "./App.css";
import AntdForm from "./components/AntdForm/AntdForm";
import CustomForm from "./components/CustomForm/Customform";
function App() {
  return (
    <div className="App">
      <h2>Ant Form</h2>
      <AntdForm />
      <br/>
      <br/>
      <h2>Custom Form</h2>
      <CustomForm />
    </div>
  );
}

export default App;
