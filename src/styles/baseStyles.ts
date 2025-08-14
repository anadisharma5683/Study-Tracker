// styles/baseStyles.ts
export const baseContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  backgroundColor: "#f9f9f9",
  padding: "20px",
};

export const cardStyle = {
  backgroundColor: "#fff",
  padding: "40px",
  borderRadius: "10px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  width: "100%",
  maxWidth: "500px",
  boxSizing: "border-box" as const,
};

export const titleStyle = {
  fontSize: "28px",
  marginBottom: "20px",
  textAlign: "center" as const,
  color: "#222",
};

export const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "16px",
  boxSizing: "border-box" as const,
};

export const buttonStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#0070f3",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  fontSize: "16px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};
