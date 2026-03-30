# 📱 React Native Learning Projects

<div align="center">

![Lessons](https://img.shields.io/badge/Lessons-80%2F294-1e3a8a?style=for-the-badge&logo=react&logoColor=1e3a8a&labelColor=white)
![Progress](https://img.shields.io/badge/%F0%9F%93%88%20Progress-27.21%25-2e7d32?style=for-the-badge&labelColor=white)

</div>

This repository contains multiple mobile applications I built while following the [**"React Native - The Practical Guide" by Maximilian Schwarzmüller**](https://www.udemy.com/course/react-native-the-practical-guide/) course.

The goal is to practice and apply key concepts such as mobile UI development, navigation, state management, and API integration.

I will continue to update this repository as I progress through the course.

## My Rule for This Course

- I will not use AI as part of this course, and I will not copy-paste code — except for CSS 🤞😄

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

![Module 5](https://img.shields.io/static/v1?label=Module%205&message=Adapt%20To%20Platform%20&%20Device%20Sizes&color=7a5af8&style=for-the-badge)

### <u>Completed</u>

![Module 2](https://img.shields.io/badge/Module%202-React%20Native%20Basics-6c8a5b?style=for-the-badge)  
![Module 3](https://img.shields.io/static/v1?label=Module%203&message=Debugging%20React%20Native%20Apps&color=6c8a5b&style=for-the-badge)  
![Module 4](https://img.shields.io/static/v1?label=Module%204&message=Diving%20Deeper%20into%20Components%2C%20Layouts%20%26%20Styling&color=6c8a5b&style=for-the-badge)

## 📚 What I Learned

### React Native Fundamentals

- Worked with core React Native components such as `View`, `Text`, `TextInput`, `Image`, `Button`, `Pressable`, `ScrollView`, and `FlatList`
- Managed app state using `useState` and `useEffect`
- Lifted state up through props to share data and actions between components
- Switched screens programmatically without using a routing library
- Rendered and updated dynamic lists
- Logged and displayed each game round step by step
- Generated random numbers and narrowed the guessing range after each user response
- Prevented invalid game flow by checking whether the user gives misleading higher/lower hints
- Used `Alert` for warnings and user feedback
- Added restart logic to reset the game state cleanly

### Component Structure & Organization

- Split components based on purpose, such as `ui` and `game`
- Built reusable UI components for cleaner and more maintainable code
- Passed data and event handlers through props
- Managed shared styling values with constants such as global color definitions

### Debugging & Development

- Handled runtime errors in React Native applications
- Used `console.log()` for debugging
- Performed remote JavaScript debugging
- Inspected app behavior with React DevTools
- Improved problem-solving by using the official documentation effectively

### Styling & UI

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

## Project Practice

**Project 1 – Cafe Notes App**

In this module, I first built a simple **to-do app** as part of the course practice.  
I then customized it and turned it into a **cafe notes app** where I can save:

- cafe names
- good sides
- bad sides

I also updated the design to give it a more personalized, notebook-style look.

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

This project helped me better understand how **state**, **props**, **conditional rendering**, **game logic**, and **UI organization** work together in a React Native app.
