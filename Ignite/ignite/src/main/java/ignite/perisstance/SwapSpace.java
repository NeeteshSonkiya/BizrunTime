package ignite.perisstance;

import org.apache.ignite.Ignite;
import org.apache.ignite.Ignition;
import org.apache.ignite.configuration.DataRegionConfiguration;
import org.apache.ignite.configuration.DataStorageConfiguration;
import org.apache.ignite.configuration.IgniteConfiguration;

public class SwapSpace {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		// Ignite configuration.
		IgniteConfiguration cfg = new IgniteConfiguration();

		// Durable Memory configuration.
		DataStorageConfiguration storageCfg = new DataStorageConfiguration();

		// Creating a new data region.
		DataRegionConfiguration regionCfg = new DataRegionConfiguration();

		// Region name.
		regionCfg.setName("500MB_Region");

		// Setting initial RAM size.
		regionCfg.setInitialSize(100L * 1024 * 1024);

		// Setting region max size equal to physical RAM size(5 GB)
		regionCfg.setMaxSize(5L * 1024 * 1024 * 1024);
		        
		// Enable swap space.
		regionCfg.setSwapPath("/path/to/some/directory");
		        
		// Setting the data region configuration.
		storageCfg.setDataRegionConfigurations(regionCfg);
		        
		// Applying the new configuration.
		cfg.setDataStorageConfiguration(storageCfg);
		
		Ignite ignite = Ignition.start(cfg);
	}

}
