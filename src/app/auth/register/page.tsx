"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { baseContainer, cardStyle, titleStyle, inputStyle } from "../../../styles/baseStyles";

export default function RegisterPage() {
  return (
    <div style={baseContainer}>
      <motion.div
        style={cardStyle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 style={titleStyle}>Register</h2>

        <input style={inputStyle} type="text" placeholder="Full Name" />
        <input style={inputStyle} type="email" placeholder="Email" />
        <input style={inputStyle} type="password" placeholder="Password" />

        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#005bb5" }}
          whileTap={{ scale: 0.95 }}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#0070f3",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
            transition: "background-color 0.3s ease",
          }}
        >
          Sign Up
        </motion.button>

        <p style={{ marginTop: "15px", textAlign: "center" }}>
          Already have an account?{" "}
          <Link href="/auth/login" style={{ color: "#0070f3", textDecoration: "underline" }}>
            Login here
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
