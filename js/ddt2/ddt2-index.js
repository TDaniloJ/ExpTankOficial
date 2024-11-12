/*
    新弹弹堂 迁移 wan平台 公共脚本
*/
 $(document).ready(function () {
                sectionlive(true);
                $("#userPass").keypress(function (e) {
                    if (e.keyCode == 13) {                       
                        checklogin();
                    }
                });
            });

            function xmlhttpPost(strURL, type) {
                showObj();
                var dataStr = getquerystring();
                if (type == 2)
                {
                    dataStr = getquerydonereg();
                }
                $.ajax({
                    type: 'GET',
                    url: strURL,
                    data: dataStr,
                    success: function (data_revert) {

                        if (data_revert == "ok") {
                            location.replace("loading.htm");
                            //showObj();
                        }
                        else{
                            hideObj();
                            $("#loading").html('<span style="color:red; font-size: 14px;">' + data_revert + '</span>');
                        }

                    }
                });

            }
            function getquerystring() {
                var username = $("#user").val();
                var password = MD5($("#userPass").val());
                qstr = 'username=' + escape(username) + '&password=' + escape(password);
                return qstr;
            }
            function checklogin() {                
                if ($("#user").val() == '') {                    
                    //return true;
                    showError('Вы не ввели логин!');
                    return false;
                }
                else if ($("#userPass").val() == '') {                   
                    //return true;
                    showError('Вы не ввели пароль!');
                    return false;
                }
                else {
                    xmlhttpPost("checkuser.ashx", 1); 
                    return false;
                }
                
            }

            function hideObj() {

                $("#TB_overlayBG").delay(2000).fadeOut('slow');
                $("#DynamicContent").delay(2000).fadeOut('slow');//.css({ display: "none" });
            }
            function showObj() {
                $('#DynamicContent').corner("keep");
                $("#TB_overlayBG").fadeIn();//.css({ display: "block" });
                $("#DynamicContent").fadeIn();
                $("#loading").html("Идет подключение к серверу!<br/><br/><img alt=\"\"  src=\"images/loading.gif\" />");
                var top = Math.max($(window).height() / 2 - $("#DynamicContent")[0].offsetHeight / 2, 0);
                var left = Math.max($(window).width() / 2 - $("#DynamicContent")[0].offsetWidth / 2, 0);
                $("#DynamicContent").css('top', top + "px");
                $("#DynamicContent").css('left', left + "px");
                $("#DynamicContent").css('position', 'fixed');
            }
            //$("#DynamicContent").live("click", function () {
                //$(this).hide();
                //$("#TB_overlayBG").hide();
            //});
            function showError(content) {
                $('#ErrorContent').corner("keep");
                $("#TB_overlayBG").fadeIn().delay(2000).fadeOut('slow');
                $("#ErrorContent").fadeIn().delay(2000).fadeOut('slow');
                $("#content").html('<span style="color:red; font-size: 14px;">' + content + '</span>');
                var top = Math.max($(window).height() / 2 - $("#ErrorContent")[0].offsetHeight / 2, 0);
                var left = Math.max($(window).width() / 2 - $("#ErrorContent")[0].offsetWidth / 2, 0);
                $("#ErrorContent").css('top', top + "px");
                $("#ErrorContent").css('left', left + "px");
                $("#ErrorContent").css('position', 'fixed');
            }

			
//		 //            //
			
			
			 function xmlhttpPostReg() {
                                //showObj();
                                $.ajax({
                                    type: 'GET',
                                    url: 'auth/register.ashx',
                                    data: getregquerystring(),
                                    success: function (data_revert) {
                                        if (data_revert == "ok") {
                                            xmlhttpPost("checkuser.ashx", 2);
                                            hideCode();
                                        }
                                        if (data_revert == "exit") {
                                            showError('Логин уже используется!');
                                            hideCode();
                                        }
                                        else {                                            
                                            showError(data_revert);
                                        }
                                    }
                                });
                            }
                            
                            function getquerydonereg() {
                                var username = $("#usernamesignup").val();
                                var password = MD5($("#passwordsignup").val());
                                qstr = 'username=' + escape(username) + '&password=' + escape(password);
                                return qstr;
                            }
                            function getregquerystring() {
                                var username = $("#usernamesignup").val();
                                var password = $("#passwordsignup").val();
                                var repassword = $("#passwordsignup_confirm").val();
                                var email = $("#emailsignup").val();
                                var code = $("#code").val();
                                qstr = 'username=' + escape(username) + '&password=' + escape(password)
                                + '&repassword=' + escape(repassword) + '&email=' + escape(email)
                                + '&code=' + escape(code);
                                return qstr;
								
                            }
                            function href() {
                                var randomnum = Math.random();
                                var getimagecode = document.getElementById("ImageCode");
                                getimagecode.src = "auth/validatecode.ashx? " + randomnum;
                                $("#code").val("");
                            }
							
							
                            function IsEmail(email) {
                                var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                                if (!regex.test(email)) {
                                    return false;
                                } else {
                                    return true;
                                }
                            }
                            function checkCode() {
                                if ($("#code").val() == '') {
                                    showError('Введите код безопасности!');
                                    return false;
                                }
                                else{
                                    xmlhttpPostReg();
                                }                                
                                return false;
                            }
                            function checkForm() {
                                var err = 0;
                                if ($("#usernamesignup").val() == '') {
                                    showError('Вы не ввели логин!');
                                    err++;
                                }
                                else if ($("#passwordsignup").val() == '') {
                                    showError('Вы не ввели пароль!');
                                    err++;
                                }
                                else if ($("#passwordsignup_confirm").val() == '') {
                                    showError('Вы не ввели повторите пароль!');
                                    err++;
                                }
                                else if ($("#emailsignup").val() == '') {
                                    showError('Вы не ввели почту!');
                                    err++;
                                }
                                else if ($("#passwordsignup_confirm").val() != $("#passwordsignup").val()) {
                                    showError('Пароль не совпадают!');
                                    err++;
                                }                                
                                else if (!IsEmail($("#emailsignup").val())) {
                                    showError('Вы ввели неправильную почту!');
                                    err++;
                                }
                                //else if ($("#code").val() == '') {
                                //    showError('Digite o código de segurança!');
                                //    err++;
                                //}
                                if (err == 0) {
                                    $('#codeContent').corner("keep");
                                    $("#checkCode").button();
                                    $("#Div1").fadeIn();
                                    $("#codeContent").fadeIn();
                                    var top = Math.max($(window).height() / 2 - $("#codeContent")[0].offsetHeight / 2, 0);
                                    var left = Math.max($(window).width() / 2 - $("#codeContent")[0].offsetWidth / 2, 0);
                                    $("#codeContent").css('top', top + "px");
                                    $("#codeContent").css('left', left + "px");
                                    $("#codeContent").css('position', 'fixed');
                                    //xmlhttpPostReg();
                                }
                                return false;
                            }
                            function hideCode() {
                                href();
                                $("#Div1").fadeOut('slow');
                                $("#codeContent").fadeOut('slow');//.css({ display: "none" });
                            }
							