import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from "@sgtickets-cakitomakito/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
