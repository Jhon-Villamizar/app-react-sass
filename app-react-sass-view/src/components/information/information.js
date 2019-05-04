import React from 'react';
import './information.css';
import Get from '../../services/getSpaces'

function Information() {
    return (
        <div>
            <div className="col-5">
                <form className="form">
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className="col-2">
                <p>{{Get}}</p>
            </div>
            <div className="col-2">

            </div>
            <div className="col-2">

            </div>
        </div>
    );
}

export default Information;