
# Like-Tree

Welcome to **Like-Tree** – a customizable, link-tree-style React website for showcasing a profile and projects. This app includes a professional profile section and a dynamic accordion list to display project categories, enhanced by an interactive particle background.

## Demo

Check out a live demo of the site [[here](https://r2-link-tree.netlify.app/)].

<img src="https://github.com/user-attachments/assets/f9a0b947-519a-40f3-9081-2af83f108e8e" alt="Description" width="400" height="400"/>
<img src="https://github.com/user-attachments/assets/7c4a7408-d1c5-43b2-af9e-d7bb1a615cf5" alt="Description" width="400" height="400"/>

## Features

- **Profile Section**:
  - Displays a logo, name, and profession.
  - Links to key resources:
    - **Resume**: Links to the user’s resume.
    - **LinkedIn**: Links to the LinkedIn profile.
    - **Email**: Copies the user’s email to the clipboard.

- **Accordion Project Categories**:
  - Collapsed view shows an icon and title for each category.
  - Expanded view reveals a short description and links for each project, with GitHub links.
  - Hover effect shows additional details for each project link.

- **Interactive Particles Background**:
  - Uses tsParticles for dynamic particle effects across the background.

- **Easy Configuration**:
  - Customize all content and styles by editing `data.js` for profile/project details and `tsParticlesOptions.js` for particle settings.

## Technologies

- **React** for building the UI.
- **CSS** for styling.
- **tsParticles** for interactive background effects.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/like-tree.git
   cd like-tree
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```
   This will open the app in your browser at `http://localhost:3000`.

## Usage

This application provides a user-friendly interface to navigate between sections:

1. **Profile Section**:
   - Click the **resume** or **LinkedIn** icons to access the relevant profiles.
   - Click the **email** icon to copy the email to your clipboard.

2. **Accordion Project Categories**:
   - Click each accordion to expand it and view projects within that category.
   - Hover over each project link to see a brief description on the right.

## Configuration

**Customize Like-Tree by modifying the following files:**

- **`data.js`**:
  - Update profile information (name, profession, links).
  - Add project categories, project descriptions, and GitHub links.

- **`tsParticlesOptions.js`**:
  - Adjust particle effect options like color, size, and speed.



Enjoy showcasing your work with **Like-Tree**! It's a modern, interactive way to share your projects and profile.
