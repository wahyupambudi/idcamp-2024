import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const CalcApp = () => {
  const [angka1, setAngka1] = useState(0);
  const [angka2, setAngka2] = useState(0);
  const [result, setResult] = useState(0);

  const handleAddition = (e) => {
    e.preventDefault();
    setResult(Number(angka1) + Number(angka2));
  };

  const handleSubtraction = (e) => {
    e.preventDefault();
    setResult(Number(angka1) - Number(angka2));
  };

  return (
    <div>
      <h1>Calculator: Penjumlahan dan Pengurangan</h1>
      <form>
        <div>
          <label>Angka 1: </label>
          <input type="number" value={angka1} onChange={(e) => setAngka1(e.target.value)} />
        </div>
        <div>
          <label>Angka 2: </label>
          <input type="number" value={angka2} onChange={(e) => setAngka2(e.target.value)} />
        </div>
        <div>
          <button onClick={handleAddition}>Tambah</button>
          <button onClick={handleSubtraction}>Kurangi</button>
        </div>
      </form>
      <h2>Hasil: {result}</h2>
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<CalcApp />);
