
import { useState } from "react";
import styles from "./index.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-ui-kit/css/mdb.min.css';
import { Loading } from "./components/Loading";
import { Head } from "./components/Head.js";
export default function Home() {
  const [variable1Input, setVariable1Input] = useState("");
  const [variable2Input, setVariable2Input] = useState("");
  const [result, setResult] = useState();
  const [divVisible, setDivVisible] = useState(false);
  const [loadingVisible, setLoadingVisible] = useState(false);
  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ variable1: variable1Input, variable2: variable2Input }),

      });
      const data = await response.json();

      if (response.status !== 200) {
        throw data.error || new Error(`Solicitud fallida con estado ${response.status}`);
      }
      setResult(data.result);
    
      setLoadingVisible(loadingVisible);

      setDivVisible(!divVisible);
    } catch (error) {
      // Considere implementar su propia lógica de manejo de errores aquí
      console.error(error);
      alert(error.message);
    }
  }

 


  return (
    <div>
 
      <main class={styles.main}> 
      
        <div class="container text-center mt-3">
              
           
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header bg-success">
                  <h3 class="text-light">Generar matriz de consistencia </h3>
                </div>
                <div class="card-body">
                  <form onSubmit={onSubmit} >
                    <div class="mb-3">
                      <input type="text"
                        name="variable1"
                        placeholder="Escribir variable 1 (Eg: Aplicación movil, etc...) "
                        value={variable1Input}
                        onChange={(e) => setVariable1Input(e.target.value)} class="form-control" />
                    </div>
                    <div class="mb-3">
                      <input
                        type="text"
                        name="variable2"
                        placeholder="Escribir variable 2 (Eg: Mejorar proceso de ventas, etc...) "
                        value={variable2Input}
                        onChange={(e) => setVariable2Input(e.target.value)} class="form-control" />
                    </div>
                    <br />
                    <input class="btn btn-primary btn-lg" type="submit" value="Generar" />
                  </form>
                </div>
              </div>
            </div>
          </div>
   
          <div>
            <div>
              {divVisible &&
                <div>
                  <div class="card mt-4" >
                    <div class="card-body">
                      <div class="card-header bg-success">
                        <h3 class="text-light">Matriz de consistencia </h3>
                      </div>
                      <div class="card-body">
                        <div dangerouslySetInnerHTML={{ __html: result }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              }
              {loadingVisible &&
                <div>
                 <Loading></Loading>
                    <div><Head/></div>
                </div>
              }
            </div>
          </div>
        </div>
      </main>
    </div>
  )
};

