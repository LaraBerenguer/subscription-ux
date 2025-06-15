# Subscription UX - React + Node.js Dockerized Project

This project includes a **frontend built with React** and a **backend with Node.js**, fully containerized using Docker and Docker Compose. Hope you like it!

## 🚀 How to Run Locally

### ✅ Prerequisites

- Have [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed (includes Docker Compose).

### Steps run the project

1. **🗂️ Unzip the Project:**

 Extract the .zip file into a folder you can easily access.
    For example:
    - On Windows

    ````sh
 C:\Users\YourName\Documents\my-project
 ````
    - On macOS/Linux:

    ````sh
 ~/Documents/my-project
 ````

2. **Optional if no Zip: Clone the repository and access the project's root folder:**

   ````sh
 git clone https://github.com/LaraBerenguer/subscription-ux
 cd subscription-ux
 ````

3. **🐳 Build and deploy the services (frontend and backend):**

   ````sh
 docker-compose up --build
 ````

   This will download the necessary images, install dependencies and build both services.

4. **▶️ Access the application:**

   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:8080/api/](http://localhost:8080/api/)

5. **🛑 To stop the services:**

   Press `Ctrl+C` in the terminal and then run:

   ```sh
 docker-compose down
 ````

### 🧾 Notes

- The frontend is served with NGINX and the backend is a Node.js server.
- If you need to change the ports, edit the [``docker-compose.yml`](docker-compose.yml) file.
- There is no need to install Node.js or dependencies manually.

### 🧩 Troubleshooting

If something isn’t working, check:

- Docker Desktop is running
- You're in the correct directory (where the docker-compose.yml file is)
- No other apps are using the same ports
- Terminal shows clear build or runtime errors
- Check browser console and Docker logs for more info