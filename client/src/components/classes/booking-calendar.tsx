import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Class, insertBookingSchema } from "@shared/schema";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { format, addDays, isAfter, isBefore, addMinutes, startOfDay } from "date-fns";
import { Loader2 } from "lucide-react";

interface BookingCalendarProps {
  selectedClass: Class;
}

export function BookingCalendar({ selectedClass }: BookingCalendarProps) {
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(addDays(new Date(), 1));
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  
  // Generate time slots for the selected date
  const timeSlots = generateTimeSlots(selectedDate);
  
  const bookMutation = useMutation({
    mutationFn: async (bookingData: { classId: number, date: Date }) => {
      const res = await apiRequest("POST", "/api/bookings", bookingData);
      return await res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/bookings"] });
      toast({
        title: "Booking successful",
        description: "Your class has been booked successfully!",
      });
      // Reset selected time
      setSelectedTime(null);
    },
    onError: (error: Error) => {
      toast({
        title: "Booking failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
  
  const handleConfirmBooking = () => {
    if (!selectedDate || !selectedTime) {
      toast({
        title: "Booking error",
        description: "Please select both a date and time",
        variant: "destructive",
      });
      return;
    }
    
    // Combine date and time
    const [hours, minutes] = selectedTime.split(":").map(Number);
    const bookingDateTime = new Date(selectedDate);
    bookingDateTime.setHours(hours, minutes, 0, 0);
    
    bookMutation.mutate({
      classId: selectedClass.id,
      date: bookingDateTime
    });
  };
  
  const formatPrice = (price: number) => {
    return `$${(price / 100).toFixed(2)}`;
  };

  return (
    <div className="mt-20 bg-white rounded-xl shadow-xl p-6 md:p-8 lg:p-10">
      <h3 className="text-2xl font-playfair font-bold text-center mb-8">Book Your Next Class</h3>
      
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/3 mb-8 lg:mb-0 lg:pr-8">
          <div className="flex justify-center mb-6">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
              disabled={(date) => isBefore(date, startOfDay(new Date())) || isAfter(date, addDays(new Date(), 60))}
            />
          </div>
          
          {selectedDate && (
            <div className="mt-6">
              <h5 className="font-playfair font-semibold mb-3">
                Available Times for {format(selectedDate, "MMMM d, yyyy")}
              </h5>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {timeSlots.map((time, index) => (
                  <div
                    key={index}
                    className={`text-center py-2 rounded cursor-pointer transition duration-300 ${
                      selectedTime === time
                        ? "bg-teal text-white"
                        : "bg-teal-light text-teal hover:bg-teal hover:text-white"
                    }`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {formatTimeDisplay(time)}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="lg:w-1/3 bg-gray-50 p-5 rounded-lg">
          <h5 className="font-playfair font-semibold text-lg mb-4">Booking Summary</h5>
          
          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-600">Class:</span>
              <span className="font-medium">{selectedClass.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Date:</span>
              <span className="font-medium">
                {selectedDate ? format(selectedDate, "MMMM d, yyyy") : "Select a date"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Time:</span>
              <span className="font-medium">
                {selectedTime ? formatTimeDisplay(selectedTime) : "Select a time"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Duration:</span>
              <span className="font-medium">{selectedClass.duration} minutes</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Price:</span>
              <span className="font-medium">{formatPrice(selectedClass.price)}</span>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-4 mb-6">
            <div className="flex justify-between text-lg font-semibold">
              <span>Total:</span>
              <span>{formatPrice(selectedClass.price)}</span>
            </div>
          </div>
          
          <Button 
            onClick={handleConfirmBooking}
            disabled={!selectedDate || !selectedTime || bookMutation.isPending}
            className="w-full bg-teal text-white font-medium py-3 rounded-md hover:bg-opacity-90 transition duration-300 mb-4"
          >
            {bookMutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing
              </>
            ) : (
              "Confirm Booking"
            )}
          </Button>
          
          <p className="text-sm text-gray-500 mt-4 text-center">
            You'll receive a confirmation email with details and calendar invite.
          </p>
        </div>
      </div>
    </div>
  );
}

// Helper functions
function generateTimeSlots(date?: Date): string[] {
  if (!date) return [];
  
  const slots = [];
  const startTime = 9; // 9 AM
  const endTime = 20; // 8 PM
  
  for (let hour = startTime; hour < endTime; hour++) {
    slots.push(`${hour}:00`);
    slots.push(`${hour}:30`);
  }
  
  // Add a random selection of unavailable slots
  const availableSlots = [...slots];
  const numberOfUnavailableSlots = Math.floor(Math.random() * 4) + 2; // 2-5 unavailable slots
  
  for (let i = 0; i < numberOfUnavailableSlots; i++) {
    const randomIndex = Math.floor(Math.random() * availableSlots.length);
    availableSlots.splice(randomIndex, 1);
  }
  
  return availableSlots;
}

function formatTimeDisplay(time: string): string {
  const [hours, minutes] = time.split(":").map(Number);
  const period = hours < 12 ? "AM" : "PM";
  const displayHours = hours % 12 || 12;
  return `${displayHours}:${minutes.toString().padStart(2, "0")} ${period}`;
}
