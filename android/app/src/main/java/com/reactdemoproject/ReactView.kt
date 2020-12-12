package com.reactdemoproject

import android.content.Context
import android.util.AttributeSet
import android.util.Log
import android.view.MotionEvent
import com.facebook.react.ReactRootView

/**
 * author: beitingsu
 * created on: 2020/8/26 2:39 PM
 */
class ReactView : ReactRootView {

    companion object {
        private const val TAG = "ReactView"
    }

    constructor(context: Context?) : super(context) {

    }

    constructor(context: Context?, attrs: AttributeSet?) : super(context, attrs) {

    }
//
//    override fun dispatchTouchEvent(ev: MotionEvent?): Boolean {
//        Log.d(TAG, "dispatchTouchEvent:${getEventName(ev)}")
//        return super.dispatchTouchEvent(ev)
//    }

    override fun onInterceptTouchEvent(ev: MotionEvent?): Boolean {
        Log.d(TAG, "onInterceptTouchEvent:${getEventName(ev)}")
        return super.onInterceptTouchEvent(ev)
    }

    override fun onTouchEvent(ev: MotionEvent?): Boolean {
        Log.d(TAG, "onTouchEvent:${getEventName(ev)}")
        return super.onTouchEvent(ev)
    }

    private fun getEventName(ev: MotionEvent?) : String {
        return when (ev?.action) {
            MotionEvent.ACTION_MOVE -> {
               "ACTION_MOVE"
            }
            MotionEvent.ACTION_UP -> {
                "ACTION_UP"
            }
            else -> {
                "ACTION_DOWN"
            }
        }
    }
}