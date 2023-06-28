// assets

import "../../assets/styles/section.scss";
import Sidebar from "../Sidebar/Sidebar";
import Block from "../Block/Block";


function Section() {
  return (
    <div className="my-section">
      <Sidebar />
      <Block />
    </div>
  );

}
export default Section;