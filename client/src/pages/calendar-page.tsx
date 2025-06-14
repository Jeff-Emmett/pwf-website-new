import { useEffect } from "react";

export default function CalendarPage() {
  useEffect(() => {
    // Set meta data for SEO
    document.title = "Pilates with Fadia | Class Schedule & Booking";
    
    // Redirect to Momoyoga after component mounts
    window.location.href = "https://www.momoyoga.com/pilates-with-fadia/schedule";
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <h1 className="text-3xl font-playfair font-semibold text-gray-800 mb-4">
          Redirecting to Class Schedule...
        </h1>
        <p className="text-gray-600 mb-6">
          You're being redirected to our class booking system. If you are not redirected automatically, 
          please click the button below.
        </p>
        <a 
          href="https://www.momoyoga.com/pilates-with-fadia/schedule"
          className="bg-teal text-white font-bold py-3 px-8 rounded-md hover:bg-teal-dark transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Class Schedule
        </a>
      </div>
    </main>
  );
}