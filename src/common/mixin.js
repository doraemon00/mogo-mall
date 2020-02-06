import {debounce} from './utils'
import BackTop from "components/content/backTop/BackTop";


export const itemListenerMixin = {
    data(){
        return{
            itemImgListenner:null
        }
    },
    mounted() {
        const refresh = debounce(this.$refs.scroll.refresh, 500);
        this.itemImgListenner = () => {
            refresh()
        }
        this.$bus.$on('itemImageLoad', this.itemImgListenner)
    }
}

export const backTopMixin = {
    components:{
        BackTop
    },
    data(){
        return {
            isShowBackTop:false
        }
    },
    methods: {
        backTop(){
            this.$refs.scroll.scrollTo(0,0,300)
        },
        listenShowBackTop(position){
            this.isShowBackTop = -position.y > 1000
        }
    },
}


