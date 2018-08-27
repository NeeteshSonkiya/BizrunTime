package ignite.DataGrid;

import org.apache.ignite.Ignite;
import org.apache.ignite.IgniteCache;
import org.apache.ignite.IgniteException;
import org.apache.ignite.Ignition;

public class Caching {

	  public static void main(String[] args) throws IgniteException {
		    try (Ignite ignite = Ignition.start()) {
		    	
		      // Put values in cache.
		      IgniteCache<Integer, String> cache = ignite.getOrCreateCache("myCache");
		      
		      cache.put(1, "Welcome to");
		      cache.put(2, "Ignite World !");
		      
		      // Get values from cache
		      // Broadcast 'Hello World' on all the nodes in the cluster.
		      ignite.compute().broadcast(()->System.out.println(cache.get(1) + " " + cache.get(2)));
		    }
		  }
}
