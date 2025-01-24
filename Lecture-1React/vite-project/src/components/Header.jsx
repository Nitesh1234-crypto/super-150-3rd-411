function Header(){
    var random = Math.random()
    return(
      <h1>
        Header
        <p>{random}</p>
      </h1>
    )
  }

  export default Header