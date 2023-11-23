export default function Main({ title, children }) {
  return (
    <main className={title === "white__background" ? "white__background" : ""}>
      {children}
    </main>
  );
}
