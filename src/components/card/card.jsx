import './card.css'
export function CardImage({src,title,circleColor}){
  return <div class="card_image-wrapper">
    <img src={src} style={{width:"100%",borderRadius:"24px",borderBottomRightRadius:"0px",borderBottomLeftRadius:"0px",height:"250px",objectFit:"cover"}}/>
    <div class="card_image-circle" style={{background:circleColor}}></div>
    <p class="card_image-title">{title}</p>
  </div>
}
export function CardButton({children,style}){
  return <button class="card_button" style={style}>
    {children}
  </button>
}
export function Card({children}){
  return <div class="card">
    {children}
  </div>
}