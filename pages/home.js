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
                className: 'flex-container',
                child: [
                    div({
                        className: 'flex-item-12 bg-green color-white font-size-20 font-josefinsans' 
                        ,child: [
                            div({
                                className: 'title'
                                ,child: [
                                    'My Gallery'
                                ]
                            })
                        ]
                    })
                ]
            });

            html += div({
                className: 'flex-container',
                child: [
                    div({
                        className: 'flex-item-12 bg-white font-size-20 font-josefinsans' 
                        ,child: [
                            div({
                                className: 'title text-center'
                                ,child: [
                                    '<input class="pencarian-utama" type="search" placeholder="cari..."/>'
                                ]
                            })
                        ]
                    })
                ]
            });

            html += div({
                className: 'flex-container',
                child: [
                    div({
                        className: 'flex-item-12 bg-white font-size-20 font-josefinsans' 
                        ,child: [
                            div({
                                className: 'title'
                                ,child: [
                                    'this for menus'
                                ]
                            })
                        ]
                    })
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
            var myimages = [
                'https://4.bp.blogspot.com/-SqlTRWXBMEs/WdZftna1RDI/AAAAAAAAAf8/_q5lq3kV2cM60tcS_RJVJ_h1BqrGKSVhACLcBGAs/s640/membuat-database-baru-mysql.png'
                ,'https://i0.wp.com/seruni.id/wp-content/uploads/2016/11/Batik-Indonesia-9.jpg?fit=800%2C600&ssl=1'
                ,'https://4.bp.blogspot.com/-SqlTRWXBMEs/WdZftna1RDI/AAAAAAAAAf8/_q5lq3kV2cM60tcS_RJVJ_h1BqrGKSVhACLcBGAs/s640/membuat-database-baru-mysql.png'
                ,'https://i0.wp.com/seruni.id/wp-content/uploads/2016/11/Batik-Indonesia-9.jpg?fit=800%2C600&ssl=1'
                ,'https://4.bp.blogspot.com/-SqlTRWXBMEs/WdZftna1RDI/AAAAAAAAAf8/_q5lq3kV2cM60tcS_RJVJ_h1BqrGKSVhACLcBGAs/s640/membuat-database-baru-mysql.png'
                ,'https://i0.wp.com/seruni.id/wp-content/uploads/2016/11/Batik-Indonesia-9.jpg?fit=800%2C600&ssl=1'
                ,'https://4.bp.blogspot.com/-SqlTRWXBMEs/WdZftna1RDI/AAAAAAAAAf8/_q5lq3kV2cM60tcS_RJVJ_h1BqrGKSVhACLcBGAs/s640/membuat-database-baru-mysql.png'
                ,'https://cdn0-production-images-kly.akamaized.net/964QK-Nq4TrkJ6X2o0JGYFYJmak=/0x0/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2184692/original/066555600_1525760533-152576053360272batik-kawung.jpg'
                ,'https://4.bp.blogspot.com/-SqlTRWXBMEs/WdZftna1RDI/AAAAAAAAAf8/_q5lq3kV2cM60tcS_RJVJ_h1BqrGKSVhACLcBGAs/s640/membuat-database-baru-mysql.png'
                ,'https://i0.wp.com/seruni.id/wp-content/uploads/2016/11/Batik-Indonesia-9.jpg?fit=800%2C600&ssl=1'
                ,'https://4.bp.blogspot.com/-SqlTRWXBMEs/WdZftna1RDI/AAAAAAAAAf8/_q5lq3kV2cM60tcS_RJVJ_h1BqrGKSVhACLcBGAs/s640/membuat-database-baru-mysql.png'
                ,'https://i0.wp.com/seruni.id/wp-content/uploads/2016/11/Batik-Indonesia-9.jpg?fit=800%2C600&ssl=1'
                ,'https://4.bp.blogspot.com/-SqlTRWXBMEs/WdZftna1RDI/AAAAAAAAAf8/_q5lq3kV2cM60tcS_RJVJ_h1BqrGKSVhACLcBGAs/s640/membuat-database-baru-mysql.png'
                ,'https://i0.wp.com/seruni.id/wp-content/uploads/2016/11/Batik-Indonesia-9.jpg?fit=800%2C600&ssl=1'
                ,'https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2018/02/motif-batik-bali.jpg'
                ,'https://i0.wp.com/seruni.id/wp-content/uploads/2016/11/Batik-Indonesia-9.jpg?fit=800%2C600&ssl=1'
                ,'https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2018/02/motif-batik-bali.jpg'
                ,'https://i0.wp.com/seruni.id/wp-content/uploads/2016/11/Batik-Indonesia-9.jpg?fit=800%2C600&ssl=1'
                ,'https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2018/02/motif-batik-bali.jpg'
                ,'https://i0.wp.com/seruni.id/wp-content/uploads/2016/11/Batik-Indonesia-9.jpg?fit=800%2C600&ssl=1'
                ,'https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2018/02/motif-batik-bali.jpg'
                ,'https://i0.wp.com/seruni.id/wp-content/uploads/2016/11/Batik-Indonesia-9.jpg?fit=800%2C600&ssl=1'
                ,'https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2018/02/motif-batik-bali.jpg'
                ,'https://i0.wp.com/seruni.id/wp-content/uploads/2016/11/Batik-Indonesia-9.jpg?fit=800%2C600&ssl=1'
                ,'https://4.bp.blogspot.com/-SqlTRWXBMEs/WdZftna1RDI/AAAAAAAAAf8/_q5lq3kV2cM60tcS_RJVJ_h1BqrGKSVhACLcBGAs/s640/membuat-database-baru-mysql.png'
                ,'https://i0.wp.com/seruni.id/wp-content/uploads/2016/11/Batik-Indonesia-9.jpg?fit=800%2C600&ssl=1'
                ,'https://4.bp.blogspot.com/-SqlTRWXBMEs/WdZftna1RDI/AAAAAAAAAf8/_q5lq3kV2cM60tcS_RJVJ_h1BqrGKSVhACLcBGAs/s640/membuat-database-baru-mysql.png'
            ];

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
            for (var i = 0; i < myimages.length ; i++) {
                for (var a = 0; a < NumberRow; a++) {
                    if (i%NumberRow == a) {
                        var html = div({
                            className: ['images','images font-colabbold']
                            ,child:[
                                "<img src='"+myimages[i]+"' />"
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