package android.usuario.comandavirtual;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.FrameLayout;

import layout.BlankFragment;

public class MainActivity extends AppCompatActivity {


    public Button button2;
    public Button button1;
    public Button button3;
    private FrameLayout frame;

    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        frame = (FrameLayout) findViewById(R.id.frame);

        getSupportFragmentManager()
                .beginTransaction()
                .add(R.id.frame, new BlankFragment())
                .commit();

        button1 = (Button) findViewById(R.id.button1);
        button2 = (Button) findViewById(R.id.button2);
        button3 = (Button) findViewById(R.id.button3);
        button2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                getSupportFragmentManager().beginTransaction().replace(R.id.frame, new BlankFragment2()).commit();

            }
        });


        button1.setOnClickListener(new View.OnClickListener() {
            @Override
            public  void onClick(View v){

                getSupportFragmentManager().beginTransaction().replace(R.id.frame, new BlankFragment()).commit();

            }
        });
        button3.setOnClickListener(new View.OnClickListener() {
            @Override
            public  void onClick(View v){

                //getSupportFragmentManager().beginTransaction().replace(R.id.frame, new fragment_tela2()).commit();

            }
        });



        button1 = (Button) findViewById(R.id.button1);

        button1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                getSupportFragmentManager().beginTransaction().replace(R.id.frame, new BlankFragment()).commit();

            }
        });

        button1 = (Button) findViewById(R.id.button1);

        button1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                getSupportFragmentManager().beginTransaction().replace(R.id.frame, new BlankFragment()).commit();

            }
        });
    }


}
