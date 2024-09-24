import { useEffect } from 'react';
import styles from './App.module.css'
import { Logo, LogoOutline, ArrowDown, Dribble, Figma, Github, MainImage, Aspas1, Aspas2 } from './assets/image';
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
      <main className={styles.hero}>
        <section className={styles.heroDescription}>
          <h1>Maria Eduarda is a <span>web designer</span> and <span>front-end developer</span></h1>
          <p>He crafts responsive websites where technologies meet creativity</p>
          <button>Contact me!!</button>
        </section>
        <section className={styles.heroImage}>
          <img src={MainImage} alt="" />
          <div className={styles.heroCurrently}>
            <div className={styles.rectangle}></div>
            <p>Currently working on <span>Portfolio</span></p>
          </div>
        </section>
      </main>
      <section className={styles.quote}>
      <div className={styles.phrase}>
        <img src={Aspas1} alt="" />
        <p>With great power comes great electricity bill</p>
      </div>
      <div className={styles.drWho}>
        <img src={Aspas2} alt="" />
        <h1>- Dr. Who</h1>
      </div>
      </section>
    </div>
  );
}

export default App;
