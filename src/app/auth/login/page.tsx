"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  baseSplitContainer,
  formSection,
  visualSection,
  cardStyle,
  titleStyle,
  inputStyle,
  buttonStyle,
} from "@/styles/baseStyles";

export default function LoginPage() {
  return (
    <div style={baseSplitContainer}>
      {/* Left Side - Form */}
      <div style={formSection}>
        <motion.div
          style={cardStyle}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 style={titleStyle}>Login</h2>

          <input style={inputStyle} type="email" placeholder="Email" />
          <input style={inputStyle} type="password" placeholder="Password" />

          <button
            style={buttonStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#043f45")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#055e68")
            }
          >
            Sign In
          </button>

          <p style={{ fontSize: "14px", textAlign: "center" }}>
            Don't have an account?{" "}
            <Link
              href="/auth/register"
              style={{
                color: "#62a388",
                textDecoration: "underline",
                fontWeight: "bold",
              }}
            >
              Register
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Right Side - Video */}
      <div style={visualSection}>
        <video
  src="/videos/meditative.mp4"
  autoPlay
  loop
  muted
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
  }}
/>

      </div>
    </div>
  );
}
