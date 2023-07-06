export function Chef() {
    this.status = "ready"; // or cooking
}

// 상태 (대기 중인지 요리 중인지) 확인하고, 요리를 시켜야 함
Chef.prototype.isAvailable = function() {
    return this.status === "ready";
};

