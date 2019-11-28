import React from 'react';
import styles from './App.module.css';
import Display from "./Display";
import Buttons from "./Buttons";


const App = () => {
  return (
    <div className={styles.app}>
        <Display/>
        <Buttons/>
    </div>
  );
};


export default App;
