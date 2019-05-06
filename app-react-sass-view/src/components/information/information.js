import React, { Component } from 'react';

class Information extends Component {
  constructor() {
    super();

    this.state = {
      base: [],
      balcon: []
    }
  }

  componentDidMount() {
    const urlbase = 'http://localhost:3001/api/base';
    const urlbalcon = 'http://localhost:3001/api/balcon';

    fetch(urlbase).then(function (response) {
      return response.json();
    }).then((function (base) {
      this.setState({ base });
      console.log('==>', this.state);

    }).bind(this));

    fetch(urlbalcon).then(function (response) {
      return response.json();
    }).then((function (balcon) {
      this.setState({ balcon });
      console.log('==>', this.state);

    }).bind(this));
  }

  render() {
    return (
      <div className="row">
        <div className="col-5">
          <form className="form">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Seleccionar el tipo</label>
              <select id="inputState" className="form-control">
                <option defaultValue>Base</option>
                <option>Balcon</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Seleccionar Referencia</label>
              <select id="inputState" className="form-control">
                <option defaultValue value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Agregar</button>
          </form>
        </div>
        <div className="col-2 card-titles">
          <div className="card titles">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Referencia</li>
              <li className="list-group-item">Area mt2</li>
              <li className="list-group-item">Valor mt2</li>
              <li className="list-group-item">Valor Total</li>
            </ul>
          </div>
        </div>
        <div className="col-2 card-titles">
          <div className="card">
            <div className="card-header">Base</div>
            {
              this.state.base.length ? (
                <ul className="list-group list-group-flush">
                  {
                    this.state.base.map(base => (
                      <React.Fragment key={base._id}>

                        <li className="list-group-item">{base.reference}</li>
                        <li className="list-group-item">{base.areamt2}</li>
                        <li className="list-group-item">{base.pricemt2}</li>
                        <li className="list-group-item">{base.totalprice}</li>
                      </React.Fragment>
                    ))
                  }
                </ul>
              ) : null
            }
          </div>
        </div>
        <div className="col-2 card-titles">
          <div className="card">
            <div className="card-header">Balcon</div>
            {
              this.state.balcon.length ? (
                <ul className="list-group list-group-flush">
                  {
                    this.state.balcon.map(balcon => (
                      <React.Fragment key={balcon._id}>
                        <li className="list-group-item">{balcon.reference}</li>
                        <li className="list-group-item">{balcon.areamt2}</li>
                        <li className="list-group-item">{balcon.pricemt2}</li>
                        <li className="list-group-item">{balcon.totalprice}</li>
                      </React.Fragment>
                    ))
                  }
                </ul>
              ): null
            }

          </div>
        </div>
      </div>
    );
  }
}

export default Information;