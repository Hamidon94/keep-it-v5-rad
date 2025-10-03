import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Search from "./pages/Search";
import BecomeSitter from "./pages/BecomeSitter";
import Services from "./pages/services/Services";
import DogWalking from "./pages/services/DogWalking";
import Boarding from "./pages/services/Boarding";
import HouseSitting from "./pages/services/HouseSitting";
import DropInVisits from "./pages/services/DropInVisits";
import DoggyDaycare from "./pages/services/DoggyDaycare";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Safety from "./pages/Safety";
import Help from "./pages/Help";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import SitterProfile from "./pages/SitterProfile";
import Booking from "./pages/Booking";
import SitterOnboarding from "./pages/SitterOnboarding";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import Careers from "./pages/Careers";
import WalkTracking from "./pages/WalkTracking";
import Blog from "./pages/Blog";
import Pricing from "./pages/Pricing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/search" element={<Search />} />
          <Route path="/become-sitter" element={<BecomeSitter />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/dog-walking" element={<DogWalking />} />
          <Route path="/services/boarding" element={<Boarding />} />
          <Route path="/services/house-sitting" element={<HouseSitting />} />
          <Route path="/services/drop-in-visits" element={<DropInVisits />} />
          <Route path="/services/doggy-daycare" element={<DoggyDaycare />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sitter/:id" element={<SitterProfile />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/sitter-onboarding" element={<SitterOnboarding />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/walk-tracking/:bookingId" element={<WalkTracking />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/priority" element={<Pricing />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/help" element={<Help />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
