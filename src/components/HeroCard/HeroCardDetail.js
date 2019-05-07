import React from 'react'
import {Rating} from 'semantic-ui-react'
import axios from 'axios'
import VideoHero from '../VideoHero/VideoHero'
const api = '2022949424680957'
const config = {
   
        headers: { 
       "Access-Control-Allow-Origin": "*",
      
    }   
};
class HeroCardDetail extends React.Component {
    state = {
        hero: {},
        videos:[]
    }
    fetchVideo = async (data) =>{
     
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`,{
              params : {
             maxResults : '3',
             part: 'snippet',
            key : 'AIzaSyA7Z_gZJxxDf50xolwn0qdjUT5Snna8iGo',
            q:`${data.biography.publisher} ${data.name} trailer`,
           
    }
        })
        
        this.setState({videos:response.data.items})        
    }
    async componentDidMount() {
        const res  = await axios.get(`https://superheroapi.com/api/${api}/${this.props.match.params.id}`,config)
            
        
        console.log(res)
        
        
        this.setState({hero: res.data})
        this.fetchVideo(res.data)
        
    }
    ratingSystem = (feature, stars) => {
        return (
            <div className="ui card">
                <p className="ui header">{feature}
                </p>
                <div className="extra">
                    <Rating
                        maxRating={10}
                        defaultRating={Math.round((stars * 10) / 100)}
                        icon='star'
                        disabled/>
                </div>

            </div>
        )
    }
    renderVideo =()=>{
               
             
               return this.state.videos.map((video,i) =>{
                   
                   return <VideoHero key={i}video={video}/>
                   
           
        })
        
     
    }

    render() {
        if (this.state.hero.image ) {
            const {
                name,
                
                powerstats,
                biography,
                appearance,
                work,
                connections,
                image
            } = this.state.hero
            const {
                intelligence,
                strength,
                speed,
                durability,
                power,
                combat
            } = powerstats

            return (
                
               
                <div style={{
                    margin: '-5rem 0 0 5rem'
                }}>
                    <div className="ui link cards centered">

                        <div className="ui card">

                            <div className="image">
                                <img src={image.url} alt={name}/>
                            </div>
                            <p
                                style={{
                                textAlign: 'center',
                                marginBottom: '2px'
                            }}
                                className="ui header">{name}</p>
                            <p
                                style={{
                                textAlign: 'center',
                                marginBottom: '2px'
                            }}
                                className="ui header">{biography.publisher}</p>

                        </div>
                        <div className="ui card">
                            <div>
                                {this.ratingSystem('Intelligence:', intelligence)}
                                {this.ratingSystem('Strength:', strength)}
                                {this.ratingSystem('Speed:', speed)}
                                {this.ratingSystem('Durability:', durability)}
                                {this.ratingSystem('Power:', power)}
                                {this.ratingSystem('Combat:', combat)}
                            </div>

                        </div>
                        <div className="ui card">
                            <div className="ui relaxed divided list">
                                <div className="ui item">
                                    <div className="ui content">
                                        <div className="ui header">In comic:
                                        </div>
                                        <div className="ui description">
                                            <p>Place of birth: {biography['place-of-birth']}</p>
                                            <p>First time appear: {biography['first-appearance']}</p>

                                        </div>

                                    </div>
                                </div>
                                <div className="ui item">
                                    <div className="ui content">
                                        <div className="ui header">Appearance:
                                        </div>
                                        <div className="ui description">
                                            <p>Gender: {appearance.gender}</p>
                                            <p>Eye color: {appearance['eye-color']}</p>
                                            <p>Hair color: {appearance['hair-color']}</p>
                                            <p>Height: {appearance.height[0]}
                                                ft</p>
                                            <p>Weight: {appearance.weight[0]}
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                <div className="ui item">
                                    <div className="ui content">
                                        <div className="ui header">Work :
                                        </div>
                                        <div className="ui description">
                                            <p>Occupation: {work.occupation}</p>
                                            <p>Base: {work.base}</p>

                                        </div>

                                    </div>
                                </div>

                                <div className="ui item">
                                    <div className="ui content">
                                        <div className="ui header">Connections :
                                        </div>
                                        <div className="ui description">
                                            <p>Group: {connections['group-affiliation']}</p>
                                            <p>Relatives: {connections.relatives}</p>
                                              
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="ui container" style={{marginTop:'2rem'}}>
                            
                                        <div>
                                        {this.renderVideo()}
                                        </div>
                                        
                                
                              
                  
                    </div>
                    
                       
                </div>
                 
            )
        } else {
            return ''
        }
    }
}

export default HeroCardDetail
