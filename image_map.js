/*--- disable href function of the image map area---*/
$(".image-map-class").on("click", function(e){
  e.preventDefault();     
  
});

/*--- Change values of another divison while click on image area---*/
function imageNode1() {
  document.getElementById("image-thumbnail").src = "images/imageNode1.jpeg"; 
      document.getElementById("image-title").innerHTML = "Cintra";
      document.getElementById("image-description").innerHTML = "Cintra is where the Keystone people stayed at Kotagiri in 1993. After that, they owned an office at Groves Hill Road. ";
      document.getElementById("image-description-read-more").innerHTML = "Read more..";
      document.getElementById("image-description-read-more").href = "https://www.google.com/";
}

function imageNode2() {
  document.getElementById("image-thumbnail").src = "images/imageNode2.jpeg"; 
      document.getElementById("image-title").innerHTML = "Honey Hunters & Bee Keepers";
      document.getElementById("image-description").innerHTML = "In 2019 the Atlantic League announced it was considering a new franchise in Gastonia.[3] Work officially began in November 2019, for the new ballpark in Gastonia. In July 2020, the league announced the addition of a new franchise in Gastonia beginning in 2021; it would be the league's second team based in North Carolina. Brandon Bellamy was announced as the team's owner. On August 15, 2020, a  Name the Team' contest was launched. On October 8, 2020, the names were narrowed down to Fire Ants, Hogzillas, Honey Hunters, Hotshots, and Uppercuts.On January 13, 2021, the Honey Hunters name, logo and colors were announced. 'Honey Hunters' refers to the toughness of a honey badger (Mellivora capensis) and the ability to seek out positive things in hard times. The moniker also alludes to Ransom Hunter, the first freed slave to own property in Gaston County, of which Gastonia is the county seat.The team's first game was an exhibition on May 23, 2021, followed by the regular season opening day game on May 25.";
      document.getElementById("image-description-read-more").innerHTML = "Read more..";
      document.getElementById("image-description-read-more").href = "https://www.google.com/";
}
function imageNode3() {
  document.getElementById("image-thumbnail").src = "images/imageNode3.jpeg"; 
      document.getElementById("image-title").innerHTML = "Office in Pondichery";
      document.getElementById("image-description").innerHTML = "In 2019 the Atlantic League announced it was considering a new franchise in Gastonia.[3] Work officially began in November 2019, for the new ballpark in Gastonia. In July 2020, the league announced the addition of a new franchise in Gastonia beginning in 2021; it would be the league's second team based in North Carolina. Brandon Bellamy was announced as the team's owner. On August 15, 2020, a Name the Team' contest was launched. On October 8, 2020, the names were narrowed down to Fire Ants, Hogzillas, Honey Hunters, Hotshots, and Uppercuts.On January 13, 2021, the Honey Hunters name, logo and colors were announced. 'Honey Hunters' refers to the toughness of a honey badger (Mellivora capensis) and the ability to seek out positive things in hard times. The moniker also alludes to Ransom Hunter, the first freed slave to own property in Gaston County, of which Gastonia is the county seat.The team's first game was an exhibition on May 23, 2021, followed by the regular season opening day game on May 25.";
      document.getElementById("image-description-read-more").innerHTML = "Read more..";
      document.getElementById("image-description-read-more").href = "https://www.google.com/";
}
