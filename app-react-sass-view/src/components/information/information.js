import React from 'react';
import Get from '../../services/getSpaces'
import './information.css';

const spaces = Get();
console.log("spaces: ", spaces);

const Information = () => {
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
                    <div className="card-header">
                        Base
                    </div>
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
                    <div className="card-header">
                        Balcon
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Referencia</li>
                        <li className="list-group-item">Area mt2</li>
                        <li className="list-group-item">Valor mt2</li>
                        <li className="list-group-item">Valor Total</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Information;