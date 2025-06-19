import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/hooks/**/*.{js,jsx,ts,tsx}",
    "./src/lib/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    // Layout
    'container', 'flex', 'grid', 'block', 'inline-block', 'hidden',
    // Spacing
    'p-0', 'p-1', 'p-2', 'p-3', 'p-4', 'p-5', 'p-6', 'p-8', 'p-10', 'p-12', 'p-16', 'p-20',
    'px-0', 'px-1', 'px-2', 'px-3', 'px-4', 'px-5', 'px-6', 'px-8', 'px-10', 'px-12', 'px-16', 'px-20',
    'py-0', 'py-1', 'py-2', 'py-3', 'py-4', 'py-5', 'py-6', 'py-8', 'py-10', 'py-12', 'py-16', 'py-20',
    'm-0', 'm-1', 'm-2', 'm-3', 'm-4', 'm-5', 'm-6', 'm-8', 'm-10', 'm-12', 'm-16', 'm-20',
    'mx-auto', 'my-auto',
    // Colors
    'bg-white', 'bg-black', 'bg-gray-50', 'bg-gray-100', 'bg-gray-200', 'bg-gray-300',
    'text-white', 'text-black', 'text-gray-500', 'text-gray-600', 'text-gray-700', 'text-gray-800', 'text-gray-900',
    'bg-teal', 'bg-purple', 'bg-rose', 'text-teal', 'text-purple', 'text-rose',
    'bg-teal-light', 'bg-purple-light', 'bg-rose-light',
    'bg-opacity-20', 'bg-opacity-30', 'bg-opacity-90',
    'text-opacity-70', 'text-opacity-80', 'text-opacity-100',
    'border-opacity-20', 'border-opacity-30',
    // Typography
    'text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl',
    'font-normal', 'font-medium', 'font-semibold', 'font-bold',
    'text-left', 'text-center', 'text-right',
    'font-playfair', 'font-raleway', 'font-aref', 'font-cairo',
    // Flexbox
    'flex-row', 'flex-col', 'items-start', 'items-center', 'items-end', 'items-stretch',
    'justify-start', 'justify-center', 'justify-end', 'justify-between', 'justify-around',
    'gap-1', 'gap-2', 'gap-3', 'gap-4', 'gap-5', 'gap-6', 'gap-8', 'gap-10', 'gap-12',
    // Grid
    'grid-cols-1', 'grid-cols-2', 'grid-cols-3', 'grid-cols-4',
    // Width/Height
    'w-full', 'w-auto', 'w-1/2', 'w-1/3', 'w-2/3', 'w-1/4', 'w-3/4',
    'h-full', 'h-auto', 'h-screen', 'h-svh',
    'max-w-sm', 'max-w-md', 'max-w-lg', 'max-w-xl', 'max-w-2xl', 'max-w-3xl', 'max-w-4xl', 'max-w-5xl', 'max-w-7xl',
    // Borders
    'border', 'border-0', 'border-2', 'border-4',
    'rounded', 'rounded-sm', 'rounded-md', 'rounded-lg', 'rounded-xl', 'rounded-full',
    'border-gray-200', 'border-gray-300', 'border-teal', 'border-purple', 'border-rose',
    // Shadows
    'shadow-sm', 'shadow', 'shadow-md', 'shadow-lg', 'shadow-xl',
    // Position
    'relative', 'absolute', 'fixed', 'sticky',
    'top-0', 'top-1/2', 'top-full',
    'bottom-0', 'bottom-1/2',
    'left-0', 'left-1/2',
    'right-0', 'right-1/2',
    'inset-0', 'inset-x-0', 'inset-y-0',
    // Z-index
    'z-10', 'z-20', 'z-50',
    // Overflow
    'overflow-hidden', 'overflow-auto', 'overflow-x-auto', 'overflow-y-auto',
    // Display
    'block', 'inline-block', 'inline', 'flex', 'inline-flex', 'grid', 'hidden',
    // Transitions
    'transition-all', 'transition-colors', 'transition-transform', 'transition-opacity',
    'duration-200', 'duration-300',
    // Hover states
    'hover:bg-opacity-90', 'hover:text-white', 'hover:text-opacity-100', 'hover:scale-105',
    // Responsive prefixes
    'sm:', 'md:', 'lg:', 'xl:', '2xl:',
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        teal: "#0c8991",
        purple: "#9D5E9B",
        rose: "#B55076",
        "teal-light": "rgba(12, 137, 145, 0.1)",
        "purple-light": "#E8D5E6",
        "rose-light": "rgba(181, 80, 118, 0.1)",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;