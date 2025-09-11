// variables for drop down menu
const dropdownBtn = document.querySelector(".hamburgericon")

const moveupBtn = document.querySelector('.hamburgericonup')

const dropdownMenu = document.querySelector('.sidebar-container')


const homeBtn = document.querySelector('#homeBtn')


// varianle for home screen

const imgRGameSelectionDisplay = document.querySelector('.imgRGameSelection')

const random1Selection = document.querySelector('#img_roullete_selection1')
const aquaticSelection = document.querySelector('#img_roullete_selection2')
const volcanosSelection = document.querySelector('#img_roullete_selection3')
const universalSelection = document.querySelector('#img_roullete_selection4')






const imgRGameDisplay = document.querySelector('.imgRcontainer')
const imgRGameSelectionRow1 = document.querySelector('#imgRGameSelectionRow1')
const imgRGameSelectionRow2 = document.querySelector('#imgRGameSelectionRow2')


const imgDGameSelectionDisplay = document.querySelector('.imgDGameSelection')
const imgDGameSelectionRow1 = document.querySelector('#imgDGameSelectionRow1')
const imgDGameSelectionRow2 = document.querySelector('#imgDGameSelectionRow2')

const random2Selection = document.querySelector('#img_description_selection1')
const bodilyMovementsSelection = document.querySelector('#img_description_selection2')
const codingSelection = document.querySelector('#img_description_selection3')
const animalsSelection = document.querySelector('#img_description_selection4')



const imgDGameDisplay = document.querySelector('.imgDcontainer')

const imgSGameDisplay = document.querySelector('.imgScontainer')

const homeMenuDisplay = document.querySelector('.home-container')

const accountDisplay = document.querySelector('.account-container')

const imgDLibraryDisplayBtn = document.querySelector('.img_description_library')
const imgDLibraryDisplay = document.querySelector('#img_description_library_container')
const imgSLibraryDisplay = document.querySelector('#img_streaming_library_container')
const imgSlibraryDisplayBtn = document.querySelector('.img_streaming_library')
const gameSettingsDisplayBtn = document.querySelector('#gameSettingsDisplayBtn')
const gameSettingsDisplay = document.querySelector('.gameSettings')


const imgSGameDisplayBtn = document.querySelector('.img_streaming')
const imgRGameDisplayBtn = document.querySelector('.img_roullete')
const imgDGameDisplayBtn = document.querySelector('.img_description')
const accountDisplayBtn = document.querySelector('#accountBtn')
const imaginationListSettingsDisplayBtn = document.querySelector('#imaginationListBtn')
const imaginationListSettingsDisplay = document.querySelector('.imaginationListSettings')
const createImaginationListBtn = document.querySelector('#createImaginationListBtn')
const imaginationListFormDisplay = document.querySelector('.imaginationListForm')
const imaginationListManagementDisplay = document.querySelector('.imaginationListManagement')
const imaginationListManagementDisplayBtn = document.querySelector('#manageImaginationListDisplayBtn')
const listPlacementMangement = document.querySelector('.addListDisplay')
const customListManagement = document.querySelector('#customListManagement')
const imgDListManagement = document.querySelector('#imgDListManagement')
const imgRListManagement = document.querySelector('#imgRListManagement')
const timeSelectionDisplayBtn = document.querySelector('#timeSelectionDisplayBtn')
const timeSelectionDisplay = document.querySelector('.timeSelectionDisplay')
const imgRTimeSelection = document.querySelector('#timeSelectionImgR')
const imgDTimeSelection = document.querySelector('#timeSelectionImgD')
const timeSubmitBtn = document.querySelector('.submitTime')

let imgRoulleteSelectionBoolean = null;
let imgDescriptionSelectionBoolean = null;

imgRGameDisplayBtn.addEventListener('click', function(){
    homeMenuDisplay.style.display = 'none'
    imgRGameSelectionDisplay.style.display = 'block'
    imgRoulleteSelectionBoolean = true;

})

imgDGameDisplayBtn.addEventListener('click', function(){
    homeMenuDisplay.style.display = 'none'
    imgDGameSelectionDisplay.style.display = 'block'
    imgDescriptionSelectionBoolean = true;

})

