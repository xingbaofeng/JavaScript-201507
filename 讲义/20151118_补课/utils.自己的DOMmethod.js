/**
 * Created by Administrator on 2015/11/20.
 */
(function(){
    var _utils={
        listToArray:function(likeAry){
            var ary=[];
            try{ary=Array.prototype.slice.call(likeAry,0);}
            catch(e){
                for(var i=0;i<likeAry.length;i++){ary[ary.length]=likeAry[i];}
            }
        },
        toJSON:function(str){
            var str="";
            try{return JSON.parse(str)}
            catch(e){eval("("+str+")");}
        }


    }
})
