import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtName: "",
      txtPassword: "",
      txtDesc: "",
      sltGender: 0,
      rdLang: "en",
      chkbStatus: true,
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onHandleChange(event) {
    var target = event.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onHandleSubmit(event) {
    event.preventDefault();
    console.log("quang", this.state);
  }

  render() {
    return (
      <div className="container mt-30">
        <div className="row">
          <div className="col-6 col-md-8 col-md-offset-2">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Form</h3>
              </div>
              <div className="panel-body">
                <form onSubmit={this.onHandleSubmit}>
                  <div className="form-group">
                    <label>Username:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="txtName"
                      onChange={this.onHandleChange}
                      value={this.state.txtName}
                    />
                  </div>

                  <div className="form-group">
                    <label>password:</label>
                    <input
                      type="password"
                      className="form-control"
                      name="txtPassword"
                      onChange={this.onHandleChange}
                      value={this.state.txtPassword}
                    />
                  </div>

                  <div className="form-group">
                    <label>mota:</label>
                    <textarea
                      className="form-control"
                      name="txtDesc"
                      value={this.state.txtDesc}
                      onChange={this.onHandleChange}
                    ></textarea>
                  </div>

                  <label>Gioi tinh:</label>
                  <select
                    className="form-control"
                    name="sltGender"
                    onChange={this.onHandleChange}
                    value={this.state.sltGender}
                  >
                    <option value={0}>Nu</option>
                    <option value={1}>Nam</option>
                  </select>
                  <label>Ngon ngu</label>
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        name="rdLang"
                        value="vi"
                        onChange={this.onHandleChange}
                        checked={this.state.rdLang === "vi"}
                      />
                      Tieng viet
                    </label>
                    <br />
                    <label>
                      <input
                        type="radio"
                        name="rdLang"
                        value="en"
                        onChange={this.onHandleChange}
                        checked={this.state.rdLang === "en"}
                      />
                      Tieng anh
                    </label>
                  </div>

                  <div className="checkbox">
                    <label>
                      <input
                        type="checkbox"
                        name="chkbStatus"
                        value={true}
                        onChange={this.onHandleChange}
                        checked={this.state.chkbStatus === true}
                      />
                      Trang thai
                    </label>
                  </div>

                  <button type="submit" className="btn btn-primary mr-20">
                    Luu lai
                  </button>
                  <button type="reset" className="btn btn-default">
                    Xoa trang
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
