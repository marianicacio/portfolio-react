import { useEffect } from 'react';
import styles from './App.module.css'
import { Logo, LogoOutline, ArrowDown, Dribble, Figma, Github, MainImage, Aspas1, Aspas2, Rectangle, Bolinhas, ChertNodes, ProtectX, Kahoot, Skills } from './assets/image';
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
        <div className={styles.align}>
          <div className={styles.phrase}>
            <img src={Aspas1} alt="" />
            <p>With great power comes great electricity bill</p>
          </div>
          <div className={styles.drWho}>
            <img src={Aspas2} alt="" />
            <h1>- Dr. Who</h1>
          </div>
        </div>
        <img src={Rectangle} alt="" />
      </section>
      <section className={styles.projects}>
        <div className={styles.projectsAlign}>
          <div className={styles.projectsTitle}>
            <h1><span>#</span>projects</h1>
            <div className={styles.linePurple}></div>
          </div>
          <button><a href=""> View all ~~> </a></button>
        </div>
        <img src={Bolinhas} alt="" />
      </section>
      <section className={styles.projectsView}>
        <div className={styles.node}>
          <img src={ChertNodes} alt="" />
          <div className={styles.languages}>
            <p>HTML</p>
            <p>SCSS</p>
            <p>Python</p>
            <p>Flask</p>
          </div>
          <div className={styles.description}>
            <h1>ChertNodes</h1>
            <p>Minecraft servers hosting </p>
          </div>
          <div className={styles.buttons}>
            <div className={styles.liveButton}>
              <button> Live </button>
            </div>
            <div className={styles.cachedButton}>
              <button> Cached </button>
            </div>
          </div>
        </div>
        <div className={styles.protectX}>
          <img src={ProtectX} alt="" />
          <div className={styles.languagesProtectX}>
            <div className={styles.technologyOne}>
              <p>React</p>
              <p>Express</p>
              <p>Discord.js</p>
              <p>Node.js</p>
            </div>
            <div className={styles.technologyTwo}>
              <p>HTML</p>
              <p>SCSS</p>
              <p>Python</p>
              <p>Flask</p>
            </div>
          </div>
          <div className={styles.description}>
            <h1>ProtectX</h1>
            <p>Discord anti-crash bot</p>
          </div>
          <div className={styles.buttons}>
            <div className={styles.liveButton}>
              <button> Live </button>
            </div>
          </div>
        </div>
        <div className={styles.kahoot}>
          <img src={Kahoot} alt="" />
          <div className={styles.languages}>
            <p>CSS</p>
            <p>Express</p>
            <p>Node.js</p>
          </div>
          <div className={styles.description}>
            <h1>Kahoot Answers Viewer</h1>
            <p>Get answers to your kahoot quiz</p>
          </div>
          <div className={styles.buttons}>
            <div className={styles.liveButton}>
              <button> Live </button>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.skillsSection}>
        <article className={styles.skills}>
          <div className={styles.projectsTitle}>
            <h1><span>#</span>skills</h1>
            <div className={styles.linePurple2}></div>
          </div>
          <img src={Skills} alt="" />
        </article>
        <article>
          <div>
            <h1>Languages</h1>
          </div>
          <p>TypeScript</p>
          <p>Lua</p>
          <br />
          <p>Python</p>
          <p>JavaScript</p>
        </article>
        <section>
        <article>
          <div>
            <h1>Databases</h1>
          </div>
          <p>SQLite</p>
          <p>PostgreSQL</p>
          <br />
          <p>Mongo</p>
        </article>
        <article>
          <div>
            <h1>Other</h1>
          </div>
          <p>HTML</p>
          <p>CSS</p>
          <p>EJS</p>
          <p>SCSS</p>
          <br />
          <p>REST</p>
          <p>Jinja</p>
        </article>
        </section>
        <section>
        <article>
          <div>
            <h1>Tools</h1>
          </div>
          <p>VSCode</p>
          <p>Neovim</p>
          <p>Linux</p>
          <br />
          <p>Figma</p>
          <p>XFCE</p>
          <p>Arch</p>
          <br />
          <p>Git</p>
          <p>Font</p>
          <p>Awesome</p>
        </article>
        <article>
          <div>
            <h1>Frameworks</h1>
          </div>
          <p>React</p>
          <p>Vue</p>
          <br />
          <p>Disnake</p>
          <p>Discord.js</p>
          <br />
          <p>Flask</p>
          <p>Express.js</p>
        </article>
        </section>
      </section>
    </div>
  );
}

export default App;
