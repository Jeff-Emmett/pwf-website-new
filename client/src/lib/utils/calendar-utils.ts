import { 
  addDays, 
  startOfDay, 
  endOfDay, 
  format, 
  isBefore, 
  isAfter, 
  isEqual, 
  addMonths,
  setHours,
  setMinutes,
  parseISO,
  formatISO,
  getHours,
  getMinutes
} from "date-fns";
import { BUSINESS_HOURS } from "../constants";

/**
 * Formats a date to display in the calendar
 */
export function formatCalendarDate(date: Date): string {
  return format(date, "MMMM d, yyyy");
}

/**
 * Formats a date for API requests (ISO format)
 */
export function formatDateForApi(date: Date): string {
  return formatISO(date);
}

/**
 * Parses a date string from API response
 */
export function parseDateFromApi(dateString: string): Date {
  return parseISO(dateString);
}

/**
 * Formats a time value for display (e.g., "9:00 AM")
 */
export function formatTimeDisplay(time: string): string {
  const [hours, minutes] = time.split(":").map(Number);
  const period = hours < 12 ? "AM" : "PM";
  const displayHours = hours % 12 || 12;
  return `${displayHours}:${minutes.toString().padStart(2, "0")} ${period}`;
}

/**
 * Combines a date and time string into a Date object
 */
export function combineDateAndTime(date: Date, timeString: string): Date {
  const [hours, minutes] = timeString.split(":").map(Number);
  const result = new Date(date);
  result.setHours(hours, minutes, 0, 0);
  return result;
}

/**
 * Checks if a date is in the past
 */
export function isPastDate(date: Date): boolean {
  return isBefore(date, startOfDay(new Date()));
}

/**
 * Checks if a date is valid for booking (not in the past and within the booking window)
 */
export function isValidBookingDate(date: Date, maxDaysAhead: number = 60): boolean {
  const now = new Date();
  const maxDate = addDays(now, maxDaysAhead);
  
  return (
    !isBefore(date, startOfDay(now)) && 
    !isAfter(date, endOfDay(maxDate))
  );
}

/**
 * Generates available time slots for a given date
 * In a real app, this would check against existing bookings
 */
export function generateTimeSlots(
  date?: Date, 
  durationMinutes: number = 60, 
  unavailableSlots: string[] = []
): string[] {
  if (!date) return [];
  
  const slots: string[] = [];
  const { start, end } = BUSINESS_HOURS;
  
  // Generate time slots in 30-minute increments
  for (let hour = start; hour < end; hour++) {
    for (let minute of [0, 30]) {
      // Skip generating slot if it would end after business hours
      if (hour === end - 1 && minute + durationMinutes > 60) continue;
      
      const timeString = `${hour}:${minute === 0 ? '00' : minute}`;
      
      // Check if the slot is available
      if (!unavailableSlots.includes(timeString)) {
        slots.push(timeString);
      }
    }
  }
  
  return slots;
}

/**
 * Randomly blocks out some time slots to simulate unavailability
 */
export function simulateUnavailableSlots(allSlots: string[], count: number = 3): string[] {
  if (count >= allSlots.length) return [];
  
  const unavailableSlots: string[] = [];
  const slots = [...allSlots];
  
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * slots.length);
    unavailableSlots.push(slots[randomIndex]);
    slots.splice(randomIndex, 1);
  }
  
  return unavailableSlots;
}

/**
 * Creates a booking time range string (e.g., "9:00 AM - 10:00 AM")
 */
export function createBookingTimeRange(startTime: string, durationMinutes: number): string {
  const [hours, minutes] = startTime.split(":").map(Number);
  const startDate = new Date();
  startDate.setHours(hours, minutes, 0, 0);
  
  const endDate = new Date(startDate);
  endDate.setMinutes(endDate.getMinutes() + durationMinutes);
  
  return `${format(startDate, "h:mm a")} - ${format(endDate, "h:mm a")}`;
}

/**
 * Formats duration in minutes for display (e.g., "60 minutes")
 */
export function formatDuration(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} minutes`;
  } else if (minutes === 60) {
    return "1 hour";
  } else {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    
    if (remainingMinutes === 0) {
      return `${hours} hour${hours > 1 ? 's' : ''}`;
    } else {
      return `${hours} hour${hours > 1 ? 's' : ''} ${remainingMinutes} minute${remainingMinutes > 1 ? 's' : ''}`;
    }
  }
}

/**
 * Returns disabled date predicate for the calendar component
 */
export function getDisabledDatePredicate(maxDaysAhead: number = 60): (date: Date) => boolean {
  return (date: Date) => {
    const today = startOfDay(new Date());
    const maxDate = addDays(today, maxDaysAhead);
    return isBefore(date, today) || isAfter(date, maxDate);
  };
}
