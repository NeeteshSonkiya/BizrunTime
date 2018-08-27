package RxJava;

import io.reactivex.Observable;

public class RxJavaExample3 {

	public static void main(String[] args) {
		String[] letters = {"a", "b", "c", "d", "e", "f", "g"};
		Observable.just(letters)
		  .subscribe(letter -> System.out.println(letter),
				  Throwable::printStackTrace,
				  () -> System.out.println("Completed....") );
	}
	
}
