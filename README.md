# Secure Static Login and Email sender

Welcome to the Static Login and Email sender!
This is a [Static Login and Email sender](https://simple-blog-application-orpin.vercel.app/home) project. This project is developed using [Next.js 13](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/) and Im design this website like a one-stop destination for online learning and tech-related courses!

## Table of Contents

- [About](#about)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## About

Tech Education is a platform designed to empower learners with valuable tech skills. Whether you're a beginner looking to start your tech journey or a professional seeking to upgrade your knowledge, we have courses to suit your needs. Our mission is to make quality tech education accessible to everyone.

## Features

- **Responsive Design:** The website is designed to work seamlessly on different devices, ensuring a great user experience.
- **Multiple Pages:** The website includes pages for home, about, blog, single-blog, and contact, each serving a specific purpose.
- **API Integration:** Blog items are fetched from an API and displayed on the home and blog pages.
- **Dynamic Routing:** The single-blog page dynamically displays detailed information about a selected blog post.
- **User Interaction:** The contact page provides a form for users to reach out, enhancing user engagement.

## Getting Started

Follow these steps to set up the project locally:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using the command `npm install` or `yarn install`.
4. Run the development server with `npm run dev` or `yarn dev`.
5. Open your web browser and access the website at http://localhost:3000.

## Project Structure

The project structure for Tech Education is designed to maintain a clean and organized codebase. Here's an overview of the main directories and their contents:

- **`src/`**: The main source folder of the project.

  - **`middleware/`**: Contains middleware files responsible for handling requests and responses.
  - **`app.js`**: The main application file responsible for setting up routes, middleware, and server configuration.

- **`app/`**: Contains JavaScript (`.js`) and JSX (`.jsx`) files related to your application's frontend.
  - **`pages/`**: Organized into two groups: `before-login` and `after-login`.
    - **`before-login/`**: Contains pages accessible before user authentication.
      - `home.js`: The landing page.
      - `sign-up.js`: Page for user registration.
      - `login.js`: Page for user login.
      - `about.js`: Information about Tech Education.
    - **`after-login/`**: Contains pages accessible after user authentication.
      - `home.js`: Home page for authenticated users.
      - `profile.js`: User profile page.
      - `contact.js`: Contact information.
      - `about.js`: About page for authenticated users.
      - `logout.js`: Page for user logout.
  - **`api/`**: Stores API-related code, such as endpoints and data handling.
  - **`components/`**: Reusable React components used throughout the application.
  - **`data/`**: Data storage and management, e.g., JSON files or database connections.
  - **`lib/`**: Utility functions, helper classes, and third-party libraries.

This structured approach keeps your code organized and makes it easier to maintain and scale your project. It separates frontend components from server-side logic, making it more modular and manageable.

Feel free to explore and contribute to each directory based on your project's requirements. If you have questions or need assistance with a specific section, refer to the corresponding directory's README or documentation for more details.

## Contributing

We welcome contributions from the community. Whether it's reporting a bug, suggesting improvements, or creating new content, your input is valuable. Please see our [Contribution Guidelines](CONTRIBUTING.md) for details on how to get involved.

## Deploy on Vercel

The project is deployed on the [Vercel Platform](https://vercel.com).
The live link is [Simple-Blog-Website](https://simple-blog-application-orpin.vercel.app/home).

## Contact

For any questions or inquiries, feel free to contact us at [rasel.learn22@gmail.com](mailto:rasel.learn22@gmail.com).

Happy coding!
