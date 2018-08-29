package RxJava;

import io.reactivex.Observable;
import io.reactivex.Observer;
import io.reactivex.disposables.Disposable;

public class RxJavaExample1 implements Observer{

	static String result = "";
	
	public static void main(String[] args) {

		String[] letters = {"a", "b", "c", "d", "e", "f", "g"};
		Observable<String> observable = Observable.fromArray(letters);
		observable.subscribe(new RxJavaExample1());
	}

	@Override
	public void onSubscribe(Disposable d) {
		
	}

	@Override
	public void onNext(Object t) {
		result += t;
	}

	@Override
	public void onError(Throwable e) {
		System.out.println("Error: " + e);
		
	}

	@Override
	public void onComplete() {
		System.out.println(result.toUpperCase());
		System.out.println("Completed........");
		
	}

}