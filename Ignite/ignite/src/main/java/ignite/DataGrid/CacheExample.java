package ignite.DataGrid;

import org.apache.ignite.Ignite;
import org.apache.ignite.IgniteCache;
import org.apache.ignite.Ignition;
import org.apache.ignite.cache.CacheAtomicityMode;
import org.apache.ignite.configuration.CacheConfiguration;

public class CacheExample {

	private static final CacheAtomicityMode TRANSACTIONAL = null;

	public static Ignite ignite = Ignition.start();

	public void Cache() {
		
		// Obtain instance of cache named "myCache".
		// Note that different caches may have different generics.
		IgniteCache<Integer, String> cache = ignite.cache("myCache");
		System.out.println(cache);
	}
	
	
	public void DynamicCache() {
		

		CacheConfiguration cfg = new CacheConfiguration();

		cfg.setName("myCache");
		cfg.setAtomicityMode(TRANSACTIONAL);

		// Create cache with given name, if it does not exist.
		IgniteCache<Integer, String> cache = ignite.getOrCreateCache(cfg);
		cache.put(1, "Neetesh");
		cache.put(2, "sonkiya");

		
		System.out.println(cache.get(1) + " " + cache.get(2));
	}
	
	
	
	public static void main(String[] args) {
		
		CacheExample obj = new CacheExample();
		obj.Cache();
		obj.DynamicCache();
		
	}
}
