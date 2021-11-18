import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import styles from './LoginPage.module.css';
import Logout from '../../components/Logout/Logout';

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <svg
          width="30"
          height="30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.52 7.143 18.72 2.889l-.805-1.668C17.387.137 16.103-.31 15.045.23L1.44 7.143h2.08ZM23.262 2.857c-.183 0-.366.027-.549.082l-3.472 1.039L8.64 7.143h17.279l-.65-2.605c-.249-1.016-1.09-1.68-2.006-1.68Z"
            fill="#24CCA7"
          />
          <path
            d="M26.587 8.037H1.688A1.686 1.686 0 0 0 .06 9.27C.024 9.41 0 9.558 0 9.708V28.33c0 .922.755 1.67 1.684 1.67h24.9c.93 0 1.684-.748 1.684-1.67v-4.663h-9.995c-1.58 0-2.864-1.273-2.864-2.84V17.107c0-.768.31-1.467.812-1.978a2.843 2.843 0 0 1 2.049-.86h9.998V9.709a1.674 1.674 0 0 0-1.68-1.67Z"
            fill="#4A56E2"
          />
          <path
            d="M29.45 15.868a1.686 1.686 0 0 0-1.134-.438H18.273c-.93 0-1.685.75-1.685 1.672v3.72c0 .922.755 1.671 1.685 1.671H28.316c.192 0 .373-.034.545-.09.223-.074.421-.194.59-.348A1.66 1.66 0 0 0 30 20.822v-3.72c0-.488-.212-.93-.55-1.234Zm-7.66 3.426a.84.84 0 0 1-.842.836h-.56a.84.84 0 0 1-.842-.836v-.555c0-.267.125-.504.324-.655a.855.855 0 0 1 .518-.18H20.948a.84.84 0 0 1 .842.835v.555Z"
            fill="#4A56E2"
          />
        </svg>

        <h1 className={styles.title}>WALLET</h1>
      </div>
      <LoginForm />
      <Logout />
    </div>
  );
};
export default LoginPage;
