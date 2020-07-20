import Head from 'next/head'
import '../styles/styles.scss';

export default function Options() {
  return (
    <div className="container">
      <Head>
        <title>Rate Me</title>
        <link rel="icon" href="/icons/user-circle.svg" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossOrigin="anonymous"></link>
      </Head>

      <div className="title">
        <i className="fas fa-user-circle title__icon"></i>
        <h1 className="title__text">RATE <span>ME</span></h1>
        
        <div className="login">
          <div className="login__buttons">
            <button className="button--primary">Entrar com senha</button>
            <button className="button--secondary">Não possui cadastro?</button>
          </div>
        </div>
      </div>

    </div>
  )
}
