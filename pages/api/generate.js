import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not La clave API de OpenAI no está configurada, siga las instrucciones en README.md",
      }
    });
    return;
  }

  const variable1 = req.body.variable1 || '';
  const variable2 = req.body.variable2 || '';
  const var1 = req.body.var1 || ''
  const var2 = req.body.var2 || ''
  if (variable1.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Ingresar un texto",
      }
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(variable1, variable2),
      temperature: 0.5,
      max_tokens: 1097,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
    res.status(200).json({ result: completion.data.choices[0].text });

  } catch (error) {
    // Considere ajustar la lógica de manejo de errores para su caso de uso
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error con la solicitud de API de OpenAI:: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'Ocurrió un error durante su solicitud.',
        }
      });
    }
  }
}

function generatePrompt(variable1, variable2) {
  const var01 =
    variable1[0].toUpperCase() + variable1.slice(1).toLowerCase();
  const var02 =
    variable2[0].toUpperCase() + variable2.slice(1).toLowerCase();
  return ` Generar una matriz de consistencia en formato html  con style "bootstrap" con class="table-responsive" tomando en cuenta "Problemas general y especificos", "definicion de la variable" , "objetivos general y especificos" , "hipotisis general y especificos", dimensiones, "variable indicadores" , si es cualitativa o cuantitativas y metodologia
 de las siguientes variables:
${var01} y ${var02}`;
}

