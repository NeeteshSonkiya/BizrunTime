package ComputeGrid;

import org.apache.ignite.Ignite;
import org.apache.ignite.Ignition;
import org.apache.ignite.configuration.IgniteConfiguration;

public class ComputeGridEx {

	public static void main(String[] args) {
		

IgniteConfiguration cfg = new IgniteConfiguration();
// Enable or disable peer class loading.
cfg.setPeerClassLoadingEnabled(false);
// Start Ignite node.

		
		try(Ignite ignite = Ignition.start(cfg))
		{
			//broadcast closure to all cluster
			ignite.compute().broadcast(() -> System.out.println("Test Compute Grid on all cluster"));	
		}
	}
}
