package Consumer;

import java.util.List;

import org.apache.rocketmq.client.consumer.DefaultMQPushConsumer;
import org.apache.rocketmq.client.consumer.listener.ConsumeConcurrentlyContext;
import org.apache.rocketmq.client.consumer.listener.ConsumeConcurrentlyStatus;
import org.apache.rocketmq.client.consumer.listener.MessageListenerConcurrently;
import org.apache.rocketmq.common.consumer.ConsumeFromWhere;
import org.apache.rocketmq.common.message.MessageExt;
import org.apache.rocketmq.common.protocol.heartbeat.MessageModel;

public class BroadcastConsumer {

	public static void main(String[] args) throws Exception{
		DefaultMQPushConsumer consumer = new DefaultMQPushConsumer("BroadcastConsumer Group");
		
		consumer.setConsumeFromWhere(ConsumeFromWhere.CONSUME_FROM_FIRST_OFFSET);
		
		consumer.setMessageModel(MessageModel.BROADCASTING);
		
		consumer.subscribe("TopicTest", "TagA || TagB || TagC");
		
		consumer.registerMessageListener(new MessageListenerConcurrently() {
			
			  @Override
	            public ConsumeConcurrentlyStatus consumeMessage(List<MessageExt> msgs,
	                ConsumeConcurrentlyContext context) {
	                System.out.printf(Thread.currentThread().getName() + " Receive New Messages: " + msgs + "%n");
	                return ConsumeConcurrentlyStatus.CONSUME_SUCCESS;
	            }
	        });

	        consumer.start();
	        System.out.printf("Broadcast Consumer Started.%n");
	}

}
