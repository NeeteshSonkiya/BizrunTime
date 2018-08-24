package ignite.DataGrid;

import org.apache.ignite.Ignite;
import org.apache.ignite.IgniteCache;
import org.apache.ignite.Ignition;

public class DataGridEx {

	public static void main(String[] args) {
		try (Ignite ignite = Ignition.start("examples/config/example-ignite.xml")) {
		    IgniteCache<Integer, String> cache = ignite.getOrCreateCache("myCacheName");
		 
		    // Store keys in cache (values will end up on different cache nodes).
		    for (int i = 0; i < 10; i++)
		        cache.put(i, Integer.toString(i));
		 
		    for (int i = 0; i < 10; i++)
		        System.out.println("Got [key=" + i + ", val=" + cache.get(i) + ']');
		}
	}
}
