import './Trend.css'

const trend = [
  {
  text:'Resolved',
  num:449,
  },
  {
    text:'Received',
    num:426,
  },
  {
    text:'Average first response time',
    num:'33m',
  },
  {
    text:'Average response time',
    num:'3h 8m',
  }, 
  {
    text:'Resolution within SLA',
    num:'94%',
  }]


export const Trend = () => {
  return (
    <div className="trend">
      <div className='left'>
      <div className="info">
        <p className='info__day'>Today’s trends</p>
        <p className='info__time'>as of 25 May 2019, 09:41 PM</p>
      </div>
      <div className='box'>
      <p className='today'> <span className='blueline'></span>Today</p>
      <p className='Yesterday'> <span className='grayline'></span>Yesterday</p>
      </div>
      </div>
      <ul className='trendlist'>
        {trend.map(e => (
          <li className='trendlist__item'>
            <p className='trendlist__text'>{e.text}</p>
            <p className='trendlist__num'>{e.num}</p>
          </li>
        ))
          }
      </ul>
    
    
    </div>
    
  )
}
