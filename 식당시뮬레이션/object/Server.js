export function Server(time) {
    this.status = "ready"; // or serving
    this.time = time;
}

// 상태 (대기 중인지 서빙 중인지) 확인하고, 서빙을 시켜야 함
Chef.prototype.isAvailable = function() {
    return this.status === "ready";
};