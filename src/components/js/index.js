import checkbox from './message/checkbox'
import vue from 'vue'
export var checkboxs = function(data){
        var defaults = {
        title:'',
        city:'',
        issure:'',
        iscancel:'',
        handlecancle:null,
        handleok:null
        }
        for(var prop in data){
        defaults[prop] = data[prop]
        }
        var cons = vue.extend(checkbox)
        var conss = new cons({
            el:document.createElement('div'),
            data(){
                return{
                    title:defaults.title,
                    city:defaults.city,
                    issure:defaults.iscancel,
                    iscancel:defaults.issure
                }
            },
            methods:{
        handlecancel(){
        defaults.handlecancle&&defaults.handlecancle.call(this)
        document.body.removeChild(conss.$el)
        },
        handleok(){
            defaults.handleok&&defaults.handleok.call(this)
            document.body.removeChild(conss.$el)
          
        }
            }
        })
        document.body.appendChild(conss.$el)
        console.log('用到了')
        }

