// () => { }
// component = htnl + css + js

import './style.css'

const MyComponent = () =>{
  const hoidanit ="eric 1";
  return(
    <>
      <div> {hoidanit} & hoidanit update</div> 
      <div className='child'
      style={{borderRadius: "10px"}}
      >child</div>
    </>
  );
}


export default MyComponent