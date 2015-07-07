var test_value = "j457h";
var initial_value = 457;

function parse_value(value){
    return (parseInt(test_value.substring(1, 4)));
}

function the_result(value){
    if(value !== null){
        return true;
    }else{
        return false;
    }
}

function test_number(value_test, value_initial){
    console.log("value_test = " + value_test);
    console.log("value_initial = " + value_initial);
    
    if(value_test === value_initial){
        return true;
    }else{
        return false;
    }
}

function typeof_value(value){
    if(isNaN(value)){
        return true;
    }else{
        return false;
    }
}

function proper_testing(value_test, value_initial){
    if(!the_result(value_test)){
        console.log("There was no result");
    }else if(test_number(value_test, value_initial)){
        console.log("The test has been passed, this is the intended value");
    }else if(typeof_value(value_test)){
        console.log("The generated answer is not a number!!!")
    }else{
        console.log("It does not give proper result, not correct and it is a data type different from number, what could be wrong with the code?")
    }
}

var testing = parse_value(test_value);
proper_testing(testing, initial_value);
