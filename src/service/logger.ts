import * as fs from 'fs';

export class Logger {
    private static instance: Logger | null = null;
    private fileLog: string;
    private constructor() {
        this.fileLog = 'log.txt';
    }

    public static getInstance(): Logger {
        if (this.instance === null) {
            this.instance = new Logger();
        }

        return this.instance;
    }

    public log(message: string): void {
        const writeStream = fs.createWriteStream(this.fileLog, { flags: 'a' });
        writeStream.write(`${new Date().toISOString()} - ${message}\n`);
        writeStream.end();
    }
}
