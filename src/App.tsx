import { BrowserRouter as Router } from "react-router-dom";
import { registerServiceWorker } from "./utils/registerServiceWorker";
import { Layout } from "./Layout";

const App = () => {
  registerServiceWorker();

  return (
    <Router basename="/">
      <Layout />
    </Router>
  );
}

export default App;