import { useState } from "react";

const PropsPage = ({ message }) => {
  const [customMessage, setCustomMessage] = useState(message);

  return (
    <div style={styles.container}>
      <h2>{customMessage}</h2>

      {/* Input Field to Change Message Dynamically */}
      <input
        type="text"
        value={customMessage}
        onChange={(e) => setCustomMessage(e.target.value)}
        placeholder="Enter a new message..."
        style={styles.input}
      />
    </div>
  );
};

// Modern Styling
const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f8f9fa",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    margin: "50px auto",
  },
  input: {
    marginTop: "15px",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100%",
  },
};

export default PropsPage;
