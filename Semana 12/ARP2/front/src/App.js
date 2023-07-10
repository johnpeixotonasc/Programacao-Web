import './index.css'; // Importa o arquivo de estilo CSS
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Importa as funcionalidades de roteamento do React
import { Container, Navbar, Nav } from 'react-bootstrap'; // Importa os componentes do pacote react-bootstrap
import Home from './pages/Home'; // Importa o componente Home
import Cadastro from './pages/Cadastro'; // Importa o componente Cadastro
import Listar from './pages/Listar'; // Importa o componente Listar
import Agenda from './pages/Agenda'; // Importa o componente Agenda



function App() {
  return (
    <div className="ARP2"> {/* Início do componente App */}
      <Router> {/* Início do componente de roteamento */}
        <Navbar bg="dark" variant="dark" expand="lg"> {/* Barra de navegação */}
          <Container> {/* Container para agrupar os elementos */}
            <Navbar.Brand href="/">Home</Navbar.Brand> {/* Link para a página Home */}
            <Navbar.Collapse id="basic-navbar-nav"> {/* Colapso da barra de navegação em telas menores */}
              <Nav className="me-auto"> {/* Itens da barra de navegação */}
                <Nav.Link as={Link} to="/Cadastro">Cadastro</Nav.Link> {/* Link para a página Cadastro */}
                <Nav.Link as={Link} to="/Listar">Listar</Nav.Link> {/* Link para a página Listar */}
                <Nav.Link as={Link} to="/Agenda">Agenda</Nav.Link> {/* Link para a página Agenda */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className="mt-4"> {/* Container para o conteúdo da página */}
          <Routes> {/* Rotas da aplicação */}
            <Route exact path="/" element={<Home />} /> {/* Rota para a página Home */}
            <Route path="/Cadastro" element={<Cadastro />} /> {/* Rota para a página Cadastro */}
            <Route path="/Listar" element={<Listar />} /> {/* Rota para a página Listar */}
            <Route path="/Agenda" element={<Agenda />} /> {/* Rota para a página Agenda */}
          </Routes>
        </Container>
      </Router> {/* Fim do componente de roteamento */}
    </div> );};
  {};
;

export default App; // Exporta o componente App como padrão
