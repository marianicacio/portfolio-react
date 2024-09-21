import { useEffect } from 'react';
import styles from './App.module.css'
import { Logo, LogoOutline, ArrowDown, Dribble, Figma, Github } from './assets/image';
import { validaWidth } from './assets/helpers';

function App() {
  useEffect(() => {
    console.log(validaWidth(), "useEffect")
  }, [])

  return (
    <div className={styles.portifolioContainer}>
      <aside className={styles.asideMedia}>
        <div className={styles.line}></div>
        <a href="">
          <img src={Github} alt="Icone do github" />
        </a>
        <a href="">
          <img src={Dribble} alt="Icone do drible" />
        </a>
        <a href="">
          <img src={Figma} alt="Icone do figma" />
        </a>
      </aside>
      <header className={styles.header}>
        <div className={styles.headerTitle}>
          <img src={Logo} alt="Logo" />
          <h1>Maria Eduarda</h1>
        </div>
        <nav className={styles.nav}>
          <a href=""><span>#</span><p>home</p></a>
          <a href=""><span>#</span><p>works</p></a>
          <a href=""><span>#</span><p>about-me</p></a>
          <a href=""><span>#</span><p>contacts</p></a>
          <select name='' id=''>
            <option>EN</option>
            <option>PT</option>
            <img src={ArrowDown} alt="" />
          </select>
        </nav>
      </header>
    </div>
  );
}

export default App;
