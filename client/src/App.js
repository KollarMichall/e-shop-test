import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Header from "./components/Header";
import { lazy, Suspense, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "./constants/baseUrl";
import { useDispatch } from "react-redux";
import { getSections } from "./redux/category/categoryActions";
import WithSpinner from "./components/spinner/WithSpinner";
import { getCollectionsStartAsync } from "./redux/shop/shopActions";
import ErrorBoundary from './components/ErrorBoundary';

const HomePage = lazy(() => import('./pages/HomePage'))
const CollectionOverview = lazy(() => import('./components/CollectionOverview'))
const CategoryPage = lazy(() => import('./pages/CategoryPage'))
const SignIn = lazy(() => import('./pages/login/SignIn'))
const SignUp = lazy(() => import('./pages/login/SignUp'))
const Contact = lazy(() => import('./pages/Contact'))
const Checkout = lazy(() => import('./pages/Checkout'))

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      axios.get(`${baseUrl}sections`).then(res => {
        dispatch(getSections(res.data))
      })

    }, 1000);
    // getcollections
    dispatch(getCollectionsStartAsync())

  }, [dispatch])


  return (
    <Router>
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<WithSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<CollectionOverview />} />
            <Route path="/shop/:id" element={<CategoryPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/*" element={<ErrorBoundary />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}


export default App;
