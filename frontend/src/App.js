import React from 'react'
import { Routes, BrowserRouter, Route, Outlet, useLocation, Navigate, useParams } from "react-router-dom"
import Layout from './Components/Chatlist'
import Error from './pages/error'
import Blank from './pages/blank'
import { motion } from "framer-motion";
import Chat from './Components/chatroom'

const PageLayout = ({ children }) => children;

const pageVariants = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
};

const pageTransition = {
  type: "tween",
  ease: "easeIn",
  duration: 0.4
};

const AnimationLayout = () => {
  const { pathname } = useLocation();
  return (
    <PageLayout>
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Outlet />
      </motion.div>
    </PageLayout>
  );
};

function App() {
  
  return (
    <div className="App">
		<BrowserRouter>
        <Layout>
		<main>
          <Routes>
			<Route element={<AnimationLayout />}>
				<Route path="/" element={<Blank />} />
				<Route path="/chat/:room" element={<Chat />} />
			  </Route>
			  <Route path="*" element={<Error />} />
          </Routes>
        </main>
		</Layout>
		</BrowserRouter>
    </div>
  );
}

export default App;
