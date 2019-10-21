function home(myHost){
    class Home{
        render(){

            var getWidth = $("body").width();
            
            var setting = {};
            
            if (getWidth > 600) 
            {   
                var SettingTampilan = {
                    setClassName: 'flex-item-4'
                    ,setChild: ['','','']
                    ,setId: ['galery-1','galery-2','galery-3']
                }
            }
            else if(getWidth > 400){
                var SettingTampilan = {
                    setClassName: 'flex-item-6'
                    ,setChild: ['','']
                    ,setId: ['galery-1','galery-2']
                }
            }else{
                var SettingTampilan = {
                    setClassName: 'flex-item-12'
                    ,setChild: ['']
                    ,setId: ['galery-1']
                }
            }

            var html = div({
                className: 'flex-header',
                child: [
                    'header'
                ]
            });

        	html += div({
                className: 'flex-container',
                child: [
                    div({
                        className: SettingTampilan.setClassName
                        ,id: SettingTampilan.setId
                        ,child: SettingTampilan.setChild
                    })
                ]
            });

            return html;

        }

        myscript(){
            var getWidth = $("body").width();
            if (getWidth > 600) {
                var NumberRow = 3;
            }
            else if(getWidth > 400){
                var NumberRow = 2;
            }
            else{
                var NumberRow = 1;
            }
            for (var i = 0; i < 100 ; i++) {
                for (var a = 0; a < NumberRow; a++) {
                    if (i%NumberRow == a) {
                        var html = div({
                            className: 'images'
                            ,child:[
                                "<img src='https://4.bp.blogspot.com/-SqlTRWXBMEs/WdZftna1RDI/AAAAAAAAAf8/_q5lq3kV2cM60tcS_RJVJ_h1BqrGKSVhACLcBGAs/s640/membuat-database-baru-mysql.png' />"
                                ,"ok"
                            ]
                        });
                        var galeryTo = a+1;
                        $("#galery-"+galeryTo).append(html);
                    }
                }
            }

        }

        show(){
            var arr = [1,2];
            if (Array.isArray(arr) == true) {
                console.log('yes');
            }
            var render = this.render();
            $("#main").html(render)
        }
    }
    var data = new Home();
    data.show();
    data.myscript();
    $(window).resize(function() {
        data.show();
        data.myscript();
    });

}