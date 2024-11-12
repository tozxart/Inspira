Here's a refined and consolidated version of your GitHub README for Inspira:

---

# Inspira - Creative Design Studio

## Overview

Inspira is a creative design studio portfolio website built with React, TypeScript, and Tailwind CSS. It showcases various design projects, including branding, logos, posters, and digital art. The website is designed to be visually appealing and easy to navigate, providing users with an engaging experience.

## Features

- **Responsive Design**: Fully responsive, works seamlessly on all devices.
- **Gallery**: Displays a collection of projects with images and descriptions.
- **Modal**: Provides a modal view for images in the gallery.
- **Contact Form**: Allows users to get in touch with the studio.
- **SEO Optimized**: Includes meta tags for better SEO and social sharing.
- **Work Slider**: Interactive slider showcasing featured works.
- **Pinned Projects**: Ability to highlight important projects.
- **Category Filtering**: Filter projects by category.

## Detailed Website Explanation

Inspira is designed to provide an engaging and seamless experience for users to explore various design projects. Below is a breakdown of the website's structure, key variables, and guidelines for adding new content.

### Website Structure

- **Components**:

  - `Gallery.tsx`: Manages the display of projects, including filtering and pinning features.
  - `About.tsx`: Showcases information about the studio and team members.
  - `Contact.tsx`: Contains the contact form and contact details.
  - `WorkSlider.tsx`: Features an interactive slider to highlight selected works.

- **Styling**:
  - `index.css`: Utilizes Tailwind CSS for global styles and custom animations.

### Key Variables and Data Structures

- **Project Interface** (`src/components/types.ts`):

  ```typescript
  export interface Project {
    id: number | string;
    title: string;
    category: string;
    pinned?: boolean;
    showTitle?: boolean;
    layout?: {
      grid?: boolean;
      vertical?: boolean;
      horizontal?: boolean;
      banner?: boolean;
      masonry?: boolean;
    };
    images: {
      url: string;
      displaySeparately?: boolean;
      title?: string;
    }[];
  }
  ```

  This interface defines the structure for each project, including properties for layout and image display options.

### Adding New Projects

To add new projects to the gallery, follow these steps:

1. Open the `Gallery.tsx` file in the `src/components` directory.
2. Locate the `projects` array.
3. Add a new project object adhering to the `Project` interface structure:

   ```typescript
   {
     id: <unique_id>,
     title: "<Project Title>",
     category: "<Category>",
     pinned: <true/false>,
     showTitle: <true/false>,
     layout: {
       grid: <true/false>,
       vertical: <true/false>,
       horizontal: <true/false>,
       banner: <true/false>,
       masonry: <true/false>,
     },
     images: [
       {
         url: "<Image URL>",
         displaySeparately: <true/false>,
         title: "<Image Title>", // Optional
       },
       // Add more images as needed
     ],
   }
   ```

## Project Structure

- `src/components/Gallery.tsx`: Main gallery component and projects data
- `src/components/About.tsx`: About page and team information
- `src/components/Contact.tsx`: Contact form and contact information
- `src/components/WorkSlider.tsx`: Featured works slider
- `src/index.css`: Global styles and animations
- `src/components/types.ts`: TypeScript interfaces for projects

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   ```

2. **Install dependencies:**

   ```bash
   cd inspira
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

   Open your browser to `http://localhost:3000`.

## License

This project is licensed under the MIT License.
