import StartApp from "./StartApp";
import AXha from '../Imagez/hose.jpg'

const Main : React.FC = ()=> {
    return (
    <main>
        <StartApp/>
        <section className='About'>
            <h1 className="About-title"> Losantos & Brothers Realty in Vancouver</h1>
            <p className="About-description">In the heart of Vancouver, 
                Losantos & Brothers Realty stands 
                out as a premier destination for 
                exquisite office and residential 
                buildings 
                for <a className="About-link" href="#">
                <b>
                sale and rent.
                </b>
                </a>
                With a perfect blend of elegance
                and functionality, our properties
                redefine luxury living in Vancouver
                Experience unparalleled quality 
                and service as you explore the 
                exceptional offerings by 
                Losantos & Brothers Realty.
                </p>
            <img src={AXha} alt="ax"  className="image"/>
        </section>
        <section className='User-code'></section>
        <section className='Reviews'></section>
        <footer className='Contact'></footer>
    </main>
    )
  }
  
  export default Main;
  