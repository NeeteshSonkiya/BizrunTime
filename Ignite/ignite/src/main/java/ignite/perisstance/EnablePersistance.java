package ignite.perisstance;

import org.apache.ignite.Ignite;
import org.apache.ignite.Ignition;
import org.apache.ignite.configuration.DataStorageConfiguration;
import org.apache.ignite.configuration.IgniteConfiguration;

public class EnablePersistance {

	public void ignitePersistaceOn()
	{
		// Apache Ignite node configuration.
		IgniteConfiguration cfg = new IgniteConfiguration();

		// Ignite persistence configuration.
		DataStorageConfiguration storageCfg = new DataStorageConfiguration();
		            
		// Enabling the persistence.
		storageCfg.getDefaultDataRegionConfiguration().setPersistenceEnabled(true);
		            
		// Applying settings.
		cfg.setDataStorageConfiguration(storageCfg);
		
		Ignite ignite = Ignition.start(cfg);
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		EnablePersistance obj = new EnablePersistance();
		obj.ignitePersistaceOn();
		
	}

}
