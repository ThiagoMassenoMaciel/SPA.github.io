const link1 = document.getElementById('link1')
const link2 = document.getElementById('link2')
const link3 = document.getElementById('link3')

export const Bolding = {

  l(){
    link1.classList.add('bold')
    link2.classList.remove('bold')
    link3.classList.remove('bold')
  }
  ,
  ll(){
    link2.classList.add('bold')
    link1.classList.remove('bold')
    link3.classList.remove('bold')
  }
  ,
  lll(){
    link3.classList.add('bold')
    link1.classList.remove('bold')
    link2.classList.remove('bold')
  }
  ,
  run( DataSet){

        switch( DataSet ){
          case "l":
            this.l()
            break
  
          case "ll":
            this.ll()
            break

          case "lll":
            this.lll()
            break
        }
  }
}