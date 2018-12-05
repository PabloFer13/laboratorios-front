import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AppContainer, LinkSpan } from './Layout.styled';
import { appActions } from '../../redux/actions';

const links = {
  admin: [
    {
      url: '/usuarios',
      display: 'usuarios'
    },
    {
      url: '/materias',
      display: 'materias'
    },
    {
      url: '/laboratorios',
      display: 'laboratorios'
    },
    {
      url: '/admin',
      display: 'admin'
    }
  ],
  encargado: [
    {
      url: '/solicitudes',
      display: 'solicitudes'
    }
  ]
};
class Layout extends Component {
  constructor(props) {
    super(props);
    this.renderUserLinks = this.renderUserLinks.bind(this);
  }

  renderUserLinks() {
    const { userType = 'admin' } = this.props;
    const userLinks = [];
    if (userType === 'Encargado' || userType === 'Administrador') {
      links.encargado.reduce((acc, item) => {
        acc.push(
          <li className="nav-item" key={`encargado-link-${item.url}`}>
            <Link className="nav-link" to={item.url}>
              <LinkSpan>{item.display}</LinkSpan>
            </Link>
          </li>
        );
        return acc;
      }, userLinks);
    }

    return userLinks;
  }

  render() {
    const { children, logOut } = this.props;
    return (
      <AppContainer className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex">
          <Link className="navbar-brand" to="/">
            Universidad del Caribe
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              {this.renderUserLinks()}
              <li className="nav-item">
                <Link className="nav-link" to="/reservas">
                  Reservas
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Horarios
                </Link>
              </li>
              {/* {this.renderUserLinks()} */}
              <li className="nav-item">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={logOut}
                >
                  Cerrar Session
                </button>
              </li>
            </ul>
          </div>
        </nav>
        <div>{children}</div>
      </AppContainer>
    );
  }
}

const mapStateToProps = state => {
  const {
    user: {
      userType: { type }
    }
  } = state;
  return { userType: type };
};

const mapDispatchToProps = dispatch => {
  const { logOut } = appActions;
  return bindActionCreators({ logOut }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
