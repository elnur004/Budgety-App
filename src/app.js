// BUDGET CONTROLLER
var budgetController = (function() {

    //Some code




})();



// UI CONTROLLER
var UIController = (function() {

    return {
        getInput: function() {
            return{
                type: document.querySelector('.add__type').value,   // Will be either inc or exp
                description: document.querySelector('.add__description').value,
                value: document.querySelector('.add__value').value
            };
        }
    };

})();



// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function() {
        // 1. Get the field input data
        var input = UICtrl.getInput();
        console.log(input);
        // 2. Add the item to the Budget Controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget
    }



    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
    
    document.addEventListener('keydown', function(event) {
        if(event.key === 'Enter') {
            ctrlAddItem();
            
        }
    });


})(budgetController, UIController);