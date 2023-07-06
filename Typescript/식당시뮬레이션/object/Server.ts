export class Server {
    status: string;
    time: number;

    constructor(time: number) {
        this.status = "ready";
        this.time = time;
    }

    isAvailable() {
        return this.status === "ready";
    }
}