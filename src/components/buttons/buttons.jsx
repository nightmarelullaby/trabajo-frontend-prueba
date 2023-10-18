import "./buttons.css"
export function IconButton({icon}){
  return <button style={{background:"none",border:"none",padding:0,cursor:"pointer"}}><img src={icon} alt={icon} class="icon-button" />
  </button>
}

export function BackButton({children,style}){
  return <button class="back_button" style={style}>
  <img class="back_button-icon" src="/assets/back.png" />
    {children}
  </button>
}

export function HeaderButton({children,icon}){
  return <button class="header_btn">
    {icon && <div class="header_btn-lefticon-wrapper">
      <img src={icon} class="header_btn-lefticon-img" alt="header_btn-lefticon-img"/>
    </div>}
    {children}
  </button>
}
