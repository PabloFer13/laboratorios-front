import React from 'react';
import { Container } from 'reactstrap';

const Login = () => (
  <div className='container-fluid'>
    <div className='d-flex'>
      <div className='row'>
        <div className='col-sm-12 col-4'>
          <div className='card'>
            <div className='card-header'>
              <h3>Log In</h3>
            </div>
            <div className='card-body'>
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Login