this.onmessage= function(e){
    if(e.data.addThis !== undefined){
        this.postMessage( {result : e.data.ddThis.num1 + e.data.addThis.num2});
    }
    }
}
