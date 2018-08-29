package RxJava;

import java.util.concurrent.TimeUnit;

import io.reactivex.Observable;
import io.reactivex.observables.ConnectableObservable;
import io.reactivex.schedulers.Schedulers;

public class OperatorExampl1 {

	static Integer result = 0 ;
	public void callFilter()
	{
		
		Integer[] numbers = {10, 21, 30, 40, 50};
		Observable.fromArray(numbers)
		  .filter(i -> (i % 2 == 1))
		  .subscribe(i -> result += i);
		System.out.println(result);
		  
	}
	
	public void callConnectable()
		{
			String[] result = {""};
		ConnectableObservable<Long> connectable
		  = Observable.interval(200, TimeUnit.MILLISECONDS).publish();
		connectable.subscribe(i -> result[0] += i);
		connectable.connect();
		System.out.println(result);
	
	}
	
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		OperatorExampl1 obj = new OperatorExampl1();
		obj.callFilter();
		obj.callConnectable();
	}

}
