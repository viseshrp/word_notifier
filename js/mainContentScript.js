//global variables
//fire event

// other functions

function isWordFound() {
    var isFound = false;
    var keyword_list = ['Citizenship|citizen','clearance', 'security clearance'];
    //todo get it from options page. //might have to use message passing to get it.

    for (var key in keyword_list) {

        var word = keyword_list[key];
        console.log("for word : " + word);

        // $("*:contains('" + word.toLowerCase() + "')")

        //get list of elements matching the word or regex,
        //whatever is in the key list.
        var filtered_elements = $("body").filter(function () {
            var regex = new RegExp(word, "ig");
            return regex.test($(this).text());
        });

        //if returned list length is greater than 0,
        //we know the doc's got the word somewhere,
        //now set bool and break.
        if (filtered_elements.length > 0) {
            isFound = true;
            return isFound;
        }
    }

    return isFound;
}

console.log(isWordFound());