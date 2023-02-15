import { Subjects } from "@sgtickets-cakitomakito/common";
import { TicketCreatedEvent } from "@sgtickets-cakitomakito/common";
import { Message } from "node-nats-streaming";
import { Listener } from "@sgtickets-cakitomakito/common";

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
  queueGroupName = "payments-service";
  onMessage(data: TicketCreatedEvent["data"], msg: Message) {
    console.log("Event data!", data);
    msg.ack();
  }
}
