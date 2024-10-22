import React from 'react';
import { createRoot } from 'react-dom/client';

class CalcApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      angka1: 0,
      angka2: 0,
      result: 0
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: Number(e.target.value) });
  };

  handleAddition = (e) => {
    e.preventDefault();
    const { angka1, angka2 } = this.state;
    this.setState({ result: angka1 + angka2 });
  };

  handleSubtraction = (e) => {
    e.preventDefault();
    const { angka1, angka2 } = this.state;
    this.setState({ result: angka1 - angka2 });
  };

  render() {
    const { angka1, angka2, result } = this.state;
    return (
      <div>
        <h1>Calculator: Penjumlahan dan Pengurangan</h1>
        <form>
          <div>
            <label>Angka 1: </label>
            <input type="number" name="angka1" value={angka1} onChange={this.handleChange} />
          </div>
          <div>
            <label>Angka 2: </label>
            <input type="number" name="angka2" value={angka2} onChange={this.handleChange} />
          </div>
          <div>
            <button onClick={this.handleAddition}>+</button>
            <button onClick={this.handleSubtraction}>-</button>
          </div>
        </form>
        <h2>Hasil: {result}</h2>
      </div>
    );
  }
}

const root = createRoot(document.getElementById('root'));
root.render(<CalcApp />);
