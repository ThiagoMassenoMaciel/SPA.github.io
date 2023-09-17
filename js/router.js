import * as B from './background.js'
import * as L from './linkClicked.js'

export class Router{
  routes = { }
  swap= ""
  SWAP = ""

  add(NameRoute, GoPath){
    this.routes[NameRoute] = GoPath
  }

  route( event ){

    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "" , event.target.href)

    this.swap = event.target.dataset.changeback
    this.SWAP = event.target.dataset.bold

    this.goToAnotherLink(this.swap, this.SWAP)

    this.handle()
  }

  goToAnotherLink( swap,SWAP){
    B.change.run(swap);
    L.Bolding.run(SWAP);
  }

  handle(){
    const outBold = document.querySelectorAll('a')
    const ancora = document.querySelector('section')
    const {pathname} = window.location  

    console.log(`apelido do caminho à ser direcionado : ${pathname}`)

    const GoToPath = this.routes[pathname] || this.routes["/error"]

    console.log(GoToPath)

    this.goToAnotherLink(this.swap, this.SWAP)

    fetch(GoToPath)
    .then( data => data.text()                 )
    .then( html => ancora.innerHTML = html     )

    window.addEventListener("popstate", () => outBold.classList.remove('bold'))
    
  }

}