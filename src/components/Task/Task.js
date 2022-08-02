import './Task.css'
export const Task =() => {
  const form = [
    {
    class:'yellow',
    text:'Finish ticket update',
    num:'Urgent',
    isComplate:false,
    },
    {
      class:'green',
      text:'Create new ticket example',
      num:'New',
    isComplate:false,
    },
    {
      class:'gray',
      text:'Update ticket report',
      num:'Default',
      isComplate:true,

    }
  ]

return(
  <div className="ticket">
    <div className='ticket__box'>
      <div>
        <p className='ticket__title'>Tasks</p>
        <p className='ticket__piece'>Today</p>
      </div>
      <a className='ticket__link' href="#">View all</a>
   </div>
   <form method='post'>
   <div className="form__box">
   <input type="text" className='create' placeholder='Create new task' />
    <button type='button' className='buttonplus'>+</button>
   </div>
    <ul className='task__list'>
      {form.map(e=>{
        return(
          <li className="task__item">
        <input defaultChecked={e.isComplate} type="checkbox" className='checkbox'/>
        <p className="task__text">{e.text}</p>
        <button type='button' className={e.class}>{e.num}</button>
      </li>
        )
        })}
    </ul>
   </form>
</div>
)
}