
//these objects get added to the global problems array


function Problem(userInput){
    this.problem = userInput;
    this.arguments = [];
    this.argumentCount;

}



Problem.prototype.addArg = function(arg){
    //this function will add arg to the argument array 
    this.arguments.push(arg);
    this.argumentCount++;
};


Problem.prototype.getargCount = function (){
    return this.argumentCount;

};


