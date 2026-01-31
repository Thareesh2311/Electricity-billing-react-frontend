import React, { useState } from 'react';
import '../styles/Unitcalculator.css'; // Import CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css';

function UnitCalculator() {
  const [unitsConsumed, setUnitsConsumed] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [message, setMessage] = useState('');

  const calculateTotalCost = (units) => {
    const costPerUnit = 4.79; // Example cost per unit
    const totalCost = units * costPerUnit;
    return totalCost;
  };

  const handleCalculate = () => {
    const calculatedCost = calculateTotalCost(unitsConsumed);
    setTotalCost(calculatedCost);
    // Display a message based on the total cost
    if (calculatedCost === 0) {
      setMessage('Please enter valid units consumed.');
    } else {
      setMessage('Total cost calculated successfully.');
    }
  };

  const handleReset = () => {
    setUnitsConsumed(0);
    setTotalCost(0);
    setMessage('');
  };

  return (
    <div>
      <h2>Electricity Unit Calculator</h2>
      <label htmlFor="unitsConsumed">Enter Units Consumed:</label>
      <input
        type="number"
        id="unitsConsumed"
        value={unitsConsumed}
        onChange={(e) => setUnitsConsumed(parseInt(e.target.value))}
      />
      <button onClick={handleCalculate}>Calculate Total Cost</button>
      <button onClick={handleReset}>Reset</button>
      <div>
        <h3>Total Cost: ${totalCost.toFixed(2)}</h3>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default UnitCalculator;

