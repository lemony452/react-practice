export default function layout({ children }) {
  return (
    <section>
      <h1 style={{ backgroundColor: "green" }}>
        This is Post Detail Page Layout
      </h1>
      {children}
    </section>
  );
}
