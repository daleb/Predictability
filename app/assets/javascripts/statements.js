 $(document).ready(function(){
$('button').click(function() {
	//window.location.href="/participant/sample_video";
	//window.location.href="/payments?value=split";
	value = ($(this).attr("value"));
	val= "#statement_" + (currentIndex + 1) + "_id"
	statement_id = ($(val).val())
	  $.ajax({
        url: "/payments",
        data: { value: value, statement_id: statement_id},
        type: 'get', 
        success: function(result){
             currentIndex += 1;
    if (currentIndex > itemAmt - 1) {
      currentIndex = 0;
    }
    cycleItems();
    }
        });
    });
	
	
  });

  
 function cycleItems() {
    var item = $('.container div').eq(currentIndex);
    items.hide();
    item.css('display','inline-block');
  }