imgSGameDisplayBtn.addEventListener('click',function(){
    homeMenuDisplay.style.display = 'none'
    imgSGameDisplay.style.display = 'block'

})







accountDisplayBtn.addEventListener('click',function(){
    homeMenuDisplay.style.display = 'none'
    imgRGameSelectionDisplay.style.display = 'none'
    imgDGameSelectionDisplay.style.display = 'none'
    accountDisplay.style.display = 'flex'
    imgRGameDisplay.style.display = 'none'
    imgDGameDisplay.style.display = 'none'
    imgSGameDisplay.style.display = 'none'
    imgDLibraryDisplay.style.display = 'none'
    imgSLibraryDisplay.style.display = 'none'
    gameSettingsDisplay.style.display = 'none'
    imaginationListSettingsDisplay.style.display = 'none'
    imaginationListFormDisplay.style.display = 'none'
    timeSelectionDisplay.style.display = 'none'
    imaginationListManagementDisplay.style.display = 'none'
   
    stopImgRGame()
    stopImgDGame()
})


imgDLibraryDisplayBtn.addEventListener('click',function(){
    accountDisplay.style.display = 'none'
    imgDLibraryDisplay.style.display = 'flex'
})

imgSlibraryDisplayBtn.addEventListener('click',function(){
    accountDisplay.style.display = 'none'
    imgSLibraryDisplay.style.display = 'flex'
})

gameSettingsDisplayBtn.addEventListener('click',function(){
    gameSettingsDisplay.style.display = 'flex'
    accountDisplay.style.display = 'none'
})





createImaginationListBtn.addEventListener('click',function(){
    imaginationListSettingsDisplay.style.display = 'none'
    imaginationListFormDisplay.style.display = 'flex'
})

console.log(imaginationListManagementDisplayBtn)

imaginationListSettingsDisplayBtn.addEventListener('click',function(){
    gameSettingsDisplay.style.display = 'none'
    imaginationListSettingsDisplay.style.display = 'flex'
})


imaginationListManagementDisplayBtn.addEventListener('click',function(){

    imaginationListSettingsDisplay.style.display = 'none'
    imaginationListManagementDisplay.style.display = 'flex'
})


console.log(timeSelectionDisplayBtn)
timeSelectionDisplayBtn.addEventListener('click',function(){
    gameSettingsDisplay.style.display = 'none'
    timeSelectionDisplay.style.display = 'block'
})


const imaginationListSubmitBtn = document.querySelector('#imaginationCustomListSubmit')
const imaginationListTitle = document.querySelector('#imaginationCustomListTitle')
const imaginationListItem1 = document.querySelector('#imaginationCustomListItem1')
const imaginationListItem2 = document.querySelector('#imaginationCustomListItem2')
const imaginationListItem3 = document.querySelector('#imaginationCustomListItem3')
const imaginationListItem4 = document.querySelector('#imaginationCustomListItem4')
const imaginationListItem5 = document.querySelector('#imaginationCustomListItem5')
const imaginationListItem6 = document.querySelector('#imaginationCustomListItem6')
const imaginationListItem7 = document.querySelector('#imaginationCustomListItem7')
const imaginationListItem8 = document.querySelector('#imaginationCustomListItem8')
const imaginationListItem9 = document.querySelector('#imaginationCustomListItem9')
const imaginationListItem10 = document.querySelector('#imaginationCustomListItem10')




 





homeBtn.addEventListener('click',function(){
    // Changes display to home
    homeMenuDisplay.style.display = 'flex'
    imgRGameSelectionDisplay.style.display = 'none'
    imgDGameSelectionDisplay.style.display = 'none'
    accountDisplay.style.display = 'none'
    imgRGameDisplay.style.display = 'none'
    imgDGameDisplay.style.display = 'none'
    imgSGameDisplay.style.display = 'none'
    imgDLibraryDisplay.style.display = 'none'
    imgSLibraryDisplay.style.display = 'none'
    gameSettingsDisplay.style.display = 'none'
    imaginationListSettingsDisplay.style.display = 'none'
    imaginationListFormDisplay.style.display = 'none'
    imaginationListManagementDisplay.style.display = 'none'
    timeSelectionDisplay.style.display = 'none'

    
    // Stops all games Roullete game 
     stopImgRGame()
     stopImgDGame()
     stopImgSGame()
})






