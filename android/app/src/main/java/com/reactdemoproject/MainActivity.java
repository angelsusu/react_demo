package com.reactdemoproject;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.FrameLayout;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;

public class MainActivity extends ReactActivity {

    private static final String TAG = "MainActivity";

    /**
     * Returns the name of the main component registered from JavaScript. This is used to schedule
     * rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "ReactDemoProject";
    }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new MyReactActivityDelegate(this, getMainComponentName());
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        addReactInstanceEventListener();
    }

    class MyReactActivityDelegate extends ReactActivityDelegate {

        public MyReactActivityDelegate(ReactActivity activity, @javax.annotation.Nullable String mainComponentName) {
            super(activity, mainComponentName);
        }

        /**
         * 获取传递给rn的启动参数
         */
        @javax.annotation.Nullable
        @Override
        protected Bundle getLaunchOptions() {
            Bundle bundle = new Bundle();
            bundle.putString("start_param", "android传递的初始化参数");
            return bundle;
        }

        /**
         * 加载rn页面
         *
         * @param appKey
         */
        @Override
        protected void loadApp(String appKey) {
            Log.d(TAG, "loadApp rn pageName:" + appKey);
            super.loadApp(appKey);
        }

        @Override
        protected ReactRootView createRootView() {
            ReactView rootView = new ReactView(getContext());
            rootView.setOnClickListener(v -> Log.d(TAG, "onclick ReactView"));
            return rootView;
        }
    }

    /**
     * 监听ReactContext(rn应用上下文)初始化完成
     */
    private void addReactInstanceEventListener() {
        getReactInstanceManager().addReactInstanceEventListener((context) -> {
            Log.d(TAG, "reactContext initialize finish");
        });
    }
}
