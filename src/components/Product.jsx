import Card from "./Card.jsx";

export default function Product({ title, price }) {
  return (
    <Card>
      <h3 style={{ margin: "0 0 8px 0" }}>{title}</h3>
      <p style={{ margin: 0 }}>Price: ${price}</p>
    </Card>
  );
}
