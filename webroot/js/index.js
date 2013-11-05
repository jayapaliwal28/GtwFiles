define(['jquery', 'basepath'], function ($, basepath) {
    
    return function(id, path){
        $('#upload-alert').html('<div class="alert alert-success"><a class="close" data-dismiss="alert">×</a><span>Upload successful</span></div>');
        $.get( basepath+"gtw_files/files/get_row/"+id, function(data){
            $('#all-files tr:last').after(data);
        });
    };
   
});