let imgRTime = 10000;
let imgDTime = 50000;
let imgDTime2 = imgDTime/2;


imgRTimeSelection.value = imgRTime / 1000;
imgDTimeSelection.value = imgDTime /1000;



timeSubmitBtn.addEventListener('click',function(){


 if(imgRTimeSelection.value >= 10){
imgRTime = imgRTimeSelection.value;
(imgRTime *= 1000);
console.log(imgRTime) }
else{
    alert('Img Roullete Time Must be higher than 10')
    imgRTimeSelection.value = imgRTime / 1000;
} 

if(imgDTimeSelection.value >= 30){
imgDTime = imgDTimeSelection.value;
(imgDTime *= 1000)
imgDTime2 = imgDTime/2;
console.log(imgDTime)
console.log(imgDTime2)}
else{
    alert('Img Description Time Must be higher than 30')
    imgDTimeSelection.value = imgDTime /1000;
}

})



/// Variables for image roulete
//1 random things 2 sea 3 volacnos 4 galaxy.





let random1 = ['A dragon breathing fire on people','Flying down from a buildimg using an umberella','A rainstorm','A catipilliar sitting on a tree branch eating the leaf','A pond with minos in it','A frog hopping onto a cat','Going back in time','The earth with all in its inhabitants','A one arm push up','doing a backflip','watching andrew huberman','your third eye center']
let aquatic = [ 'A coral reef with a clown fish hiding inside an anemone', 'A fortnite shark swiming through','A whale hopping out the ocean blowing air out of its hole','A shark running up on a fish about to get the kill','A sword fish poking through 5 fish','A fish eating a phytoplankton', 'A phytoplakton absorbing the energy from sunlight']
let volacnos = ['Pompeii exploading and killing a bunch of cilivians','Someone falling into an inactive volcano ','Someone looking down a volcano and it exploding in their face.','Lava creeping up on you and you running from it','A volcano sitting camly','A valcono getting water poured ontop of it.']
let universal = ['A cube spinning in all directions at constantly fastser speeds only to explode and shrink', ' The big bang', 'The earth with all its inhabitants','A star exploding','The center of a star.','The evolution of humans all the way up to traveling the galaxy.','A car like spaceship','A black hole absorbing a solar system.','two solar systems merging','The world expanding from your body to the universe']



let random2 = ['A matrix driven dystopia','Working very hard on coding and youtube',' A third world war','A peace filled utopia','A trip to the beach','A typical day with future children','Living hella rich','How you can help the world','Being a super hero','being the best version of yourself']
let bodilyMovements = ['Doing a backflip','Doing a one arm push up','Doing a one arm pull up','Hitting a spinning hook kick','Doing a cossack squat','Doing a pistol squat']
let coding = ['Coding A selction to implement your own custom lists', 'Coding custom image roullete and image description times','Coding accounts to store all of these features for later use.','making the app resize for mobile','Coding a custom self improvement app.']
let animals =  ['trying to fight a bear 1 on 1 with just a sword', ' a lion pouncing on a gizzelle',  'the utter connection between all living organisms','a mouse squeezing underneath a doorway','bats swarming an area','having a dog as a pet and training it','']


let imgRoulleteSelection = null;





random2Selection.gameList = random2;
bodilyMovementsSelection.gameList = bodilyMovements;
codingSelection.gameList = coding;
animalsSelection.gameList = animals;



random2Selection.gameType = 'imgD';
bodilyMovementsSelection.gameType = 'imgD';
codingSelection.gameType = 'imgD';
animalsSelection.gameType = 'imgD';






random1Selection.gameList = random1;
aquaticSelection.gameList = aquatic;
volcanosSelection.gameList = volacnos;
universalSelection.gameList = universal;



