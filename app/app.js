import './styles.less';
import Rx from '@reactivex/rxjs/dist/cjs/Rx';

var backendCall = Rx.Observable.fromPromise(fetch('http://localhost:9000').then(res => res.json()));
backendCall.subscribe(data => {
    console.log(data);
});