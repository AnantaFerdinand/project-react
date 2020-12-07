function App2(){
    return (
      <Router>
        <p>Covid Tracker</p>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/Global">Global</Link>
              </li>
              <li>
                <Link to="/Indonesia">Indonesia</Link>
              </li>
              <li>
                <Link to="/PerProvinsi">Per Provinsi</Link>
              </li>
            </ul>
          </nav>
  
          <Switch>
            <Route path="/Global">
              <Global />
            </Route>
            <Route path="/Indonesia">
              <Indonesia />
            </Route>
            <Route path="/PerProvinsi">
              <PerProvinsi />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
  export default App;