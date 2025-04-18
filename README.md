🗓️ Event Management Admin Panel

A multi-step React.js-based admin dashboard for creating and managing events. This project supports a 3-step event creation process, including basic event details, uploading an event cover image and description, and creating tickets.

🚀 Features

- 🔒 Admin dashboard layout with TopNavbar and SideMenu
- 📋 Multi-step event creation wizard:
  - Step 1: Basic event information
  - Step 2: Upload image + description
  - Step 3: Ticket creation
-  Event Details Page (Landing/Home page).
- 🧠 Global form state using React Context API (EventContext)
- 🖼️ Real-time image preview
- 🧾 Dynamic ticket management (create, edit, delete)
- ✅ Fully functional UI with modern design

🏗️ Project Structure

src/
├── components/
│   └── Admin/
│       ├── EventContext.js      # Context API for form data
│       ├── StepOne.js           # Step 1: Basic info
│       ├── StepTwo.js           # Step 2: Image + description
│       ├── StepThree.js         # Step 3: Ticketing
│       ├── CreateTicket.js      # Modal for ticket creation
│       ├── TopNavbar.js         # Top navigation bar
│       └── SideMenu.js          # Sidebar navigation
├── pages/
│   └── Admin/
│       └── CreateEvent.js       # Main parent page with step handler
├── App.js
└── index.js

⚙️ Installation & Setup

1. Clone the repo

git clone https://github.com/JoyelV/user-stories-event.git
cd user-stories-event

2. Install dependencies

npm install

3. Start the development server

npm start

App runs at `http://localhost:5173`.

---

🧠 Event Creation Flow

🥇 Step One: Basic Info
- Event title
- Date, start/end time (with AM/PM)
- Venue name and address

➡️ Click Next to continue

---

🥈 Step Two: Image & Description
- Upload cover image (with preview)
- Add event description
- Data is saved to global `formData` via `EventContext`

➡️ Click Next or Skip & Continue

---

🥉 Step Three: Tickets
- Dynamically create/edit/delete ticket types
- Add ticket name, price, quantity
- Modal pops up for new ticket creation

Click Publish Event to complete

---

🌐 Technologies Used

- React.js (Functional Components + Hooks)
- Context API for global state
- React Icons for ticket actions
- Custom CSS modules for styling

---

📦 Future Improvements

- Admin authentication
- Event preview and edit feature

---

🧑‍💻 Author

Built by [Joyel Varghese](https://github.com/JoyelV)
