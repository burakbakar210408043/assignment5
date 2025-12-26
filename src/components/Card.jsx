export default function Card({ children }) {
  const style = {
    border: "1px solid #ddd",
    padding: 12,
    marginBottom: 12,
    borderRadius: 6,
  };

  return <div style={style}>{children}</div>;
}
