(function(window,document,$,undef){var G="data-ga-",C=G+"category",A=G+"action",D=G+"change",M=G+"module";window.gaEvent=function(a,b){var i,j,L,E,delim="|";if(a&&b){b=b.split(delim);L=b.length;E=[];}else{return true;}E.push(a);for(i=0,j=E.length;i<L;i++){if(!isNaN(parseFloat(b[i]))&&isFinite(b[i])){E[j]=parseFloat(b[i]);}else{E[j]=b[i];}j++;}_GA.trackEvent(E);return true;};window.gaModule=function(){var $el=$(this);return gaEvent("Module_View",$el.attr(M));};window.gaClick=function(){var $el=$(this);return gaEvent($el.attr(C),$el.attr(A));};window.gaChangeValue=function(){var $el=$(this);if($el.is(":checkbox")||$el.is(":radio")){if($el.is(":checked")){gaEvent($el.attr(C),$el.attr(D));}else{return true;}}else{if($el.is("select")){return gaEvent($el.attr(C),$el.attr(D)+" "+$el.val());}else{return true;}}};window.gaCourseDonateClick=function(){a="Shopping Cart";b="Add To Cart|";b+=$('.cause-toggle-wrap.selected input[name="causeSelection"]').val();freq=":One Time";if($('input[name="toggleRecurring"]:checked').length>0){freq=":Recurring";}amount=0;if($(".custom-amount-wrap input:radio[name=donationAmount]").is(":checked")){if($('input[name="customAmount"]').val()>0){amount=$('input[name="customAmount"]').val();}}else{if($("input:radio[name=donationAmount]:checked").data("amount")){amount=$("input:radio[name=donationAmount]:checked").data("amount");}}b=b+freq+"|"+amount;if(amount!=0){gaEvent(a,b);}};window.gaDonateClick=function(){a="Shopping Cart";b="Add To Cart|";b+=$('input[name="/atg/commerce/order/purchase/CartModifierFormHandler.ProductId"]').val();freq=":One Time";if($('input[name="monthlyDonation"]:checked').length>0){freq=":Recurring";}amount=0;if($("#amount-custom").attr("checked")!="undefined"&&$("#amount-custom").attr("checked")=="checked"){if($('input[name="customAmount"]').val()>0){amount=$('input[name="customAmount"]').val();}}else{if($("input:radio[name=donationAmount]:checked").data("amount")){amount=$("input:radio[name=donationAmount]:checked").data("amount");}}if($("#enter-donation-amount").val()>0){amount=$("#enter-donation-amount").val();}b=b+freq+"|"+amount;if(amount!=0){gaEvent(a,b);}};window.gtmTrackTheCart=function(){if($("#data-gtm-ecomm-track-backend").length>0){var obj=eval($("#data-gtm-ecomm-track-backend").val());var i,L;for(i=0,L=obj.length;i<L;i++){if(obj[i].operation=="Remove"&&obj[i].type=="Course"){dataLayer.push({event:"removeProduct",product:{id:obj[i].itemId,name:obj[i].itemName,category:obj[i].itemCategory,price:obj[i].itemPrice,quantity:"1"}});}if(obj[i].operation=="Add"&&obj[i].type=="Course"){dataLayer.push({event:"addProduct",product:{id:obj[i].itemId,name:obj[i].itemName,category:obj[i].itemCategory,price:obj[i].itemPrice,quantity:"1",page:obj[i].pageID}});}}}};})(this,this.document,this.jQuery);