random1Selection.gameType = 'imgR';
aquaticSelection.gameType = 'imgR';
volcanosSelection.gameType = 'imgR';
universalSelection.gameType = 'imgR';

let imgDescriptionSelection = null;

const selectGameList = function(button){

    if(button.gameType === 'imgR' && imgRoulleteSelectionBoolean === true ){
        imgRoulleteSelection = button.gameList
        imgRGameSelectionDisplay.style.display = 'none'
        imgRGameDisplay.style.display = 'block'}


    if(button.gameType === 'imgD' && imgDescriptionSelectionBoolean === true){
        imgDescriptionSelection = button.gameList
        console.log(imgDescriptionSelection)
        imgDGameSelectionDisplay.style.display = 'none'
        imgDGameDisplay.style.display = 'block'}



}
 

random1Selection.addEventListener('click',function(){selectGameList(this)})
aquaticSelection.addEventListener('click',function(){selectGameList(this)})
volcanosSelection.addEventListener('click',function(){selectGameList(this)})
universalSelection.addEventListener('click',function(){selectGameList(this)})
//  let imgRoulleteSelection = ['','Image Description Game', "Image Streaming game","Art gallery"];

const imgRStartBtn = document.getElementById('imgRoulleteStartBtn')
let imgRDisplayText = document.querySelector('.imgRoulleteTextDisplay')


const imgRStopBtn = document.getElementById('imgRoulleteStopBtn')



let roulleteSwitchInterval = null;










// Button functions for image roullete


let count = 0
let imgSwitchAudio = new Audio('imgpractaudio/roullete switch.wav')
let imgTypeAudio = new Audio('imgpractaudio/image.wav')
// start button for img roullete game img roullete
imgRStartBtn.addEventListener('click',function(){
    imgRDisplayText.style = 'font-size:1rem;'
    imgRDisplayText.textContent = 'You will be given a visual scenario. You have 10 seconds to close your eyes and visualize the scenario.Each new scenario will be followed by a sound so you can open your eyes and read it'
   
 roulleteSwitchInterval =  setInterval(
    function(){
        imgSwitchAudio.play()
        imgRDisplayText.style = 'font-size:1.5rem;'
        //let random = Math.floor(Math.random()* imgRoulleteSelection.length)
        imgRDisplayText.textContent = 'Imagine  ' + imgRoulleteSelection[count];
        count++
        if(count > imgRoulleteSelection.length-1){
            count = 0
        } 
    },imgRTime
   ) 
   imgRStartBtn.style.display = 'none'
   imgRStopBtn.style.display ='inline-block'

})


console.log(roulleteSwitchInterval)

// stops img roullete

const stopImgRGame = function(){
    clearInterval(roulleteSwitchInterval)
    count = 0
    imgRDisplayText.textContent = 'Image roullete'
    imgRDisplayText.style = 'font-size:1rem;'
    imgRStartBtn.style.display = 'inline-block'
    imgRStopBtn.style.display = 'none' 
    imgRoulleteSelectionBoolean = false
};

imgRStopBtn.addEventListener('click',stopImgRGame)


// drops down menu
dropdownBtn.addEventListener('click',function(){
    dropdownBtn.style.display = 'none'
dropdownMenu.style.display = 'flex'
 moveupBtn.style.display = 'block' 


})


// moves menu back up
moveupBtn.addEventListener('click',function(){
    moveupBtn.style.display = 'none'
    dropdownMenu.style.display = 'none'
    dropdownBtn.style.display = 'block'
});





// variables for image description

// 1 is for random 2 is for bodily movements 3 is for coding 4 is for animals





random2Selection.addEventListener('click',function(){selectGameList(this)})
bodilyMovementsSelection.addEventListener('click',function(){selectGameList(this)})
codingSelection.addEventListener('click',function(){selectGameList(this)})
animalsSelection.addEventListener('click',function(){selectGameList(this)})





let imgDDisplayText = document.querySelector('.imgDescriptionTextDisplay')

let imgDInput = document.querySelector("#img_description_input")


