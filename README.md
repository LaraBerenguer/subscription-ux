# Subscription UX

This project includes a **frontend built with React, TypeScript, and Vite**, and a **backend with Node.js**, fully containerized using Docker and Docker Compose. Hope you like it!

## 🚀 How to Run Locally

### ✅ Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed (includes Docker Compose).

### 📝 Steps to Run the Project

1. **🗂️ Unzip the Project**

   Extract the `.zip` file into a folder you can easily access. For example:

   - **On Windows:**
     ```sh
     C:\Users\YourName\Documents\my-project
     ```
   - **On macOS/Linux:**
     ```sh
     ~/Documents/my-project
     ```

2. **🌐 (Optional) If you have no Zip: Clone the repository and access the project's root folder**
   ```sh
   git clone https://github.com/LaraBerenguer/subscription-ux
   cd subscription-ux
   ```

3. **🔑 Set up .env configuration**
   - Create a `.env` file in the frontend directory with this content:
     ```env
     VITE_API_URL=your_local_host/api
     ```
   - You can use [http://localhost:8080/](http://localhost:8080/) for this project.

4. **🐳 Build and deploy the services (frontend and backend)**

   Make sure your Docker Desktop or Docker service in Linux is up and running and then run:
   
   ```sh
   docker-compose up --build
   ```
   This will download the necessary images, install dependencies, and build both services.

5. **▶️ Access the application**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:8080/api/](http://localhost:8080/api/)

6. **🛑 To stop the services**
   Press `Ctrl+C` in the terminal and then run:
   ```sh
   docker-compose down
   ```

### 👤 User flow
- Introduce a valid email.
- Look for your code in you backend log. It will look something like this:
```sh
   Code for email=test@test.com: 068107
   ```
- Enter the code and tap Verify.
- Choose your plan and tap on Start my free trial.
- Congrats! You're done :)

## 🧾 Notes

- The frontend is served with NGINX and the backend is a Node.js server.
- If you need to change the ports, edit the [`docker-compose.yml`](docker-compose.yml) file.
- There is no need to install Node.js or dependencies manually.

## 🧩 Troubleshooting

If something isn’t working, check:

- Docker Desktop is running
- You're in the correct directory (where the `docker-compose.yml` file is)
- No other apps are using the same ports
- Terminal shows clear build or runtime errors
- Check browser console and Docker logs for more info