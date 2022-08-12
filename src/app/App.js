import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super();
    this.state = {
      id: '',
      email: '',
      password: '',
      full_name: '',
      contry: '',
      phone: '',
      costomers: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  async addTask(e) {
    e.preventDefault();
    if (this.state.id) {
      await fetch(`/costomers/${this.state.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
          full_name: this.state.full_name,
          contry: this.state.contry,
          phone: this.state.phone,


        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          window.M.toast({ html: 'Task Updated' });
          this.setState({ id: '', email: '', full_name: '', password: '', contry: '', phone: '' });
          this.fetchTasks();
        })
        .catch(err => console.error(err));
    } else {
      fetch('/costomers', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          window.M.toast({ html: 'Task Saved' });
          this.setState({ email: '', full_name: '' });
          this.fetchTasks();
        })
        .catch(err => console.error(err));
    }

  }

  deleteTask(id) {
    if (confirm('Are you sure you want to delete it?')) {
      fetch(`/costomers/${id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          M.toast({ html: 'Task deleted' });
          this.fetchTasks();
        })
        .catch(err => console.error(err));
    }
  }

  editTask(id) {
    fetch(`/costomers/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          email: data.email,
          full_name: data.full_name,
          id: data.id
        });
      });
  }

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks() {
    fetch('/costomers')
      .then(res => res.json())
      .then(data => {
        this.setState({ costomers: data });
        console.log(this.state.costomers);
      });
  }

  render() {
    return (
      <div>
        {/* NAVIGATION */}
        <nav className="light-blue darken-4">
          <div className="container">
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">MERN Stack</a>
            </div>
          </div>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col s5">
              <div className="card">
                <div className="card-content">
                  <form onSubmit={this.addTask}>
                    <div className="row">
                      <div className="input-field col s12">
                        <input name="id" onChange={this.handleChange} value={this.state.id} type="text" placeholder="id" autoFocus />
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input name="email" onChange={this.handleChange} value={this.state.email} type="text" placeholder="email" autoFocus />
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <textarea name="full_name" onChange={this.handleChange} value={this.state.full_name} cols="30" rows="10" placeholder="full name" className="materialize-textarea"></textarea>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input name="password" onChange={this.handleChange} value={this.state.password} cols="30" rows="10" placeholder="Password name" className="materialize-textarea"></input>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input name="phone" onChange={this.handleChange} value={this.state.phone} cols="30" rows="10" type="text" placeholder="phone " className="materialize-textarea"></input>
                      </div>
                    </div>
                    contry
                    <div className="row">
                      <div className="input-field col s12">
                        <input name="contry" onChange={this.handleChange} value={this.state.contry} cols="30" rows="10" type="text" placeholder="contry " className="materialize-textarea"></input>
                      </div>
                    </div>

                    <button type="submit" className="btn light-blue darken-4">
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col s7">
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.costomers.map(costomers => {
                      return (
                        <tr key={costomers.id}>
                          <td>{costomers.email}</td>
                          <td>{costomers.full_name}</td>
                          <td>
                            <button onClick={() => this.deleteTask(costomers.id)} className="btn light-blue darken-4">
                              <i className="material-icons">delete</i>
                            </button>
                            <button onClick={() => this.editTask(costomers.id)} className="btn light-blue darken-4" style={{ margin: '4px' }}>
                              <i className="material-icons">edit</i>
                            </button>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default App;
