
export class Loggable {
    protected name: string;


    public log(...params: any[]) {
        console.log("[", this.dateTimeString(), "]", this.name, " : ", ...params);
    }
    public warn(...params: any[]) {
        console.warn("[", this.dateTimeString(), "]", this.name, " : ", ...params);
    }
    public error(...params: any[]) {
        console.error("[", this.dateTimeString(), "]", this.name, " : ", ...params);
    }


    public constructor() {
        this.name = (this.constructor as any).name;
    }


    private dateTimeString(): string {
        return new Date().toLocaleString();

    }
}

