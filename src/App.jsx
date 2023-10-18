import Filter from './components/filter/filter'
import {Card,CardImage,CardButton} from './components/card/card'
import {HeaderButton,IconButton,BackButton} from './components/buttons/buttons'
import UserToast from "./components/user-toast/user-toast"
import './App.css'
const rooms = [
  {title:"Garden 01",circleColor:"#f44942",src:"/assets/garden01.jpg"},
  {title:"Garden 02",circleColor:"#0b9eef",src:"/assets/garden02.jpg"},
  {title:"Garden 03",circleColor:"#07ab66",src:"/assets/garden04.jpg"},
  {title:"Garden 04",circleColor:"#f44942",src:"/assets/garden04.jpg"},
  {title:"Garden 05",circleColor:"#fea10a",src:"/assets/garden05.jpg"},
  {title:"Garden 06",circleColor:"#f44942",src:"/assets/garden01.jpg"},
  {title:"Garden 07",circleColor:"#0b9eef",src:"/assets/garden02.jpg"},
  {title:"Garden 08",circleColor:"#07ab66",src:"/assets/garden04.jpg"},
  {title:"Garden 09",circleColor:"#fea10a",src:"/assets/garden04.jpg"},
  {title:"Garden 10",circleColor:"#07ab66",src:"/assets/garden05.jpg"}
  ]

function App() {
  return (
    <>
    <header class="header">
    {/*<img src="" class="header_image"/>*/}
      <nav class="nav">
        <ul class="nav_list">
          <li>
            <HeaderButton icon={"/assets/icon_menu.png"}>
              continents
            </HeaderButton>
          </li>
          <li>
             <HeaderButton icon={"/assets/icon_menu2.png"}>
              inventory
            </HeaderButton>
               </li>
          <li>
             <HeaderButton icon={"/assets/icon_menu2.png"}>
              market
            </HeaderButton>
               </li>
          <li>
             <HeaderButton icon={"/assets/icon_menu2.png"}>
              exchange
            </HeaderButton>
               </li>
               <li style={{height:"min-content",marginLeft:"48px"}}>
                 <IconButton icon={"/assets/icon_menu.png"}/>
               </li>
               <li style={{height:"min-content"}}>
                 <IconButton icon={"/assets/icon_menu2.png"}/>
               </li>

        </ul>
      </nav>
    </header>
    <div class="bg">
      <main class="main" style={{padding:"165px 0"}}>
      <div style={{display:"flex",width:"100%",maxWidth:"1190px"}}>
        <BackButton style={{alignSelf:"start"}}>Greenhouse</BackButton>
        <Filter style={{marginLeft:"auto"}}>Type</Filter>
      </div>
      <section class="card-wrapper">

      {rooms.map(room => <Card >
        <CardImage circleColor={room.circleColor} title={room.title} src={room.src} />
          <CardButton style={{margin:"16px 24px"}}>
            Enter
          </CardButton>
        </Card>)}
        
      </section>
    </main>
    </div>
    <UserToast title={"DrBeebeep"} coins="999,999"/>
    </>
  )
}

export default App
