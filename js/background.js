const I   = document.getElementById("i1")
const II  = document.getElementById("i2")
const III = document.getElementById("i3")

export const change = {

  i()
  {
    I.classList.remove("d")
    II.classList.add("d")
    III.classList.add("d")
  }
  ,
  ii() 
  {
    II.classList.remove("d")
    I.classList.add("d")
    III.classList.add("d")
  }
  ,
  iii()
  {
    III.classList.remove("d")
    II.classList.add("d")
    I.classList.add("d")
  }
  ,
  run(a )
  {
      switch( a ){
        case "i":
          this.i()
          break

        case "ii":
          this.ii()
          break

        case "iii":
          this.iii()
          break

      }
  }
  
  
}
