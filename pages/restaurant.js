import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ animal: animalInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setAnimalInput("");
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
      <Head>
         <title>OpenAI </title>
        <link rel="icon" href="/restaurant.png" />
        <nav class="navbar navbar-expand-lg bg-info">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">OpenAI</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>


       
      </Head>

      <main className={styles.main}>
        <img src="/restaurant.png" className={styles.icon} />
        <h3>Reseñas de restaurantes</h3>
        <form onSubmit={onSubmit}>
          <textarea
            className={styles.inputRestaurant}
            type="text"
            name="animal"
            placeholder="Escribir texto"
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          <br />
          <input className={styles.btnRestaurant} type="submit" value="Generar" />
        </form>
        <div className={styles.resultRestaurant}>{result}</div>
      </main>
    </div>
  );
}
