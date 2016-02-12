function addItem() {
    var itemValue = $('#add-items').val();
    if (itemValue.length === 0) {
        alert('You must add an item!');
    } else {
        var row = $('<li><button class="checkbox"><i class="fa fa-check-circle"></i></button><span class="list">' + itemValue + '</span><button class="delete"><i class="fa fa-times-circle"></i></button></li> ');
        $('.item-list').append(row);
        itemValue = $('#add-items').val('');
    }
}

function tickItem() {
    $(this).parent().toggleClass('ticked');
}

function deleteItem() {
    $(this).parent().remove();
}

function deleteAll() {
    $('.item-list').empty();
}

$(document).ready(function () {
    $('#add').on('click', function () {
        addItem();
    });
    $('#clear-all').on('click', function () {
        deleteAll();
    });

});

$(document).on('keypress', function (key) {
    if (key.keyCode == 13) {
        addItem();
    }
});


$(document).on('click', '.delete', deleteItem);


$(document).on('click', '.checkbox', tickItem);
