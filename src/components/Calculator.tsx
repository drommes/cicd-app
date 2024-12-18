import { useState } from "react";

interface CalculatorState {
  total: number;
  previousTotal: number;
}

export default function Calculator() {
  const [calcState, setCalcState] = useState<CalculatorState>({ total: 0, previousTotal: 0 });
  const [value, setValue] = useState(0);

  const handleAddClick = () => {
    setCalcState({ total: calcState.total + value, previousTotal: calcState.total});
  };

  return (
    <div className="calculator">
      <h2>Simple Calculator</h2>
      <p>
        <input
          type="text"
          id="value"
          name="value"
          onChange={(event) => { setValue(Number(event.target.value)); }}
          value={value}
        />
      </p>
      <button className="btn btn-primary" type="button" onClick={handleAddClick}> Add </button>
      <p className="card-text">Total: {calcState.total}</p>
      <p className="card-text">Previous Total: {calcState.previousTotal}</p>
    </div>
  );
}
