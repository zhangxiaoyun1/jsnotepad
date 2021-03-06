var $node=(function(){
    var $menu=$('<div style="height: 30px;line-height:30px">'+
    '<div class="title">菜单(F)'+
        '<ul class="titlef">'+
            '<li><span style="float: left;margin-left: 20px;">新建(N)</span><span style="float: right;margin-right: 20px;">Ctrl+N</span></li>'+
            '<li><span style="float: left;margin-left: 20px;">新窗口(W)</span><span style="float: right;margin-right: 20px;">Ctrl+Shift+N</span></li>'+
            '<li><span style="float: left;margin-left: 20px;">打开(O)...</span><span style="float: right;margin-right: 20px;">Ctrl+O</span></li>'+
            '<li><span style="float: left;margin-left: 20px;">报存(S)</span><span style="float: right;margin-right: 20px;">Ctrl+S</span></li>'+
            '<hr>'+
            '<li><span style="float: left;margin-left: 20px;">页面设置(U)...</span></li>'+
            '<li><span style="float: left;margin-left: 20px;">打印(P)...</span><span style="float: right;margin-right: 20px;">Ctrl+P</span></li>'+
            '<hr>'+
            '<li><span style="float: left;margin-left: 20px;">退出(X)</span></li>'+
        '</ul>'+
    '</div>'+
    '<div class="title">编辑(E)'+
        '<ul class="titlef">'+
            '<li><span style="float: left;margin-left: 20px;">撤销(U)</span><span style="float: right;margin-right: 20px;">Ctrl+Z</span></li>'+
            '<hr>'+
            '<li><span style="float: left;margin-left: 20px;">剪切(T)</span><span style="float: right;margin-right: 20px;">Ctrl+X</span></li>'+
            '<li><span style="float: left;margin-left: 20px;">复制(C)</span><span style="float: right;margin-right: 20px;">Ctrl+C</span></li>'+
            '<li><span style="float: left;margin-left: 20px;">粘贴(P)</span><span style="float: right;margin-right: 20px;">Ctrl+V</span></li>'+
            '<li><span style="float: left;margin-left: 20px;">删除(L)</span><span style="float: right;margin-right: 20px;">Del</span></li>'+
            '<hr>'+
            '<li><span style="float: left;margin-left: 20px;">使用Bing搜索...</span><span style="float: right;margin-right: 20px;">Ctrl+E</span></li>'+
            '<li><span style="float: left;margin-left: 20px;">查找(F)</span><span style="float: right;margin-right: 20px;">Ctrl+F</span></li>'+
            '<li><span style="float: left;margin-left: 20px;">查找下一个(N)</span><span style="float: right;margin-right: 20px;">F3</span></li>'+
            '<li><span style="float: left;margin-left: 20px;">查找上一个(V)</span><span style="float: right;margin-right: 20px;">Shift+F3</span></li>'+
            '<li><span style="float: left;margin-left: 20px;">替换(R)...</span><span style="float: right;margin-right: 20px;">Ctrl+H</span></li>'+
            '<li><span style="float: left;margin-left: 20px;">转到(G)...</span><span style="float: right;margin-right: 20px;">Ctrl+G</span></li>'+
            '<hr>'+
            '<li><span style="float: left;margin-left: 20px;">全选(A)</span><span style="float: right;margin-right: 20px;">Ctrl+A</span></li>'+
            '<li><span style="float: left;margin-left: 20px;">时间/日期(D)</span><span style="float: right;margin-right: 20px;">F5</span></li>'+
        '</ul>'+
    '</div>'+
    '<div class="title">格式(O)'+
        '<ul class="titlef" style="width: 150px;">'+
            '<li><div style="float:left;display: inline-block;background-color: #6cb7f5;width: 20px;">√</div><span style="float: left;">自动换行(W)</span></li>'+
            '<li id="font"><span style="float: left;margin-left: 20px;">字体(F)</span></li>'+
        '</ul>'+
    '</div>'+
    '<div class="title">查看(V)'+
        '<ul class="titlef" style="width: 150px;">'+
            '<li><span style="float: left;margin-left: 20px;">缩放(Z)</span><span style="float: right;margin-right: 20px;">></span></li>'+
            '<li><div style="float:left;display: inline-block;background-color: #6cb7f5;width: 20px;">√</div><span style="float: left;">状态栏(S)</span></li>'+
        '</ul>'+
    '</div>'+
    '<div class="title">帮助(H)'+
        '<ul class="titlef" style="width: 150px;">'+
            '<li><span style="float: left;margin-left: 20px;">查看帮助(H)</span></li>'+
            '<li><span style="float: left;margin-left: 20px;">发送反馈(F)</span></li>'+
            '<hr>'+
            '<li><span style="float: left;margin-left: 20px;">关于记事本(A)</span></li>'+
        '</ul>'+
    '</div>'+
'</div>'+
'<textarea id="text"></textarea>'),
    $fonts=$('<div class="notepad-dlg-font">'+
    '<div class="dialogbox">'+
        '<div class="notepad-dlg-titlebar">'+
          '<p>字体</p>'+
          '<span id="cl" style="float: right;margin-top: -30px;">✖</span>'+
        '</div>'+
        '<div class="botbox">'+
         ' <div class="font-family">'+
            '<p>字体(F):</p>'+
            '<input class="editor" id="ef"><br>'+
            '<ul class="list" id="font-family">'+
              '<li>Agency FB</li>'+
              '<li>Algerian</li>'+
              '<li>Arial</li>'+
              '<li>Arial Rounded MT</li>'+
              '<li>Axure Handwriting</li>'+
              '<li>Bahnschrift</li>'+
              '<li>Baskerville Old Face</li>'+
              '<li>Bauhaus 93</li>'+
              '<li>Bell MT</li>'+
            '</ul></div>'+
          '<div class="font-style">'+
              '<p>字形(Y):</p>'+
              '<input class="editor" id="es"  type="text"><br>'+
            '<ul class="list" id="font-style">'+
              '<li>常规</li>'+
              '<li>斜体</li>'+
              '<li>粗体</li>'+
              '<li>粗偏斜体</li>'+
            '</ul> '+   
          '</div>'+
          '<div class="font-size"><p>大小(S):</p>'+
            '<input class="editor" id="ez" type="text"><br>'+
            '<ul class="list" id="font-size">'+
              '<li>8</li>'+
              '<li>9</li>'+
              '<li>10</li>'+
              '<li>11</li>'+
              '<li>12</li>'+
              '<li>14</li>'+
              '<li>16</li>'+
              '<li>18</li>'+
              '<li>20</li>'+
              '<li>22</li>'+
              '<li>24</li>'+
              '<li>26</li>'+
              '<li>28</li>'+
              '<li>32</li>'+
              '<li>48</li>'+
              '<li>72</li>'+
            '</ul></div>'+
          '<fieldset class="sample">'+
            '<legend>示例</legend>'+
            '<p id="show">AaBbYyZz</p>'+
          '</fieldset>'+
          '<div class="script">'+
            '<label>脚本(R):<br>'+
              '<select>'+
                '<option value="西欧语言">西欧语言</option>'+
                '<option value="中文 GB2312">中文 GB2312</option>'+
              '</select></label></div>'+
          '<input class="btn-ok" type="button" value="确定">'+
          '<input class="btn-cancel" type="button" value="取消">'+
        '</div></div></div>');
        function adds(){
            $('body').append($menu);
        }
        $menu.find('#font').click(function(){
            $menu.append($fonts);
        })
        $fonts.find('#cl').click(function(){
            alert('确定关闭。');
            $('.notepad-dlg-font').remove();
        })
        $fonts.find('.btn-cancel').click(function(){
            alert('确定取消。');
            $('.notepad-dlg-font').remove();
        })
        $fonts.find('.btn-ok').click(function(){
            $('.notepad-dlg-font').remove();
        })
        $fonts.find('#font-family li').each(function() {
            $(this).click(function() {
                $(this).siblings('li').removeClass('active');  
                $(this).addClass('active');
                document.getElementById('ef').value=$(this).html();
                document.getElementById("show").style.fontFamily=$(this).html();
            })
        })
        $fonts.find('#font-style li').each(function() {
            $(this).click(function() {
                $(this).siblings('li').removeClass('active');  
                $(this).addClass('active');
                document.getElementById('es').value=$(this).html();
                if($(this).html() === '斜体') {
                    document.getElementById("show").style.fontWeight='';
                    document.getElementById("show").style.fontStyle='italic';
                }
                else if($(this).html() === '粗体') {
                    document.getElementById("show").style.fontStyle='';
                    document.getElementById("show").style.fontWeight='bold';
                }
                else if($(this).html() === '粗偏斜体') {
                    document.getElementById("show").style.fontStyle='italic';
                    document.getElementById("show").style.fontWeight='bold';
                }else{
                    document.getElementById("show").style.fontStyle='';
                    document.getElementById("show").style.fontWeight='';
                }
            })
        })
        $fonts.find('#font-size li').each(function() {
            $(this).click(function() {
                $(this).siblings('li').removeClass('active');  
                $(this).addClass('active');
                document.getElementById('ez').value=$(this).html();
                document.getElementById("show").style.fontSize=$(this).html()+'px';
            })
        })
        
        
        
    return {
        add:adds
    }
}())