import './App.css';
import PopularSimpsons from "./Components/Simpsons/PopularSimpsons";
import {MainSimpsons} from "./Components/Simpsons/MainSimpsons";
import RickAndMortys from "./Components/RickAndMortys/RickAndMortys";
import {useEffect, useState} from "react";
import {getRick} from "./service/rickAndMortyService";
import RickAndMorty from "./Components/RickAndMorty/RickAndMorty";


function App() {
    let [rick, setRick] = useState([]);
    useEffect(() => {
        getRick()
            .then(value => {
                setRick(value.results);
            })

    },[]);
    return (
        <div className="App">
            <div className={'headTitle'}>
                <h1>The best cartoons</h1>
            </div>
            <div className={'simpsonsTitle'}>
                <h2>The Simpsons</h2>
            </div>
            <div className={'popularSimpsonTitle'}>
                <h3>Popular Simpsons characters</h3>
            </div>
            <div className={'style'}>
                <PopularSimpsons itemName={'Mayor Quimby'}
                                 itemPhrase={'Can\'t we have one meeting that doesn\'t end with us digging up a corpse'}
                                 itemPhoto= {'https://cdn3.whatculture.com/images/2022/06/1c8c2f9f4e9a9113-1200x675.jpg'}/>
                
                <PopularSimpsons itemName={'Apu Nahasapeemapetilon'}
                                 itemPhrase={'My chilling my loins I increase the chances of impregnating my wife.'}
                                 itemPhoto={'https://images.cdn.yle.fi/image/upload/f_auto,fl_progressive/fl_keep_iptc/q_88/w_2400,h_2400,c_crop,x_300,y_165/w_700/v1593240763/39-6940815ef6ec5e2479a.jpg'}/>
                
                <PopularSimpsons itemName={'Troy McClure'}
                                 itemPhrase={'Ahh! Sweet liquor eases the pain.'}
                                 itemPhoto={'https://www.telegraph.co.uk/content/dam/tv/2020/03/26/troymcclure_trans_NvBQzQNjv4BqvXFcB9Ge-8xxl92YvQMz6wJZSyk6UTxxsAHorW2Jrk0.jpg'}/>
                
                <PopularSimpsons itemName={'Abe Simpson'}
                                 itemPhrase={'They pay me $800 a week to tell a cat and mouse what to do!'}
                                 itemPhoto={'https://m.media-amazon.com/images/M/MV5BOTg3MjU1YTktZTg2My00Y2FlLWFhYjktNmU3ZjRkNzRlYmE3XkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_QL75_UX500_CR0,0,500,281_.jpg'}/>
                
                <PopularSimpsons itemName={'Frank Grimes'}
                                 itemPhrase={'I live in a single room above a bowling alley...and below another bowling alley.'}
                                 itemPhoto={'https://i.ytimg.com/vi/NZ37LpkfD6k/hqdefault.jpg'}/>

                <PopularSimpsons itemName={'Ralph Wiggum'}
                                 itemPhrase={'hat\'s where I saw the leprechaun...He told me to burn things.'}
                                 itemPhoto={'https://i.pinimg.com/550x/a4/5f/a6/a45fa61b300cebc40a01da71aebcd131.jpg'}/>
            </div>
            <div className={'mainSimpsonsTitle'}>
               <h3>Main Simpsons</h3>
            </div>
            <div className={'style'}>
               <MainSimpsons/>
            </div>
            <div className={'rickAndMortyTitle'}>
                <h2>The Rick and Morty</h2>
            </div>
            <div className={'randomRickAndMortyTitle'}>
                <h3>Random characters</h3>
            </div>
            <div className={'style'}>
                <RickAndMortys/>
            </div>
            <div className={'allRickAndMortyTitle'}>
                <h3>All characters</h3>
            </div>
            <div className={'style'}>
                {
                    rick.map(value => <RickAndMorty item={value} key={value.id}/>)
                }
            </div>
        </div>
    );
}

export default App;
