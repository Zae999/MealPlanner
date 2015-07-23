$(document).ready(function(){
// First Item
// First Meal
// Current Selection 
    $('#FirstMPListItem1', '#FirstMealPlan').mouseover(function(){
        $('#circle1', '#FirstMealPlan').css('background-color','rgb(6, 228, 255)');
        $('#MealItemName1', '#FirstMealPlan').css('color', 'rgb(6, 228, 255)');
    });
    $('#FirstMPListItem1', '#FirstMealPlan').mouseout(function(){
        $('#circle1', '#FirstMealPlan').css('background-color','black');
        $('#MealItemName1', '#FirstMealPlan').css('color', 'white');
    });
    // Other Selections
    $('#FirstMPListItem1', '#FirstMealPlan').mouseover(function(){
        $('#circle2', '#FirstMealPlan').css('background-color','black');
        $('#MealItemName2', '#FirstMealPlan').css('color', 'white');
    }); 
    $('#FirstMPListItem1', '#FirstMealPlan').mouseover(function(){
        $('#circle3', '#FirstMealPlan').css('background-color','black');
        $('#MealItemName3', '#FirstMealPlan').css('color', 'white');
    });
// Third Item
// Current Selection 
    $('#FirstMPListItem3', '#FirstMealPlan').mouseover(function(){
        $('#circle3', '#FirstMealPlan').css('background-color','rgb(6, 228, 255)');
        $('#MealItemName3', '#FirstMealPlan').css('color', 'rgb(6, 228, 255)');
    });
    $('#FirstMPListItem3', '#FirstMealPlan').mouseout(function(){
        $('#circle3', '#FirstMealPlan').css('background-color','black');
        $('#MealItemName3', '#FirstMealPlan').css('color', 'white');
    });
    // Other Selections
    $('#FirstMPListItem3', '#FirstMealPlan').mouseover(function(){
        $('#circle1', '#FirstMealPlan').css('background-color','black');
        $('#MealItemName1', '#FirstMealPlan').css('color', 'white');
    }); 
    $('#FirstMPListItem2', '#FirstMealPlan').mouseover(function(){
        $('#circle2', '#FirstMealPlan').css('background-color','black');
        $('#MealItemName2', '#FirstMealPlan').css('color', 'white');
    });
// Second Item
// Current Selection 
    $('#FirstMPListItem2', '#FirstMealPlan').mouseover(function(){
        $('#circle2', '#FirstMealPlan').css('background-color','rgb(6, 228, 255)');
        $('#MealItemName2', '#FirstMealPlan').css('color', 'rgb(6, 228, 255)');
    });
    $('#FirstMPListItem2', '#FirstMealPlan').mouseout(function(){
        $('#circle2', '#FirstMealPlan').css('background-color','black');
        $('#MealItemName2', '#FirstMealPlan').css('color', 'white');
    });
    // Other Selections
    $('#FirstMPListItem2', '#FirstMealPlan').mouseover(function(){
        $('#circle1', '#FirstMealPlan').css('background-color','black');
        $('#MealItemName1', '#FirstMealPlan').css('color', 'white');
    }); 
    $('#FirstMPListItem2', '#FirstMealPlan').mouseover(function(){
        $('#circle3', '#FirstMealPlan').css('background-color','black');
        $('#MealItemName3', '#FirstMealPlan').css('color', 'white');
    });


    // Expand Area - First Meal Section
    var expandOrcollapse = 0;
           $('#FirstExpand', '#FirstMealPlan').click(function(){
                if (expandOrcollapse == 0) 
                {
                    $('#FirstMealPlan', '#addedSec').css('height','700px');
                    $('#FirstExpand', '#FirstMealPlan').css('margin-top', '700px');
                    $('#main').css('height','1738px');
                    $('#addedSec', '#main').css('height','1738px');
                    $('#lowerFirstSection', '#FirstMealPlan').css('visibility','visible');
                    $('#minus', '#FirstExpand').css('visibility','visible');
                    $('#plus', '#FirstExpand').css('visibility','hidden');
                    

                    $('#SecondMealPlan', '#addedSec').css('height','350px');
                    $('#SecondExpand', '#SecondMealPlan').css('margin-top', '350px');
                    $('#lowerSecondSection', '#SecondMealPlan').css('visibility','hidden');
                    $('#minus', '#SecondExpand').css('visibility','hidden');
                    $('#plus', '#SecondExpand').css('visibility','visible');

                    $('#ThirdMealPlan', '#addedSec').css('height','350px');
                    $('#ThirdExpand', '#ThirdMealPlan').css('margin-top', '350px');
                    $('#lowerThirdSection', '#ThirdMealPlan').css('visibility','hidden');
                    $('#minus', '#ThirdExpand').css('visibility','hidden');
                    $('#plus', '#ThirdExpand').css('visibility','visible');



                    expandOrcollapse = 1;
                } 
                else if (expandOrcollapse == 1) 
                {
                    $('#FirstMealPlan', '#addedSec').css('height','350px');
                    $('#FirstExpand', '#FirstMealPlan').css('margin-top', '350px');
                    $('#main').css('height','1388px');
                    $('#addedSec', '#main').css('height','1388px');
                    $('#lowerFirstSection', '#FirstMealPlan').css('visibility','hidden');
                    $('#minus', '#FirstExpand').css('visibility','hidden');
                    $('#plus', '#FirstExpand').css('visibility','visible');
                    expandOrcollapse = 0;
                }
            }); 





// First Item
// Second Meal
// Current Selection
     $('#SecondMPListItem1', '#SecondMealPlan').mouseover(function(){
        $('#circle1', '#SecondMealPlan').css('background-color','rgb(6, 228, 255)');
        $('#MealItemName1', '#SecondMealPlan').css('color', 'rgb(6, 228, 255)');
    });
    $('#SecondMPListItem1', '#SecondMealPlan').mouseout(function(){
        $('#circle1', '#SecondMealPlan').css('background-color','black');
        $('#MealItemName1', '#SecondMealPlan').css('color', 'white');
    });
    // Other Selections
    $('#SecondMPListItem1', '#SecondMealPlan').mouseover(function(){
        $('#circle2', '#SecondMealPlan').css('background-color','black');
        $('#MealItemName2', '#SecondMealPlan').css('color', 'white');
    }); 
    $('#SecondMPListItem1', '#SecondMealPlan').mouseover(function(){
        $('#circle3', '#SecondMealPlan').css('background-color','black');
        $('#MealItemName3', '#SecondMealPlan').css('color', 'white');
    });
// Third Item
// Current Selection 
    $('#SecondMPListItem3', '#SecondMealPlan').mouseover(function(){
        $('#circle3', '#SecondMealPlan').css('background-color','rgb(6, 228, 255)');
        $('#MealItemName3', '#SecondMealPlan').css('color', 'rgb(6, 228, 255)');
    });
    $('#SecondMPListItem3', '#SecondMealPlan').mouseout(function(){
        $('#circle3', '#SecondMealPlan').css('background-color','black');
        $('#MealItemName3', '#SecondMealPlan').css('color', 'white');
    });
    // Other Selections
    $('#SecondMPListItem3', '#SecondMealPlan').mouseover(function(){
        $('#circle1', '#SecondMealPlan').css('background-color','black');
        $('#MealItemName1', '#SecondMealPlan').css('color', 'white');
    }); 
    $('#SecondMPListItem2', '#SecondMealPlan').mouseover(function(){
        $('#circle2', '#SecondMealPlan').css('background-color','black');
        $('#MealItemName2', '#SecondMealPlan').css('color', 'white');
    }); 
// Second Item
// Current Selection 
    $('#SecondMPListItem2', '#SecondMealPlan').mouseover(function(){
        $('#circle2', '#SecondMealPlan').css('background-color','rgb(6, 228, 255)');
        $('#MealItemName2', '#SecondMealPlan').css('color', 'rgb(6, 228, 255)');
    });
    $('#SecondMPListItem2', '#SecondMealPlan').mouseout(function(){
        $('#circle2', '#SecondMealPlan').css('background-color','black');
        $('#MealItemName2', '#SecondMealPlan').css('color', 'white');
    });
    // Other Selections
    $('#SecondMPListItem2', '#SecondMealPlan').mouseover(function(){
        $('#circle1', '#SecondMealPlan').css('background-color','black');
        $('#MealItemName1', '#SecondMealPlan').css('color', 'white');
    }); 
    $('#SecondMPListItem2', '#SecondMealPlan').mouseover(function(){
        $('#circle3', '#SecondMealPlan').css('background-color','black');
        $('#MealItemName3', '#SecondMealPlan').css('color', 'white');
    });


// Expand Area - First Meal Section
    var expandOrcollapse2 = 0;
           $('#SecondExpand', '#SecondMealPlan').click(function(){
                if (expandOrcollapse2 == 0) 
                {
                    $('#SecondMealPlan', '#addedSec').css('height','700px');
                    $('#SecondExpand', '#SecondMealPlan').css('margin-top', '700px');
                    $('#main').css('height','1738px');
                    $('#addedSec', '#main').css('height','1738px');
                    $('#lowerSecondSection', '#SecondMealPlan').css('visibility','visible');
                    $('#minus', '#SecondExpand').css('visibility','visible');
                    $('#plus', '#SecondExpand').css('visibility','hidden');
                    
                    $('#FirstMealPlan', '#addedSec').css('height','350px');
                    $('#FirstExpand', '#FirstMealPlan').css('margin-top', '350px');
                    $('#lowerFirstSection', '#FirstMealPlan').css('visibility','hidden');
                    $('#minus', '#FirstExpand').css('visibility','hidden');
                    $('#plus', '#FirstExpand').css('visibility','visible');

                    $('#ThirdMealPlan', '#addedSec').css('height','350px');
                    $('#ThirdExpand', '#ThirdMealPlan').css('margin-top', '350px');
                    $('#lowerThirdSection', '#ThirdMealPlan').css('visibility','hidden');
                    $('#minus', '#ThirdExpand').css('visibility','hidden');
                    $('#plus', '#ThirdExpand').css('visibility','visible');

                    expandOrcollapse2 = 1;
                } 
                else if (expandOrcollapse2 == 1) 
                {
                    $('#SecondMealPlan', '#addedSec').css('height','350px');
                    $('#SecondExpand', '#SecondMealPlan').css('margin-top', '350px');
                    $('#main').css('height','1388px');
                    $('#addedSec', '#main').css('height','1388px');
                    $('#lowerSecondSection', '#SecondMealPlan').css('visibility','hidden');
                    $('#minus', '#SecondExpand').css('visibility','hidden');
                    $('#plus', '#SecondExpand').css('visibility','visible');
                    expandOrcollapse2 = 0;
                }
            }); 





// First Item
// Third Meal
// Current Selection 
    $('#ThirdMPListItem1', '#ThirdMealPlan').mouseover(function(){
        $('#circle1', '#ThirdMealPlan').css('background-color','rgb(6, 228, 255)');
        $('#MealItemName1', '#ThirdMealPlan').css('color', 'rgb(6, 228, 255)');
    });
    $('#ThirdMPListItem1', '#ThirdMealPlan').mouseout(function(){
        $('#circle1', '#ThirdMealPlan').css('background-color','black');
        $('#MealItemName1', '#ThirdMealPlan').css('color', 'white');
    });
    // Other Selections
    $('#ThirdMPListItem1', '#ThirdMealPlan').mouseover(function(){
        $('#circle2', '#ThirdMealPlan').css('background-color','black');
        $('#MealItemName2', '#ThirdMealPlan').css('color', 'white');
    }); 
    $('#ThirdMPListItem1', '#ThirdMealPlan').mouseover(function(){
        $('#circle3', '#ThirdMealPlan').css('background-color','black');
        $('#MealItemName3', '#ThirdMealPlan').css('color', 'white');
    });
// Third Item
// Current Selection 
    $('#ThirdMPListItem3', '#ThirdMealPlan').mouseover(function(){
        $('#circle3', '#ThirdMealPlan').css('background-color','rgb(6, 228, 255)');
        $('#MealItemName3', '#ThirdMealPlan').css('color', 'rgb(6, 228, 255)');
    });
    $('#ThirdMPListItem3', '#ThirdMealPlan').mouseout(function(){
        $('#circle3', '#ThirdMealPlan').css('background-color','black');
        $('#MealItemName3', '#ThirdMealPlan').css('color', 'white');
    });
    // Other Selections
    $('#ThirdMPListItem3', '#ThirdMealPlan').mouseover(function(){
        $('#circle1', '#ThirdMealPlan').css('background-color','black');
        $('#MealItemName1', '#ThirdMealPlan').css('color', 'white');
    }); 
    $('#ThirdMPListItem2', '#ThirdMealPlan').mouseover(function(){
        $('#circle2', '#ThirdMealPlan').css('background-color','black');
        $('#MealItemName2', '#ThirdMealPlan').css('color', 'white');
    });
// Second Item
// Current Selection 
    $('#ThirdMPListItem2', '#ThirdMealPlan').mouseover(function(){
        $('#circle2', '#ThirdMealPlan').css('background-color','rgb(6, 228, 255)');
        $('#MealItemName2', '#ThirdMealPlan').css('color', 'rgb(6, 228, 255)');
    });
    $('#ThirdMPListItem2', '#ThirdMealPlan').mouseout(function(){
        $('#circle2', '#ThirdMealPlan').css('background-color','black');
        $('#MealItemName2', '#ThirdMealPlan').css('color', 'white');
    });
    // Other Selections
    $('#ThirdMPListItem2', '#ThirdMealPlan').mouseover(function(){
        $('#circle1', '#ThirdMealPlan').css('background-color','black');
        $('#MealItemName1', '#ThirdMealPlan').css('color', 'white');
    }); 
    $('#ThirdMPListItem2', '#ThirdMealPlan').mouseover(function(){
        $('#circle3', '#ThirdMealPlan').css('background-color','black');
        $('#MealItemName3', '#ThirdMealPlan').css('color', 'white');
    });




// Expand Area - First Meal Section
    var expandOrcollapse3 = 0;
           $('#ThirdExpand', '#ThirdMealPlan').click(function(){
                if (expandOrcollapse3 == 0) 
                {
                    $('#ThirdMealPlan', '#addedSec').css('height','700px');
                    $('#ThirdExpand', '#ThirdMealPlan').css('margin-top', '700px');
                    $('#main').css('height','1738px');
                    $('#addedSec', '#main').css('height','1738px');
                    $('#lowerThirdSection', '#ThirdMealPlan').css('margin-top','350px');
                    $('#lowerThirdSection', '#ThirdMealPlan').css('visibility','visible');
                    $('#minus', '#ThirdExpand').css('visibility','visible');
                    $('#plus', '#ThirdExpand').css('visibility','hidden');
                    
                    $('#FirstMealPlan', '#addedSec').css('height','350px');
                    $('#FirstExpand', '#FirstMealPlan').css('margin-top', '350px');
                    $('#lowerFirstSection', '#FirstMealPlan').css('visibility','hidden');
                    $('#minus', '#FirstExpand').css('visibility','hidden');
                    $('#plus', '#FirstExpand').css('visibility','visible');

                    $('#SecondMealPlan', '#addedSec').css('height','350px');
                    $('#SecondExpand', '#SecondMealPlan').css('margin-top', '350px');
                    $('#lowerSecondSection', '#SecondMealPlan').css('visibility','hidden');
                    $('#minus', '#SecondExpand').css('visibility','hidden');
                    $('#plus', '#SecondExpand').css('visibility','visible');


                    expandOrcollapse3 = 1;
                } 
                else if (expandOrcollapse3 == 1) 
                {
                    $('#ThirdMealPlan', '#addedSec').css('height','350px');
                    $('#ThirdExpand', '#ThirdMealPlan').css('margin-top', '350px');
                    $('#main').css('height','1388px');
                    $('#addedSec', '#main').css('height','1388px');
                    $('#lowerThirdSection', '#ThirdMealPlan').css('visibility','hidden');
                    $('#lowerThirdSection', '#ThirdMealPlan').css('margin-top','0px');
                    $('#minus', '#ThirdExpand').css('visibility','hidden');
                    $('#plus', '#ThirdExpand').css('visibility','visible');
                    expandOrcollapse3 = 0;
                }
            }); 











           
});
