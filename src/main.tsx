import React, { ChangeEventHandler } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Components/Header/Header";

import styles from "./App.module.css";
import "./global.css";

import { ConvertInput } from "./Components/Input/ConvertInput";
import { ConvertBox } from "./Components/Box/ConvertBox";
import { RomanToArabic } from "./Components/ConvertToArabic";
import { ArabicToRoman } from "./Components/ConvertToRoman";
import { ConvertInputR } from "./Components/Input/ConvertInputR";

class App extends React.Component<any, any, any> {
  constructor(state: any) {
    super(state);

    this.state = {
      output: "",
    };
    this.handleInput = this.handleInput.bind(this);

    this.state = {
      outline: "",
    };
    this.handleBox = this.handleBox.bind(this);
  }

  handleInput(e: Readonly<any>) {
    this.setState({
      output: ArabicToRoman(e.target.value),
    });
  }
  handleBox(e: Readonly<any>) {
    this.setState({
      outline: RomanToArabic(e.target.value),
    });
  }

  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <main>
          <div className={styles.general}>
            <div className={styles.titlechoose}>
              <span>ESCOLHA UM TIPO NUMÉRICO:</span>
            </div>
            <div className={styles.lang}>
              <div className={styles.numbering}>
                <span className={styles.titleNumber}>Algarismo Romano</span>
                <ConvertInput onChange={this.handleInput} />
                <ConvertBox value={this.state.output} />
              </div>
              <div className={styles.numbering}>
                <span className={styles.titleNumber}>Número Arábico</span>
                <ConvertInputR onChange={this.handleBox} />
                <ConvertBox value={this.state.outline} />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
