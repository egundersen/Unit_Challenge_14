function Calculator() {
    this.currentInput = "0";
    this.memory = "0";
    this.operator = 0;
    this.mode = "RADIAN";
    this.storedNumber = "0"

    // Helper function for displaying the current input
    this.displayThis = function() {
        document.getElementById('screen').value = this.currentInput;
    }

    // Adds a digit to the current input
    this.addDigit = function(dig) {
        if ((eval(this.currentInput) == 0) && (this.currentInput.indexOf(".") == -1)) {
            this.currentInput = dig;
        } else if (this.currentInput.length <= 17) {
            this.currentInput = this.currentInput + dig;
        }
        this.displayThis();
    }


    // Adds a decimal to the current input
    this.addDecimal = function() {
        if (this.currentInput.length == 0) {
            //no leading ".", use "0."
            this.currentInput = "0.";
        } else {
            // First make sure one doesn't exist
            if (this.currentInput.indexOf(".") == -1) {
                this.currentInput = this.currentInput + ".";
            }
        }
        this.displayThis();
    }

    // Clears everything.
    this.allClear = function() {
        this.currentInput = "0";
        this.operator = 0;                //clear this.operator
        this.memory = "0";                  //clear this.memory
        this.displayThis();
    }

    // Stores the last this.operator pushed for multiply, divide, add, or subtract.
    this.storeOperator = function(op) {
        if (op.indexOf("*") > -1) { this.operator = 1; };       // codes for *
        if (op.indexOf("/") > -1) { this.operator = 2; };       // slash (divide)
        if (op.indexOf("+") > -1) { this.operator = 3; };       // sum
        if (op.indexOf("-") > -1) { this.operator = 4; };       // difference
        if (op.indexOf("^") > -1) { this.operator = 5; };       // exponent
        if (op.indexOf("√") > -1) { this.operator = 6; };       // root

        this.memory = this.currentInput;                 //store value
        this.currentInput = "0";
        this.displayThis();
    }

    // Calculate using this.operator, the this.memory and what is current
    this.calculate = function() {
        if (this.operator == 1) { this.currentInput = eval(this.memory) * eval(this.currentInput); };
        if (this.operator == 3) { this.currentInput = eval(this.memory) + eval(this.currentInput); };
        if (this.operator == 4) { this.currentInput = eval(this.memory) - eval(this.currentInput); };
        if (this.operator == 5) { this.currentInput = Math.pow(eval(this.memory),this.currentInput); };
        if (this.operator == 6) {
            if(Math.pow(eval(this.memory),1/this.currentInput) < 0) {
                this.currentInput = 105;
            }
            else {
                this.currentInput = Math.pow(eval(this.memory),1/this.currentInput);
            }
        };
        if (this.operator == 2) {
            if( eval(this.currentInput) == 0){
                this.currentInput = "DIVIDE BY ZERO ERROR";
            }
            else{
                this.currentInput = eval(this.memory) / eval(this.currentInput);
            }
        };

        this.operator = 0;                //clear this.operator
        this.memory    = "0";              //clear this.memory
        this.displayThis();
    }

    // Change the sign of the current input
    this.changeSign = function() {
        this.currentInput = this.currentInput * -1;
        this.displayThis();
    }

    // Clear the current input back to 0
    this.justClear = function() {
        this.currentInput = "0";
        this.displayThis();
    }

    // Change the current input to a percentage
    this.percentage = function() {
        this.currentInput = this.currentInput / 100;
        this.displayThis();
    }

    // Calculate the factorial of the current input
    this.factorial = function() {
        var i;
        var f = this.currentInput;
        for(i = 1; i < f; i++){
            this.currentInput = this.currentInput * i;
        }
        this.displayThis();
    }

    // Calculate the square of the current input
    this.square = function() {
        this.currentInput = this.currentInput * this.currentInput
        this.displayThis();
    }

    // Calculate the square root of the current input
    this.squareRoot = function() {
        if(this.currentInput < 0) {
            this.currentInput = this.currentInput * -1;
            this.currentInput = Math.sqrt(this.currentInput)
            this.currentInput = Math.sqrt(this.currentInput) + "i";
        }
        else {
            this.currentInput = Math.sqrt(this.currentInput)
        }
        this.displayThis();
    }

    // Calculate the inverse of the current input
    this.inverse = function() {
        this.currentInput = 1 / this.currentInput;
        this.displayThis();
    }

    // Calculate the trig functions of the current input
    this.trig = function(sign) {
        if(this.mode == "DEGREE"){
            this.currentInput = this.currentInput * (Math.PI/180)
        }
        if(sign == "sin"){
            this.currentInput = Math.sin(this.currentInput);
        }
        else if(sign == "cos"){
            this.currentInput = Math.cos(this.currentInput);
        }
        else if(sign == "tan"){
            this.currentInput = Math.tan(this.currentInput);
        }
        this.displayThis();
    }

    //Set Calculator() this.mode
    this.rad = function() {
        if(this.mode == "RADIAN"){
            this.mode = "DEGREE";
            this.currentInput = "NOW IN DEGREE Mode ";
        }
        else if(this.mode == "DEGREE"){
            this.mode = "RADIAN";
            this.currentInput = "NOW IN RADIAN Mode ";
        }
        this.displayThis();
    }

    //Add Pi to Calculator()
    this.pi = function() {
        this.currentInput = Math.PI;
        this.displayThis();
    }

    //Play John Cena Theme
    this.johnCena = function() {
        var audio = new Audio('Cena.mp3');
        audio.play();
        this.currentInput = "WWE - SUPERSLAM   ";
        this.displayThis();
    }

    this.log = function(){
        this.currentInput = Math.log(this.currentInput);
        this.displayThis();
    }

    //Calculates the Cube
    this.cube = function() {
        this.currentInput = this.currentInput * this.currentInput * this.currentInput;
        this.displayThis();
    }

    //Calculates the Cube Root
    this.cubeRoot = function() {
        this.currentInput = Math.cbrt(this.currentInput);
        this.displayThis();
    }

    //Chooses a CSS Class
    this.changeElementCLass = function(id, className){
        var el = document.getElementById(id);
        el.className = className;
    }

    //this.memory Functions
    this.store = function(input) {
        if(input == "m+"){
            this.storedNumber = this.currentInput;
        }
        if(input == "m-"){
            this.storedNumber = this.currentInput * -1;
        }
        if(input == "mr"){
            this.currentInput = this.storedNumber;
        }
        if(input == "mc"){
         this.storedNumber = 0;
        }
        this.displayThis();
    }
}
