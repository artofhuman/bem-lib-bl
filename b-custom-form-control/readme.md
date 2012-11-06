Блок для реализации кастомных чекбоксов и радиобатонов
------------------------------------------------------

Checkbox
------------------------------------------------------
%%
{
    block: 'b-custom-form-control',
    mods: {layout: 'checkbox'}
}
%%

JavaScript
-------------------------------------------------------
// ================================================================
// Custom form controls
(function(){
    var cheboxes = {

        check: function(selector) {
            $(selector).attr('checked', true);
            cheboxes.change(selector);
        },

        uncheck: function(selector) {
            $(selector).removeAttr('checked');
            cheboxes.change(selector);
        },

        change: function(selector) {
            $(selector).each(function(){
                var div = $(this).parents('.b-custom-form-control');
                if ($(this).is(':checked')) {
                    div.addClass('b-custom-form-control_state_checked');
                } else {
                    div.removeClass('b-custom-form-control_state_checked');
                }
            });
        }
    };
