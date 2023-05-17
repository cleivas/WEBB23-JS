const h1Info = {
    type: 'h1',
    color: 'hotpink',
    size: '48px',
    text: 'Det här är första elementet',
    createElement(){
        const el = document.createElement(this.type);
        el.style.color = this.color;
        el.innerText = this.text;
        el.style.fontSize = this.size;
        document.body.append(el);
    }
}

const pInfo = {
    type: 'p',
    color: 'blue',
    size: '12px',
    text: 'Ett p-element',
    createElement(){
        const el = document.createElement(this.type);
        el.style.color = this.color;
        el.innerText = this.text;
        el.style.fontSize = this.size;
        document.body.append(el);
    }
}

pInfo.createElement();
h1Info.createElement();

function createElement(elementObj){
    const el = document.createElement(elementObj.type );
    
    el.style.color = elementObj.color;
    el.innerText = elementObj.text;
    el.style.fontSize = elementObj.size;

    document.body.append(el);
}   

// createElement(h1Info);
// createElement(pInfo);

//Skriv en metod i objektet som utför exakt samma som funktioen vi tidigare skrev
// Nedan ska alltså fungera exakt lika dant som rad 28 och 29

