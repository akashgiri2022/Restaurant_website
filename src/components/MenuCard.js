import React from 'react'

const MenuCard=({menuData}) =>{
  return (
    <>
    <section className='main-card--cointainer'>
    
    {
        menuData.map((curElem)=>{

            const {id,name,image,description}=curElem;
            return(
                <>
                
                <div className="card-container" key={id}>
                <div className='card'>
                    <div className='card-body'>
                        <span className='card-Number card-circle subtle'>{id}</span>
                        <span className='card-author subtle'>{name}</span>
                        <h2 className='card-title'>{name}</h2>
                        <span className='card-descrption subtle'>
                            {description}
                        </span>
                        <div className='card-read'>
                            Reads
                        </div>
                        <img src={image} alt="images" className='card-media'></img>
                        <span className='card-tag subtle'>Order Now</span>
                    </div>
                </div>
            </div>
            </>
            )
        })
    }
    


    </section>

    
    </>
  )
}

export default MenuCard
