export class Chef{
    status: string;

    constructor() {
        this.status = "ready"; // or cooking
    }

    // 상태 (대기 중인지 요리 중인지) 확인하고, 요리를 시켜야 함
    isAvailable() {
        return this.status === "ready";
    }
}
