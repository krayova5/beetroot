
import { FaRandom } from 'react-icons/fa';


// assets

import "../../assets/styles/sidebar.scss";

function Sidebar() {
  const icons = [
    <FaRandom />,];

  const randomIcon = icons[Math.floor(Math.random() * icons.length)];

  const items = [
    { icon: {randomIcon}, name: 'Overview' },
    { icon: {randomIcon}, name: 'Tickets' },
    { icon: {randomIcon}, name: 'Ideas' },
    { icon: {randomIcon}, name: 'Contacts' },
    { icon: {randomIcon}, name: 'Agents' },
    { icon: {randomIcon}, name: 'Articles' },
    { icon: {randomIcon}, name: 'Settings' },
    { icon: {randomIcon}, name: 'Subscription' }
  ];
 
  return (
    <div className='sidebar'>
      <h1>Dashboard Kit</h1>
      <ul className='sidebar-list'>
        {items.map((item, index) => (
          <li className='sidebar-list__item' key={index}>
            <img src={item.icon} alt="Іконка" />

            {item.text}
          </li>
        ))}     
        </ul>
</div>  
); 
}
export default Sidebar;


