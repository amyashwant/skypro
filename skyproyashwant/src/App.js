import "./App.css";
import Layout from "./layout/Layout";
import ErrorBoundary from "./utils/ErrorBoundary";

function App() {
  return (
    <div>
      <ErrorBoundary>
        <Layout />
      </ErrorBoundary>
    </div>
  );
}

export default App;
