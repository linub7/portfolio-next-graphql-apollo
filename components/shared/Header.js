import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';

const AppLink = ({ path, text, className }) => (
  <Link href={path} passHref>
    <Nav.Link className={className}>{text}</Nav.Link>
  </Link>
);

const Header = () => {
  const router = useRouter();
  return (
    <div className="navbar-wrapper">
      <Navbar expand="lg" className="navbar-dark fj-mw9">
        <Navbar.Brand className="mr-3 font-weight-bold">
          <Link href="/" passHref>
            <a className="text-white">M.Hadi</a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <AppLink
              path="/portfolios"
              text="Portfolios"
              className={`mr-3 ${
                router.pathname === '/portfolios' ? 'active' : ''
              }`}
            />

            <AppLink
              path={'/forum/categories'}
              text="Forum"
              className={`mr-3 ${
                router.pathname === '/forum/categories' ? 'active' : ''
              }`}
            />

            <AppLink
              path={'/cv'}
              text="CV"
              className={`mr-3 ${router.pathname === '/cv' ? 'active' : ''}`}
            />
          </Nav>
          <Nav className="ml-auto">
            <AppLink
              path={'/register'}
              text="Signup"
              className={`mr-3 ${
                router.pathname === '/register' ? 'active' : ''
              }`}
            />
            <AppLink
              path={'/login'}
              text="Signin"
              className={`mr-3 btn btn-success bg-green-2 bright ${
                router.pathname === '/login' ? 'active' : ''
              }`}
            />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
