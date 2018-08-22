package com.tech.book.ticket.app.dao;

import org.springframework.data.repository.CrudRepository;

import com.tech.book.ticket.app.entities.Ticket;

public interface TicketBookingDao extends CrudRepository<Ticket, Integer>{
	
	default Ticket findOne(Integer id) { 
        return (Ticket) findById(id).orElse(null); 
    } 
}
