function myObservable(observer) {

    function activate() {
        observer.next('hello');
        observer.complete();
    }
    const id = setTimeout(activate, 500);
    return () => clearTimeout(id);
}


const observer = {
    next(value) {
        console.log('next -> ' + value);
    },
    error() { },
    complete() {
        console.log('complete');
    }
}

const unsub = myObservable(observer);
// setTimeout(unsub,100);