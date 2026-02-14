Bank-Dashboard
A modular Angular financial dashboard built with a Feature-Based Architecture and a centralized Design System to ensure scalability and visual consistency.


🎯 Project Overview
A financial management interface designed to handle complex data visualization and scalable code organization. This project focuses on translating Figma designs into a functional Angular application using modern development standards.


🏗️ Architecture & Structure
The project follows a modular pattern to maintain a clean separation of concerns:

Core Module: Manages global singletons and structural layouts (Navbar/Sidebar).

Shared Module: Contains reusable UI components, ensuring a "DRY" (Don't Repeat Yourself) codebase.

Feature Modules: Independent modules like dashboard that encapsulate specialized business logic.

🚀 Technical Implementation
🎨 Design System & Styling (Theming)
Centralized Style Guide: Implemented a robust CSS Variable System (:root) to manage the application's color palette (Primary, Secondary, Status Colors) and spacing globally.

Sass Architecture: Utilized @use rules and external variables.scss for font-family management and modular styling, ensuring easy theme updates.

Component-Level Polish: * Product Cards: Smooth translateY hover effects with custom shadows.

Interactive UI: Dynamic buttons with background transitions (transparent to solid).

📊 Advanced Data Visualization
Balance History Chart: A smooth line chart utilizing linear gradients and dashed split-lines for financial trend analysis.

Weekly Activity Chart: A dual-bar implementation comparing revenue and expenses with custom rounded UI.

Consistent Visualization: Charts are synced with the global variables (e.g., using --txt-light for labels) to maintain design harmony.

Visual Accuracy: Applied custom gradients, rounded bar UI, and interactive tooltips to match design specifications.

3. Styling & Responsive Design
Theming System: Used a :root CSS variable system for global color management and easy theme updates.

Responsiveness: Built with a Mobile-First approach using Sass, Flexbox, and CSS Grid to ensure a seamless experience on all screen sizes.

Component Polish: Interactive elements like product cards feature smooth CSS transitions and hover states.

4. Technical Stack
Framework: Angular

Styling: SCSS (CSS Variables, Nesting, Mixins)

UI Components: Angular Material

Charts: Apache ECharts

🚀 Installation & Setup
Clone the repository: git clone [your-repo-link]

Install dependencies: npm install

Run the project: ng serve

Open http://localhost:4200/ in your browser.
