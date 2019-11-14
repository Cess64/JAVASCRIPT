const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];
//========================================================= //
//=========   ENTREPRENEURS NÉS DANS LES ANNÉES 70 ======== //
//========================================================= //
   let taille = entrepreneurs.length ;

     for (let i = 0; i <= taille; i++){

        if (entrepreneurs[i].year >= 1970 && entrepreneurs[i].year <=1979);
     
        console.log(entrepreneurs[i].first + " " + entrepreneurs[i].last);
  }

//========================================================= //
//===============   ARRAY DES NOMS ET PRÉNOMS ============= //
//========================================================= //
   var nameEntrepreneur = [];

     for (let i = 0; i <= (taille - 1); i++){

         nameEntrepreneur[i] = (entrepreneurs[i].first + " " + entrepreneurs[i].last);
 
  }
    console.log(nameEntrepreneur);
//======================================================= //
//=====================   AGE ACTUEL  =================== //
//======================================================= //
   let age = [];
  
     for (let i = 0; i <= (taille - 1); i++) {

         age[i] = Number(2019 - entrepreneurs[i].year);

         console.log(nameEntrepreneur[i] + " a/aurait aujourd'hui " + age[i] + " ans.")
      }
//========================================================== //
//==================== TRIAGE PAR NOMS ===================== //
//========================================================== //

  entrepreneurs.sort(function(a, b){
    if(a.last < b.last) { return -1; }
    if(a.last > b.last) { return 1; }
    return 0;
    })

  console.log(entrepreneurs)