import styles from './App.module.css'
import Logo from './assets/image/logo-default.svg'
import LogoOutline from './assets/image/logo-outline.svg'
import ArrowDown from './assets/image/arrow-down.svg'

function App() {
  return (
    <div className={styles.portifolioContainer}>
      <header className={styles.header}>
        <div className={styles.headerTitle}>
          <img src={Logo} alt="Logo" />
          <h1>Elias</h1>
        </div>
        <nav className={styles.nav}>
          <a href="#">#home</a>
          <a href="#">#works</a>
          <a href="#">#about-me</a>
          <a href="#">#contacts</a>
          <button>EN <img src={ArrowDown} alt="" /></button>
        </nav>
      </header>
    </div>
  );
}

export default App;
