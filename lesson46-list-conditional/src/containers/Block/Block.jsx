import "../../assets/styles/block.scss";
import Header from "../Header/Header";
import Dashboard from "../Dashboard/Dashboard";


function Block() {
  return (
    <div className="my-block">
      <Header />
      <Dashboard />
    </div>
  );

}
export default Block;