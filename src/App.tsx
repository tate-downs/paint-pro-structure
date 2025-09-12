import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import GetEstimate from "./pages/GetEstimate";
import ResidentialPainting from "./pages/ResidentialPainting";
import InteriorPainting from "./pages/InteriorPainting";
import ExteriorPainting from "./pages/ExteriorPainting";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/get-estimate" element={<GetEstimate />} />
            <Route path="/residential-painting" element={<ResidentialPainting />} />
            <Route path="/interior-painting" element={<InteriorPainting />} />
            <Route path="/exterior-painting" element={<ExteriorPainting />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
