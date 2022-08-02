import './Ticket.css'
export const Tickets =({children}) => {
return(
  <div className="ticket">
    <div className='ticket__box'>
      <div>
        <p className='ticket__title'>Unresolved tickets</p>
        <p className='ticket__text'><span className='ticket__piece'>Group:</span> Support</p>
      </div>
      <a className='ticket__link' href="#">View details</a>
   </div>

    <ul className='ticketlist'>{children}</ul>
   
</div>
)
}