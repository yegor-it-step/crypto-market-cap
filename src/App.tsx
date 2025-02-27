import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { CoinTableComponent } from "./components/coin-table/coin-table.component";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CoinTableComponent />
    </QueryClientProvider>
  );
}

export default App;
