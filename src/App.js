import './App.css';
import Simpsons from "./Components/Simpsons/Simpsons";

function App() {
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
            <div className={'popularSimpsons'}>
                <Simpsons itemName={'Mayor Quimby'}
                          itemPhrase={'Can\'t we have one meeting that doesn\'t end with us digging up a corpse'}
                          itemPhoto= {'https://cdn3.whatculture.com/images/2022/06/1c8c2f9f4e9a9113-1200x675.jpg'}/>
                
                <Simpsons itemName={'Apu Nahasapeemapetilon'}
                          itemPhrase={'My chilling my loins I increase the chances of impregnating my wife.'}
                          itemPhoto={'https://images.cdn.yle.fi/image/upload/f_auto,fl_progressive/fl_keep_iptc/q_88/w_2400,h_2400,c_crop,x_300,y_165/w_700/v1593240763/39-6940815ef6ec5e2479a.jpg'}/>
                
                <Simpsons itemName={'Troy McClure'}
                          itemPhrase={'Ahh! Sweet liquor eases the pain.'}
                          itemPhoto={'https://www.telegraph.co.uk/content/dam/tv/2020/03/26/troymcclure_trans_NvBQzQNjv4BqvXFcB9Ge-8xxl92YvQMz6wJZSyk6UTxxsAHorW2Jrk0.jpg'}/>
                
                <Simpsons itemName={'Abe Simpson'}
                          itemPhrase={'They pay me $800 a week to tell a cat and mouse what to do!'}
                          itemPhoto={'https://m.media-amazon.com/images/M/MV5BOTg3MjU1YTktZTg2My00Y2FlLWFhYjktNmU3ZjRkNzRlYmE3XkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_QL75_UX500_CR0,0,500,281_.jpg'}/>
                
                <Simpsons itemName={'Frank Grimes'}
                          itemPhrase={'I live in a single room above a bowling alley...and below another bowling alley.'}
                          itemPhoto={'https://i.ytimg.com/vi/NZ37LpkfD6k/hqdefault.jpg'}/>

                <Simpsons itemName={'Ralph Wiggum'}
                          itemPhrase={'hat\'s where I saw the leprechaun...He told me to burn things.'}
                          itemPhoto={'https://i.pinimg.com/550x/a4/5f/a6/a45fa61b300cebc40a01da71aebcd131.jpg'}/>
            </div>
        </div>
    );
}

export default App;
