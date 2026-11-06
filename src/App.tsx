import img from "../public/image copy 2.png";
import img0 from "../public/image.png";
import img1 from "../public/image copy.png";
import img3 from "../public/image copy 3.png";
import img4 from "../public/image copy 4.png";
import img5 from "../public/image copy 5.png";
import img6 from "../public/image copy 6.png";
import img7 from "../public/image copy 7.png";
import img8 from "../public/image copy 8.png";
import img9 from "../public/image copy 9.png";

function App() {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <img src={img0} alt="" className="logo" />
          <div className="menu">
            <p className="active">Início</p>
            <p>Sobre</p>
            <p>Serviços</p>
            <p>Depoimentos</p>
            <p>Contato</p>
          </div>
        </nav>
      </header>

      <section className="section">
        <div className="textSection">
          <h1>
            Saúde natural para
            <br />
            os seus cabelos
          </h1>
          <p>
            Um salão exclusivo em São Paulo,
            <br />
            especializado em tratamentos naturais.
          </p>
          <button>Agendar um horário</button>
        </div>
        <img src={img1} alt="Beaty" className="imageSection" />
      </section>

      <section className="section2">
        <div>
          <img src={img} alt="" className="imageSection2" />
          <div className="textSection2">
            <h2>Sobre nós</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse sagittis arcu <br /> quis nisi luctus, id accumsan
              felis tristique. Proin quis bibendum diam. Sed <br /> consequat
              nisl laoreet eros ultricies pellentesque. Nullam in est porta,{" "}
              <br /> pellentesque massa vitae, vehicula risus. <br />
              <br />
              In placerat, felis vitae sodales dictum, lacus quam pretium mi, ut
              pretium urna <br /> turpis eu dui. Vestibulum id ullamcorper nibh.
              Donec luctus, nunc finibus <br /> elementum suscipit, tortor augue
              vulputate sapien, vitae feugiat enim augue sed. <br />
              <br />
              Quisque id aliquam elit. Suspendisse congue pharetra maximus. Duis
              rutrum velit a <br /> leo euismod dictum. Sed sodales est
              efficitur arcu tincidunt tincidunt. Curabitur <br /> fringilla,
              risus at feugiat feugiat, nisl nulla tincidunt tellus, elementum{" "}
              <br /> elementum lorem nisl eleifend dolor. Nullam eget dui at sem
              ullamcorper luctus.
            </p>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="servicesContainer">
          <h2 className="servicesTitle">Serviços</h2>

          <p className="servicesDescription">
            Com mais de 10 anos no mercado, o Beautysalon já <br />
            conquistou clientes de inúmeros países com seus tratamentos <br />{" "}
            exclusivos e totalmente naturais
          </p>

          <div className="servicesCards">
            <div className="serviceCard">
              <img src={img3} alt="" className="foto" />
              <h3 className="serviceName">Terapia capilar</h3>
              <p className="serviceText">
                Terapia completa para couro <br /> cabeludo e fios, protegendo
                todos <br /> os tipos de cabelos, inclusive os <br /> longos e
                finos.
              </p>
            </div>

            <div className="serviceCard">
              <img src= {img4} alt="" className="foto" />
              <h3 className="serviceName">Cortes</h3>
              <p className="serviceText">
                Terapia completa para couro <br /> cabeludo e fios, protegendo
                todos <br /> os tipos de cabelos, inclusive os <br /> longos e
                finos.
              </p>
            </div>

            <div className="serviceCard">
              <img src={img5} alt="" className="foto" />
              <h3 className="serviceName">Tratamentos</h3>
              <p className="serviceText">
                Terapia completa para couro <br /> cabeludo e fios, protegendo
                todos <br /> os tipos de cabelos, inclusive os <br /> longos e
                finos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section4">
        <div className="divSection4">
          <h2>
            Depoimentos de quem já <br /> passou por aqui
          </h2>
          <div className="Cards">
            <p>
              Eu sou cliente do Beautysalon há 5 anos e não troco <br /> por
              nada! Certamente meu cabelo mudou muito depois <br /> que comecei
              a tratar somente com produtos naturais e <br /> veganos. São
              profissionais incríveis e qualificados.
            </p>
            <img src={img6} alt="" className="avatar" />
            <h4>Wanessa Souza</h4>
          </div>

          <div className="Cards">
            <p>
              Eu sou cliente do Beautysalon há 5 anos e não troco <br /> por
              nada! Certamente meu cabelo mudou muito depois <br /> que comecei
              a tratar somente com produtos naturais e <br /> veganos. São
              profissionais incríveis e qualificados.
            </p>
            <img src={img7} alt="" className="avatar" />
            <h4>Luna Falcão</h4>
          </div>
        </div>
      </section>

      <section className="section5">
        <div className="div5">
          <h2>
            Entre em contato <br /> com a gente!
          </h2>
          <p>
            Entre em contato com a Beautysalon, <br /> queremos tirar suas{" "}
            <br /> dúvidas, ouvir suas críticas e sugestões.
          </p>
          <button className="contactBtn">☎ Entrar em contato</button>
        </div>
        <div className="contactInfo">
          <div className="contactItem">
            <p>11 99845-6754</p>
          </div>

          <div className="contactItem">
            <p>R. Amauri Souza, 346</p>
          </div>

          <div className="contactItem">
            <p>contato@beautysalon.com</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <img src={img8} alt="" className="logoFooter" />
        <p>©2021 Beautysalon.</p>
        <p>Todos os direitos reservados.</p>
        <img src={img9} alt="" className="socialIcons" />
      </footer>
    </>
  );
}

export default App;