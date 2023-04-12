import AppProvider from "./providers/AppProvider";
import AppRoutes from "./router";

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
