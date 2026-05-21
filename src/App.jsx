import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <main className="tutorial-page">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Framer Motion Puppy Bubble Demo
      </motion.h1>

      <motion.div
        className="puppy-bubble"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
      >
        🐶
      </motion.div>

      <motion.button
        className="pop-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Pop Bubble
      </motion.button>
    </main>
  );
}

export default App;