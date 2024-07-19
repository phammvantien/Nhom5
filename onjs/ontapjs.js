
function validator(option ){
    function validate(inputelement, rule){
        var erromesess= rule.test(inputelement.value);//lay ra ket qua tra ve cua thng irequi
        var thongbaoloi=inputelement.parentElement.querySelector(option.errorselector);// lay ra the span

        if(erromesess){// neu co loi
         thongbaoloi.innerText=erromesess; //gan ket qua thu duoc = span
         inputelement.parentElement.classList.add('invalid'); // goi .invalida da css mau do chu 

        }
        else{
         thongbaoloi.innerText="";
         inputelement.parentElement.classList.remove('invalid');

        }
    }
    // lay ve form id
    var formelement= document.querySelector(option.form);

if (formelement) {//lay noi dung trong form
   
    option.rules.forEach(function (rule){// duyet tung phan tu trong ruler hay
        // input dc dih nghia
        var inputelement=formelement.querySelector(rule.selector);// lay ra noi dung cac o input
      
        if (inputelement) {
            // xu ly truong hop blur ra ngoai
            inputelement.onblur=function(){// khi di chuyen tro truot vao va ra thi thuc hien hanh dong
          
                validate(inputelement, rule);
            }
             // xu ly khi nguoi dung nhap
             inputelement.oninput= function(){
                var erromesess= rule.test(inputelement.value);//lay ra ket qua tra ve cua thng requi
                var thongbaoloi=inputelement.parentElement.querySelector(option.errorselector);// lay ra the span
        
                if(erromesess){// neu co loi
               
                 thongbaoloi.innerText="";
                 inputelement.parentElement.classList.remove('invalid');
        
                }

               
             }
            
        }

    })
    
}
}
// nguyen tac cac rule 
validator.isrequi_tk=function (selector){
return {
    selector:selector,
    test: function(value){
        var tets= /^[^\$@]+@[^\$@]+\.[^\$@]+$/;
           
        return tets.test(value) ? undefined :'vui lòng nhập đúng định dạng!';

    }
};

}
validator.isrequi_mk=function (selector){
    return {
        selector:selector,
        test: function(value){
            var minlengths= /^[a-z A-Z 0-9]+$/;
            var minlength= /^[A-Z][a-zA-Z]+$/;
          if(!minlengths.test(value)){
             return "Vui lòng nhập ít nhất một chữ hoặc số ";

          }
          else if(!minlength.test(value)){
            return "Vui lòng viết hoa chữ cái đầu ";
          }
          else{
            return undefined;
          }
            
           
    
        }
    };

}
