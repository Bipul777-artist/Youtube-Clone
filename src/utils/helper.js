var nameList = [
    'Time','Past','Future','Dev',
    'Fly','Flying','Soar','Soaring','Power','Falling',
    'Fall','Jump','Cliff','Mountain','Rend','Red','Blue',
    'Green','Yellow','Gold','Demon','Demonic','Panda','Cat',
    'Kitty','Kitten','Zero','Memory','Trooper','XX','Bandit',
    'Fear','Light','Glow','Tread','Deep','Deeper','Deepest',
    'Mine','Your','Worst','Enemy','Hostile','Force','Video',
    'Game','Donkey','Mule','Colt','Cult','Cultist','Magnum',
    'Gun','Assault','Recon','Trap','Trapper','Redeem','Code',
    'Script','Writer','Near','Close','Open','Cube','Circle',
    'Geo','Genome','Germ','Spaz','Shot','Echo','Beta','Alpha',
    'Gamma','Omega','Seal','Squid','Money','Cash','Lord','King',
    'Duke','Rest','Fire','Flame','Morrow','Break','Breaker','Numb',
    'Ice','Cold','Rotten','Sick','Sickly','Janitor','Camel','Rooster',
    'Sand','Desert','Dessert','Hurdle','Racer','Eraser','Erase','Big',
    'Small','Short','Tall','Sith','Bounty','Hunter','Cracked','Broken',
    'Sad','Happy','Joy','Joyful','Crimson','Destiny','Deceit','Lies',
    'Lie','Honest','Destined','Bloxxer','Hawk','Eagle','Hawker','Walker',
    'Zombie','Sarge','Capt','Captain','Punch','One','Two','Uno','Slice',
    'Slash','Melt','Melted','Melting','Fell','Wolf','Hound',
    'Legacy','Sharp','Dead','Mew','Chuckle','Bubba','Bubble','Sandwich','Smasher','Extreme','Multi','Universe','Ultimate','Death','Ready','Monkey','Elevator','Wrench','Grease','Head','Theme','Grand','Cool','Kid','Boy','Girl','Vortex','Paradox'
];



export function generateName() {
   return nameList[Math.floor( Math.random() * nameList.length )];
   
};

var paragraphArray = ["Lorem ipsum delor...", "The great white...", "Chitty-chitty-bang-bang... ", "Let-Go", "Time is an Illusion", "Your life is ending"];  

//update element content (e.g. `<div>` with paragraph)
// document.getElementById("MyID").innerHTML = pickRandom(paragraphArray); 

export function pickRandom(){
    //random index of paragraphArray
    return paragraphArray[Math.floor( Math.random() * paragraphArray.length)];
    
};


export function findNthPrime(n) {
    const primes = [];
    let number = 2;
  
    while (primes.length < n) {
      if (isPrime(number)) {
        primes.push(number);
      }
      number++;
    }
  
    return primes[n - 1];
};

function isPrime(number) {
    for (let i = 2, sqrt = Math.sqrt(number); i <= sqrt; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return number > 1;
  }