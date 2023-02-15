import { Publisher } from "@sgtickets-cakitomakito/common";
import { TicketCreatedEvent } from "@sgtickets-cakitomakito/common";
import { Subjects } from "@sgtickets-cakitomakito/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
