function App() {
  const [records, setRecords] = React.useState(() => {
    return JSON.parse(localStorage.getItem("records")) || [];
  });

  const addRecord = (income, expense) => {
    const date = new Date().toISOString().split("T")[0];
    const newRecord = { date, income, expense };
    const updatedRecords = [...records, newRecord];
    setRecords(updatedRecords);
    localStorage.setItem("records", JSON.stringify(updatedRecords));
  };

  return (
    <div className="container">
      <h1>Cashflow Tracker</h1>
      <CashFlow addRecord={addRecord} />
      <Calendar records={records} />
    </div>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
