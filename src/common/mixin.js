import {debounce} from './utils'
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