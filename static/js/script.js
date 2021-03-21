  $(document).ready(function(){
    $(".sidenav").sidenav({edge: "right"});

    $.get('static/text/countries.txt',function(data) {
        var lines = data.split('\n');
            $.each(lines, function(k, v){
                var $newOpt = $("<option>").attr("value",v).text(v)
                $('#country').append($newOpt);
            });
      });

    $('select').formSelect();
  });