const imgDStartBtn = document.querySelector('#imgDescriptionStartBtn')

const imgDStopBtn = document.querySelector('#imgDescriptionStopBtn')

const imgDSubmitBtn = document.querySelector('#imgDescriptionSubmitBtn')



/// img description game

// start button for imgDxc.0
let count2 = 0


imgDStartBtn.addEventListener('click', function(){
   imgDStartBtn.style.display = 'none'
   imgDStopBtn.style.display = 'inline-block'
 
   imgDDisplayText.textContent = 'You will be given a visual scenario. You have 30 seconds to close your eyes and visualize the scenario to the best of your ablities. After the 30 seconds you will type what you have visualized. Each new scenario will be followed by a sound so you can open your eyes and read it'

   imgDTimeOutA = setTimeout(() => {

    imgSwitchAudio.play()
    imgDDisplayText.textContent = 'Imagine ' + imgDescriptionSelection[0];

   
    
   imgDTimeOutB = setTimeout(() => {

        imgTypeAudio.play()
        imgDSubmitBtn.style.display = 'inline-block'
        imgDInput.style.display = 'inline-block'
    },5000);
    
   }, 10000);
   

    descriptionSwitchInterval = setInterval(function(){
    imgDInput.style.display = 'none'
    imgDSubmitBtn.style.display = 'none'
    if(imgDInput.value != ''){
    let imgDUserInput = imgDInput.value;
    let li = document.createElement('li');
    li.innerText = `${imgDUserInput}`;
    imgDLibraryDisplay.appendChild(li);}
    imgDInput.value = ''
    imgSwitchAudio.play()
    count2++
    imgDDisplayText.textContent = 'Imagine ' + imgDescriptionSelection[count2]
    if(count2 > imgDescriptionSelection.length-1){
        count2 = 0
    }
     imgDTimeOutC = setTimeout(function(){
        imgTypeAudio.play()
      imgDInput.style.display = 'inline-block'
      imgDSubmitBtn.style.display = 'inline-block'
    },imgDTime2)
    imgDTimeOutD = setTimeout(function(){
     imgDInput.style.display = 'none'
     imgDSubmitBtn.style.display = 'none'
    },imgDTime) 
   },imgDTime);
  

})



// submit btn for image D

imgDSubmitBtn.addEventListener('click',function(){
    let imgDUserInput = imgDInput.value; 
    if(imgDUserInput === ' ' ){
        alert('Please type what you have imagined');
    }else{
        let li = document.createElement('li');
        li.innerText = `${imgDUserInput}`;
        imgDLibraryDisplay.appendChild(li);
        imgDInput.value = ''
       
    }
    
    
})







//Stop button for image d
function stopImgDGame (){
    console.log(imgDTimeOutA)
    clearInterval(descriptionSwitchInterval)
    imgDSubmitBtn.style.display = 'none'
    
    imgDInput.style.display = 'none'
    imgDDisplayText.textContent = "Image Description"
    imgDStartBtn.style.display = 'inline-block'
    imgDStopBtn.style.display = 'none'
    count2 = 0
    clearTimeout(imgDTimeOutA)
    clearTimeout(imgDTimeOutB)
    clearTimeout(imgDTimeOutC)
    clearTimeout(imgDTimeOutD) 
    imgDescriptionSelectionBoolean = false
}

imgDStopBtn.addEventListener('click',function(){
   stopImgDGame()
    
})


/// Variables for Image Streaming 




const imageSStartBtn = document.querySelector("#imgStreamingStartBtn")
const imageSStopBtn = document.querySelector('#imgStreamingStopBtn')

let imgSDisplayText = document.querySelector('.imgStreamingTextDisplay')

let imgSInput = document.querySelector("#img_streaming_input")


const imgSSubmitBtn = document.querySelector('#imgStreamingSubmitBtn')



