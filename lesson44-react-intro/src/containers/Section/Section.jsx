// assets

import "../../assets/styles/containers/section.scss";
import Blog from "../Blog/Blog";
import News from "../News/News";


function Section() {
  return (
    <div className="my-section">
      <Blog/>
      <News/>
    </div>
  );

}
export default Section;