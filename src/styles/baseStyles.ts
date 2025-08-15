import { theme } from "./theme";

export const baseSplitContainer: React.CSSProperties = {
  display: "flex",
  height: "100vh",
  width: "100%",
};

export const formSection: React.CSSProperties = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.color4,
};

export const visualSection: React.CSSProperties = {
  flex: 1,
  backgroundColor: theme.color1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: theme.color4,
  fontSize: "24px",
  fontWeight: "bold",
};

export const cardStyle: React.CSSProperties = {
  width: "100%",
  maxWidth: "350px",
  padding: "30px",
  backgroundColor: "#fff",
  borderRadius: "10px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

export const titleStyle: React.CSSProperties = {
  textAlign: "center",
  marginBottom: "10px",
  color: theme.color1,
};

export const inputStyle: React.CSSProperties = {
  padding: "10px",
  borderRadius: "6px",
  border: `1px solid ${theme.color3}`,
  fontSize: "14px",
};

export const buttonStyle: React.CSSProperties = {
  padding: "10px",
  border: "none",
  borderRadius: "6px",
  backgroundColor: theme.color2,
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
};
