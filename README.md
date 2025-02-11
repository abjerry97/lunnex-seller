# Lunnex Seller  

## Overview  
**Lunnex Seller** is an eCommerce web application built with **Next.js**, **React**, and **TypeScript**, designed for sellers to manage their products, orders, and sales efficiently. The project follows a modular and scalable architecture, leveraging **Context API** for state management.  

## Features  
- Product listing and management  
- Order tracking and management  
- Secure user authentication  
- Responsive and user-friendly UI  
- State management using **Context API**  

## Tech Stack  
- **Frontend:** Next.js, React, TypeScript, Tailwind CSS  
- **State Management:** Context API  
- **Authentication:** Firebase/Auth or custom API authentication  
- **Styling:** Tailwind CSS  

## Project Structure  
```
lunnex-seller/
│── src/
│   ├── components/     # Reusable UI components
│   ├── context/        # Context API state management
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Next.js pages (routes)
│   ├── services/       # API calls and integrations
│   ├── styles/        # Global styles and Tailwind config
│   ├── utils/          # Utility functions
│   ├── types/          # TypeScript interfaces and types
│── public/             # Static assets
│── .env.example        # Environment variables template
│── package.json        # Dependencies and scripts
│── README.md           # Project documentation
```  

## Getting Started  

### Prerequisites  
Ensure you have the following installed:  
- **Node.js** (v16 or later)  
- **npm** or **yarn**  

### Installation  
1. Clone the repository:  
   ```sh
   git clone https://github.com/abjerry97/lunnex-seller.git
   cd lunnex-seller
   ```  
2. Install dependencies:  
   ```sh
   npm install
   ```  
3. Set up environment variables:  
   - Copy `.env.example` to `.env` and update the values accordingly.  

4. Run the development server:  
   ```sh
   npm run dev
   ```  
   The app will be available at `http://localhost:3000`.  

## Contributing  
Contributions are welcome! Please open an issue or submit a pull request with improvements.  

## License  
This project is licensed under the **MIT License**.   