imageSStartBtn.addEventListener('click', function(){
    imgSDisplayText.innerText = "You will sit focused on letting images flow through your head. Every 2 minutes You will type what you have visualized for the last two minutes for two minutes. "
    imgSDisplayText.style = 'font-size:1.5rem;'
    imageSStartBtn.style.display = 'none'
    imageSStopBtn.style.display = 'inline-block'
    imgSTimeOutA = setTimeout(() => {
        imgSwitchAudio.play()
   
    imgSDisplayText.textContent = 'Image Stream'
    imgSTimeOutB = setTimeout(() => {
 
         imgTypeAudio.play()
         imgSSubmitBtn.style.display = 'inline-block'
         imgSInput.style.display = 'inline-block'
     },2000)
    }, 5000);
 
    streamingSwitchInterval = setInterval(function(){
     imgSInput.style.display = 'none'
     imgSSubmitBtn.style.display = 'none' 
     if( imgSInput.value != ' ' ){
         let li = document.createElement('li');
         li.innerText = `${imgSUserInput}`;
         imgSLibraryDisplay.appendChild(li);
         imgSInput.value = ''
        
     }
     imgSInput.value = ''
      imgSTimeOutC = setTimeout(function(){
         imgTypeAudio.play()
       imgSInput.style.display = 'inline-block'
       imgSSubmitBtn.style.display = 'inline-block'
     },120000)
     imgSTimeOutD = setTimeout(function(){
      imgDInput.style.display = 'none'
      imgDSubmitBtn.style.display = 'none'
     },2400000) 
    },2400000) 

})




imgSSubmitBtn.addEventListener('click',function(){
    let imgSUserInput = imgSInput.value; 
    if(imgSUserInput === ' ' ){
        alert('Please type what you have imagined');
    }else{
        let li = document.createElement('li');
        li.innerText = `${imgSUserInput}`;
        imgSLibraryDisplay.appendChild(li);
        imgSInput.value = ''
       
    }
    
    
})


const stopImgSGame = () => {
    clearInterval(streamingSwitchInterval)
    imgSSubmitBtn.style.display = 'none'
    
    imgSInput.style.display = 'none'
    imgSDisplayText.textContent = "Image Streaming"
    imageSStartBtn.style.display = 'inline-block'
    imageSStopBtn.style.display = 'none'
    clearTimeout(imgSTimeOutA)
    clearTimeout(imgSTimeOutB)
    clearTimeout(imgSTimeOutC)
    clearTimeout(imgSTimeOutD) 
}


imageSStopBtn.addEventListener('click', function(){
  stopImgSGame()
})


let incriment = 0;

let imaginationLists = [];









imgDStartLists = [
    random2Selection,
    bodilyMovementsSelection,
    codingSelection,
   animalsSelection]


imgRStartLists = [
    random1Selection,
    aquaticSelection,
    volcanosSelection,
    universalSelection
]


 

   let addDeleteBtnPressed = null;



let elementStore = null

const addDeleteBtn = function(container,btnList)  {for( let num = 0; num < btnList.length; num++){
           /*  starterGameLists[num].remove() */
            let deleteImaginationListBtn = document.createElement('div')
            deleteImaginationListBtn.classList.add('btnDelete')
            deleteImaginationListBtn.innerText = '-'
            let addImaginationListBtn = document.createElement('div')
            addImaginationListBtn.classList.add('btnAdd')
            addImaginationListBtn.innerText = '+'
            btnList[num].appendChild(deleteImaginationListBtn)
            btnList[num].appendChild(addImaginationListBtn)
            container.appendChild( btnList[num])
            addDeleteBtnPressed = true
           console.log(deleteImaginationListBtn)


/* let btnDelete = document.getElementsByClassName('btnDelete')
console.log(btnDelete) */


deleteImaginationListBtn.addEventListener('click',
    function(e){


    
        e.stopPropagation();
         deleted = this.parentElement
         btnList.splice(btnList.indexOf(deleted),1)
         deleted.remove() 
         
       
      
      })



      addImaginationListBtn.addEventListener('click',function(e){
        e.stopPropagation();
        customListManagement.style.display = 'none'
         imgDListManagement.style.display = 'none'
        imgRListManagement.style.display = 'none'
        listPlacementMangement.style.display = 'block'
        elementStore = this.parentElement
        
    })
}}



