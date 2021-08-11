console.log("Your index.js file is loaded correctly!");

$(document).ready(function(){
    $("#moreImagesBtn").click(function(){
        console.log ("Btn1 working")
        $(".additionalGallery").css("display","flex");
    });
});