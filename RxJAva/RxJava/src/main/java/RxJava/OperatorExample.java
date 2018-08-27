package RxJava;

import io.reactivex.Observable;

public class OperatorExample {

	String[] letters = {"a", "b", "c"};
	static String result = "";
	
	public void callScan() {
		Observable.fromArray(letters)
		  .scan(new StringBuilder(), StringBuilder::append)
		  .subscribe(total -> result += total.toString());
		//assertTrue(result.equals("aababc"));
		System.out.println(result);
	}
	
//	public void callGroupBy() {
//		int[] numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
//		Observable.fromArray(numbers)
//		  .groupBy(i -> 0 == (i%2) ? "EVEN" : "ODD")
//		  .subscribe(group ->
//		    group.subscribe((number) -> {
//		        if (group.getKey().toString().equals("EVEN")) {
//		            EVEN[0] += number;
//		        } else {
//		            ODD[0] += number;
//		        }
//		    })
//		  );
//	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		OperatorExample obj = new OperatorExample();
		obj.callScan();

	}

}
