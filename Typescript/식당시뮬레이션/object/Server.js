export class Server {
    constructor(time) {
        this.status = "ready";
        this.time = time;
    }
    isAvailable() {
        return this.status === "ready";
    }
}
