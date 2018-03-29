import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      country: '',
      city: '',
      comments: '',
      travel_year: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { country, city, comments, travel_year } = this.state;

    axios.post('/api/trip', { country, city, comments, travel_year })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { country, city, comments, travel_year } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              ADD TRIP
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Trip List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="country">COUNTRY:</label>
                <input type="text" class="form-control" name="country" value={country} onChange={this.onChange} placeholder="COUNTRY" />
              </div>
              <div class="form-group">
                <label for="city">City:</label>
                <input type="text" class="form-control" name="city" value={city} onChange={this.onChange} placeholder="City" />
              </div>
              <div class="form-group">
                <label for="comments">Comments:</label>
                <textArea class="form-control" name="comments" onChange={this.onChange} placeholder="Comments" cols="80" rows="3">{comments}</textArea>
              </div>
              <div class="form-group">
                <label for="travel_year">Published Date:</label>
                <input type="number" class="form-control" name="travel_year" value={travel_year} onChange={this.onChange} placeholder="Travel Year" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
