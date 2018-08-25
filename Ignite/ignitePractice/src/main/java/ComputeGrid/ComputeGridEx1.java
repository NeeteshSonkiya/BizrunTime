package ComputeGrid;

import org.apache.ignite.Ignite;
import org.apache.ignite.Ignition;
import org.apache.ignite.cluster.ClusterGroup;

public class ComputeGridEx1 {

	public static void main(String[] args) {
		
		try(Ignite ignite = Ignition.start("examples/config/example-ignite.xml"))
		{
			//Broadcast closure only to remote node
			ClusterGroup rmts = ignite.cluster().forRemotes();
			ignite.compute(rmts).broadcast(() -> System.out.println("Test ComputeGrid on Remote node"));
			
		}
	}
}
