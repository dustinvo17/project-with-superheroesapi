import React from 'react'
import Navigation from './components/navigation/Navigation'
import HeroCardDetail from './components/HeroCard/HeroCardDetail'
import Particles from 'react-particles-js'
import HeroList from './components/HeroesList/HeroesList'
import HeroNotFound from './components/HeroNotFound/HeroNotFound'
import './App.css';
import { Router,Route} from 'react-router-dom'
import history from './history'
const particlesOptions = {
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 900
            }
        },
        color: {
            value: '#432ab6'
        },
        shape: {
            type: "circle",
            stroke: {
                width: 1,
                color: '#ac2093'
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
};
class App extends React.Component{
   
  render(){
    
    return(
      
      <div>
           <Particles className="particles" params={particlesOptions} />
            
          <Router history={history}>
              <Navigation/>
           <Route path='/' exact component={HeroList}/>
            <Route path='/hero/:heroid' exact component={HeroCardDetail}/>
            <Route path='/nofound' exact component={HeroNotFound}/>
          </Router>
            
      </div>
    )
  }
}
export default App