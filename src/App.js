import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      trips: []
    };
  }

  componentDidMount() {
    axios.get('/api/trip')
      .then(res => {
        this.setState({ trips: res.data });
        console.log(this.state.trips);
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              TRIPS
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Trip</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Country</th>
                  <th>City</th>
                  <th>Comments</th>
                </tr>
              </thead>
              <tbody>
                {this.state.trips.map(trip =>
                  <tr>
                    <td><Link to={`/show/${trip._id}`}>{trip.country}</Link></td>
                    <td>{trip.city}</td>
                    <td>{trip.comments}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
