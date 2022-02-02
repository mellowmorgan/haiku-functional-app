import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { checkHaiku } from './haiku.js';



$("#funform").submit(function(event){
  event.preventDefault();
  const result = $("textarea").val();
  const boolArr = checkHaiku(result);
  if (!boolArr){
    $("#counts").empty();
    $("#result").html("This is NOT a haiku!");
  }
  else{
    if (!boolArr[0]){$("#result").html("This is NOT a haiku!");}
    else{$("#result").html("This is a haiku!");}
    $("#counts").empty();
    $("#counts").append("<p>Line 1 syllables: "+boolArr[1]+"</p>");
    $("#counts").append("<p>Line 2 syllables: "+boolArr[2]+"</p>");
    $("#counts").append("<p>Line 3 syllables: "+boolArr[3]+"</p>");
  }
});