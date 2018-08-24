//package ignite.compute;
//
//import javax.cache.Cache;
//
//import org.apache.ignite.Ignite;
//import org.apache.ignite.IgniteCache;
//import org.apache.ignite.binary.BinaryObject;
//import org.apache.ignite.cache.query.QueryCursor;
//import org.apache.ignite.cache.query.ScanQuery;
//import org.apache.ignite.lang.IgniteRunnable;
//import org.apache.ignite.resources.IgniteInstanceResource;
//
//public class App {
//
//	public static void main(String[] args) {
//		// TODO Auto-generated method stub
//		
//		Ignite ignite = Ignition.start();
//
//		long cityId = 2; // Id for Denver
//
//		// Sending the logic to a cluster node that stores Denver and its residents.
//		ignite.compute().affinityRun("SQL_PUBLIC_CITY", cityId, new IgniteRunnable() {
//		  
//		  @IgniteInstanceResource
//		  Ignite ignite;
//		  
//		  @Override
//		  public void run() {
//		    // Getting an access to Persons cache.
//		    IgniteCache<BinaryObject, BinaryObject> people = ignite.cache("Person").withKeepBinary();
//		 
//		    ScanQuery<BinaryObject, BinaryObject> query = 
//		        new ScanQuery <BinaryObject, BinaryObject>();
//		 
//		    try (QueryCursor<Cache.Entry<BinaryObject, BinaryObject>> cursor = people.query(query)) {
//		      
//		      // Iteration over the local cluster node data using the scan query.
//		      for (Cache.Entry<BinaryObject, BinaryObject> entry : cursor) {
//		        BinaryObject personKey = entry.getKey();
//		 
//		        // Picking Denver residents only only.
//		        if (personKey.<Long>field("CITY_ID") == cityId) {
//		            person = entry.getValue();
//		 
//		            // Sending the warning message to the person.
//		        }
//		      }
//		    }
//		  }
//		}
//	}
//
//}
