SoftSell – License Resale Landing Page
SoftSell is a responsive and modern single-page React application designed as part of the Credex Web Development Internship Assignment. It enables users to submit their unused software licenses for valuation and resale through a clean, user-friendly interface.

🌟 Features
Dark Mode Toggle: Smoothly switch between light and dark themes. User preferences are stored in localStorage.

Hero Section: Eye-catching header with call-to-action buttons that scroll to the contact form.

Process Overview: Visual representation of a 3-step process – Upload License → Get Valuation → Get Paid.

Benefits Section: Highlights the unique value propositions of SoftSell.

Customer Testimonials: Includes two realistic testimonial cards with quotes and identities.

Responsive Contact Form:

Form validation (name, email, company, license type)

Custom error messages

Displays a success message after submission

Disabled button while submitting (simulated API delay)

Smooth Scroll to form section from CTA buttons.

Custom Icons using react-icons.

🧠 Design Choices
Component Design: A single functional component (App.tsx) handles layout, logic, and UI interaction for simplicity.

State Management: React Hooks (useState, useEffect) manage form state, submission status, theme toggling, and user feedback.

Accessibility:

Clear labels and placeholders

ARIA attributes for the theme toggle

Theming: Uses data-theme attribute on <html> to enable theme-based styling.

Feedback UX: Displays error hints and a confirmation message with auto-dismiss.

🕒 Time Spent
Design & Layout: ~4 hours (wireframing sections and structuring the HTML/CSS layout)

Form Handling & Validation: ~3 hours (form state, error handling, and validation logic)

Dark Mode + Theming: ~1.5 hours (toggle switch, system preferences, and persistence)

Testing & Polish: ~1.5 hours (styling adjustments, responsive testing, and smooth scrolling)

Total Estimated Time: ~10 hours

🛠️ Tech Stack
React (TypeScript)

CSS (custom styling)

React Icons
