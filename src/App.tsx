import React from "react";
import styles from "./App.module.scss";
import {ButtonControls, AutocompleteControl} from "./app/providers";

function App(props: any) {

  return (
    <main className={styles.container}>
      <ButtonControls/>
      <AutocompleteControl/>
    </main>
  )
}

export default App;
