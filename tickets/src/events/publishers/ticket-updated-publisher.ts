import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from "@sgtickets-cakitomakito/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
