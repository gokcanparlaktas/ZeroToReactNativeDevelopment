# 📱 React Native Learning Projects

<div align="center">

![Lessons](https://img.shields.io/badge/Lessons-126%2F260-1e3a8a?style=for-the-badge&logo=react&logoColor=1e3a8a&labelColor=white)
![Progress](https://img.shields.io/badge/%F0%9F%93%88%20Progress-48.46%25-2e7d32?style=for-the-badge&labelColor=white)

</div>

This repository contains multiple mobile applications I built while following the [**"React Native - The Practical Guide" by Maximilian Schwarzmüller**](https://www.udemy.com/course/react-native-the-practical-guide/) course.

The goal is to practice and apply key concepts such as mobile UI development, navigation, state management, and API integration.

I will continue to update this repository as I progress through the course.

## My Rule for This Course

- I will write the code myself and avoid AI-generated code, vibecoding or code suggestions during this course — except for CSS 🤞😄

## 🛠️ Tech Stack

- React Native (Expo)
- JavaScript / TypeScript

## 🚀 Getting Started

```bash
npm install
npx expo start
```

## 📌 Course Updates

![Started](https://img.shields.io/badge/Started%20At-25/03/2026-00C3D1?style=for-the-badge)

#### <u>Ongoing</u>

![Module 8](https://img.shields.io/static/v1?label=Module%208&message=Practice-Expense%20Tracker%20App&color=7a5af8&style=for-the-badge)

### <u>Completed</u>

![Module 2](https://img.shields.io/badge/Module%202-React%20Native%20Basics-6c8a5b?style=for-the-badge)  
![Module 3](https://img.shields.io/static/v1?label=Module%203&message=Debugging%20React%20Native%20Apps&color=6c8a5b&style=for-the-badge)  
![Module 4](https://img.shields.io/static/v1?label=Module%204&message=Diving%20Deeper%20into%20Components%2C%20Layouts%20%26%20Styling&color=6c8a5b&style=for-the-badge)  
![Module 5](https://img.shields.io/static/v1?label=Module%205&message=Adapt%20To%20Platform%20%26%20Device%20Sizes&color=6c8a5b&style=for-the-badge)  
![Module 6](https://img.shields.io/static/v1?label=Module%206&message=React%20Native%20Navigation%20with%20React%20Navigation&color=6c8a5b&style=for-the-badge)  
![Module 7](https://img.shields.io/static/v1?label=Module%207&message=App-wide%20State%20Management%20with%20Redux%20%26%20Context%20API&color=6c8a5b&style=for-the-badge)

## 📚 What I Learned

### ⚛️ React Native Fundamentals

- Worked with core React Native components such as `View`, `Text`, `TextInput`, `Image`, `Button`, `Pressable`, `ScrollView`, and `FlatList`
- Managed app state using `useState` and `useEffect`
- Lifted state up through props to share data and actions between components
- Switched screens programmatically without using a routing library
- Rendered and updated dynamic lists
- Managed state changes across multiple user interactions
- Built conditional logic to update the UI and app flow dynamically
- Added input validation and safeguards against inconsistent user actions
- Used `Alert` for warnings and user feedback
- Added restart logic to reset the game state cleanly
- Built dynamic UI behavior based on device data (screen size & orientation)

---

### 🧩 Component Structure & Organization

- Improved project structure by organizing components based on their responsibilities
- Built reusable UI components for cleaner and more maintainable code
- Passed data and event handlers through props
- Managed shared styling values with constants such as global color definitions
- Created modular and scalable component structures for better code readability

---

### 🐞 Debugging & Development

- Handled runtime errors in React Native applications
- Used `console.log()` for debugging
- Performed remote JavaScript debugging
- Inspected app behavior with React DevTools
- Improved problem-solving by using the official documentation effectively
- Debugged layout and rendering issues across different screen sizes and devices

---

### 🎨 Styling & UI

- Styled components with `StyleSheet`
- Applied platform-aware layout improvements with `SafeAreaView`
- Customized and configured `TextInput`
- Built reusable custom button components
- Added touch feedback with `Pressable`
- Applied conditional styling based on button pressed state
- Used icons inside buttons and UI elements
- Enhanced the UI with `LinearGradient`, background images, and a foreground image
- Added and used custom fonts in the app
- Used nested `Text` components for inline text styling similar to `span`
- Integrated a splash screen while loading assets such as fonts
- Managed layout responsiveness using **Dimensions API**
- Used **useWindowDimensions hook** for dynamic UI updates on orientation change
- Handled keyboard overlap issues using **KeyboardAvoidingView (iOS)**
- Implemented adaptive layouts for **portrait and landscape modes**
- Styled and configured the **Status Bar** (light / dark / automatic modes)

---

### 📱 Platform-Specific Development

- Used **Platform API** to apply platform-specific logic and styling
- Created platform-based conditional styling using `Platform.OS`
- Built separate platform-specific components:
  - `Component.ios.js`
  - `Component.android.js`
- Optimized UI behavior for both **iOS and Android environments**

---

### 🧭 Navigation (React Navigation)

- Used **React Navigation** to manage screen transitions and app flow
- Implemented different navigator types:
  - **Stack Navigator**
  - **Drawer Navigator**
  - **Bottom Tab Navigator**
- Combined multiple navigators using **nested navigation structures** (Stack + Drawer, etc.)

- Configured navigation behavior using:
  - `screenOptions`
  - `options` on navigators and screens
- Customized navigation UI:
  - Styled **headers, backgrounds, and navigation bars**
  - Added **header buttons and icons**

- Navigated between screens using `navigation` and **useNavigation hook**
- Passed and accessed data between screens using:
  - `route.params`
  - **useRoute hook**

- Built dynamic screens:
  - Set **dynamic titles and content** based on route data
  - Created detail screens with dynamic data rendering

- Displayed images using **URI-based sources**

- Structured scalable navigation architecture for multi-screen applications
---

### 🌍 App-wide State Management (Redux & Context API)

- Learned app-wide state management with **Context API** and **Redux Toolkit**
- Used **useContext**, **useSelector**, and **useDispatch**
- Created and managed shared state across multiple screens
- Built Redux slices and configured a global store with **createSlice** and **configureStore**

## Project Practice

**Project 1 – Cafe Notes App**

In this module, I first built a simple **to-do app** as part of the course practice.  
I then customized it and turned it into a **cafe notes app** where I can save:

- cafe names
- good sides
- bad sides

I also updated the design to give it a more personalized, notebook-style look.
This project helped me get started with React Native and introduced me to the basics of **state management**, **layout structure**, and **core UI design**.

**Project 2 – Mini Number Guessing Game**

As a second project, I built a **mini number guessing game**.  
In this project, I focused on both the **game logic** and the **UI improvements**. I:

- built a custom button component using `Pressable` instead of the default `Button`
- enhanced the background with a `LinearGradient`, a background image, and a foreground image
- configured the `TextInput` to accept numbers only and limited the input length
- improved the styling of the input and other UI elements
- applied conditional styling to `Pressable` using a ternary expression based on its pressed state
- switched between screens programmatically using conditional rendering instead of a routing library
- used `SafeAreaView` to better respect device screen restrictions
- created reusable UI components such as a custom title component
- managed colors globally with constants
- generated random numbers and narrowed the guessing range after each round
- added game control buttons with icons for higher and lower actions
- checked whether the user gave inconsistent higher/lower hints and showed an `Alert` when needed
- added custom fonts and a splash screen
- used nested `Text` components for inline text styling
- added game-over logic, a summary screen, and a restart button
- logged every round and displayed the round history with `FlatList`
- separated components and files by purpose, such as `ui`, `game`, and `constants`

This project helped me better understand how **state**, **props**, **conditional rendering** and **UI organization** work together in a React Native app.

**Project 3 – Adaptive UI & Responsive Enhancements**

Building on the foundation of the previous project, I extended the mini number guessing game by focusing on **responsive design, device adaptability, and platform-specific behavior**.

In this module, I improved the application by making the UI **adaptive to different screen sizes, orientations, and platforms**. I:

- used the **Dimensions API** to retrieve device width and height
- applied conditional logic (`if` statements) based on screen size and orientation
- adapted layouts dynamically for **portrait and landscape modes**
- used the **useWindowDimensions hook** to automatically update the UI on orientation changes
- rendered different UI structures in the same screen depending on device orientation
- handled keyboard overlap issues using **KeyboardAvoidingView (iOS)**
- improved user experience by preventing layout conflicts with the keyboard
- used the **Platform API** to apply platform-specific logic and styling
- created conditional styles based on platform differences (iOS vs Android)
- built platform-specific components:
  - `Component.ios.js`
  - `Component.android.js`
- improved layout flexibility and responsiveness across different devices

This project helped me better understand how to build **adaptive, responsive, and platform-aware mobile applications**

**Project 4 – Meals App (React Native Navigation + Redux & ContextAPI at Module 7)**

As another project, I built a **meals listing mobile application** using React Native and React Navigation.  
In this project, I focused on **navigation architecture**, **dynamic data rendering**, and **UI structure**. I:

- built a multi-screen application using **React Navigation**
- implemented **Stack Navigator** and **Drawer Navigator** together (nested navigation)
- displayed meal categories on the main screen and navigated to related meals dynamically
- fetched and rendered data from a **dummy JSON source**
- created a structured navigation flow:
  - Categories → Meals → Meal Details

- passed and accessed data between screens using **route.params**
- used **useNavigation** and **useRoute** hooks for navigation and data handling

- added a **headerRight favorite button** in the detail screen using dynamic navigation options
- managed and displayed a **favorites screen** via Drawer Navigation
- managed favorite meals across screens using **Context API** and **Redux Toolkit** *(Module 7 Update)*
- practiced **app-wide state management** for adding and removing favorites *(Module 7 Update)*

- styled navigation components:
  - customized headers, background colors, and drawer styles
  - added icons using **Ionicons**

- built reusable screen components for better structure and scalability
- displayed images dynamically using **URI-based sources**
- configured navigation globally using **screenOptions**

- created a clean and scalable navigation architecture suitable for real-world apps

This project helped me better understand how to design **multi-screen navigation architectures**, handle **dynamic data rendering**, build **interactive, user-driven mobile applications** using React Native, and manage shared app state with **Context API** and **Redux Toolkit** *(Module 7 Update)*.
