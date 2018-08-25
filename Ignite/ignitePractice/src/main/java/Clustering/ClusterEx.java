package Clustering;

import java.util.Collection;

import org.apache.ignite.Ignite;
import org.apache.ignite.IgniteCluster;
import org.apache.ignite.Ignition;
import org.apache.ignite.cluster.ClusterGroup;
import org.apache.ignite.cluster.ClusterMetrics;
import org.apache.ignite.cluster.ClusterNode;

public class ClusterEx {

	static Ignite ignite;
	
	public void ClusterActive() {
		ignite = Ignition.ignite();		
		IgniteCluster cluster = ignite.cluster();			  
	   ignite.cluster().active(true);
	}
	
	
	public void Attributes() {
		ignite = Ignition.ignite();
		ClusterGroup workers = ignite.cluster().forAttribute("ROLE", "worker");

		Collection<ClusterNode> nodes = workers.nodes();
	}
	
public void ClusterNodes() {
		
		ignite = Ignition.ignite();
		IgniteCluster cluster = ignite.cluster();
		// Local Ignite node.
		ClusterNode localNode = cluster.localNode();

		// Node metrics.
		ClusterMetrics metrics = localNode.metrics();

		// Get some metric values.
		double cpuLoad = metrics.getCurrentCpuLoad();
		long usedHeap = metrics.getHeapMemoryUsed();
		int numberOfCores = metrics.getTotalCpus();
		int activeJobs = metrics.getCurrentActiveJobs();
		
		System.out.println("CPU Load :: " + cpuLoad);
		System.out.println("User Heap :: " + usedHeap);
		System.out.println("No of cores :: " + numberOfCores);
		System.out.println("Active jobs :: " + activeJobs);
		
		System.out.println("Local Node :: " + localNode);	
		
	}

	
	public static void main(String[] args) {
	
		ClusterEx obj = new ClusterEx();
		obj.ClusterActive();
		obj.Attributes();
		obj.ClusterNodes();
	}
}
