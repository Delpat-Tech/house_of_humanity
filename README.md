# House of Humanity

[![React](https://img.shields.io/badge/React-19.1.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.0.0-646CFF.svg)](https://vitejs.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-Hosting-FFCA28.svg)](https://firebase.google.com/)
[![License](https://img.shields.io/badge/License-ISC-green.svg)](LICENSE)

> **Building a Better World** - A comprehensive web platform for House of Humanity, an NGO dedicated to creating positive change through education, healthcare, and sustainable development.

## Features

### Modern UI/UX
- **Responsive Design** - Optimized for all devices and screen sizes
- **Smooth Animations** - Powered by Framer Motion for engaging user interactions
- **Beautiful Components** - Custom UI components with Tailwind CSS
- **Accessibility** - WCAG compliant design for inclusive user experience

### Architecture
- **Modular Structure** - Feature-based organization for scalability
- **TypeScript** - Full type safety across the entire application
- **Component Library** - Reusable UI components and hooks
- **Service Layer** - Centralized API management and business logic

### Core Functionality
- **Donation System** - Secure payment processing and donation tracking
- **Volunteer Management** - Registration and coordination tools
- **Project Showcase** - Interactive project galleries and impact stories
- **Contact & Support** - Multi-channel communication system
- **News & Events** - Dynamic content management
- **Gallery** - Rich media showcase of activities and impact

### Technical Excellence
- **Performance Optimized** - Fast loading times and smooth interactions
- **SEO Friendly** - Meta tags, structured data, and optimized content
- **Progressive Web App** - Offline capabilities and app-like experience
- **Security** - Authentication, authorization, and data protection

## Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Delpat-Tech/house_of_humanity.git
   cd house_of_humanity
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install client dependencies
   cd client
   npm install
   
   # Install server dependencies
   cd ../server
   npm install
   ```

3. **Environment Setup**
   ```bash
   # Create environment files
   cp .env.example .env
   cp client/.env.example client/.env
   cp server/.env.example server/.env
   ```

4. **Start development servers**
   ```bash
   # Start client (from client directory)
   cd client
   npm run dev
   
   # Start server (from server directory, in new terminal)
   cd server
   npm run dev
   ```

5. **Open your browser**
   - Client: http://localhost:5173
   - Server: http://localhost:5000

## Project Structure

```
house-of-humanity/
├── client/                     # React frontend application
│   ├── src/
│   │   ├── components/         # Legacy components
│   │   ├── pages/             # Page components
│   │   ├── features/          # Feature-based modules
│   │   │   ├── auth/          # Authentication
│   │   │   ├── donations/     # Donation management
│   │   │   ├── projects/      # Project showcase
│   │   │   ├── volunteers/    # Volunteer management
│   │   │   └── contact/       # Contact forms
│   │   ├── shared/            # Shared utilities
│   │   │   ├── components/    # Reusable UI components
│   │   │   ├── constants/     # App constants
│   │   │   ├── hooks/         # Custom React hooks
│   │   │   ├── services/      # API services
│   │   │   └── utils/         # Utility functions
│   │   └── types/             # TypeScript definitions
│   ├── public/                # Static assets
│   └── package.json
├── server/                    # Node.js backend API
│   ├── src/
│   │   ├── controllers/       # Route controllers
│   │   ├── middleware/        # Express middleware
│   │   ├── models/           # Database models
│   │   ├── routes/           # API routes
│   │   └── config/           # Configuration files
│   └── package.json
├── firebase.json             # Firebase hosting config
└── README.md
```

## Technology Stack

### Frontend
- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **React Toastify** - Notification system
- **Lucide React** - Icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **TypeScript** - Type-safe backend development
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Jest** - Testing framework
- **React Testing Library** - Component testing

### Deployment
- **Firebase Hosting** - Static site hosting
- **Vercel** - Alternative hosting option

## Key Features Explained

### Modular Architecture
The application follows a feature-based modular architecture:

```typescript
// Feature-based imports
import { DonationForm, useDonations } from '../features/donations';
import { useAuth } from '../shared/hooks/useAuth';

// Shared utilities
import { Button, Modal } from '../shared/components';
import { formatCurrency, validateEmail } from '../shared/utils';
```

### Authentication System
- JWT-based authentication
- Role-based access control
- Secure token management
- Password reset functionality

### Donation Management
- Multiple payment gateways
- Donation tracking and analytics
- Receipt generation
- Campaign management

### Volunteer Coordination
- Volunteer registration
- Skill matching
- Event coordination
- Impact tracking

## Deployment

### Firebase Hosting

1. **Build the application**
   ```bash
   cd client
   npm run build
   ```

2. **Deploy to Firebase**
   ```bash
   firebase deploy
   ```

### Environment Variables

Create `.env` files with the following variables:

**Client (.env)**
```env
VITE_API_URL=http://localhost:5000/api
VITE_FIREBASE_CONFIG=your_firebase_config
```

**Server (.env)**
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CORS_ORIGIN=http://localhost:5173
```

## Testing

```bash
# Run client tests
cd client
npm test

# Run server tests
cd server
npm test

# Run all tests
npm run test:all
```

## Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feat/amazing-feature
   ```
3. **Make your changes**
4. **Add tests** (if applicable)
5. **Commit your changes**
   ```bash
   git commit -m 'feat: add amazing feature'
   ```
6. **Push to the branch**
   ```bash
   git push origin feat/amazing-feature
   ```
7. **Open a Pull Request**

### Commit Convention
We follow [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test additions/changes
- `chore:` Build process or auxiliary tool changes

## Support

### Getting Help
- **Email**: support@houseofhumanity.org
- **Discord**: [Join our community](https://discord.gg/houseofhumanity)
- **Documentation**: [Wiki](https://github.com/your-username/house-of-humanity/wiki)
- **Issues**: [GitHub Issues](https://github.com/your-username/house-of-humanity/issues)

### Reporting Bugs
Please include:
- Browser and version
- Operating system
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **React Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For smooth animations
- **Firebase** - For hosting and backend services
- **All Contributors** - For their valuable contributions

## Project Status

- **Core Features** - Complete
- **Authentication** - Complete
- **Donation System** - Complete
- **Volunteer Management** - Complete
- **Admin Dashboard** - In Progress
- **Analytics** - Planned
- **Mobile App** - Planned

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=your-username/house-of-humanity&type=Date)](https://star-history.com/#your-username/house-of-humanity&Date)

---

<div align="center">
  <p>Made with love by the House of Humanity Team</p>
  <p>Building a Better World, One Project at a Time</p>
</div>
