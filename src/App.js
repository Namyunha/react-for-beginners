import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hello">
          <h1>Hello</h1>
        </Route>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/hello" element={<h1>Hello</h1>}></Route>
//         <Route path="/movie" element={<Detail />}></Route>
//         <Route path="/" element={<Home />}></Route>
//       </Routes>
//     </Router>
//   );
// }

export default App;
