import express, { Application, Request, Response } from 'express';
import path from 'path';

class Server {
    private app: Application;
    private port: number;

    constructor(port: number) {
        this.app = express();
        this.port = port;

        // Настройка статической директории
        this.app.use(express.static(path.join(__dirname, '../')));
        this.configureRoutes();
    }

    private configureRoutes(): void {
        this.app.get('/', this.handleRootRequest);
    }

    private handleRootRequest(req: Request, res: Response): void {
        res.sendFile(path.join(__dirname, '../index.html'));
    }

    public start(): void {
        this.app.listen(this.port, () => {
            console.log(`Server is running at http://localhost:${this.port}`);
        });
    }
}

export default Server;
