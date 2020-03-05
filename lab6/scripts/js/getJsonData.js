$(document).ready(function(){

    //AJAX service request to get the main text data from the json data store
    $.getJSON('./model/data/data.json', function(jsonObj) {
        console.log(jsonObj);
        //Get the home page main text data
        $('#title_home').html('<h2>' + jsonObj.pageTextData[0].title + '</h2>');
        $('#subtitle_home').html('<h3>' + jsonObj.pageTextData[0].subTitle + '</h3>');
        $('#description_home').html('<p>' + jsonObj.pageTextData[0].description + '</p>');

        //Get the home page left column text data
        $('#title_left').html('<h2>' + jsonObj.pageTextData[0].title + '</h2>');
        $('#subtitle_left').html('<h3>' + jsonObj.pageTextData[0].subTitle + '</h3>');
        $('#description_left').html('<p>' + jsonObj.pageTextData[0].description + '</p>');

        //Get the home page centre column text data
        $('#title_centre').html('<h2>' + jsonObj.pageTextData[0].title + '</h2>');
        $('#subtitle_centre').html('<h3>' + jsonObj.pageTextData[0].subTitle + '</h3>');
        $('#description_centre').html('<p>' + jsonObj.pageTextData[0].description + '</p>');

        //Get the home page right column text data
        $('#title_right').html('<h2>' + jsonObj.pageTextData[0].title + '</h2>');
        $('#subtitle_right').html('<h3>' + jsonObj.pageTextData[0].subTitle + '</h3>');
        $('#description_right').html('<p>' + jsonObj.pageTextData[0].description + '</p>');
    });
});