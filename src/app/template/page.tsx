"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TemplatePage() {
  // Inline styles
  const styles = {
    container: {
      backgroundColor: "#F5F5F5",
      padding: "50px 20px",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center",
      boxSizing: "border-box" as const,
    },
    title: {
      fontSize: "48px",
      fontWeight: "bold",
      color: "#222",
      textAlign: "center" as const,
      marginBottom: "30px",
    },
    contentWrapper: {
      display: "flex",
      flexDirection: "row" as const,
      flexWrap: "wrap" as const,
      maxWidth: "1200px",
      gap: "30px",
      justifyContent: "center" as const,
      alignItems: "center" as const,
    },
    textBlock: {
      flex: 1,
      minWidth: "300px",
      maxWidth: "500px",
      fontSize: "18px",
      lineHeight: "1.6",
      color: "#444",
    },
    imageBlock: {
      flex: 1,
      minWidth: "300px",
      display: "flex",
      justifyContent: "center" as const,
    },
    button: {
      backgroundColor: "#0070f3",
      color: "#fff",
      padding: "12px 24px",
      fontSize: "16px",
      borderRadius: "6px",
      border: "none",
      cursor: "pointer",
      marginTop: "20px",
      transition: "background-color 0.3s ease",
    },
  };

  return (
    <div style={styles.container}>
      {/* Animated Title */}
      <motion.h1
        style={styles.title}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        PAGE TITLE
      </motion.h1>

      {/* Content Wrapper */}
      <div style={styles.contentWrapper}>
        {/* Text Section */}
        <motion.div
          style={styles.textBlock}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            This is a reusable template for Next.js pages with clean inline
            styles and smooth animations using Framer Motion. Just replace text,
            image, and colors to fit your project.
          </p>
          <button
            style={styles.button}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#005bb5")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#0070f3")
            }
          >
            Call to Action
          </button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          style={styles.imageBlock}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Image
            src="https://via.placeholder.com/500x300.png?text=Sample+Image"
            alt="Sample Image"
            width={500}
            height={300}
            style={{
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
