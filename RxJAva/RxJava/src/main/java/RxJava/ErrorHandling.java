package RxJava;

import io.reactivex.Observable;


public class ErrorHandling {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		String[] arr = {"rectangle", "circle", "square", "tringle"};
		Observable<String> observable = Observable.fromArray(arr);
		 
		observable.map(d -> d.toUpperCase()).subscribe(new ErrObserver<>());
	}
}
