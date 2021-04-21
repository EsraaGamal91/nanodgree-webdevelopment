function checkNumbers(inputText) {
    const regex = new RegExp('^[0-9]*$');

    return(regex.test(inputText))
  
}

export { checkNumbers }
