import { useEffect } from 'react';
import styles from './App.module.css'
import { Logo, LogoOutline, ArrowDown, Dribble, Figma, Github, MainImage, Aspas1, Aspas2, Rectangle, Bolinhas, ChertNodes, ProtectX, Kahoot, Skills, AboutImage, AboutSquare, AboutBalls, Discord, Email, ContactsBalls } from './assets/image';
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
          <button><a href="/src/components/projects"> View all</a></button>
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
            <div className={styles.technologyOne}>
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
        <article className={styles.skillsContainer}>
          <div className={styles.skillsBorder}>
            <h1>Languages</h1>
          </div>
          <div className={styles.skillsSquare}>
            <div className={styles.skillsDescription}>
              <p>TypeScript</p>
              <p>Lua</p>
            </div>
            <div className={styles.skillsDescription}>
              <p>Python</p>
              <p>JavaScript</p>
            </div>
          </div>
        </article>
        <section className={styles.skillsAlign}>
          <article className={styles.skillsContainer}>
            <div className={styles.skillsBorder}>
              <h1>Databases</h1>
            </div>
            <div className={styles.skillsSquare}>
              <div className={styles.skillsDescription}>
                <p>SQLite</p>
                <p>PostgreSQL</p>
              </div>
              <div className={styles.skillsDescription}>
                <p>Mongo</p>
              </div>
            </div>
          </article>
          <article className={styles.skillsContainer}>
            <div className={styles.skillsBorder}>
              <h1>Other</h1>
            </div>
            <div className={styles.skillsSquare}>
              <div className={styles.skillsDescription}>
                <p>HTML</p>
                <p>CSS</p>
                <p>EJS</p>
                <p>SCSS</p>
              </div>
              <div className={styles.skillsDescription}>
                <p>REST</p>
                <p>Jinja</p>
              </div>
            </div>
          </article>
        </section>
        <section className={styles.skillsAlignTwo}>
          <article className={styles.skillsContainerTwo}>
            <div className={styles.skillsBorderTwo}>
              <h1>Tools</h1>
            </div>
            <div className={styles.skillsSquare}>
              <div className={styles.skillsDescription}>
                <p>VSCode</p>
                <p>Neovim</p>
                <p>Linux</p>
              </div>
              <div className={styles.skillsDescription}>
                <p>Figma</p>
                <p>XFCE</p>
                <p>Arch</p>
              </div>
              <div className={styles.skillsDescription}>
                <p>Git</p>
                <p>Font</p>
                <p>Awesome</p>
              </div>
            </div>
          </article>
          <article className={styles.skillsContainerTwo}>
            <div className={styles.skillsBorderTwo}>
              <h1>Frameworks</h1>
            </div>
            <div className={styles.skillsSquare}>
              <div className={styles.skillsDescription}>
                <p>React</p>
                <p>Vue</p>
              </div>
              <div className={styles.skillsDescription}>
                <p>Disnake</p>
                <p>Discord.js</p>
              </div>
              <div className={styles.skillsDescription}>
                <p>Flask</p>
                <p>Express.js</p>
              </div>
            </div>
          </article>
        </section>
      </section>
      <section className={styles.heroTwo}>
        <div className={styles.square}>
          <img src={AboutSquare} alt="" />
        </div>
        <div className={styles.heroDescriptionTwo}>
          <div className={styles.projectsTitle}>
            <h1><span>#</span>about-me</h1>
            <div className={styles.linePurple3}></div>
          </div>

          <p>Hello, i’m Maria Eduarda!
            <br />
            <br />

            I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
            <br />
            <br />

            Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p>
          <button>Read more </button>
        </div>
        <img src={AboutImage} alt="" />
        <div className={styles.balls}>
          <img src={AboutBalls} alt="" />
        </div>
      </section>
      <section className={styles.contacts}>
        <div className={styles.contactsBalls}>
          <img src={ContactsBalls} alt="" />
        </div>
        <article className={styles.contactsContainer}>
          <div className={styles.contactsTitle}>
            <h1><span>#</span>contacts</h1>
            <div className={styles.linePurple4}></div>
          </div>
          <p>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
        </article>
        <article className={styles.message}>
          <h1>Message me here</h1>
          <div className={styles.socialMedia}>
            <img src={Discord} alt="" />
            <p>Minhete#3519</p>
          </div>
          <div className={styles.socialMedia}>
            <img src={Email} alt="" />
            <p>mariaeduarda.nicacio2007@gmail.com</p>
          </div>
        </article>
      </section>
      <footer>
        <section className={styles.footerContainer}>
          <article className={styles.footerLogo}>
            <div className={styles.footerTitle}>
              <div className={styles.headerTitle}>
                <img src={Logo} alt="Logo" />
                <h1>Maria Eduarda</h1>
              </div>
              <h2>mariaeduarda.nicacio2007@gmail.com</h2>
            </div>
            <p>Web designer and front-end developer</p>
          </article>
          <article className={styles.media}>
            <h1>Media</h1>
            <div className={styles.iconsMedia}>
              <img src={Github} alt="" />
              <img src={Figma} alt="" />
              <img src={Discord} alt="" />
            </div>
          </article>
        </section>
        <div className={styles.footerCopyRight}>
          <p>© Copyright 2022. Made by Maria Eduarda</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