const putBackSelectionList = function(container1,btnList){
    addDeleteBtnPressed = false


for( let num = 0; num < btnList.length; num++){

    
btnList[num].removeChild(btnList[num].querySelector('.btnDelete'));
btnList[num].removeChild(btnList[num].querySelector('.btnAdd'));
       
      
container1.appendChild( btnList[num])
}


}







const addImaginationLists = ()=>{
   

     if(imaginationListTitle.value == ''){
        alert('Please pick a title')
    } else if( imaginationListItem1.value == ''|| imaginationListItem2.value == '' || imaginationListItem3.value == ''){
        alert('You must select atleast 3 items to visualize')
    }else{    
   
        incriment++
   
    let imaginationList = {
        id: Date.now() + '',
        title: imaginationListTitle.value,
        item1:imaginationListItem1.value,
        item2:imaginationListItem2.value,
        item3:imaginationListItem3.value,
        item4:imaginationListItem4.value,
        item5:imaginationListItem5.value,
        item6:imaginationListItem6.value,
        item7:imaginationListItem7.value,
        item8:imaginationListItem8.value,
        item9:imaginationListItem9.value,
        item10:imaginationListItem10.value}


      


        let arrayNotToPush = [imaginationList.item1,imaginationList.item2,imaginationList.item3,imaginationList.item4,imaginationList.item5,imaginationList.item6,imaginationList.item7,imaginationList.item8,imaginationList.item9,imaginationList.item10];
        let arrayToPush = []


        
       
       for( let num = 0; num < arrayNotToPush.length; num++){

            if(arrayNotToPush[num]  != ''){
                arrayToPush.push(arrayNotToPush[num])
            } }
            console.log(arrayToPush)
        
    

    

        imaginationLists.push(imaginationList)
            
          

       
        let imaginationListDisplayBtn = document.createElement('div')
    
        let deleteImaginationListBtn = document.createElement('div')
        deleteImaginationListBtn.classList.add('btnDelete')
        deleteImaginationListBtn.innerText = '-'
      
        imaginationListDisplayBtn.id = imaginationList.id
        
        
        let addImaginationListBtn = document.createElement('div')
        addImaginationListBtn.classList.add('btnAdd')
        addImaginationListBtn.innerText = '+'
           
        

        
          




        imaginationListDisplayBtn.classList.add("img_selection");
        const img1 = document.createElement('img')
        const img2 = document.createElement('img')
        img1.classList.add('visual-color')
        img2.classList.add('visual-nocolor')
        img1.src  = 'imgs/visual-color.PNG'
        img2.src = 'imgs/visual-nocolor.PNG'
        imaginationListDisplayBtn.appendChild(img1)
        imaginationListDisplayBtn.appendChild(img2)
        let listTitle = document.createElement('div')
        listTitle.classList.add('img_roullete_text')
        listTitle.innerText = imaginationList.title
        imaginationListDisplayBtn.appendChild(listTitle)
        imaginationListDisplayBtn.appendChild(deleteImaginationListBtn)
        imaginationListDisplayBtn.appendChild(addImaginationListBtn)
       customListManagement.appendChild(imaginationListDisplayBtn)
    

       imaginationListDisplayBtn.gameList = arrayToPush;
        imaginationListDisplayBtn.gameType = 'customList';

      /*  document.getElementById(imaginationListDisplayBtn.id).addEventListener('click',function(){
        console.log('blm' + incriment)
       }) */
  
       
    
        document.getElementById(imaginationListDisplayBtn.id).addEventListener('click',function(){
        selectGameList(this)
        }
        
        
        /*  function(){ for(let num = 0; num < imaginationLists.length; num++){ 
           
            console.log(this.gameType)
            if(imaginationListDisplayBtn.id === imaginationLists[num].id){
                
                console.log(imaginationLists[num].title)
                console.log(arrayToPush)
            }}} */)

            deleteImaginationListBtn.addEventListener('click',function(e){
               
               
                e.stopPropagation();
                  deleted = this.parentElement
                  console.log(deleted)
                  imaginationLists.splice(imaginationLists.indexOf(deleted),1)
                  deleted.remove() 
                
               
               })



            addImaginationListBtn.addEventListener('click',function(e){
                e.stopPropagation()
                customListManagement.style.display = 'none'
                imgDListManagement.style.display = 'none'
               imgRListManagement.style.display = 'none'
               listPlacementMangement.style.display = 'block'
               elementStore = this.parentElement
            })


            imaginationListTitle.value = ''
            imaginationListItem1.value = ''
            imaginationListItem2.value = ''
            imaginationListItem3.value = ''
            imaginationListItem4.value = ''
            imaginationListItem5.value = ''
            imaginationListItem6.value = ''
            imaginationListItem7.value = ''
            imaginationListItem8.value = ''
            imaginationListItem9.value = ''
            imaginationListItem10.value = ''
       }}

       /*  let li = document.createElement('li');
        li.innerText = `${imgDUserInput}`;
        imgDLibraryDisplay.appendChild(li);
        imgDInput.value =  */



  imaginationListManagementDisplayBtn.addEventListener('click',function(){
    addDeleteBtn(imgDListManagement,imgDStartLists)
    addDeleteBtn(imgRListManagement, imgRStartLists)
    
   // addDeleteBtn(imaginationListManagementDisplay,imgRStartLists)
  })
   

