React + Redux + JWT Demo

This is a small demo application built to practice React Redux and JWT (JSON Web Token) concepts.

The app allows the user to type any username and log in. When they log in, a fake JWT token is generated and stored using Redux. The user information (username + role) is displayed. Clicking Logout clears the token and resets the authentication state.

🔹 Features

Simple login form

Generates a fake JWT token

Stores authentication info in Redux

Shows user profile after login

Logout resets everything

Demonstrates key Redux concepts:

State

Store

Reducer

Action

Dispatch

Subscribe (useSelector)

🔹 How to Run
npm install
npm run dev


Open:

http://localhost:5173

🔹 Screenshots

Add your screenshots here:

Login page

Logged-in profile page

🔹 Summary

This project demonstrates how Redux manages global state and how a JWT-like token can be used to represent authentication. It provides a simple and clear example of how actions, reducers, and state updates work together in a React application.