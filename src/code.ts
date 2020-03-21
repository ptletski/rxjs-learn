import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { interval } from "rxjs/Observable/interval"; 
import 'rxjs/add/operator/skipUntil';
import { Subscriber } from "rxjs";

// Presentation helper
function addItem(val:any) {
    let node = document.createElement("li");
    let textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}


let observable1 = Observable.create((data:any) => {
    let i = 1;
    setInterval(() => {
        data.next(i++)
    }, 1000)
})

let observable2 = new Subject();

setTimeout(() => {
    observable2.next("Hey!")
}, 3000);

let newObservable = observable1.skipUntil(observable2);

newObservable.subscribe((x:any) => addItem(x));
