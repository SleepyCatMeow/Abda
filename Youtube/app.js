const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const buttons = document.querySelectorAll("button");

const menuItems = [
    { 
        "imgPath": "Youtube/img/home.svg", 
        "text": "Home" 
    },
    { 
        "imgPath": "Youtube/img/explore.svg", 
        "text": "Explore" 
    },
    { 
        "imgPath": "Youtube/img/subscriptions.svg", 
        "text": "Subs" 
    },
    { 
        "imgPath": "Youtube/img/youtube-music.svg", 
        "text": "Music" 
    },
    { 
        "imgPath": "Youtube/img/library.svg", 
        "text": "Library" 
    },
    { 
        "imgPath": "Youtube/img/home.svg", 
        "text": "Home" 
    }
];

            
menuItems.forEach(
    item => {
        $("#sidebar").append(
          `
              <div class="sidebar-link">
                    <img src="${item.imgPath}" alt="">
                    <div>${item.text}</div>
              </div>
          `
        );
        
    }
);


buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});
