package ComputeGrid;

import java.util.Arrays;
import java.util.Collection;

import org.apache.ignite.Ignite;
import org.apache.ignite.Ignition;

public class ComputeGridEx2 {

	public static void main(String[] args) {
		
		try(Ignite ignite = Ignition.start("examples/config/example-ignite.xml"))
		{
			//1. Spilt a sentence into words.
			//2. Pass each word to a closure.
			//3. Excute each closure on different cluster members.
			
			Collection<Integer> res  = ignite.compute().apply(
					(String word) -> {
						System.out.println("Counting characters in word '" + word + "'");
						return word.length();
					},
					Arrays.asList("How many characters".split(" "))
					);
			
			//Add all the word lengths recieved from cluster modes.
			int total = res.stream().mapToInt(Integer::intValue).sum();
			
			System.out.println("Total characters: " + total);
		}
	}
}
