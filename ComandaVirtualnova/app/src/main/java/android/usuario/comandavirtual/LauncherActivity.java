package android.usuario.comandavirtual;


import android.content.Intent;
import android.os.Handler;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

public class LauncherActivity extends AppCompatActivity implements Runnable {

    private final int DELAY = 2000;

    @Override
    public void onCreate(Bundle icicle) {

        super.onCreate(icicle);

        setContentView(R.layout.activity_launcher);

        Handler handler = new Handler();
        handler.postDelayed(this, DELAY);
    }

    public void run() {

        Intent intent = new Intent(getApplicationContext(), LoginActivity.class);
        startActivity(intent);

        finish();

    }
}
