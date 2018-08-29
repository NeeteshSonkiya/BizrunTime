package RxJava;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import io.reactivex.BackpressureStrategy;
import io.reactivex.Observable;
import io.reactivex.Single;
import io.reactivex.schedulers.Schedulers;
import io.reactivex.subscribers.TestSubscriber;

public class Disposable {

	public void thenAllValuesAreBufferedAndReceived() {
	    List testList = IntStream.range(0, 100000)
	      .boxed()
	      .collect(Collectors.toList());
	  
	    Observable observable = Observable.fromIterable(testList);
	    TestSubscriber<Integer> testSubscriber = observable
	      .toFlowable(BackpressureStrategy.BUFFER)
	      .observeOn(Schedulers.computation()).test();
	 
	    testSubscriber.awaitTerminalEvent();
	 
	    List<Integer> receivedInts = testSubscriber.getEvents()
	      .get(0)
	      .stream()
	      .mapToInt(object -> (int) object)
	      .boxed()
	      .collect(Collectors.toList());
	}
	
	public static void main(String[] args) {
		Disposable obj = new Disposable();
		obj.thenAllValuesAreBufferedAndReceived();
	}
}
