# OpenAI API Quickstart - Node.js example app

Esta es una aplicación de ejemplo de generador de nombres de mascotas utilizada en la API de OpenAI [quickstart tutorial](https://platform.openai.com/docs/quickstart). Utiliza el [Next.js](https://nextjs.org/) framework con [React](https://reactjs.org/). Consulte el tutorial o siga las instrucciones a continuación para configurarlo.

![Generador de matriz de consistencia con Utilizando API OpenAI]


## Setup

1. If you don’t have Node.js installed, [install it from here](https://nodejs.org/en/) (Node.js version >= 14.6.0 required)

2. Clone this repository

3. Navigate into the project directory

   ```bash
   $ cd openai-quickstart-node
   ```

4. Install the requirements

   ```bash
   $ npm install
   ```

5. Make a copy of the example environment variables file

   On Linux systems: 
   ```bash
   $ cp .env.example .env
   ```
   On Windows:
   ```powershell
   $ copy .env.example .env
   ```
6. Add your [API key](https://platform.openai.com/account/api-keys) to the newly created `.env` file

7. Run the app

   ```bash
   $ npm run dev
   ```

¡Ahora debería poder acceder a la aplicación en [http://localhost:3000](http://localhost:3000)! Para conocer el contexto completo detrás de esta aplicación de ejemplo, consulte el [tutorial] (https://platform.openai.com/docs/quickstart).
