import './App.css';

function App() {
  return (
    <div className="App">
    <section className="bienvenida">
    <div className="container">
    <h1>Historias de<br/><span className="bigger">Sampo</span></h1>

    </div>
        </section>

        <section className="historias">
        <div className="container indice">
            <h2>Índice</h2>
            <ul>
            <li><p><span className="blue">·</span>  <a href="#juicio">El Juicio de las Máquinas</a></p><div className="dotted-line"></div><p>#</p></li>

              <li><p><span className="blue">·</span> <a href="https://historiasdesampo.github.io/la-travesia">La Travesía</a></p><div className="dotted-line"></div><p>&</p></li>
              <li><p><span className="blue">·</span> <a href="#templo">El Templo de la Eternidad</a></p><div className="dotted-line"></div><p>?</p></li>
            </ul>
        </div>

        </section>
    </div>
  );
}

export default App;
