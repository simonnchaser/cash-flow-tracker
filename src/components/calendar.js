function Calendar({ records }) {
  return (
    <div className="calendar">
      <h2>📅 Daily Records</h2>
      <ul>
        {records.map((record, index) => (
          <li key={index}>
            <strong>{record.date}</strong> - 💰 Income: {record.income} | 💸
            Expense: {record.expense}
          </li>
        ))}
      </ul>
    </div>
  );
}
