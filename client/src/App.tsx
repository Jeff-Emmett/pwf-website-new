import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/hooks/use-auth";

import HomePage from "@/pages/home-page";
import AboutPage from "@/pages/about-page";
import ClassesPage from "@/pages/classes-page";
import CommunityPage from "@/pages/community-page";
import ContactPage from "@/pages/contact-page";
import AuthPage from "@/pages/auth-page";
import NotFound from "@/pages/not-found";
import { ProtectedRoute } from "./lib/protected-route";
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
        <ProtectedRoute path="/community" component={CommunityPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/auth" component={AuthPage} />
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
