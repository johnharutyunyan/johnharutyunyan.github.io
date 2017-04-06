/**
 * Created by ndigitecios on 4/5/17.
 */
$(function () {

    $("#datepicker").datetimepicker({
        minDate: 0,
        oneLine: true,
        dateFormat: 'yy-mm-dd',
        timeFormat: '',
        stepHour: 0,
        stepMinute: 0,
        stepSecond: 0
    });
});