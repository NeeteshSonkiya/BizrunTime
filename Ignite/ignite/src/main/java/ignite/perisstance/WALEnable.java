package ignite.perisstance;

import org.apache.ignite.Ignite;
import org.apache.ignite.Ignition;
import org.apache.ignite.configuration.DataStorageConfiguration;
import org.apache.ignite.configuration.IgniteConfiguration;
import org.apache.ignite.configuration.WALMode;

public class WALEnable {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// Apache Ignite node configuration.
		IgniteConfiguration cfg = new IgniteConfiguration();

		// Native Persistence configuration.
		DataStorageConfiguration psCfg = new DataStorageConfiguration();

		// Enabling the persistence.
		psCfg.getDefaultDataRegionConfiguration().setPersistenceEnabled(true);

		// Set WAL Mode.
		psCfg.setWalMode(WALMode.LOG_ONLY);

		// Enabling the Persistent Store.
		cfg.setDataStorageConfiguration(psCfg);

		//Additional parameters.
		
		Ignite ignite = Ignition.start(cfg);

	}

}
