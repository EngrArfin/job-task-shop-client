## SAR Shop Project


SAR Shop is a sleek and responsive web application hosted at SAR Shop, designed to showcase and sell a curated selection of clothing and electronic products. The platform offers a clean, user-friendly interface where customers can easily explore product categories, add items to their cart, and complete purchases securely. With its modern design and efficient functionality, SAR Shop aims to provide a smooth and enjoyable online shopping experience. The project is built using the latest web technologies, ensuring fast load times and a consistent experience across all devices.

---------------------Live Github Link-----------------------
Frontend Live link:  https://job-task-6e505.web.app

Backend Live link: https://sar-shop-server.vercel.app

Git Client : https://github.com/EngrArfin/job-task-shop-client

Git Server : https://github.com/EngrArfin/job-task-shop-server

## Tech Stack

**Client:** HTML, CSS, Tailwind CSS, DaisyUI, React,
 Express.js,MOngodB,Firebase,axios js, JWT

## Deployment Step By Step

npm create vite@latest modern-attendance-system-client -- --template 

Project Name: mechanical-keyboard-shop-client-app

√ Select a framework: » React
√ Select a variant: » Tailwaind CSS

cd modern-attendance-system-client

```bash
  npm install react-router-dom localforage match-sorter sort-by
```

```bash
 npm install -D tailwindcss postcss autoprefixer
```

```bash
 npx tailwindcss init -p
```


code .


```bash
  npm run dev
```

## Project Basic Setup

tailwaindconfig.js

```bash
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

```bash
  plugins: [require("daisyui")],
and add,
node: true,
```

index.css
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;

```

app.css
Remove all code

Install

```bash
  npm i -D daisyui@latest
```


```bash
  npm run dev
```


## Running Tests

To run tests, run the following command

```bash
  npm run build
```
```bash
  npm run test
```



## If You want project clone and Run Locally

Clone the project

```bash
  git clone https://github.com/EngrArfin/job-task-shop-client.git
```

Go to the project directory

```bash
  cd job-task-shop-client
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

