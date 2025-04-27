import './button.css'
import arrowIcon from '../../assets/shared/desktop/icon-arrow-right.svg'
console.log(arrowIcon);

function Button(props) {
  return <>
        <button className={props.btnClass}>{props.name} 
          {props.iconArrow==='arrow'?<img src={arrowIcon} alt="arrov" />: ''}
        </button>
    </>
  
}

export default Button