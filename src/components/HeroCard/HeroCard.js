import React from 'react'
import {Link} from 'react-router-dom'
class HeroCard extends React.Component {
   


    render() {
    
        const {hero} = this.props
       
        return (
            <div>{hero.image
                    ? <div className="ui segment" >
                            <div
                                className="ui medium image"
                                style={{
                                cursor: 'pointer'
                            }}>
                                <Link to={`/hero/${hero.id}`}><img src={hero.image.url} alt={hero.name} /></Link>
                            </div>

                            <div className="content">
                                <h1 className="header">{hero.name}</h1>
                                <h3 className="meta">{`Comic: ${hero.biography.publisher}`}</h3>
                            </div>
                        </div>
                    : ('')
}</div>
        )

    }

}
export default HeroCard