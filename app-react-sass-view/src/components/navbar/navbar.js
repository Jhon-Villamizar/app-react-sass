import React from 'react';

const Nav = () => {
  return (
    <div>
      {/**Navigation */}
      <nav className="navbar-expand-lg navbar navbar-dark bg-dark mb-5">
        <div className="navbar-brand"><img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" width="30px" alt="" /></div>
        <div className="navbar-brand"><img src="https://jaystack.com/wp-content/uploads/2015/12/nodejs-logo-e1497443346889.png" width="30px" alt=""/></div>
        <div className="navbar-brand"><img src="https://user-images.githubusercontent.com/2327532/39481401-fa7d2992-4d30-11e8-886d-c4a3ee88147f.png" width="30px" alt=""/></div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <div className="nav-link" >Home <span className="sr-only">(current)</span></div>
            </li>
            <li className="nav-item">
              <div className="nav-link" >Features</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" >Pricing</div>
            </li>
            <li className="nav-item dropdown">
              <div className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown link
              </div>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <div className="dropdown-item">Action</div>
                <div className="dropdown-item">Another action</div>
                <div className="dropdown-item">Something else here</div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;