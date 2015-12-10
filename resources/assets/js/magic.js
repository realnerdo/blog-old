$(function(){

    var $body = $('body');

    /* Autosize */
    var autotextarea = $('.autosize');
    if(autotextarea.length){
        autosize(autotextarea);
    }

    /* Medium Editor */
    var editable = $('.editable');
    if(editable.length){
        var editor = new MediumEditor('.editable', {
            toolbar: {
                buttons: ['bold', 'italic', 'underline', 'orderedlist', 'unorderedlist', 'anchor', 'h1', 'h2', 'quote']
            },
            buttonLabels: 'fontawesome',
            targetBlank: true,
            placeholder: {
                text: 'Write something cool'
            }
        });

        editable.mediumInsert({
            editor: editor,
            addons: {
                images: {
                    label: '<span class="typcn typcn-camera"></span>',
                    // fileUploadOptions: { // (object) File upload configuration. See https://github.com/blueimp/jQuery-File-Upload/wiki/Options
                    //     url: 'upload.php', // (string) A relative path to an upload script
                    //     acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i // (regexp) Regexp of accepted file types
                    // },
                    // deleteScript: 'delete.php',
                }
            }
        });
    }

    /* Tabs */
    var tabs = $('.tabs');
    if(tabs.length){
        var tabs = tabs.find('.tab').find('.link'),
            tabbed = $('.tabbed');

        if(tabbed.length){
            tabs.click(function(e){
                e.preventDefault();
                var $this = $(this),
                    tab_id = $this.data('tab');
                tabs.removeClass('active');
                $this.addClass('active');
                tabbed.removeClass('active');
                tabbed.filter('#' + tab_id).addClass('active');
            });
        }
    }

    /* Panel */
    var panel = $('.panel');
    if(panel.length){
        var close_btn = panel.find('.title').find('.close-panel'),
            open_btn = $('.open-panel');

        open_btn.click(function(e){
            e.preventDefault();
            panel.addClass('revealed');
        });

        close_btn.click(function(e){
            e.preventDefault();
            panel.removeClass('revealed');
        });
    }

    /* File preview */
    var file_img = $('.file').filter('.img');
    if(file_img.length){

        function getImgPreview(input) {
            var $img = $('<img>', {
                class: 'img-preview',
                src: ''
            });
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $img.attr('src', e.target.result);
                }

                reader.readAsDataURL(input.files[0]);

                return $img;
            }
        }

        file_img.change(function(){
            var preview = getImgPreview(this),
                img = file_img.next('.img-preview');
            if(img.length){
                img.remove();
            }
            file_img.after(preview);
        });
    }

    /* Select Dropdowns */
    var select = $('.select');
    if(select.length){
        var select_wrap = $('<div>', {
                class: 'select-styled'
            });

        select.wrap(select_wrap).before($('<span>', {
            class: 'typcn typcn-arrow-sorted-down'
        }));
    }

    /* Checkbox Switch */
    var onoffswitch = $('.onoffswitch');
    if(onoffswitch.length){
        var onoffswitch_wrap = $('<div>', {
                class: 'onoffswitch-styled'
            });
        onoffswitch.wrap(onoffswitch_wrap).after($('<label>', {
            class: 'onoffswitch-label',
            for: onoffswitch.attr('id')
        }));
    }
});
