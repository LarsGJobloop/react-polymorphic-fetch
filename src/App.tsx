import './App.css'
import { BasicFetch } from './components/BasicFetch/BasicFetch'
import { LinkExternal } from './components/LinkExternal/LinkExternal'

function App() {
  return (
    <div className='App'>
      <header className='Navbar glass-frosted'>
        <h1>Polymorphic Fetch</h1>

        <nav>
          <ul>
            <li>
              <a href="#top">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className='Main'>

        <section id='introduction top' className='section'>
          <header>
            <h2>Introduction</h2>
          </header>

          <section className='section-content'>
            <h3>
              Introduce the problem
            </h3>
            <h3>
              Show an example
            </h3>
            <h3>
              Introduce the solution
            </h3>
          </section>

          <footer>
            <nav>
              <h3>References</h3>
              <ul>
                <li>
                  <LinkExternal
                    href='https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API'
                  >
                    Fetch Documentation
                  </LinkExternal>
                </li>
              </ul>
            </nav>
          </footer>
        </section>

        <section id='basic-fetch top' className='section'>
          <header>
            <h2>Basic Fetch</h2>
          </header>

          <section className='section-content'>
            <h3>
              Introduce the problem
            </h3>
            <h3>
              Show an example
            </h3>
            <BasicFetch />
          </section>

          <footer>
            <nav>
              <h3>References</h3>
              <ul>
                <li>
                  <LinkExternal
                    href='https://excalidraw.com/#json=85tTe2gxJuxieZZQk4rsM,oqQcfydbU_C34EoP5GlbYA'
                  >
                    Fetch API error paths
                  </LinkExternal>
                </li>
                <li>
                  <LinkExternal
                    href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status'
                  >
                    HTTP Status Codes
                  </LinkExternal>
                </li>
              </ul>
            </nav>
          </footer>
        </section>

      </main>

      <footer id='about' className='About glass-smoked'>
        <h2>&copy; Lars Gunnar</h2>
      </footer>
    </div>
  )
}

export default App
