function startautoplay(){var i=Math.floor(8e3*Math.random())+2;setTimeout("autoplayscreen()",i)}function autoplayscreen(){autoplay&&("questions"==controllername&&autoplayquiz(),"statements"==controllername&&autoplaystatements(),"participant"==controllername&&autoplayparticipant(),"results"==controllername&&autoplayresuts(),"survey"==controllername&&autoplaysurvey(),"participantinfo"==controllername&&autoplayinfo()),startautoplay()}function autoplayquiz(){$("#question_1_1").is(":visible")?($("#question_1_1").click(),clickbtn()):$("#question_2_1").is(":visible")?($("#question_2_1").click(),clickbtn()):$("#question_3_1").is(":visible")?($("#question_3_1").click(),clickbtn()):$("#question_4_1").is(":visible")?($("#question_4_1").click(),clickbtn()):$("#question_5_1").is(":visible")?($("#question_5_1").click(),clickbtn()):$("#question_6_1").is(":visible")&&($("#question_6_1").click(),clickbtn())}function clickbtn(){$(".save_button").is(":visible")?clickquiz&&($("#quizform").submit(),clickquiz=!1):$(".next").click()}function autoplaystatements(){$("#record").is(":visible")&&clickrecord&&($("#record").click(),clickrecord=!1)}function autoplayparticipant(){$("#adjust").is(":visible")&&clickadjust&&($("#adjust").click(),clickadjust=!1),$("#split").is(":visible")?clicksplit&&($("#split").click(),clicksplit=!1):$("#takeall").is(":visible")?clicktakeall&&($("#takeall").click(),clicktakeall=!1):$("#readytosee").is(":visible")&&clickreadytosee&&($("#readytosee").click(),clickreadytosee=!1)}function autoplayresults(){$("#readytosee").is(":visible")&&clickreadytosee2&&($("#readytosee").click(),clickreadytosee2=!1)}function autoplaysurvey(){$("#moderately_1").is(":visible")&&$("#moderately_1").click(),$("#moderately_2").is(":visible")&&$("#moderately_2").click(),$("#moderately_3").is(":visible")&&$("#moderately_3").click(),$("#moderately_4").is(":visible")&&$("#moderately_4").click(),$("#moderately_5").is(":visible")&&$("#moderately_5").click(),$("#moderately_6").is(":visible")&&$("#moderately_6").click(),$("#moderately_7").is(":visible")&&$("#moderately_7").click(),$("#moderately_8").is(":visible")&&$("#moderately_8").click(),$("#moderately_9").is(":visible")&&$("#moderately_9").click(),$("#moderately_10").is(":visible")&&$("#moderately_10").click(),$("#moderately_11").is(":visible")&&$("#moderately_11").click(),$("#moderately_12").is(":visible")&&$("#moderately_12").click(),$("#moderately_13").is(":visible")&&$("#moderately_13").click(),$("#moderately_14").is(":visible")&&$("#moderately_14").click(),$("#moderately_15").is(":visible")&&$("#moderately_15").click(),$("#moderately_16").is(":visible")&&$("#moderately_16").click(),$("#moderately_17").is(":visible")&&$("#moderately_17").click(),$("#moderately_18").is(":visible")&&$("#moderately_18").click(),$("#moderately_19").is(":visible")&&$("#moderately_19").click(),$("#moderately_20").is(":visible")&&$("#moderately_20").click(),$("#okbutton").is(":visible")&&clickokbutton&&($("#okbutton").click(),clickokbutton=!1),$("#readytosee").is(":visible")&&clickreadytosee3&&($("#readytosee").click(),clickreadytosee3=!1)}function autoplayinfo(){$("#submitbutton").is(":visible")&&($("#namef").val("USERS FIRST NAME"),$("#namel").val("USERS LAST NAME"),$("#age").val("25"),$("#submitbutton").click())}var timerint,controllername,clickquiz,clickrecord,clicksplit,takeall,clickreadytosee,clickreadytosee2,clickreadytosee3,clickokbutton,clickadjust,autoplay;$(function(){clickquiz=!0,clickrecord=!0,clicksplit=!0,takeall=!0,clickreadytosee=!0,clickreadytosee2=!0,clickreadytosee3=!0,clickokbutton=!0,clickadjust=!0;var i=jQuery.trim($("#autoplayflag").html());autoplay=null==i?!1:"false"==i?!1:"true"==i?!0:!1,startautoplay()});