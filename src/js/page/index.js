require(['./js/config.js'], function() {
    require(['mui', 'picker', 'poppicker'], function(mui) {
        mui.init();

        var picker, dtpicker,
            nowYear = new Date().getFullYear,
            nowMonth = new Date().getMonth + 1,
            tapTime = document.querySelector('#tapTime'),
            tapData = document.querySelector('#tapData');
        init();

        function init() {
            picker = new mui.PopPicker();
            picker.setData([{ value: 'year', text: '年' }, { value: 'month', text: '月' }]);
            dtpicker = new mui.DtPicker({
                type: "month", //设置日历初始视图模式 (年月)
                beginDate: new Date(2019, 01, 01), //设置开始日期 
                endDate: new Date(2019, 01, 10), //设置结束日期 
                labels: ['Year', 'Month'] //设置默认标签区域提示语 
            });
        }

        addEveNt()

        function addEveNt() {
            //年月
            tapTime.addEventListener('tap', function() {
                picker = new mui.PopPicker();
                picker.setData([{ value: 'year', text: '年' }, { value: 'month', text: '月' }]);
                picker.show(function(selectItems) {
                    tapTime.innerHTML = selectItems[0].text;
                    if (selectItems[0].value === 'year') {
                        selectItems[0].value = nowYear;
                    } else {
                        nowMonth = nowMonth < 10 ? '0' + nowMonth : nowMonth;
                        tapData.innerHTML = nowYear + '-' + nowMonth;
                    }

                    console.log(selectItems[0].value); //year
                    console.log(selectItems[0].text); //年
                });
            });

            //设置日期
            tapData.addEventListener('tap', function() {
                dtpicker = new mui.DtPicker({
                    type: "month", //设置日历初始视图模式 (年月)
                    beginDate: new Date(2018, 01, 01), //设置开始日期 
                    endDate: new Date(2025, 01, 01), //设置结束日期 
                    labels: ['Year', 'Month'] //设置默认标签区域提示语 
                });
                dtpicker.show(function(e) {
                    console.log(e);
                    tapData.innerHTML = e;
                });
            });
        }

    });
});