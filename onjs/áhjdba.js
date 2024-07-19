function validator(options ,optionsvalue){
    if(!optionsvalue){ 
        var optionsvalue={};
    }
var formElement= document.querySelector(options);
var  fromrules={};
function getparent(element, select){
    while(element.parentElement){
        if(element.parentElement.matches(select)){ 
            // neu con cua elementparent co thng con la select thi tra ve thng con do
            return element.parentElement;
        }
        element=element.parentElement;// tim den chet 
    }
}
var valuidatorrule={
    required: function(value){
        return value.trim()? undefined:'Vui lòng không bỏ trống trường này!';
    },
    min: function(value){
      
            return (value.length >= 6)? undefined: `vui long nhap toi thieu 6`;  
    },
    email: function(value){
        var checkemail=/^[^\$@]+@[^\$@]+\.[^\$@]+$/;
        return checkemail.test(value) ? undefined:'Vui lòng nhập đúng định dạng';
    }
}

if(formElement){// neu ton tai  form
    var inputelements= formElement.querySelectorAll('[name][rules]'); // lấy ra các thẻ input co name và rule 
 
    for(var input of inputelements){
        var rules=input.getAttribute('rules').split('|'); // tach chu required|min cos ngan cachj '|'=['required', 'min']
        for(var rule of rules){ // chay qu tung phan tu vua tach

            if(rule.includes(':')){ // kiem tra neu trong phan tu co ngan cach hai cham
                var ruleinfor=rule.split(':');

                rule=ruleinfor[0]; // neu co hai cham  thi lay phan tu dau tien vd: min:6 thi lay duoc 'min
            }
            if(Array.isArray( fromrules[input.name])){ // neu no la array
                fromrules[input.name].push(valuidatorrule[rule]);
    
            }
            else{
                fromrules[input.name]=[valuidatorrule[rule]];// gan tung o input = function da xay dung trong ham valuidatorrule
            }
        }
        // console.log(rule);
        input.onblur=sukienanvao;
        input.oninput=sukienkhidangan;
 }
    function sukienanvao(event){
        var rules = fromrules[event.target.name]; // lay ra cac ham da xay 
        var erorrmeasge;
        rules.find(function(rule){ // tim o cac o input neu co erromesage 
            erorrmeasge=rule(event.target.value);// lay ra gia tri tra ve cua cac ham dax xay dung bat loi

            return erorrmeasge; // tra ve gia tri thong bao loi 
        });
    if(erorrmeasge){
        var fromgroup= getparent(event.target,'.group_text');// neu tim thay the group co the input 
            if(fromgroup){
                var frommesage= fromgroup.querySelector('.mesage_text');//the thong bao
                            if(frommesage){//neu thay the in ra thong bao 
                                frommesage.innerText=erorrmeasge;// gan the thong bao = thong bao loi
                                frommesage.classList.add('invalid');// doi mau chu do 
                            }
                            else{
                                frommesage.innerText='';// gan the thong bao = thong bao loi
                                frommesage.classList.remove('invalid');// doi mau chu do 
                            }
            }
    }
        return !erorrmeasge;
    }
    function sukienkhidangan(event){
        var fromgroup= getparent(event.target,'.group_text');// neu tim thay the group co the input 
        var frommesage= fromgroup.querySelector('.mesage_text');//the thong bao
  
            frommesage.innerText='';// gan the thong bao = thong bao loi
            frommesage.classList.remove('invalid');// doi mau chu do 
    }
}
// xu ly hanh vi submitform

formElement.onsubmit=function(event){
    event.preventDefault();

    var inputelements= formElement.querySelectorAll('[name][rules]'); // lấy ra các thẻ input co name và rule 
    var isfromvalid=true;
    for(var input of inputelements){
        var valueinput= input.value;
        var nameinput= input.name;
      
        if(!sukienanvao({ target:input})){
            isfromvalid=false;
        }
    }
    // khi khong co kloi thi subnmit
    if(isfromvalid){
            if(typeof optionsvalue.onSubmit==='function'){
                var enableInput = formElement.querySelectorAll('[name]');
                var fornvalue= Array.from(enableInput).reduce(function(value , input){
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
                    value[input.name]= input.value;
                    return  value;

                },{});
                // goi lai ham ionsubmit va tra ve gia tri cua form
                optionsvalue.onSubmit(fornvalue);
            }
            else{
                formElement.submit();
            }
        
    }
}
}