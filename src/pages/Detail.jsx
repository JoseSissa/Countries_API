import { useEffect } from 'react'
import { Header } from "../components/Header/Header"
import { useSingleCountry } from '../hooks/useSingleCountry'
import { useLocation } from 'wouter'
import './pages.css'

export function Detail({ params }) {

    const [location, setLocation] = useLocation();

    const { singleCountry, loading, getCountry } = useSingleCountry()
    
    console.log({location, setLocation});

    const handleClick = () => {
        setLocation('/')
    }

    useEffect(() => {
        console.log('use effect', params.name);
        getCountry({ country: params.name })
    }, []);

    return (
        <section>
            <Header />
            <main>
                {
                    loading
                        ? <p>Cargando ...</p>
                        : 
                        <article className='detail'>
                            <button onClick={handleClick} className='detail_back'><img src="../../public/icons/arrow_back.svg" alt="Arrow back" width='20px' /> Back</button>
                            <img className='detail_flag' src={singleCountry.flag} alt={`Flag of ${singleCountry.name}`} />
                            <h3 className=''>{singleCountry.name}</h3>
                            <div>
                                <p><span className='detail_field'>Native Name: </span>{singleCountry.nativeName}</p>
                                <p><span className='detail_field'>Population: </span>{singleCountry.population}</p>
                                <p><span className='detail_field'>Region: </span>{singleCountry.region}</p>
                                <p><span className='detail_field'>Sub Region: </span>{singleCountry.subRegion}</p>
                                <p><span className='detail_field'>Capital: </span>{singleCountry.capital}</p>
                            </div>
                            <div>
                                <p><span className='detail_field'>Top Level Domain: </span>{singleCountry.topLevelDomain}</p>
                                {/* <p>{singleCountry.currency}</p> */}
                                {/* <p>{singleCountry.laguages}</p> */}
                            </div>
                            <div>
                                <h4>Border Countries:</h4>
                                <button className='detail_back'><img src="../../public/icons/arrow_back.svg" alt="Arrow back" width='20px' /> Back</button>
                                <button className='detail_back'><img src="../../public/icons/arrow_back.svg" alt="Arrow back" width='20px' /> Back</button>
                                <button className='detail_back'><img src="../../public/icons/arrow_back.svg" alt="Arrow back" width='20px' /> Back</button>
                            </div>
                        </article>
                }
            </main>
        </section>
    )
}