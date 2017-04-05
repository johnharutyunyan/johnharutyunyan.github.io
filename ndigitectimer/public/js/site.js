/**
 * Created by ndigitecios on 4/5/17.
 */
$(function () {

    $("#datepicker").datetimepicker({
        minDate: 0,
        oneLine: true,
        dateFormat: 'yy-mm-dd',
        timeFormat: 'hh:mm tt',
        stepHour: 1,
        stepMinute: 1,
        stepSecond: 1
    });
});