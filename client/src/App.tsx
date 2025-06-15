import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/hooks/use-auth";

import HomePage from "@/pages/home-page";
import AboutPage from "@/pages/about-page";
import ClassesPage from "@/pages/classes-page";
import ContactPage from "@/pages/contact-page";
import CalendarPage from "@/pages/calendar-page";
import PrivacyPolicyPage from "@/pages/privacy-policy-page";
import NotFound from "@/pages/not-found";
import Header from "@/components/navigation/header";
import Footer from "@/components/navigation/footer";

function Router() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/classes" component={ClassesPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/calendar" component={CalendarPage} />
        <Route path="/privacy-policy" component={PrivacyPolicyPage} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
