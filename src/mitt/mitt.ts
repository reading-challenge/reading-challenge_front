import { onUnmounted } from 'vue'
import { utils } from '@/utils/utils'
import mitt, { Emitter } from 'mitt'

export type EventType = {
  eventname: string
  locale: string
  loading: { isVisible: boolean; text?: string }
}

export enum EventName {
  EVENT1 = 'EVENT1',
  LOCALE = 'LOCALE',
  LOADING = 'LOADING'
}

/**
 * mitt  객체 및 사용법
 * @example
 * ```ts
 * 1. 예) 송신 : eventBus.emit(EventName.LOCALE, "ko");
 *
 * 2. 예) 수신 :  useMittEvent(eventBus, EventName.LOCALE, (val) => {
 *   utils.log(val);
 *   language.value = val;
 *  });
 * ```
 */
export const emitter = mitt<EventType>()

export function useMittEvent<T extends Record<string, unknown>, K extends keyof T>(
  mitt: Emitter<T>,
  key: K,
  fn: (e: T[K]) => any
) {
  mitt.on(key, fn)

  // 자동 off
  onUnmounted(() => {
    mitt.off(key, fn)
    utils.log(`event off : [이벤트명 : ${String(key)}]`)
    utils.log('함수내용 >>>>>')
    utils.log(fn)
  })
}
