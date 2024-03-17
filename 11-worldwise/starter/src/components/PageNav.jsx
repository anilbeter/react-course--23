import { NavLink } from 'react-router-dom';
import styles from './PageNav.module.css';

function PageNav() {
  // differences between <Link/> and <NavLink/>;
  // Actually, those are the same. But <NavLink/> would add "active" class to the selected element and this will help to styling elements via CSS.

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
