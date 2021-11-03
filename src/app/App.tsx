import React from 'react';
import styles from './App.module.css';
import Title from './components/Title/Title';

function App(): JSX.Element {
  return (
    <main className={styles.container}>
      <img
        className={styles.image}
        src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
        alt="A crowd in front of a concert"
      />
      <div className={styles.form__container}>
        <Title />
        <form className={styles.form}>
          <input
            type="text"
            placeholder="First name"
            className={styles.form__input}
          />
          <input
            type="text"
            placeholder="Last name"
            className={styles.form__input}
          />
          <input type="submit" className={styles.form__submit} value="Login" />
        </form>
      </div>
    </main>
  );
}

export default App;
