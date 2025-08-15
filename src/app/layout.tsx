"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const strips = 6;
  const [showLadder, setShowLadder] = useState(false);

  // Hide ladder after animation
  useEffect(() => {
    if (showLadder) {
      const timer = setTimeout(() => setShowLadder(false), 800);
      return () => clearTimeout(timer);
    }
  }, [showLadder]);

  // Intercept internal link clicks
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a") as HTMLAnchorElement | null;

      if (link && link.href && !link.target && link.origin === window.location.origin) {
        e.preventDefault();
        setShowLadder(true);

        setTimeout(() => {
          router.push(link.pathname);
        }, 600);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [router]);

  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, overflow: "hidden" }}>
        {/* Page Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>

        {/* Futuristic Gradient Ladder */}
        <AnimatePresence>
          {showLadder && (
            <motion.div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "200vh",
                display: "flex",
                flexDirection: "row",
                zIndex: 9999,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {[...Array(strips)].map((_, index) => {
                const fromLeft = index % 2 === 0;
                return (
                  <motion.div
                    key={index}
                    style={{
                      width: `${100 / strips}%`,
                      height: "100%",
                      borderBottom: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "4px",
                      background: `conic-gradient(from 90deg at ${fromLeft ? "left" : "right"}, #84f0c1, #0ff, #aaa)`,
                      backdropFilter: "blur(16px)",
                    }}
                    initial={{
                      x: fromLeft ? "-100vw" : "100vw",
                      rotateY: fromLeft ? -10 : 10,
                      opacity: 0.5,
                    }}
                    animate={{ x: 0, rotateY: 0, opacity: 1 }}
                    exit={{
                      x: fromLeft ? "-100vw" : "100vw",
                      rotateY: fromLeft ? -10 : 10,
                      opacity: 0.5,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.06,
                      ease: "easeInOut",
                    }}
                  />
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </body>
    </html>
  );
}
