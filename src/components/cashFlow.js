function CashFlow({ addRecord }) {
  const [income, setIncome] = React.useState("");
  const [expense, setExpense] = React.useState("");
  const [assets, setAssets] = React.useState(0);
  const [debt, setDebt] = React.useState(0);

  const handleIncomeChange = (event) => setIncome(event.target.value);
  const handleExpenseChange = (event) => setExpense(event.target.value);

  const calculateCashflow = () => {
    const incomeValue = Number(income) || 0;
    const expenseValue = Number(expense) || 0;

    if (incomeValue >= expenseValue) {
      setAssets((prev) => prev + (incomeValue - expenseValue));
    } else {
      setDebt((prev) => prev + (expenseValue - incomeValue));
    }

    addRecord(incomeValue, expenseValue);
    setIncome("");
    setExpense("");
  };

  const capital = assets - debt;

  return (
    <div className="cashflow">
      <h2>CashFlow</h2>
      <input
        type="number"
        value={income}
        onChange={handleIncomeChange}
        placeholder="Income"
      />
      <input
        type="number"
        value={expense}
        onChange={handleExpenseChange}
        placeholder="Expense"
      />
      <button onClick={calculateCashflow}>Update</button>
      <p>Assets: {assets}</p>
      <p>Debt: {debt}</p>
      <p>Capital: {capital}</p>
    </div>
  );
}
