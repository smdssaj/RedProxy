<template>
    <div>
        <!-- loop through items list. -->
        <ul :key="item.id" v-for="item in items" class="navigator-mnue">
            <li>

                <!-- show the item into the DOM                             -->
                <!--        fire ToggleWindow when item is clicked,         -->
                <!--                send the item window name as parameter. -->
                <label @click="ToggleWindow(item.window)" >{{item.label.toUpperCase()}}</label>
            </li>
        </ul>
    </div>
</template>
<script>
    const NavigatorList = {
        name: "NavigatorList",

        props:{
            // array of the navigator items 
            items: Array
        },

        methods: {

            // action: tell the parent conponenet about the click action.
            // windowToShow: a window name, which used to identifay the window
            //               user want to navigete to. 
            ToggleWindow(windowToShow){
                this.$emit('change-window-event', windowToShow)
            }
        }
    }

    export default NavigatorList;
</script>
<style scoped>
    .navigator-mnue{
        padding: 0 2.5rem 0 1rem;
        list-style: none;
    }
    .navigator-mnue > li{
        display: flex;
        -webkit-app-region: no-drag;
    }
    .navigator-mnue > li > label{
        color: #8d9194;
        font-size: .8rem;
        padding: .5rem;
        width: 100%;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color .15s;
    }

    .navigator-mnue > li > label:hover{
        background-color: #222527;
    }
</style>
