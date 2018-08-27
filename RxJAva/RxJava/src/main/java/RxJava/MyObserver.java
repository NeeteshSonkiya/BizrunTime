package RxJava;

import io.reactivex.Observable;
import io.reactivex.Observer;
import io.reactivex.disposables.Disposable;

public class MyObserver implements Observer<String>{

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String[] letters = {"a", "b", "c", "d", "e", "f", "g"};
		Observable<String> observable = Observable.fromArray(letters);
		observable.subscribe(new MyObserver());

	}

	@Override
	public void onSubscribe(Disposable d) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void onNext(String data) {
		System.out.println(data);
		
	}

	@Override
	public void onError(Throwable e) {
		System.out.println("Error: " + e);
		
	}

	@Override
	public void onComplete() {
		System.out.println("Completed.......");
	}

}
