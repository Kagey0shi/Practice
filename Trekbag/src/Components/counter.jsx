export default function Counter({ totalNoOfItems, totalPackedItems }) {
  return (
    <p>
      <b>{totalPackedItems}</b> / {totalNoOfItems} items packed
    </p>
  );
}
