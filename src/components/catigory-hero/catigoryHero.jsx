import './catigoryHero.css'

function CatigoryHero(props) {
  return (
    <div className='catigoryHero'>
      <h1 className='title'>{props.pages}</h1>
    </div>
  )
}

export default CatigoryHero