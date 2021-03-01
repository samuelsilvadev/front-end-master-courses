import nav from './nav';
import { $img } from './hero';
import { top, $footer } from './footer';
import Api from './api.ts';

console.log(nav);
console.log(top);

const resultPromise = new Api().get();
resultPromise.then(console.log);

document.body.appendChild($img);
document.body.appendChild($footer);
