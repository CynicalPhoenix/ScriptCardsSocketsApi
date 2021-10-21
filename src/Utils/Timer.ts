export default class Timer{
    executeAfter(time: number, callback?: Function): Promise<void>{
        return new Promise((res, rej) => {
            let interval = setInterval(() => {
                callback !== undefined ? callback() : null;
                res();
                clearInterval(interval);
            }, 1000 * time);
        });
    };
};