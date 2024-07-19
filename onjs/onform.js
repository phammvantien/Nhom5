function validator(options,data){
    if(!data){
        data={};
    }
    var formElement= document.querySelector(options);
    var formrules={};
    function getformgroup(element,select){
        while(element.parentElement){
            if(element.parentElement.matches(select)){
                return element.parentElement;
            }
            element=element.parentElement;
        }

    }
    var validatorrules={
        required:function(value){
            return value ? undefined: "Vui lòng nhập trường này!";
        },
        email:function(value){
            var checkemail=/^[^\+$@]+@[^\+$@]+\.[^\+$@]+$/;
            return checkemail.test(value) ? undefined : "Vui lòng nhập đúng đúng dạng email!";
        },
        min:function(value){
            return (value.length>=6) ? undefined : "Vui lòng nhập ít nhất 6 ký tự!";
        }

    };
    if(formElement){
      
         var inputs = formElement.querySelectorAll('[name][rules]');
         for(var input of inputs){
           var rules = input.getAttribute('rules').split('|');
           for(var rule of rules){
            // console.log(validatorrules[rule]);
            
            if(Array.isArray(formrules[input.name])){
                formrules[input.name].push(validatorrules[rule]);
           }
           else{
            formrules[input.name] = [validatorrules[rule]];

           }
         }
         input.onblur=khianvao;
         input.oninput=khidangan;


    }
    function khianvao(event){
        var rules =formrules[event.target.name];
        var erorrmesages;
        rules.find(function(rule){
            erorrmesages=rule(event.target.value);
            return erorrmesages;
        });
        if(erorrmesages){
            var formgroups= getformgroup(event.target,'.group_text');
            if(formgroups){
                var thongbao = formgroups.querySelector('.mesage_text');
                if(thongbao){
                    thongbao.innerText=erorrmesages;
                    thongbao.classList.add('invalid')
                }
                else{
                    thongbao.innerText="";
                    thongbao.classList.remove('invalid')

                }

            }


        }
        return !erorrmesages;


    }
    function khidangan(event){ 
        var formgroups= getformgroup(event.target,'.group_text');
        var thongbao = formgroups.querySelector('.mesage_text');
        thongbao.innerText="";
        thongbao.classList.remove('invalid')


    }
    var formElement= document.querySelector(options);
    formElement.onsubmit=function(event){
        event.preventDefault();
        var inputs = formElement.querySelectorAll('[name][rules]');
        var checkerrorr= true;
        for(var input of inputs){
          
            if(!khianvao({target: input})){
                checkerrorr=false;
            }


        }
        if(checkerrorr){
            if(typeof data.onsubmit==='function'){
                var variable = formElement.querySelectorAll('[name]');
                var formvalue = Array.from(variable).reduce(function(value, input){
                    switch(input.type){
                       
                   case 'checkbox':
                    if(input.checked){
                        value[input.name]= input.value;
                    }
                    break;
                    default:
                        value[input.name]= input.value;
                        break;
                    }
                    return value;
                },{});
                data.onsubmit(formvalue);

            }
            else{
                formElement.submit();
            }
        }

    }







}

  
}