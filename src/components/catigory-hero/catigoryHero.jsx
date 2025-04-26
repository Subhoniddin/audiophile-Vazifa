import './catigoryHero.css'

function CatigoryHero(props) {
  return (
    <div className='catigoryHero'>
      {props.pages}
    </div>
  )
}

export default CatigoryHero