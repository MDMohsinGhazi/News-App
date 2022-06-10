import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./Screens/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { ReactQueryDevtools } from "react-query/devtools";
import { Category } from "./Screens/category/Category";
import { World } from "./Screens/world/World";
import { Footer } from "./components/Footer/Footer";
import { SearchResult } from "./Screens/SearchResult/SearchResult";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="bg-LightGray">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="category/:category" element={<Category />} />
            <Route path="world" element={<World />} />
            <Route path="search" element={<SearchResult />} />
          </Routes>

          <Footer />
        </BrowserRouter>
        <ReactQueryDevtools position="bottom-right" initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
