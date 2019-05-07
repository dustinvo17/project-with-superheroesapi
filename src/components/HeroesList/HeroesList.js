import React from 'react'
import HeroCard from '../HeroCard/HeroCard'
import axios from 'axios'
import SearchBar from '../SearchBar/SearchBar'
import history from '../../history'
import HeroNotFound from '../HeroNotFound/HeroNotFound'
const api = '2022949424680957'

const url = `https://superheroapi.com/api/${api}`
class HeroesList extends React.Component {
    state = {
        heros:[],
        userinput:'',
        specifichero:[],
        findHero:false
    }
  
    async componentWillMount() {
     
    
       for(let i = 1;i <= 1;i++){
                const res = await axios.get(`${url}/${i}`)
             

                this.setState({heros:[...this.state.heros,res.data]})
                if(this.state.findHero === true){
                    break
                }
       }
   
    }
   getUserInput = (e) => {
        this.setState({userinput:e.target.value})
    }
    userFindSpecificHero = async (e)=>{
        if(e.type ==='submit'){
                e.preventDefault()
        }
        
        const res = await axios.get(`${url}/search/${this.state.userinput.toLowerCase()}`)
        
        this.setState({specifichero:res.data.results})
        this.setState({findHero:true})
    }
    filterHero = () =>{
         const heroes = this.state.heros.filter(hero => {
             if(hero.name){
                 return hero.name.toLowerCase().includes(this.state.userinput.toLowerCase())
             }

           
        })
    
       return heroes
    }
    renderHero = () => {
        const herolist = (this.state.findHero === true? this.state.specifichero : this.filterHero())
        return herolist.map(hero => {
               
                return <HeroCard hero={hero} key={hero.id}/>
            })
    }
  
    
    render() {
        if(!this.state.heros || !this.state.specifichero){
             history.push('/nofound')
             return <HeroNotFound/>
        }
        return (

            <div>
                <SearchBar getUserInput={this.getUserInput} userFindSpecificHero={this.userFindSpecificHero}/>
                
                <div
                    className="ui grid centered"
                    style={{
                    margin: '4em'
                }}
                   >

                    { this.renderHero()}
                </div>
                
           

            </div>

        )
    }
}

export default HeroesList