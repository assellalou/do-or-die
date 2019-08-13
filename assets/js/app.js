$(function() {
    const todos = $('.todos');
    const addButton = $('#add');

    addButton.on('click', function(){
        if($('.newone').length < 1){
            todos.prepend('<div class="newone"><input type="text" name="title" placeholder="Title" autocomplete="off" id="title" required><input type="text" name="description" placeholder="Description..." id="description" autocomplete="off"><button id="save" type="submit">Done</button></div>');
            $('#save').on('click', function(){
                let t = $('#title').val();
                let d = $('#description').val();
                todos.append('<div class="new"><a href="#" id="check"><i class="fa fa-check"></i></a><div class="title"><h1>'+ t +'</h1></div><p>'+ d +'</p></div>');
                $('.newone').remove();
            });
        }
        else{
            $('.newone').remove();
        }
    });

    todos.on('click', '#check', function(){
        $(this).parent().toggleClass('done');
        $(this).children().toggleClass('fa-close');
    });

});