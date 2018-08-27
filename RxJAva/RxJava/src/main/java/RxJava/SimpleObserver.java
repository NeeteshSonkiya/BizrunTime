package RxJava;

import io.reactivex.Observer;
import io.reactivex.disposables.Disposable;

public class SimpleObserver implements Observer<String>{

	@Override
	public void onSubscribe(Disposable d) {
		
		
	}

	@Override
	public void onNext(String string) {
		System.out.println(string);
		
	}

	@Override
	public void onError(Throwable error) {
		System.out.println(error);
		
	}

	@Override
	public void onComplete() {
		System.out.println("done");
		
	}

}
