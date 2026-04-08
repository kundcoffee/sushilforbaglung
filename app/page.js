export default function ComingSoon() {
  return (
    <main style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🚧 Coming Soon</h1>
        <p style={styles.text}>
          Something exciting is coming to <strong>Baglung</strong>!
        </p>
        <h2 style={styles.name}>Sushil</h2>
        <p style={styles.subtext}>
          We’re working hard to launch our new website.
        </p>

        <div style={styles.footer}>
          <p>Stay tuned 👀</p>
        </div>
      </div>
    </main>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #111, #333)",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    textAlign: "center",
    padding: "40px",
    borderRadius: "16px",
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
  },
  title: {
    fontSize: "40px",
    marginBottom: "10px",
  },
  name: {
    fontSize: "28px",
    margin: "10px 0",
    color: "#00ffcc",
  },
  text: {
    fontSize: "18px",
  },
  subtext: {
    fontSize: "14px",
    opacity: 0.7,
  },
  footer: {
    marginTop: "20px",
    fontSize: "14px",
    opacity: 0.8,
  },
};
