import {Header} from './components'
import {Numbers} from './components'
import {Trend} from './components'
import {Tickets} from './components'
import { Task } from './components'
import {Sitebar} from './components'
import "./App.css"
import Book from './assets/images/articles.svg'
import Group from './assets/images/man.svg'
import lamp from './assets/images/lamp.svg'
import man from './assets/images/agents.svg'
import pie from './assets/images/statistitics.svg'
import setting from './assets/images/settings.svg'
import ticket from './assets/images/tickets.svg'
import nishon from './assets/images/subscription.svg'

function App() {
  const number = [
    {
    text:'Unresolved',
    num:60,
    },
    {
      text:'Overdue',
      num:16,
    },
    {
      text:'Open',
      num:43,
    },
    {
      text:' On hold',
      num:64,
    }
  ]

  const Ticket = [
    {
    text:'Waiting on Feature Request',
    num:4238,
    },
    {
      text:'Awaiting Customer Response',
      num:1005,
    },
    {
      text:'Awaiting Developer Fix',
      num:914,
    },
    {
      text:' Pending',
      num:28,
    }
  ]

  const bar = [
    {
    text:'Overview',
    img:pie,
    },
    {
      text:'Tickets',
      img:ticket,
    },
    {
      text:'Ideas',
      img:lamp,
    },
    {
      text:' Contacts',
      img:Group,
    },
    {
      text:'Agents',
      img:man,
    },
    {
      text:' Articles',
      img:Book,
    },
    {
      text:'Settings',
      img:setting,
    },
    {
      text:'Subscription',
      img:nishon,
    },
  ]

  
  
  return (
    <div className="container">
      <div className="bigbox">
        <div className="left__box">
      <Sitebar>
        {
          bar.map(e=>{
            return(
              <li className='bar__item'>
                <img width='16' height='16' src={e.img} alt={e.img} />
                <p className='bar__text'>{e.text}</p>
              </li>
            )
            })
        }
      </Sitebar>
      </div>
     <div className="right__box">
     <Header />
      <main>
      <ul className='list'>
        {number.map(e=>(
          <Numbers text={e.text} num={e.num}/>
        ))
        }
      </ul>
      <Trend />

      <div className='cover'>
      <Tickets>
        {Ticket.map(e =>{
          return(
              <li className='ticketlist__item'>
                <p className='ticketlist__text'>{e.text}</p>
                <p className='ticketlist__num'>{e.num}</p>
              </li>
          )
        })}
      </Tickets>
      <Task />
      </div>
      
      </main>
     </div>
      </div>
    </div>
  );
}

export default App;