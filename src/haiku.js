const checkLines = (linesArr) => {
  if (linesArr.length===3){
    return true;
  }
  else{
    return false;
  }
};


const checkSyllablesWord = (word) => {
  word = word.toLowerCase();   
  if(word.length <= 3) { return 1; }  //return 1 if word.length <= 3
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');   //word.sub!(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
  word = word.replace(/^y/, '');    //word.sub!(/^y/, '')
  return word.match(/[aeiouy]{1,2}/g).length;                
};
    
const checkSyllablesLine = (line, count=0) =>{
  if (line===""){
    return count;
  }
  else {
    const wordsArr = line.split(" ");
    const word = wordsArr.pop();
    const wordCount = checkSyllablesWord(word);
    const newLine = wordsArr.join(" ");
    return checkSyllablesLine(newLine, count+=wordCount);
  }
};

export const checkHaiku = (para) => {
  const linesArray=para.split(/[\n\r]+/);
  if (checkLines(linesArray)){
    const check1 = checkSyllablesLine(linesArray[0]);
    const check2 = checkSyllablesLine(linesArray[1]);
    const check3 = checkSyllablesLine(linesArray[2]);
    if((check1===5) && (check2===7) && (check3===5)){
      return [true, check1, check2, check3];
    }
    else{
      return [false, check1, check2, check3];
    }
  }
  else{
    return false;
  }
};
