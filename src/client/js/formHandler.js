function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value  
     
    let checkNumbers = Client.checkNumbers(formText);
    if(checkNumbers){
        document.getElementById('outputApi').innerHTML = 
        "<p style='color:red'>You Cannot enter Just Numbers</p>"
    }

    else if(formText !="")
    {

    
    const formdata = new FormData();
formdata.append("key", "423cdaeb174e0b13c2e4902953928d5c");
formdata.append("txt", formText);
formdata.append("lang", "en");  // 2-letter code, like en es fr ...
formdata.append("model","general")

const requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

 fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)

  .then(res => res.json())

.then(function(res) {
    var score_tag ='';
    if(res.score_tag == 'P+')
    score_tag = 'strong positive'
    else if(res.score_tag == 'P')
    score_tag = 'positive'
    else if(res.score_tag == 'NEU')
    score_tag = 'neutral'  
    else if(res.score_tag == 'N')
    score_tag = 'negative' 
     else if(res.score_tag == 'N+')
    score_tag = 'strong negative'
    else if(res.score_tag == 'NONE')
    score_tag = 'without polarity'

    /////////////////////
    var agreement='';
    if(res.agreement == 'AGREEMENT')
    agreement= 'the different elements have the same polarity.'
    else if(res.agreement== 'DISAGREEMENT')
    agreement = ` there is disagreement between the different elements' polarity.`
     /////////////////////////////
     var subjectivity='';
     if(res.subjectivity == 'OBJECTIVE')
     subjectivity= ' the text does not have any subjectivity marks.'
     else if(res.subjectivity== 'SUBJECTIVE')
     subjectivity = ` the text has subjective marks`
      /////////////////////////////
      var irony	='';
     if(res.irony	 == 'NONIRONIC')
     irony	= '  the text does not have any irony marks.'
     else if(res.irony	== 'IRONIC')
     irony	 = ` the text has irony marks`
      /////////////////////////////
    document.getElementById('outputApi').innerHTML = 
        `<ul>
        <li>Score Tag : `+score_tag+`</li>
        <li>Agreement : `+agreement+`</li>
        <li>Subjectivity : `+subjectivity+`</li>
        <li>Confidence : `+res.confidence+`</li>
        <li>Irony : `+res.irony+`</li>

      </ul>`
       // console.log(res)
    })
  .catch(error => console.log('error', error));
}

else {
    document.getElementById('outputApi').innerHTML = 
    "<p style='color:red'>You Cannot enter Empty Text</p>"
}

}

export { handleSubmit }
