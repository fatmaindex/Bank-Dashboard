Bank-Dashboard
A modular Angular financial dashboard built with a Feature-Based Architecture and a centralized Design System to ensure scalability and visual consistency.

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

📁 Project Structure
Plaintext
src/
├── app/
│   ├── core/         # Singleton services & layouts
│   ├── shared/       # Reusable UI elements
│   └── features/     # Feature-specific modules
└── styles/
    ├── variables.scss # Sass mixins and font configurations
    └── styles.scss    # Global :root variables and base resets
🛠️ Tech Stack
Framework: Angular (Standalone: false)

Styling: SCSS (CSS Variables, Nesting, Mixins)

Charts: Apache ECharts (Custom Line/Bar configurations)

Design: Figma-to-Code
