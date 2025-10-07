import Button from '../UI/Button/Button.jsx';
import { SearchIcon, MapPinIcon } from 'lucide-react';
function SearchBar() {
    return (
        <div className={`${styles['search-bar-container']}`}>
      <div className={`${styles['search-bar-wrapper']}`}>
        <div className={`${styles['search-input-group']}`}>
          <span className={`${styles['search-icon']}`}><SearchIcon/></span>
          <select className={`${styles['search-select']}`}>
            <option>Tell us about your job</option>
            <option>Interior Painting</option>
            <option>Exterior Painting</option>
            <option>Cabinet Painting</option>
          </select>
        </div>

        <div className={`${styles['search-input-group']}`}>
          <span className={`${styles['search-icon']}`}><MapPinIcon/></span>
          <input 
            type="text" 
            placeholder="Enter your ZIP code" 
            className={`${styles['search-input']}`}
            />
        </div>

        <Button backgroundColor={"var(--c2)"}>Find a Painter</Button>
      </div>
    </div>
  );
}
import styles from './Searchbar.module.css';

export default SearchBar;