Funciona en Ultrawide también.

## Deployment

To deploy this project using Docker, follow these steps:

1.  **Build the Docker image:**
    ```bash
    docker build -t havn-website .
    ```

2.  **Run the Docker container:**
    ```bash
    docker run -p 3000:3000 havn-website
    ```

3.  Open your browser and navigate to `http://localhost:3000`.
