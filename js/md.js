/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(function () {
  console.log('boom');

  $(".del").delegate("", "click", function () {
    loadNewContent(this);
  });

  $(".rep-link").delegate("", "click", function () {
    repTable();
  });


  setInterval(function () {
    fadePhoto();
  }, 3500);


});

function loadNewContent(link) {
  var url = "md-ajax/" + $(link).attr('id') + ".html";
  console.log(url);

  $("#main-content").load(url);
}

function fadePhoto() {
  $("#front-Img").fadeTo(1500, 0.0, function () {
    changePhotos("#front-Img");
    $("#front-Img").fadeTo(10, 1, function () {
      changePhotos("#back-Img");
    });
  });
}

function changePhotos(img) {
  var numOfPics = 3;
  var currPhoto = parseInt($(img).attr('src')[2]);

  if (currPhoto === numOfPics) {
    currPhoto = 1;
  } else {
    currPhoto++;
  }

  $(img).attr('src', 'md' + currPhoto + '.jpg');
}

function repTable() {

  var repArr = [
    "Good Times Bad Times",
    "Babe I'm Gonna Leave You",
    "Dazed and Confused",
    "Your Time Is Gonna Come",
    "Black Mountain Side",
    "Communication Breakdown",
    "How Many More Times",
    "Whole Lotta Love",
    "What Is and What Should Never Be",
    "The Lemon Song",
    "Thank You",
    "Heartbreaker",
    "Living Loving Maid (She's Just a Woman)",
    "Ramble On",
    "Moby Dick",
    "Bring It on Home",
    "Immigrant Song",
    "Friends",
    "Celebration Day",
    "Since I’ve Been Loving You",
    "Out on the Tiles",
    "Gallows Pole",
    "Tangerine",
    "Black Dog",
    "Rock and Roll",
    "The Battle of Evermore",
    "Stairway to Heaven",
    "Misty Mountain Hop",
    "Four Sticks",
    "Going to California",
    "When the Levee Breaks",
    "The Song Remains the Same",
    "Over the Hills and Far Away",
    "The Crunge",
    "Dancing Days",
    "No Quarter",
    "The Ocean",
    "Custard Pie",
    "The Rover",
    "Houses of the Holy",
    "Trampled Under Foot",
    "Kashmir",
    "Bron-Yr-Aur",
    "Down by the Seaside",
    "Ten Years Gone",
    "Night Flight",
    "The Wanton Song",
    "Boogie With Stu",
    "Black Country Woman",
    "Achilles Last Stand",
    "Nobody's Fault But Mine",
    "Fool in the Rain"];

  var count = 0;
  var repString = "";


  for (i = 0; i < repArr.length - 1; i = i + 3) {

    repString += '<tr class="rep-info">' +
            '<td align="center">' + repArr[i] + '</td>' +
            '<td align="center">' + repArr[i + 1] + '</td>' +
            '<td align="center">' + repArr[i + 2] + '</td>' +
            '</tr>';

  }

  $("#main-content").html(repString);


}