import React from 'react'

const Menu = ({data}) => {
    
  return (
    <div className='menu'>
        <h1>Sushi Food</h1>
        <div className='menu-container'>
            {
                data && data?.map((item, index) =>(

                    
                   <div key={index}>
                     <div   className="menu-container-card">
                        
                        <img src={item.food} key={data} alt='' />
                        <p>{item.name}</p>
                    </div> 
                   </div>
                        
                    
                ))
            }  
        </div>
    </div>
  )
}

export default Menu