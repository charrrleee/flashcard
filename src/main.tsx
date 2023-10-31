import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
// import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage.tsx";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.tsx";
import HomePage from "./pages/HomePage.tsx";
import MyFlashcardPage from "./pages/MyFlashcardPage.tsx";
import FlashcardPage from "./pages/FlashcardPage.tsx";
import { PersistGate } from "redux-persist/integration/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/flashcards",
        element: <MyFlashcardPage />,
      },
      {
        path: "/flashcard/:id",
        element: <FlashcardPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div>123</div>} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