imaginationListSubmitBtn.addEventListener('click',function(){
   addImaginationLists()


})

homeBtn.addEventListener('click',function(){
    
  
    putBackSelectionList(imgDGameSelectionRow1,imgDStartLists)
    putBackSelectionList(imgRGameSelectionRow1,imgRStartLists)
   
})





 const addToImgRListBtn = document.querySelector('#addToImgRLists');
const addToImgDListBtn = document.querySelector('#addToImgDLists')
const addToCustomListBtn = document.querySelector('#addToCustomLists')




addToImgDListBtn.addEventListener('click',function(){
    customListManagement.style.display = 'flex'
         imgDListManagement.style.display = 'flex'
        imgRListManagement.style.display = 'flex'
        listPlacementMangement.style.display = 'none'

        imgDStartLists.push(elementStore)
        if(elementStore.gameType === 'imgR'){
            imgRStartLists.splice(imgRStartLists.indexOf(elementStore),1)}
            if(elementStore.gameType === 'customList'){
                imaginationLists.splice(imaginationLists.indexOf(elementStore),1)
            }
        console.log(imgRStartLists)
        imgDListManagement.appendChild(elementStore)
        elementStore.gameType = 'imgD';
        console.log(imgDStartLists)   
 
})


addSelectionListToImgRSelections = function(){
    customListManagement.style.display = 'flex'
    imgDListManagement.style.display = 'flex'
    imgRListManagement.style.display = 'flex'
    listPlacementMangement.style.display = 'none'
    console.log(elementStore)
    imgRStartLists.push(elementStore)
    if(elementStore.gameType === 'imgD'){
    imgDStartLists.splice(imgDStartLists.indexOf(elementStore),1)}
    if(elementStore.gameType === 'customList'){
        imaginationLists.splice(imaginationLists.indexOf(elementStore),1)
    }
    imgRListManagement.appendChild(elementStore)
    elementStore.gameType = 'imgR';
    console.log(imgRStartLists)  
}




addToImgRListBtn.addEventListener('click',function(){
     addSelectionListToImgRSelections()

 
})



addToCustomListBtn.addEventListener('click',function(){
    customListManagement.style.display = 'flex'
    imgDListManagement.style.display = 'flex'
    imgRListManagement.style.display = 'flex'
    listPlacementMangement.style.display = 'none'
    console.log(elementStore)
    imaginationLists.push(elementStore)
    if(elementStore.gameType === 'imgD'){
    imgDStartLists.splice(imgDStartLists.indexOf(elementStore),1)}
    if(elementStore.gameType === 'imgR'){
        imgRStartLists.splice(imgRStartLists.indexOf(elementStore),1)}
    customListManagement.appendChild(elementStore)
    elementStore.gameType = 'customList';
    console.log(imaginationLists) 
})

