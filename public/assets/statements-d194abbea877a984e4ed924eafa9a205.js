function cycleItems(){var i=$(".container div").eq(currentIndex);items.hide(),i.css("display","inline-block")}$(document).ready(function(){$(".container div").eq(0).css("display","inline-block"),$("#split, #takeall").click(function(){$("#video-btn").hide(),$("#waitmsgone").show(),$(".action_note").hide(),value=$(this).attr("value"),$.ajax({url:"/payments",data:{value:value},type:"get",success:function(){window.location.href="/participant?from=picked_action"}})}),getcontrollername()}),$(document).ready(function(){$("#record").click(function(){window.location.href="participant/sample_video"}),$(".results").click(function(){window.location.href="participant/sample_video?from=result"})});