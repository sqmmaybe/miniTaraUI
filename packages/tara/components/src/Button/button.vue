<template>
    <button class="t-button" :class="styleClass">
        <slot />
    </button>
</template>

<script lang="ts">
import './style/index.less';
import { computed, defineComponent } from 'vue';
import { buttonProps } from './types';

export default defineComponent({
    name: 't-button',
    props: buttonProps,
    setup(props) {
        const styleClass = computed(() => {
            return {
                [`t-button--${props.type}`]: props.type,
                'is-plain': props.plain,
                'is-round': props.round,
                'is-disabled': props.disabled,
                [`t-button--${props.size}`]: props.size
            }
        });

        return {
            styleClass
        };
    }
});
</script>
