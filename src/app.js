
$(document).ready(function() {
    var curSelected = ".category.all.sell.HK.S0.M0";

    $('.selector').on('change click', function() {
        var curSelected = ".category." + $("#selway").val() + "." + $("#seldistrict").val() + "." + $("#selsize").val() + "." + $("#selprice").val();
        $('.category').hide();
        $(curSelected).show();
    })
    /*
    $.ajax({
        type: "GET",
        url: "property.xml",
        dataType: "xml",
        success: function(xml) {
            var xmlDoc = $.parseXML(xml),
                $xml = $(xmlDoc);
            console.log($.parseXML(xml));
            $xml.find('property').each(function(index) {
                var category = $(this).find('category').text();
                var img = $(this).find('img').text();
                var name = $(this).find('name').text();
                var district = $(this).find('district').text();
                var size = $(this).find('size').text();
                var price = $(this).find('price').text();
                $("#name").append($(this).find('name').text());
            });
        },
        error: function() {
            alert("fail to load xml");
        }
    });
    */
    var property = [1,2,3,4,5,6,7,8,9,10,11,12,13];
    
    $( ".category" ).each (function() {
         var k = $( ".category" ).index( this );
         
         property[k] = $(this);
         console.log(k);
    });

    //trying to set div array
    
    
    $.ajax({
        type: "GET",
        url: "./property.xml",
        dataType: "xml",
        contentType: 'application/xml',
        cache: false,
        success: function (xml) {
            var i = 0;
            $(xml).find('garden').each(function () {
                var category = $(this).find('category').text();
                var img = $(this).find('img').text();
                var name = $(this).find('name').text();
                var slrt = $(this).find('slrt').text();  
                var district = $(this).find('district').text();
                var size = $(this).find('size').text();
                var price = $(this).find('price').text();
                
                property[i].addClass(category);
                property[i].find("img").attr("src", img);
                property[i].find("#name").append(name);
                property[i].find("#slrt").append(slrt);  
                property[i].find("#district").append("District: " + district);
                property[i].find("#size").append("Size: " + size);
                property[i].find("#price").append("Price: " + price);
                i = i + 1;
            });
        },
        error: function () {
           
            alert("Failed to get xml");
        }
    });
});
