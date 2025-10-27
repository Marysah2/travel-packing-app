#  Marysah's Travel Packing & Checklist Web Application

A modern, user-friendly travel packing application that helps travelers efficiently plan, organize, and manage their trips with real-time weather integration and secure cloud storage.

##  Features

- **Smart Packing Management**: Create, edit, and delete customized packing lists for each trip
- **Real-Time Weather Integration**: Get live weather updates for your destination using OpenWeatherMap API
- **Secure Authentication**: Sign up/login with Email, Google, or GitHub via Firebase Auth
- **Cloud Sync**: Your packing lists are securely stored and synced across all devices
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Progress Tracking**: Visual progress bar to track packing completion
- **Trip Organization**: Organize items by trip name for better management

##  Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS
- **Backend**: Firebase (Authentication & Firestore)
- **API**: OpenWeatherMap API for weather data
- **Deployment**: Netlify with GitHub Actions CI/CD
- **State Management**: React Context API

##  Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Firebase account
- OpenWeatherMap API account

##  Setup Instructions

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd travel-packing-app
npm install
```

### 2. Firebase Setup
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Authentication (Email/Password, Google, GitHub)
4. Create a Firestore database
5. Get your Firebase config from Project Settings

### 3. OpenWeatherMap API Setup
1. Sign up at [OpenWeatherMap](https://openweathermap.org/api)
2. Get your free API key

### 4. Environment Variables
1. Copy `.env.example` to `.env`
2. Fill in your Firebase and OpenWeatherMap credentials:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_OPENWEATHER_API_KEY=your_openweather_api_key
```

### 5. Run the Application
```bash
npm run dev
```

Visit `http://localhost:5173` to see your app!

##  Deployment

### Netlify Deployment
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Add environment variables in Netlify dashboard
4. Deploy automatically via GitHub Actions

### Manual Deployment
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 📱 Usage

1. **Sign Up/Login**: Create an account or sign in with Google/GitHub
2. **Check Weather**: Enter your destination to get current weather conditions
3. **Create Packing List**: Add items to your packing checklist
4. **Track Progress**: Mark items as packed and see your progress
5. **Organize by Trip**: Group items by trip name for better organization

##  Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

##  Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

##  License

This project is licensed under the MIT License.

##  Acknowledgments

- OpenWeatherMap for weather data
- Firebase for backend services
- Tailwind CSS for styling
- React team for the amazing framework
