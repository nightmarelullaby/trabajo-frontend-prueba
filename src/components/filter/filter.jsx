import './filter.css'
export default function Filter({children,style}){
  return <button class="filter_dropdown" style={style}>
    {children}
    <img src="/assets/icon_options.png" height="34px" width="34px" style={{marginLeft:12,objectFit:"cover"}} />
  </button>
}