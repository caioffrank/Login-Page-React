import React from "react";
import { motion } from "framer-motion";
import VisualPanel from "../components/VisualPanel";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="max-w-4xl w-full bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
      >
        <VisualPanel />
        <LoginForm />
      </motion.div>
    </div>
  );
}
