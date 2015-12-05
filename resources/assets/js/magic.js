$(function(){
    var editor = new MediumEditor('.editable');

    $('.editable').mediumInsert({
        editor: editor
    });
});
