function snapCrackle(maxValue) {
    let text = "";
    for (let value = 1; value <= maxValue; value++) {
        if (value % 2 !== 0 && value % 5 === 0) {
            text += "SnapCrackle, ";
       
        }
        else if (value % 2 !== 0) {
            text += "Snap, ";
        
        }
        else if (value % 5 === 0) {
            text += "Crackle, ";
       
        }else{
        text += value + ", ";
        }
    }

    return text;
}

snapCrackle(12);