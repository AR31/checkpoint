import React from "react";
import "./App.css";

function App() {
  return (
    <div class="container">
      <div class="row">
        <form>
          <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label">
              Email
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="staticEmail"
                value="email@example.com"
              ></input>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-4">
              <label for="staticEmail" class="col-form-label">
                password
              </label>
            </div>
            <div class="col-8">
              <input
                type="password"
                readonly
                class="form-control-plaintext"
                id="password"
              ></input>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
